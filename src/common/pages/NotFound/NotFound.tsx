import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';
import { isStandardRoutes } from '../../utils/validateRoutes';
import { useSelector } from 'react-redux';
import { getProfileSelector } from '../../redux/selectors/Profile/profileSelector';

const NotFound = () => {
  const { me } = useSelector(getProfileSelector);

  return (
  <div className="notfound">
    <div className="container">
      <div className="notfound__content">
        <div className="notfound__content-main">
          <h1>404</h1>
        </div>
        <h2>Oops! This Page Could Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
        </p>
        <Link to={`${me?'/dashboard':'/'}`}>Go To Homepage</Link>
      </div>
    </div>
  </div>
)};

export default NotFound;
