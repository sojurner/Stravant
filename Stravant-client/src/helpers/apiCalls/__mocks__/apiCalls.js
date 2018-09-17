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

export const exchangeUserToken = async code => {
  return await new Promise(resolve => {
    return Promise.resolve({
      json: () => Promise.resolve(mockResolution)
    });
  });
};
