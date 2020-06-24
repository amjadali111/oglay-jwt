import Axios from 'axios';

export default function setAuthorizationToken(token) {
  if (token) {
    // Axios is a network operator sets authorization to true or false in header
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete Axios.defaults.headers.common.Authorization;
  }
}
