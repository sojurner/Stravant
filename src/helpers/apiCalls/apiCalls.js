import { accessToken } from './accessToken';

export const fetchHostCities = async () => {
  const cityResponse = await fetch(
    `https://www.strava.com/api/v3/running_races/?access_token=${accessToken}`
  );
  const cityresult = await cityResponse.json();
  return cityresult;
};
