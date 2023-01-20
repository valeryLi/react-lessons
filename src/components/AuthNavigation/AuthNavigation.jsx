import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="register">Register</Link>
      </li>
      <li>
        <Link to="Login">Login</Link>
      </li>
    </ul>
  );
};
