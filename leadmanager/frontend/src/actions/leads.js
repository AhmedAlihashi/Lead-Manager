// all http requests happen here
import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERROR } from "./types";

//get leads
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//delete Lead
export const delLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//add lead
export const addLead = lead => dispatch => {
  axios
    .post("/api/leads/", lead)
    .then(res => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERROR,
        payload: errors
      });
    });
};
