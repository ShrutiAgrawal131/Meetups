import React from 'react'
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import {useContext} from 'react'
import FavoritesContext from '../../store/Favorites-context';

function Meetupitem(props) {
    const favoritesctx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesctx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if(itemIsFavorite){
            favoritesctx.removeFavorite(props.id);
        }else{
            favoritesctx.addFavorite({
                id: props.id,
                title: props.title,
                address: props.addresss,
                image: props.image,
                description: props.description,
            });
        }
    }

  return (
    <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>
                {itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}
            </button>
        </div>
        </Card>
    </li>
  )
}

export default Meetupitem