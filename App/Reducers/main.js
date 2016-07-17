'use strict'
import * as ActionTypes from '../Actions/genericActions';

const initialState = {
  fairshare: false,
  journeymen: false,
  sentimentalist: false,
  cats: false
}

export function main(state = initialState, action){
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