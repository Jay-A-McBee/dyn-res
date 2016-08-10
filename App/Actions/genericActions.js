import uuid from 'node-uuid';
import { CALL_API } from '../Middleware/asyncMiddleware';


export const SHOW_DESC    = 'SHOW_DESC';

export const openDesc = (project) => ({
  title: project,
  type: SHOW_DESC
})


export const CLOSE_DESC = 'CLOSE_DESC';

export const closeDesc = (project) => ({
  title: project,
  type: CLOSE_DESC
})


export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const open = () => ({
  payload: {
  	isOpen: true
  },
  type: OPEN_MODAL
})

export const close = () => ({
  payload: {
  	isOpen: false
  },
  type: CLOSE_MODAL
})

export const OPEN_DESC_MODAL = 'OPEN_DESC_MODAL';
export const CLOSE_DESC_MODAL = 'CLOSE_DESC_MODAL';

export const openDescMod = () => ({
  payload: {
  	descOpen: true
  },
  type: OPEN_DESC_MODAL
})

export const closeDescMod = () => ({
  payload: {
  	descOpen: false
  },
  type: CLOSE_DESC_MODAL
});