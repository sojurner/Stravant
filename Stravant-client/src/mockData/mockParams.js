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

export const userInfoParams = {
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

export const userStatsParams = {
  biggest_ride_distance: null,
  biggest_climb_elevation_gain: null,
  recent_ride_totals: {
    count: 0,
    distance: 0,
    moving_time: 0,
    elapsed_time: 0,
    elevation_gain: 0,
    achievement_count: 0
  },
  recent_run_totals: {
    count: 5,
    distance: 10414.50015258789,
    moving_time: 3364,
    elapsed_time: 4832,
    elevation_gain: 9.439761638641357,
    achievement_count: 11
  },
  recent_swim_totals: {
    count: 0,
    distance: 0,
    moving_time: 0,
    elapsed_time: 0,
    elevation_gain: 0,
    achievement_count: 0
  },
  ytd_ride_totals: {
    count: 0,
    distance: 0,
    moving_time: 0,
    elapsed_time: 0,
    elevation_gain: 0
  },
  ytd_run_totals: {
    count: 5,
    distance: 10415,
    moving_time: 3364,
    elapsed_time: 4832,
    elevation_gain: 10
  },
  ytd_swim_totals: {
    count: 0,
    distance: 0,
    moving_time: 0,
    elapsed_time: 0,
    elevation_gain: 0
  },
  all_ride_totals: {
    count: 0,
    distance: 0,
    moving_time: 0,
    elapsed_time: 0,
    elevation_gain: 0
  },
  all_run_totals: {
    count: 5,
    distance: 10415,
    moving_time: 3364,
    elapsed_time: 4832,
    elevation_gain: 10
  },
  all_swim_totals: {
    count: 0,
    distance: 0,
    moving_time: 0,
    elapsed_time: 0,
    elevation_gain: 0
  }
};

export const clubDataResultParam = [
  {
    id: 473825,
    resource_state: 2,
    name: 'Stravant Club',
    profile_medium:
      'https://dgalywyr863hv.cloudfront.net/pictures/clubs/473825/10246543/1/medium.jpg',
    profile:
      'https://dgalywyr863hv.cloudfront.net/pictures/clubs/473825/10246543/1/large.jpg',
    cover_photo:
      'https://dgalywyr863hv.cloudfront.net/pictures/clubs/473825/10246574/1/large.jpg',
    cover_photo_small:
      'https://dgalywyr863hv.cloudfront.net/pictures/clubs/473825/10246574/1/small.jpg',
    sport_type: 'running',
    city: 'Denver',
    state: 'Colorado',
    country: 'United States',
    private: false,
    member_count: 5,
    featured: false,
    verified: false,
    url: 'stravant'
  }
];

export const clubActivityDataParam = [
  {
    resource_state: 2,
    athlete: { resource_state: 2, firstname: 'Pamela', lastname: 'L.' },
    name: 'Morning Run',
    distance: 6871.2,
    moving_time: 2620,
    elapsed_time: 2821,
    total_elevation_gain: 17,
    type: 'Run',
    workout_type: null
  },
  {
    resource_state: 2,
    athlete: { resource_state: 2, firstname: 'Paul', lastname: 'K.' },
    name: 'Afternoon Run',
    distance: 501.6,
    moving_time: 149,
    elapsed_time: 183,
    total_elevation_gain: 0,
    type: 'Run',
    workout_type: 0
  }
];

export const weeklyDataParams = [
  [],
  [
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
    },
    {
      resource_state: 2,
      athlete: { id: 34515396, resource_state: 1 },
      name: 'Morning Run',
      distance: 2178.6,
      moving_time: 853,
      elapsed_time: 1064,
      total_elevation_gain: 0,
      type: 'Run',
      workout_type: 0,
      id: 1832102085,
      external_id: 'EE8C6C38-CD30-4D62-87BB-0CA540BA6A48',
      upload_id: 1964114698,
      start_date: '2018-09-10T12:31:39Z',
      start_date_local: '2018-09-10T06:31:39Z',
      timezone: '(GMT-07:00) America/Denver',
      utc_offset: -21600,
      start_latlng: [39.74, -104.99],
      end_latlng: [39.75, -105],
      location_city: null,
      location_state: null,
      location_country: null,
      start_latitude: 39.74,
      start_longitude: -104.99,
      achievement_count: 4,
      kudos_count: 0,
      comment_count: 0,
      athlete_count: 1,
      photo_count: 0,
      map: {
        id: 'a1832102085',
        summary_polyline: 'wypqFnfx_SwGfDiJnQe_@ph@wEmDv@aCcDdGKgA',
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
      average_speed: 2.554,
      max_speed: 9.5,
      has_heartrate: false,
      elev_high: 1601.1,
      elev_low: 1585,
      pr_count: 0,
      total_photo_count: 0,
      has_kudoed: false
    }
  ],
  [],
  [
    {
      resource_state: 2,
      athlete: { id: 34515396, resource_state: 1 },
      name: 'Morning Run',
      distance: 3950,
      moving_time: 1069,
      elapsed_time: 1077,
      total_elevation_gain: 2.1,
      type: 'Run',
      workout_type: 0,
      id: 1827412827,
      external_id: 'DE69C2FB-C9EE-4FD8-ABCB-BDA8F89B50FD',
      upload_id: 1959242580,
      start_date: '2018-09-08T13:16:10Z',
      start_date_local: '2018-09-08T07:16:10Z',
      timezone: '(GMT-07:00) America/Denver',
      utc_offset: -21600,
      start_latlng: [39.74, -105.04],
      end_latlng: [39.74, -105.04],
      location_city: null,
      location_state: null,
      location_country: null,
      start_latitude: 39.74,
      start_longitude: -105.04,
      achievement_count: 3,
      kudos_count: 0,
      comment_count: 0,
      athlete_count: 1,
      photo_count: 0,
      map: {
        id: 'a1827412827',
        summary_polyline:
          'apqqFr_b`SmH@{ElH{Ft\\wFaAeUjP~@tKbChGsAzMbBtFdXfAzGeBdHcIhAwDo@_IqEwMfDsItBk[',
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
      average_speed: 3.695,
      max_speed: 5.6,
      has_heartrate: false,
      elev_high: 1621.2,
      elev_low: 1618.4,
      pr_count: 3,
      total_photo_count: 0,
      has_kudoed: false
    }
  ],
  [
    {
      resource_state: 2,
      athlete: { id: 34515396, resource_state: 1 },
      name: 'Lunch Run',
      distance: 1562,
      moving_time: 579,
      elapsed_time: 1086,
      total_elevation_gain: 4.7,
      type: 'Run',
      workout_type: 0,
      id: 1825796851,
      external_id: '3A54AFD1-4551-40FC-BDB3-A72100B29082',
      upload_id: 1957570524,
      start_date: '2018-09-07T17:49:18Z',
      start_date_local: '2018-09-07T11:49:18Z',
      timezone: '(GMT-07:00) America/Denver',
      utc_offset: -21600,
      start_latlng: [39.75, -105],
      end_latlng: [39.75, -105],
      location_city: null,
      location_state: null,
      location_country: null,
      start_latitude: 39.75,
      start_longitude: -105,
      achievement_count: 3,
      kudos_count: 0,
      comment_count: 0,
      athlete_count: 1,
      photo_count: 0,
      map: {
        id: 'a1825796851',
        summary_polyline: 'sxrqFvez_SShBcDlB_DeGlAsCg@mDwFvAlE|ElBuD`EfFx@g@',
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
      average_speed: 2.698,
      max_speed: 6.1,
      has_heartrate: false,
      elev_high: 1586,
      elev_low: 1583,
      pr_count: 3,
      total_photo_count: 0,
      has_kudoed: false
    },
    {
      resource_state: 2,
      athlete: { id: 34515396, resource_state: 1 },
      name: 'Morning Run',
      distance: 2222.3,
      moving_time: 714,
      elapsed_time: 1422,
      total_elevation_gain: 2.6,
      type: 'Run',
      workout_type: 0,
      id: 1825117879,
      external_id: '3CAB0E99-AEBC-4B32-9FB6-96572B190C9B',
      upload_id: 1956872229,
      start_date: '2018-09-07T11:56:11Z',
      start_date_local: '2018-09-07T05:56:11Z',
      timezone: '(GMT-07:00) America/Denver',
      utc_offset: -21600,
      start_latlng: [39.74, -104.99],
      end_latlng: [39.75, -105],
      location_city: null,
      location_state: null,
      location_country: null,
      start_latitude: 39.74,
      start_longitude: -104.99,
      achievement_count: 0,
      kudos_count: 0,
      comment_count: 0,
      athlete_count: 1,
      photo_count: 0,
      map: {
        id: 'a1825117879',
        summary_polyline:
          'q}oqFx{w_SyMq@[nDcEr@}DrG}BwAi@vHkHV]dB|@lAoDhHwALMpDua@|Zi@sB{Ax@',
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
      average_speed: 3.112,
      max_speed: 6.6,
      has_heartrate: false,
      elev_high: 1607.8,
      elev_low: 1586,
      pr_count: 0,
      total_photo_count: 0,
      has_kudoed: false
    }
  ],
  [],
  []
];

export const clubActionParam = {
  clubName: 'Stravant Club',
  clubId: 473825,
  membersStats: {
    mostRecent: {
      name: 'Paul',
      distance: 1.4110627719080175,
      activity: 'Morning Run'
    },
    Paul: { totalDistance: 7.87, totalTime: 101, membersRecent: 'Morning Run' },
    Benjamin: {
      totalDistance: 1.17,
      totalTime: 20,
      membersRecent: 'Light rail trip'
    },
    Jesse: {
      totalDistance: 278.77,
      totalTime: 5297,
      membersRecent: 'Evening Run'
    },
    Pamela: {
      totalDistance: 62.88999999999999,
      totalTime: 635,
      membersRecent: 'Afternoon Run'
    }
  }
};

export const pomHistoryParam = {
  'Wed, Sep 12, 2018 11:45 AM': { second: 2, minute: 0, hour: 0 },
  'Wed, Sep 12, 2018 12:23 PM': { second: 1, minute: 0, hour: 0 }
};

export const accessTokenParam = {
  accessToken: 'a7eeea216a46a760a74c60acbffc3b55c66537c5',
  userId: 34515396,
  firstName: 'Paul',
  gender: 'M',
  profilePic:
    'https://lh4.googleusercontent.com/-q79bv4Nc_dY/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaMcxPJyTx-ZbjWs8aCsKgkL96lV4w/mo/photo.jpg'
};

export const weeklyActionParam = {
  Wednesday: 2270.4,
  Monday: 2680.2,
  Saturday: 3950,
  Friday: 3784.3,
  Tuesday: 0,
  Thursday: 0,
  Sunday: 0
};

export const totalStatsParam = { Biked: 0, Ran: 7.883778744561839, Swam: 0 };
