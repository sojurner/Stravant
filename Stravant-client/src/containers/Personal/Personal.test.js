import React from 'react';
import { Personal, mapStateToProps, mapDispatchToProps } from './Personal';
import * as store from '../../mockData/mockStore';

jest.mock('../../helpers/apiCalls/apiCalls');

describe('Personal', () => {
  let wrapper;
  let mockCurrentUser;
  let mockSetTotal;

  beforeEach(() => {
    mockSetTotal = jest.fn();
    mockCurrentUser = store.currentUser;
    wrapper = shallow(
      <Personal currentUser={mockCurrentUser} setTotalStats={mockSetTotal} />
    );
  });

  it('should matchSnapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should matchSnapShot when there is totalStats', () => {
    mockCurrentUser = store.mockTotalStats;
    wrapper = shallow(
      <Personal currentUser={mockCurrentUser} setTotalStats={mockSetTotal} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match Mounted Snapshot', () => {
    wrapper = mount(
      <Personal currentUser={mockCurrentUser} setTotalStats={mockSetTotal} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should setState on mouseOverHandler', () => {
    wrapper.instance().mouseOverHandler({ data: { key: 1, value: 'paul' } });

    expect(wrapper.state('key')).toEqual(1);
    expect(wrapper.state('value')).toEqual('paul');
    expect(wrapper.state('showToolTip')).toEqual(true);
  });

  it('should setState on mouseOutHandler', () => {
    wrapper.instance().mouseOutHandler();

    expect(wrapper.state('showToolTip')).toEqual(false);
  });

  it('should call mouse overHandler on mouse over', () => {
    wrapper = mount(
      <Personal currentUser={mockCurrentUser} setTotalStats={mockSetTotal} />
    );
    const foundDiv = wrapper.find('.running-avg');

    expect(mouseOverHandler).toHaveBeenCalled();
  });

  it('should map to the store properly', () => {
    const mockStore = store.currentUser;
    const mapped = mapStateToProps(mockStore);

    expect(mapped.currentUser).toEqual(mockStore.currentUser);
  });

  it('should call dispatch function when when using a function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.setTotalStats();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
