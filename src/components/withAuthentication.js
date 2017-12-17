import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../firebase';

import { setAuthUser } from '../actions/actions';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser } = this.props;
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? onSetAuthUser(authUser)
          : onSetAuthUser(null);
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch(setAuthUser(authUser)),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;