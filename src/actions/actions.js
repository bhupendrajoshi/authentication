import { AUTH_USER_SET, USERS_SET } from '../actions/actionTypes';

export function setUsers(users) {
  return { type: USERS_SET, users };
}

export function setAuthUser(authUser) {
  return { type: AUTH_USER_SET, authUser };
}
