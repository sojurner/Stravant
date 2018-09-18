import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  const navLinks = ['personal', 'weekly', 'leaderboard', 'pomodoro'];
  const displayLinks = navLinks.map((link, index) => {
    const navClass = `nav-link nav-${link}`;
    return (
      <NavLink key={index} exact to={`/${link}`} className={navClass}>
        {link}
      </NavLink>
    );
  });
  return <nav className="nav-bar">{displayLinks}</nav>;
};
