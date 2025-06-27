import axios from 'axios';

const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;
const DISCORD_API_URL = `https://discord.com/api/v9/channels/${DISCORD_CHANNEL_ID}/invites`;

export async function getDiscordOnlineCount(): Promise<number> {
  try {
    const response = await axios.get(`https://discord.com/api/v9/guilds/${process.env.DISCORD_GUILD_ID}/widget.json`);
    return response.data.presence_count;
  } catch (error) {
    console.error('Failed to fetch Discord presence count:', error);
    return 0;
  }
}

