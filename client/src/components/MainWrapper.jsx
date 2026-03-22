import { useThunk } from '../store/hooks/useThunk';
import { fetchUser } from '../store/thunks/auth';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header } from './Header';

export const MainWrapper = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.userData);
  const [dispatchFetchUser] = useThunk(fetchUser);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatchFetchUser();
    }
  }, [dispatchFetchUser, isLoggedIn]);

  return (
    <div className="main-wrapper">
      <Header />
      {children}
    </div>
  );
};
