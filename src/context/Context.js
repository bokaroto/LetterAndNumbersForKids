import { createContext, useReducer } from 'react';
import myReducer from './Reducer';

const myContext = createContext();

export const MyProvider = ({ children }) => {
  const initialState = {
    contextData: [],
  };

  const [state, dispatch] = useReducer(myReducer, initialState);

  return (
    <myContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default myContext;
