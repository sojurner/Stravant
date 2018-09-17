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

  const result = await response.json();
  console.log(result);
  return result;
};

export const getAggregateStats = async (token, id) => {
  const url = `https://www.strava.com/api/v3/athletes/${id}/stats`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return scrape.userStats(result);
};

export const getWeeklyStats = async (token, num) => {
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
  const result = await response.json();
  return result;
};

export const getUserClubs = async token => {
  const url = `https://www.strava.com/api/v3/athlete/clubs`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, options);
  const result = await response.json();
  const activityData = await getClubActivity(result[0].id, token);
  return scrape.clubData(result, activityData);
};

const getClubActivity = async (clubId, token) => {
  const url = `https://www.strava.com/api/v3/clubs/${clubId}/activities?page=1&per_page=200`;
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
