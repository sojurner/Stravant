const mockResolution = {
  token_type: 'Bearer',
  access_token: 'a7eeea216a46a760a74c60acbffc3b55c66537c5',
  athlete: {
    id: 34515396,
    username: null,
    resource_state: 2,
    firstname: 'Paul',
    lastname: 'K',
    city: null,
    state: null,
    country: null,
    sex: 'M',
    premium: false,
    summit: false,
    created_at: '2018-09-04T22:53:48Z',
    updated_at: '2018-09-07T12:20:05Z',
    badge_type_id: 0,
    profile_medium:
      'https://lh4.googleusercontent.com/-q79bv4Nc_dY/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaMcxPJyTx-ZbjWs8aCsKgkL96lV4w/mo/photo.jpg',
    profile:
      'https://lh4.googleusercontent.com/-q79bv4Nc_dY/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaMcxPJyTx-ZbjWs8aCsKgkL96lV4w/mo/photo.jpg',
    friend: null,
    follower: null,
    email: 'pykim0591@gmail.com'
  }
};

const userClubsResolution = {
  clubName: 'Stravant Club',
  clubId: 473825,
  membersStats: {
    mostRecent: {
      name: 'Pamela',
      distance: 2.2472343070229956,
      activity: 'Evening Run'
    },
    Pamela: {
      totalDistance: 82.52000000000001,
      totalTime: 843,
      membersRecent: 'Afternoon Run'
    },
    Jesse: {
      totalDistance: 281.4699999999999,
      totalTime: 5318,
      membersRecent: 'Morning Run'
    },
    Paul: {
      totalDistance: 8.719999999999999,
      totalTime: 119,
      membersRecent: 'Morning Run'
    },
    Benjamin: {
      totalDistance: 1.75,
      totalTime: 29,
      membersRecent: 'Light rail trip'
    }
  }
};

const aggregateStatsResolution = {
  runningTotal: {
    'Distance (miles)': 1.2474473941223474,
    'Time (min)': 11.299999999999999,
    'Elevation (feet)': 1.7142857142857142
  }
};

const weeklyStatsResolution = {
  Saturday: 1364.5,
  Wednesday: 2270.4,
  Monday: 2680.2,
  Tuesday: 0,
  Thursday: 0,
  Friday: 0,
  Sunday: 0
};

const recursiveRetrivalResolution = [
  {
    resource_state: 2,
    athlete: { id: 34515396, resource_state: 1 },
    name: 'Afternoon Run',
    distance: 501.6,
    moving_time: 149,
    elapsed_time: 183,
    total_elevation_gain: 0,
    type: 'Run',
    workout_type: 0,
    id: 1832950216,
    external_id: '3D3F2956-3EC2-41F4-B4B8-5C0449E93948',
    upload_id: 1964982307,
    start_date: '2018-09-10T19:44:20Z',
    start_date_local: '2018-09-10T13:44:20Z',
    timezone: '(GMT-07:00) America/Denver',
    utc_offset: -21600,
    start_latlng: [39.75, -105],
    end_latlng: [39.75, -105],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 39.75,
    start_longitude: -105,
    achievement_count: 1,
    kudos_count: 0,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: 'a1832950216',
      summary_polyline: 'k{rqFndz_SbEeB~D|Fb@q@uApA',
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: 'everyone',
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    average_speed: 3.366,
    max_speed: 9.3,
    has_heartrate: false,
    elev_high: 1587,
    elev_low: 1585.6,
    pr_count: 0,
    total_photo_count: 0,
    has_kudoed: false
  }
];

export const exchangeUserToken = async code => {
  return await new Promise(resolve => {
    return resolve({
      json: () => Promise.resolve(mockResolution)
    });
  });
};

export const getUserClubs = async token => {
  return await new Promise(resolve => {
    return resolve({
      json: () => Promise.resolve(userClubsResolution)
    });
  });
};

export const getAggregateStats = async (token, id) => {
  return await new Promise(resolve => {
    return resolve({
      json: () => Promise.resolve(aggregateStatsResolution)
    });
  });
};

export const getWeeklyStats = async (token, num) => {
  return await new Promise(resolve => {
    return resolve(async () => {
      return await new Promise(resolve => {
        return resolve({
          json: () => Promise.resolve(weeklyStatsResolution)
        });
      });
    });
  });
};

export const recursiveRetrival = async (token, num) => {
  return await new Promise(resolve => {
    return resolve({
      json: () => Promise.resolve(recursiveRetrivalResolution)
    });
  });
};
