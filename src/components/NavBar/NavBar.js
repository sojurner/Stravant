import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
  const navLinks = ['personal', 'compare', 'leaderboard'];
  const displayLinks = navLinks.map(link => {
    const navClass = `nav-link nav-${link}`;
    return (
      <NavLink exact to={`/${link}`} className={navClass}>
        {link}
      </NavLink>
    );
  });
  return <nav className="nav-bar">{displayLinks}</nav>;
};
