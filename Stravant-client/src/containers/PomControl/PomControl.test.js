import React from 'react';
import { PomControl, mapStateToProps, mapDispatchToProps } from './PomControl';
import * as mock from './mockData';
import * as store from '../../mockData/mockStore';

describe('PomControl', () => {
  let wrapper;
  let state;
  let defaultState;
  let mockSetPom;
  let mockToggle;

  beforeEach(() => {
    localStorage.clear();
    mockSetPom = jest.fn();
    mockToggle = jest.fn();
    wrapper = shallow(
      <PomControl
        currentUser={mock.currentUser}
        pomInfo={mock.pomInfo}
        setPomHistory={mockSetPom}
        togglePomState={mockToggle}
      />
    );
  });

  defaultState = {
    description: false,
    hide: false,
    hour: 0,
    mSecond: 0,
    minute: 0,
    pomSummary: '7s  2m  1h',
    save: true,
    second: 0,
    socketMessage: '',
    start: false,
    stop: true
  };

  state = {
    mSecond: 4,
    second: 7,
    minute: 2,
    hour: 1,
    save: false
  };

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should setState of save to false and togglePomState to have been called', () => {
    expect(wrapper.state('start')).toEqual(false);

    wrapper.instance().togglePom({}, 'start');

    expect(wrapper.state('start')).toEqual(true);
    expect(wrapper.state('stop')).toEqual(false);

    wrapper.instance().togglePom({}, 'hide');

    expect(wrapper.state('hide')).toEqual(true);
    expect(mockToggle).toHaveBeenCalled();
  });

  it('should increment state of mSecond by 1 and reset to 0 when it reaches 10', () => {
    wrapper.setState({ mSecond: 8 });

    wrapper.instance().startMSecond();

    expect(wrapper.state('mSecond')).toEqual(9);

    wrapper.instance().startMSecond();

    expect(wrapper.state('mSecond')).toEqual(0);
  });

  it('should increment state of second by 1 and reset to 0 when it reaches 60', () => {
    wrapper.setState({ second: 58 });

    wrapper.instance().startSecond();

    expect(wrapper.state('second')).toEqual(59);

    wrapper.instance().startSecond();

    expect(wrapper.state('second')).toEqual(0);
  });

  it('should increment state of Minute by 1 and reset to 1 when it reaches 60', () => {
    wrapper.setState({ minute: 58 });

    wrapper.instance().startMinute();

    expect(wrapper.state('minute')).toEqual(59);

    wrapper.instance().startMinute();

    expect(wrapper.state('minute')).toEqual(0);
  });

  it('should increment state of Hour by 1', () => {
    wrapper.setState({ hour: 0 });

    wrapper.instance().startHour();

    expect(wrapper.state('hour')).toEqual(1);

    wrapper.instance().startHour();

    expect(wrapper.state('hour')).toEqual(2);
  });

  it('should stop time and set State of start and stop', () => {
    wrapper.setState({ start: true, stop: false });
    wrapper.instance().stopTime();

    expect(wrapper.state('start')).toEqual(false);
    expect(wrapper.state('stop')).toEqual(true);
  });

  it('should reset the state of times to true and save to 0', () => {
    wrapper.setState(state);

    setTimeout(() => {
      wrapper.instance().resetTimer();
    });

    expect(wrapper.state('pomSummary')).toEqual('');
  });

  it('should set state of description whn addDescription is called', () => {
    wrapper.instance().addDescription('paul');

    expect(wrapper.state('description')).toEqual('paul');
  });

  it('should set state of description to an empty string when removeDescription is called', () => {
    wrapper.setState({ description: 'paul' });

    wrapper.instance().removeDescription();
    expect(wrapper.state('description')).toEqual('');
  });

  it('should grab from local storage', () => {
    const local = {
      'Mon, Sep 10, 2018 9:12 PM': {
        mSecond: '0',
        second: '0',
        minute: '0',
        hour: '0',
        save: 'true',
        showHistory: 'true',
        description: 'false'
      }
    };
    const stringifiedLocal = JSON.stringify(local);
    let expectedLocal = localStorage.store;

    wrapper.setState(state);
    localStorage.setItem('pomHistory', stringifiedLocal);
    wrapper.instance().resetTimer();
    expect(mockSetPom).toHaveBeenCalled();
  });

  it('should set new item to storage if there is no pom history', () => {
    const expected = localStorage.store;

    wrapper.setState({ minute: 4, second: 5, hour: 10 });
    wrapper.instance().resetTimer();

    expect(localStorage.store).toEqual(expected);
    expect(wrapper.state()).toEqual({
      description: false,
      hide: false,
      hour: 0,
      mSecond: 0,
      minute: 0,
      pomSummary: '5s  4m  10h',
      save: true,
      second: 0,
      socketMessage: '',
      start: false,
      stop: true
    });
  });

  it('should remove pom from store', () => {
    const local = {
      'Mon, Sep 10, 2018 9:12 PM': {
        second: '1',
        minute: '2',
        hour: '3'
      },
      'Mon, Sep 15, 2017 9:12 PM': {
        second: '4',
        minute: '3',
        hour: '1'
      }
    };
    const expected = {
      'Mon, Sep 15, 2017 9:12 PM': {
        second: '4',
        minute: '3',
        hour: '1'
      }
    };
    const stringifiedLocal = JSON.stringify(local);
    const stringifiedExpected = JSON.stringify(expected);

    localStorage.setItem('pomHistory', stringifiedLocal);

    wrapper.instance().removePom(local, 'Mon, Sep 10, 2018 9:12 PM');
    expect(localStorage.store).toEqual({ pomHistory: stringifiedExpected });
    expect(mockSetPom).toHaveBeenCalled();
    expect(wrapper.state('pomSummary')).toEqual('');
  });

  it('should start the timer on click', () => {
    const spy = jest.spyOn(wrapper.instance(), 'togglePom');
    wrapper.instance().forceUpdate();
    const movieCard = wrapper.find('i');
    movieCard.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should add Description on hover', () => {
    const spy = jest.spyOn(wrapper.instance(), 'addDescription');
    wrapper.instance().forceUpdate();
    const movieCard = wrapper.find('i');
    movieCard.simulate('mouseEnter');
    expect(spy).toHaveBeenCalled();
  });

  it('should remove description on hoveroff', () => {
    const spy = jest.spyOn(wrapper.instance(), 'removeDescription');
    wrapper.instance().forceUpdate();
    const movieCard = wrapper.find('i');
    movieCard.simulate('mouseLeave');
    expect(spy).toHaveBeenCalled();
  });

  it('should match snapshot when state of time changes', () => {
    wrapper.setState({ second: 1, hide: false, start: true, stop: false });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();

    const spyStop = jest.spyOn(wrapper.instance(), 'stopTime');
    const spyReset = jest.spyOn(wrapper.instance(), 'resetTimer');
    wrapper.instance().forceUpdate();
    wrapper
      .find('i')
      .at(1)
      .simulate('click');
    expect(spyStop).toHaveBeenCalled();
    expect(spyReset).toHaveBeenCalled();
  });

  it('should add a stop description on mouse enter', () => {
    wrapper.setState({ second: 1, hide: false, start: true });
    wrapper.update();

    const spyEnter = jest.spyOn(wrapper.instance(), 'addDescription');
    wrapper.instance().forceUpdate();
    wrapper
      .find('i')
      .at(1)
      .simulate('mouseEnter');
    expect(spyEnter).toHaveBeenCalled();

    const spyLeave = jest.spyOn(wrapper.instance(), 'removeDescription');
    wrapper.instance().forceUpdate();
    wrapper
      .find('i')
      .at(1)
      .simulate('mouseLeave');
    expect(spyLeave).toHaveBeenCalled();
  });

  it('should match snapshot when description is start hide is false and start is false', () => {
    wrapper.setState({ description: 'start', hide: false, start: false });
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it('should map to proper store', () => {
    let mockStore = store.currentUser;
    let mapped = mapStateToProps(mockStore);

    expect(mapped.currentUser).toEqual(mockStore.currentUser);
  });

  it('should map to proper store', () => {
    let mockStore = store.pomStatus;
    let mapped = mapStateToProps(mockStore);

    expect(mapped.pomInfo).toEqual(mockStore.pomInfo);
  });

  it('should call dispatch method when a function from map dispatch to props is called', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.setPomHistory();

    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call dispatch method when a function from map dispatch to props is called', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.togglePomState();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
