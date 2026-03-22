import { useSelector } from 'react-redux';

export const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.userData);
  return (
    <div className="login-container">
      {isLoggedIn ? (
        <a href="/api/logout" className="logout-button">
          Logout
        </a>
      ) : (
        <a href="/auth/google" className="google-login-button">
          Sign in with Google
        </a>
      )}
    </div>
  );
};
