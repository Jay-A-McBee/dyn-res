'use strict'
import * as ActionTypes from '../Actions/genericActions';
import { combineReducers } from 'redux'

const initialState = {
  fairshare: false,
  journeymen: false,
  sentimentalist: false,
  cats: false,
  range: false,
  lab: false
}

const modalState = {
  isOpen: false,
  descOpen: false
}

function main(state = initialState, action){
  console.log(action)
  switch (action.type){
    case ActionTypes.SHOW_DESC:
      let openProj = {};
      openProj[action.title] = true;
      return Object.assign({}, state, openProj);
    case ActionTypes.CLOSE_DESC:
      let closeProj = {};
      closeProj[action.title] = false;
      return Object.assign({}, state, closeProj);
    case ActionTypes.FLIP_TRAD: 
      return Object.assign({}, state, {traditional: true});
	  default:
	   return state;
	}
}

function modals(state = modalState, action){
  switch (action.type){
    case ActionTypes.OPEN_MODAL:
      return Object.assign({},state,action.payload);
    case ActionTypes.CLOSE_MODAL:
      return Object.assign({},state,action.payload);
    case ActionTypes.OPEN_DESC_MODAL:
      return Object.assign({},state,action.payload);
    case ActionTypes.CLOSE_DESC_MODAL:
      return Object.assign({},state,action.payload);
    default:
      return state;
  }
}

export default combineReducers({main,modals});