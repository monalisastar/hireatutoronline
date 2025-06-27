// lib/fallbackReviews.ts

export type FallbackReview = {
  username: string;
  message: string;
  rating: string;
  stars: string;
  timestamp: string;
  color: string;
  tone: string;
  featured?: boolean;
};

const timestamps = [
  "2 days ago", "1 week ago", "4 hours ago", "Yesterday", "3 days ago",
  "5 days ago", "2 weeks ago", "1 month ago", "6 days ago", "Today"
];

const colors = [
  "#4F46E5", "#EC4899", "#10B981", "#F59E0B", "#8B5CF6",
  "#EF4444", "#14B8A6", "#3B82F6", "#A855F7", "#F43F5E"
];

// 🔍 Get numeric rating based on message content
function getRating(message: string): string {
  const msg = message.toLowerCase();

  if (msg.includes("10/10") || msg.includes("100%") || msg.includes("highly recommend") || msg.includes("amazing") || msg.includes("great") || msg.includes("excellent")) {
    return "5";
  }

  if (msg.includes("worth it") || msg.includes("helped") || msg.includes("fast") || msg.includes("no plagiarism")) {
    return "4";
  }

  if (msg.includes("recommend") || msg.includes("on time") || msg.includes("okay")) {
    return "3";
  }

  if (msg.includes("late") || msg.includes("not happy") || msg.includes("low quality")) {
    return "2";
  }

  if (msg.includes("never again") || msg.includes("scam") || msg.includes("terrible")) {
    return "1";
  }

  return "4";
}

// ⭐ Convert rating to star emojis
function getStars(rating: string): string {
  const n = parseInt(rating, 10);
  return "⭐".repeat(n);
}

const rawReviews = [
  { username: "Apolloo", message: "Caelron is amazing! Finished my essay in a day and fixed edits quickly. Great tutor!", featured: true },
  { username: "DEVO", message: "Alliasgher110 has been amazing thus far. 100% recommend." },
  { username: "Dale Doback", message: "Ahmedking did a great job on my case analysis. Got me 100% and responded to every question quickly. Highly recommend.", featured: true },
  { username: "Empire", message: "Unemployed Professors did an amazing job—very nice and quick. 10/10." },
  { username: "Fokjo", message: "Unemployed Professors did 20 assignments in 2 days. Super kind—helped me pass the course.", featured: true },
  { username: "Goose", message: "Scholar_Amelia helped with a research paper. No plagiarism and super fast. Worth it!" },
  { username: "KristianTaylor", message: "Prof. Derren never disappointed me one bit during our work together. Excellent physics mind." },
  { username: "Nick", message: "Caelron never fails to get assignments done on time and guarantees good results.", featured: true },
  { username: "PlayerRozzzz", message: "Caelron is a really great tutor. Got me 98/100 on two graduate-level discussion posts. Highly recommend!", featured: true },
  { username: "Spark", message: "Caelron, Scholar_Amelia, and Alliasgher110 helped me go from F- to B. Wondrous job!", featured: true },
  { username: "Tempest", message: "Caelron goes above and beyond. Homework is now easier and more enjoyable with his help." },
  { username: "Thomas", message: "Alliasgher110 helped me get my highest score ever (89%) on a chemistry exam with a tight deadline." },
  { username: "TryButimBetter", message: "Prof. Derren continues to do outstanding work and always delivers quickly." },
  { username: "jokjo", message: "Caelron got me 84/100 on my business midterm and 90/100 on the final." },
  { username: "bxit", message: "Alliasgher110 helped me out with a really difficult coursework during a tough time and got me the grade I needed." },
  { username: "Wherediego", message: "He helped me on my calc homework. Clutch brotha got me a 100." },
  { username: "Zody", message: "Unemployed Professors did good on my math work and were on time. I recommend them!" },
  { username: "Scholar_Amelia", message: "Great tutor! Fast replies and straight to the point. 10/10." },
  { username: "Exltn", message: "Scholar_Amelia did my math homework very quick! Great service." },
  { username: "John Kaary", message: "Helped me big time taking two tests, was very nice and cut out a good deal price wise which was appreciated." },
  { username: "Prince", message: "Alliasgher110 got the work done quickly and was patient with payment issues. Great tutor!" },
  { username: "Shadiey", message: "Alliasgher110 NAILED my Algebra final with 100% and worked with my budget. Highly recommend!" },
  { username: "smeller", message: "Prof. Derren was an asset for my geometry course. Fast and high-quality work. Highly recommend!" },
  { username: "Stark", message: "Caelron helped me pass my Physics 2 exam—very good tutor." },
  { username: "straightshot13", message: "John Kaary helped me with two tests and gave me a great deal. Really appreciated." },
  { username: "Legally Stupid", message: "Prof.Derren got me 8/10 on a term paper in under 2 days. Recommended!" },
  { username: "Deleted User", message: "Alliasgher110 finished a logic final exam for me with all the right answers. Saved my grade lol." },
];

// ✅ Transform, enrich, and sort by rating
export const fallbackReviews: FallbackReview[] = rawReviews
  .map((r, i) => {
    const rating = getRating(r.message);
    return {
      ...r,
      rating,
      stars: getStars(rating),
      timestamp: timestamps[i % timestamps.length],
      color: colors[i % colors.length],
      tone:
        rating === '5' ? 'very positive' :
        rating === '4' ? 'positive' :
        rating === '3' ? 'neutral' :
        rating === '2' ? 'negative' :
        'very negative',
    };
  })
  .sort((a, b) => parseInt(b.rating) - parseInt(a.rating));

export default fallbackReviews;

