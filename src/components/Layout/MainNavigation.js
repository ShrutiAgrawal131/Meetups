import React from 'react'
import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css';
import {useContext} from 'react';
import FavoritesContext from '../../store/Favorites-context';
function MainNavigation() {
    const favctx= useContext(FavoritesContext);

  return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li><Link to='/AllMeetups'>All Meetup</Link></li>
                <li><Link to='/NewMeetup'>New Meetup</Link></li>
                <li><Link to='/Favorites'>My Favorites
                <span className={classes.badge}>
                    {favctx.totalFavorites}
                </span>
                </Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default MainNavigation;