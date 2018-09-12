import React from 'react';
import { PomControl } from './PomControl';
import * as mock from './mockData';
import { isDate } from 'moment';

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
    hour: 0,
    mSecond: 0,
    minute: 0,
    pomSummary: '7s  2m  1h',
    save: true,
    second: 0,
    showHistory: false,
    start: false
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
    wrapper.instance().togglePom('start');

    expect(wrapper.state('start')).toEqual(true);

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

  it('should toggle state of description', () => {
    wrapper.instance().handleDescription();

    expect(wrapper.state('description')).toEqual(true);

    wrapper.instance().handleDescription();

    expect(wrapper.state('description')).toEqual(false);
  });

  it('should reset the state of times to true and save to 0', () => {
    wrapper.setState(state);

    wrapper.instance().resetTimer();

    expect(wrapper.state()).toEqual(defaultState);
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
  });

  it('should toggle state of history', () => {
    wrapper.setState({ showHistory: false });
    wrapper.instance().showPoms();

    expect(wrapper.state('showHistory')).toEqual(true);
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
  });
  it('should match snapShot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
