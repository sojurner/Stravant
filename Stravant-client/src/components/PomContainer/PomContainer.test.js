import React from 'react';
import { PomContainer } from './PomContainer';

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
    wrapper = shallow(
      <PomContainer pomHistory={mockPomHistory} removePom={mockRemove} />
    );
  });

  it('should matchsnapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call removePom on click', () => {
    wrapper = mount(
      <PomContainer pomHistory={mockPomHistory} removePom={mockRemove} />
    );
    wrapper.find(i).simulate('clickl');
    expect(mockRemove).toHaveBeenCalled();
  });
});
