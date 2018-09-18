import React from 'react';
import { mount } from 'enzyme';
import {
  PomContainer,
  mapDispatchToProps,
  mapStateToProps
} from './PomContainer';
import * as store from '../../mockData/mockStore';

describe('PomContainer', () => {
  let wrapper;
  let mockPomHistory;
  let mockRemove;

  beforeEach(() => {
    mockPomHistory = [
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

    mockRemove = jest.fn();
  });

  it('should matchsnapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call removePom on click', () => {
    wrapper = mount(
      <PomContainer pomHistory={mockPomHistory} removePom={mockRemove} />
    );
    wrapper.find('i').simulate('click');
    expect(mockRemove).toHaveBeenCalled();
  });

  it('should map to the store properly', () => {
    const mockStore = store.pomStatus;

    const mapped = mapStateToProps(mockStore);

    expect(mapped.pomHistory).toEqual(mockStore.pomInfo.pomHistory);
  });

  it('should call dispatch function when using a function from mapDispatchtoProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.removePom();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
