import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p></p>
      <button onClick={() => dispatch(selectName)}>Logout</button>
    </>
  );
};
