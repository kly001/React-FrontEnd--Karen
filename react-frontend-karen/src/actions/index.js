/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
// export const UPDATE= "UPDATE";
// export const DELETE = "DELETE"



export const login = () => dispatch => {
dispatch( {type: FETCHING})
axios
.post("https://backend-foodie-fun.herokuapp.com/api/auth/login")
  .then(response => dispatch(
      { type: SUCCESS,  
        payload:response.data}))
  .catch(error => dispatch(
      { type: FAILURE, 
      payload: error }));
};

export const signup = (newMember) => dispatch => {
  dispatch( {type:FETCHING})
axios
.post("https://backend-foodie-fun.herokuapp.com/api/auth/register", newMember)
  .then(response => dispatch(
      { type: SUCCESS,  
         payload:response.data}))
  .catch(error => dispatch(
      { type: FAILURE, 
      payload: error }));
};

export const 