import { endpoint } from '../config/client';

const requestItems = () => ({
  type: 'REQUEST_ITEMS',
});

const receiveItems = items => ({
  type: 'RECEIVE_ITEMS',
  items,
});

const itemRequestFailed = err => ({
  type: 'ITEM_REQUEST_FAILED',
  err,
});

export const fetchItems = () => dispatch => {
  dispatch(requestItems());
  return fetch(endpoint + 'items')
    .then(response =>
      response.json().then(json => ({
        status: response.status,
        json,
      })),
    )
    .then(
      ({ status, json }) => {
        if (status >= 400) dispatch(itemRequestFailed());
        else dispatch(receiveItems(json));
      },
      err => {
        dispatch(itemRequestFailed(err));
      },
    );
};
