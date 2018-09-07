import { stravaApi } from '../../data/strava_config';

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
