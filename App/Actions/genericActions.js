import uuid from 'node-uuid';
import { CALL_API } from '../Middleware/asyncMiddleware';


export const SHOW_DESC    = 'SHOW_DESC';

export function openDesc(project){
	console.log('in open with', project )
	let id = uuid.v4();
	return {
	  id: id,
	  title: project,
	  type: SHOW_DESC
	}
}


export const CLOSE_DESC = 'CLOSE_DESC';

export function closeDesc(project){
	console.log('in close with', project)
	let id = uuid.v4();
	return {
	  id: id,
	  title: project,
	  type: CLOSE_DESC
	}
}


export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function open(){
	console.log('in fetch');
	let id = uuid.v4();
	return {
	  id: id,
	  payload: {
	  	isOpen: true
	  },
	  type: OPEN_MODAL
	}
}

export function close(){
	console.log('in fetch');
	let id = uuid.v4();
	return {
	  id: id,
	  payload: {
	  	isOpen: false
	  },
	  type: CLOSE_MODAL
	}
}

export const OPEN_DESC_MODAL = 'OPEN_DESC_MODAL';
export const CLOSE_DESC_MODAL = 'CLOSE_DESC_MODAL';

export function openDescMod(){
	console.log('in fetch');
	let id = uuid.v4();
	return {
	  id: id,
	  payload: {
	  	descOpen: true
	  },
	  type: OPEN_DESC_MODAL
	}
}

export function closeDescMod(){
	console.log('in fetch');
	let id = uuid.v4();
	return {
	  id: id,
	  payload: {
	  	descOpen: false
	  },
	  type: CLOSE_DESC_MODAL
	}
}