// pages/api/reviews.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const DISCORD_TOKEN = process.env.DISCORD_BOT_TOKEN;
const CHANNEL_ID = process.env.DISCORD_REVIEW_CHANNEL_ID;

function analyzeReviewContent(content: string): { rating: string, tone: string } {
  const msg = content.toLowerCase();

  if (
    msg.includes("life saver") ||
    msg.includes("saved me") ||
    msg.includes("amazing") ||
    msg.includes("excellent") ||
    msg.includes("blown away") ||
    msg.includes("legend") ||
    msg.includes("perfect") ||
    msg.includes("highly recommend") ||
    msg.includes("10/10")
  ) return { rating: "5", tone: "very positive" };

  if (
    msg.includes("very good") ||
    msg.includes("helpful") ||
    msg.includes("quick replies") ||
    msg.includes("pretty good") ||
    msg.includes("worth it")
  ) return { rating: "4", tone: "positive" };

  if (
    msg.includes("ok") ||
    msg.includes("decent") ||
    msg.includes("on time") ||
    msg.includes("acceptable") ||
    msg.includes("satisfactory")
  ) return { rating: "3", tone: "neutral" };

  if (
    msg.includes("late") ||
    msg.includes("average") ||
    msg.includes("not as expected") ||
    msg.includes("okayish") ||
    msg.includes("slow response")
  ) return { rating: "2", tone: "negative" };

  if (
    msg.includes("never again") ||
    msg.includes("terrible") ||
    msg.includes("scam") ||
    msg.includes("didn’t help") ||
    msg.includes("awful") ||
    msg.includes("zero stars")
  ) return { rating: "1", tone: "very negative" };

  return { rating: "4", tone: "neutral" }; // default fallback
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!DISCORD_TOKEN || !CHANNEL_ID) {
    return res.status(500).json({ error: 'Missing Discord environment variables' });
  }

  try {
    const response = await fetch(`https://discord.com/api/v10/channels/${CHANNEL_ID}/messages?limit=50`, {
      headers: {
        Authorization: `Bot ${DISCORD_TOKEN}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(500).json({ error });
    }

    const messages = await response.json();

    const testimonials = messages
      .filter((msg: any) => msg.content && !msg.author.bot)
      .map((msg: any) => {
        const raw = msg.content;

        const structuredRating = raw.match(/Rating:\s*(\d(?:\.\d)?)/i);
        const structuredReview = raw.match(/Review:\s*([\s\S]*)/i);
        const emojiStars = (raw.match(/⭐/g) || []).length;
        const score10 = raw.match(/10\/10|10 out of 10/i);
        const fiveStarWords = raw.match(/5\s?stars/i);

        let rating = structuredRating?.[1] || null;
        let tone = null;

        if (!rating) {
          if (emojiStars >= 3) rating = emojiStars.toString();
          else if (score10 || fiveStarWords) rating = '5';
          else {
            const result = analyzeReviewContent(raw);
            rating = result.rating;
            tone = result.tone;
          }
        } else {
          const inferred = analyzeReviewContent(raw);
          tone = inferred.tone;
        }

        return {
          id: msg.id,
          author: msg.author.username,
          avatar: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`,
          rating,
          tone,
          content: structuredReview?.[1]?.trim() || raw.trim(),
          timestamp: msg.timestamp,
        };
      });

    return res.status(200).json({ testimonials });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch reviews from Discord.' });
  }
}

