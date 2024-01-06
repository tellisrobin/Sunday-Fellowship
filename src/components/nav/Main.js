import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ user: null, token: '', refreshToken: '' });
    localStorage.removeItem('auth');
    navigate('/login');
  };

  const loggedIn = auth.user !== null && auth.token !== '' && auth.refreshToken !== '';

  const handlePostAdClick = () => {
    if (loggedIn) {
      navigate('/ad/create');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="nav d-flex justify-content-between lead">
      <NavLink className="nav-link" activeClassName="active" exact to="/">
        Home
      </NavLink>

      <button
        type="button"
        className="nav-link pointer btn btn-link"
        onClick={handlePostAdClick}
      >
        Post Ad
      </button>

      {!loggedIn ? (
        <>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </>
      ) : (
        <div className="dropdown">
          <NavLink
            className="nav-link dropdown-toggle"
            to="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {auth?.user?.name ? auth.user.name : auth.user.username}
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <button onClick={logout} className="dropdown-item" type="button">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Main;
