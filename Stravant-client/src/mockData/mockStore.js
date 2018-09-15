export const currentUser = {
  info: {
    accessToken: 'a7eeea216a46a760a74c60acbffc3b55c66537c5',
    firstName: 'Paul',
    gender: 'M',
    profilePic:
      'https://lh4.googleusercontent.com/-q79bv4Nc_dY/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaMcxPJyTx-ZbjWs8aCsKgkL96lV4w/mo/photo.jpg',
    userId: 34515396
  },
  totalStats: {},
  weeklyStats: {}
};

export const pomStatus = {
  pomStatus: true,
  lastPom: '',
  pomHistory: {
    'Tue, Sep 11, 2018 8:39 PM': { second: 19, minute: 0, hour: 0 },
    'Tue, Sep 11, 2018 8:40 PM': { second: 3, minute: 0, hour: 0 },
    'Tue, Sep 11, 2018 10:22 PM': { second: 3, minute: 0, hour: 0 }
  }
};

export const clubInfo = {
  clubActivity: {
    Benjamin: {
      membersRecent: 'Light rail trip',
      totalDistance: 1.17,
      totalTime: 20
    },
    Jesse: {
      membersRecent: 'Evening Run',
      totalDistance: 278.77,
      totalTime: 5297
    },
    Pamela: {
      membersRecent: 'Afternoon Run',
      totalDistance: 62.88999999999999,
      totalTime: 635
    },
    Paul: { membersRecent: 'Morning Run', totalDistance: 7.87, totalTime: 101 },
    mostRecent: {
      activity: 'Morning Run',
      distance: 1.4110627719080175,
      name: 'Paul'
    }
  },
  clubInfo: { clubId: 473825, clubName: 'Stravant Club' }
};

export const mockStore = {
  ...currentUser,
  ...pomStatus,
  ...clubInfo
};

export const mockCurrentUser = {
  info: {
    accessToken: 'a7eeea216a46a760a74c60acbffc3b55c66537c5',
    userId: 34515396,
    firstName: 'Paul',
    gender: 'M',
    profilePic:
      'https://lh4.googleusercontent.com/-q79bv4Nc_dY/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaMcxPJyTx-ZbjWs8aCsKgkL96lV4w/mo/photo.jpg'
  },
  totalStats: {},
  weeklyStats: {}
};
