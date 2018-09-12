export const currentUser = {
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
  clubInfo: { clubName: 'Stravant Club', clubId: 473825 },
  clubActivity: {
    mostRecent: {
      name: 'Pamela',
      distance: 4.270478558110628,
      activity: 'Morning Run'
    },
    Pamela: {
      totalDistance: 62.88999999999999,
      totalTime: 635,
      membersRecent: 'Afternoon Run'
    },
    Paul: { totalDistance: 6.46, totalTime: 78, membersRecent: 'Morning Run' },
    Jesse: {
      totalDistance: 277.78000000000003,
      totalTime: 5292,
      membersRecent: 'Morning Run'
    }
  }
};

export const mockStore = {
  ...currentUser,
  ...pomStatus,
  ...clubInfo
};
