import React from 'react';
import { shallow } from 'enzyme';
import { Welcome, mapStateToProps, mapDispatchToProps } from './Welcome';
import * as store from '../../mockData/mockStore';

jest.mock('../../helpers/apiCalls/apiCalls');

describe('Welcome', () => {
  let wrapper;
  let mockCurrentUser;
  let mockSetToken;

  beforeEach(() => {
    localStorage.clear();
    mockSetToken = jest.fn();
    mockCurrentUser = store.currentUser;

    wrapper = shallow(
      <Welcome currentUser={mockCurrentUser} setAccessToken={mockSetToken} />
    );
  });

  it('should match snapshot when user is male', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapShot when user is female', () => {
    mockCurrentUser = {
      info: {
        accessToken: 'a7eeea216a46a760a74c60acbffc3b55c66537c5',
        firstName: 'Pam',
        gender: 'F',
        profilePic:
          'https://lh4.googleusercontent.com/-q79bv4Nc_dY/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaMcxPJyTx-ZbjWs8aCsKgkL96lV4w/mo/photo.jpg',
        userId: 34515396
      },
      totalStats: {},
      weeklyStats: {}
    };

    wrapper = shallow(
      <Welcome currentUser={mockCurrentUser} setAccessToken={mockSetToken} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should set an item in localStorage with the url code', async () => {
    const url = '?state=&code=db45796a99ddced0034a049288f7ff5c2fdc10e6&scope=';
    const expected = '{"code":"db45796a99ddced0034a049288f7ff5c2fdc10e6"}';

    await wrapper.instance().exchangeToken(url);
    expect(mockSetToken).toHaveBeenCalled();
    expect(localStorage.store.code).toEqual(expected);
  });

  it('should map to store properly', () => {
    const mockStore = store.currentUser;
    const mapped = mapStateToProps(mockStore);

    expect(mapped.currentUser).toEqual(mockStore.currentUser);
  });

  it('should call dispatch when a function from dispatch is called', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.setAccessToken();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
