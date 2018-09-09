import { stravaApi } from '../../data/strava_config';
import * as scrape from '../helpers/helpers';

export const exchangeUserToken = async code => {
  const url = 'https://www.strava.com/oauth/token';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      client_id: stravaApi.client_id,
      client_secret: stravaApi.client_secret,
      code: code
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, options);
  return await response.json();
};

export const getUserStats = async (token, num) => {
  let weeklyStats = [];
  while (num < 7) {
    const weeklyData = recursiveRetrival(token, num);
    weeklyStats.push(weeklyData);
    num++;
  }
  const result = await Promise.all(weeklyStats);
  return scrape.weeklyData(result);
};

const recursiveRetrival = async (token, num) => {
  const before = Math.floor(Date.now() / 1000 - 86400 * num);
  const after = Math.floor(Date.now() / 1000 - 86400 - 86400 * num);
  const url = `https://www.strava.com/api/v3/athlete/activities?before=${before}&after=${after}`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, options);
  return await response.json();
};
  const response = await fetch(url, options);
  return await response.json();
};
