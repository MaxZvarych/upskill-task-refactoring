import React from 'react';
import logo from '../../../assets/icons/logo-icon.svg';
import { Link } from 'react-router-dom';
import { isStandardRoutes } from '../../utils/validateRoutes';
import { useSelector } from 'react-redux';
import { getProfileSelector } from '../../redux/selectors/Profile/profileSelector';

import './Logo.scss';

const Logo = () => {
  const { me } = useSelector(getProfileSelector);

  return (
    <>
      <div className="logo">
        <Link to={`${me?'/dashboard':'/'}`} className="logo__link">
          <img src={logo} alt="job-board-logo" />
          <h2>CViewer</h2>
        </Link>
      </div>
    </>
  );
};

export default Logo;
