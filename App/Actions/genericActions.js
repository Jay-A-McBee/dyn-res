import uuid from 'node-uuid';
import { CALL_API } from '../Middleware/asyncMiddleware';


export const SHOW_DESC    = 'SHOW_DESC';

export function openDesc(project){
	let id = uuid.v4();
	return {
	  id: id,
	  title: project,
	  type: SHOW_DESC
	}
}


export const CLOSE_DESC = 'CLOSE_DESC';

export function closeDesc(project){
	console.log('in fetch');
	let id = uuid.v4();
	return {
	  id: id,
	  title: project,
	  type: CLOSE_DESC
	}
}


export const CLOSE_WINDOW = 'FLIP_TRAD';

export function flipTrad(){
	console.log('in fetch');
	let id = uuid.v4();
	return {
	  id: id,
	  type: FLIP_TRAD
	}
}
