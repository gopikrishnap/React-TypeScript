import { useEffect, useRef } from 'react';
import { GetUseContexData } from './StoreContex';
import { Navigate } from "react-router-dom";
import { showToast } from './utils';

const AuthHoc = (Component) => {
  const Wrapped = (props) => {
    const { stateGlobal } = GetUseContexData();
    const hasShownToast = useRef(false);

    useEffect(() => {
      if (!stateGlobal.authToken && !hasShownToast.current) {
        showToast('Authentication expired. Please log in again.', 'error');
        hasShownToast.current = true;
      }
    }, [stateGlobal.authToken]);

    if (!stateGlobal.authToken) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  };

  return Wrapped;
};

export default AuthHoc;
