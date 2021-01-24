import { useReducer } from 'react';
import { initialState, Reducer } from './state';
import { LocationContext } from '../utils/LocationContext';

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
      <LocationContext.Provider value={[state, dispatch]}>
        {children}
      </LocationContext.Provider>
  );
}

export default Store;
