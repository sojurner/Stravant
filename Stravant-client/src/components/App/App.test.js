import React from 'react';
import { mapStateToProps, mapDispatchToProps, App } from './App';
import * as store from '../../mockData/mockStore';
import { setAccessToken } from '../../actions/userAction';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

jest.mock('../../helpers/apiCalls/apiCalls');

describe('App', () => {
  let wrapper;
  let mockStore;
  beforeEach(() => {
    global.window = { location: { search: 'http://localhost:3000.com' } };
    wrapper = shallow(<App currentUser={store.currentUser} />);
  });
  it('should matchsnapshot', done => {
    wrapper = mount(<App currentUser={store.currentUser} />);
    setTimeout(() => {
      expect(wrapper).toMatchSnapshot();

      done();
    });
  });

  // it('should render NavBar and Welcome and ContentRoute if state of code exists', () => {
  //   wrapper.setState({ code: 'adfad' });
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it('should map the store correctly', () => {
  //   const mockStore = {
  //     ...store.currentUser
  //   };
  //   const mapped = mapStateToProps(mockStore);
  //   expect(mapped.currentUser).toEqual(mockStore.currentUser);
  // });

  // it('should dispatch fn when using matchDispatchToProps function', () => {
  //   const mockDispatch = jest.fn();
  //   const mapped = mapDispatchToProps(mockDispatch);
  //   mapped.setAccessToken();
  //   expect(mockDispatch).toHaveBeenCalled();
  // });
});
