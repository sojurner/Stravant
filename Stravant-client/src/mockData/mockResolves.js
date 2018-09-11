export const tokenExchangeResolve = {
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

export const aggregateResolve = {
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

export const weeklyResolve = [
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
];

export const clubsResolve = [
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
    member_count: 4,
    featured: false,
    verified: false,
    url: 'stravant'
  }
];
