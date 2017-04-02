import axios from 'axios'

export function userSignupRequest(userData){
  var config = {
  headers: {'content-type': 'application/json'}
};
  return dispatch => {
    return axios.post('http://localhost:3001/users.json' , userData ,config);
  }
}
