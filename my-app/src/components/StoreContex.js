import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const initialValues = {
  authToken: '',
  usersList: {},
};
// const handleDispatchReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_AUTH":
//       return { ...state, authToken: action.payload };
//     default:
//       return state;
//   }
// };

export const GlobalStoreProvider = ({ children }) => {
  // const [stateGlobal, dispatchGlobal] = useReducer(handleDispatchReducer, intValues);
  const [stateGlobal, setStateGlobal] = useState(initialValues);
  const handleDispatch = (action) => {
    switch (action.type) {
      case 'SET_AUTH':
        setStateGlobal(prev => ({ ...prev, authToken: action.payLoad }));
        break;
      case 'SET_USERS':
        setStateGlobal(prev => ({ ...prev, usersList: action.payLoad }));
        break;
      default:
        break;
    }
  };
  return (
    <GlobalContext.Provider value={{ stateGlobal, setStateGlobal, handleDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GetUseContexData = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('GetUseContexData must be used within GlobalStoreProvider');
  }
  return context;
};
