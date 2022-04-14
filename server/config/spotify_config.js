import dotenv from 'dotenv';
import axios from 'axios';
import qs from 'qs';

dotenv.config();
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_AUTH_TOKEN = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
  'utf-8'
).toString('base64');

const getSpotifyAuth = async () => {
  try {
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({ grant_type: 'client_credentials' });

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${SPOTIFY_AUTH_TOKEN}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    //return access token
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    //on fail, log the error in console
    console.log(error);
  }
};

export default getSpotifyAuth;
