import React from 'react';
import { Weekly, mapStateToProps, mapDispatchToProps } from './Weekly';
import * as store from '../../mockData/mockStore';

jest.mock('../../helpers/apiCalls/apiCalls');

describe('Weekly', () => {
  let wrapper;
  let mockStore;
  let mockSetWeekly;

  beforeEach(() => {
    mockStore = store.currentUser;
    mockSetWeekly = jest.fn();
    wrapper = shallow(
      <Weekly currentUser={mockStore} setWeeklyStats={mockSetWeekly} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set state of x and y coordinates', () => {
    const event = { screenX: 23, screenY: 150 };

    wrapper.instance().trackMouseCoordinates(event);

    expect(wrapper.state('xCoordinates')).toEqual(23);
    expect(wrapper.state('yCoordinates')).toEqual(150);
  });

  it('should set proper state on handleClick', () => {
    const initialState = {
      dataDisplay: '',
      toggleDisplay: false,
      xCoordinates: 0,
      yCoordinates: 0
    };
    expect(wrapper.state()).toEqual(initialState);

    const event = { pageX: 30, pageY: 100, y: 2 };

    wrapper.instance().handleClick(event);

    expect(wrapper.state('xCoordinates')).toEqual(30);
    expect(wrapper.state('yCoordinates')).toEqual(100);
    expect(wrapper.state('dataDisplay')).toEqual('2 miles');
    expect(wrapper.state('toggleDisplay')).toEqual(true);
  });

  it('should map properly to store', () => {
    const mapped = mapStateToProps(mockStore);

    expect(mapped.currentUser).toEqual(mockStore.currentUser);
  });

  it('should call dispatch function when a function from map dispatch to props is called', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.setWeeklyStats();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
