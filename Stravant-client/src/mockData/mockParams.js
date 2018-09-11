export const tokenParams = [
  'https://www.strava.com/oauth/token',
  {
    body:
      '{"client_id":28236,"client_secret":"829f12d9bdb8ce424edf87deff4551c117d3ed36","code":"r5423rffda4c234ctwtwert2ct"}',
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  }
];

export const aggregateParams = [
  'https://www.strava.com/api/v3/athletes/28236/stats',
  {
    headers: {
      Authorization: 'Bearer a7eeea216a46a760a74c60acbffc3b55c66537c5',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  }
];

export const weeklyParams = [
  'https://www.strava.com/api/v3/athlete/activities?before=1536123319&after=1536036919',
  {
    headers: {
      Authorization: 'Bearer a7eeea216a46a760a74c60acbffc3b55c66537c5',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  }
];
