const initialState = {
  isFetching: false,
  items: [],
  err: null,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_ITEMS':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_ITEMS':
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    case 'ITEM_REQUEST_FAILED':
      return {
        ...state,
        err: action.err,
      };
    default:
      return state;
  }
};

export default itemReducer;
