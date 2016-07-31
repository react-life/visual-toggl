export const UPDATE_CLIENTS = 'UPDATE_CLIENTS';
export const REJECT_CLIENTS = 'REJECT_CLIENTS';

export const updateClients = data => ({
  type: UPDATE_CLIENTS,
  payload: {
    data,
  },
})

export const rejectClients = error => ({
  type: REJECT_CLIENTS,
  payload: {
    error,
  },
})

export const getClients = () => dispatch => {
  return fetch('/api/get/clients')
    .then(data => dispatch(updateClients(data)))
    .catch(err => dispatch(rejectClients(err)))
}
