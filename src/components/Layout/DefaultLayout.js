import React from 'react';
import { Link } from 'react-router-dom';
import './DefaultLayout.css';
import PropTypes from 'prop-types';

function DefaultLayout({ children }) {
  return (
    <>
      <section className="header">
        <header>
          <h1>Math Magicians</h1>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/quote">Quote</Link></li>
          </ul>
        </nav>
      </section>
      <div>
        {children}
      </div>
    </>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
