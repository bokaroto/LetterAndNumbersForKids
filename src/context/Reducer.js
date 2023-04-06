const myReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        contextData: action.payload,
      };
    default:
      return state;
  }
};

export default myReducer;
