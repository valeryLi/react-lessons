import { Navigation } from 'components/Navigation/Navigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { selectToken } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <header>
        <Navigation />
        {token ? <UserAuthMenu /> : <AuthNavigation />}
      </header>
      <Outlet />
    </>
  );
};
