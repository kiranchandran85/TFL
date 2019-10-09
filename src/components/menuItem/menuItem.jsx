import {faClock, faMoon} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import './menuItem.scss';

const MenuItem = ({item, onClick}) => {
    let getIcons = (item) => {
        let icons = [];
        let isNightServ = item.serviceTypes.find((s) => s.name === 'Night');
        let hasDisruptions = item.lineStatuses.find((l) => l.statusSeverity !== 10);
        if(isNightServ){
            icons.push(<span key={`${item.id}-1`} className='nightServ'><FontAwesomeIcon  icon={faMoon} /></span>);
        }
        if(hasDisruptions){
            icons.push(<span key={`${item.id}-2`} className='lateServ'><FontAwesomeIcon  icon={faClock} /></span>);
        }
        return icons;
    };
    
    return(
        <button
            key={item.id}
            onClick={(evt) => {
                onClick(evt, item);
            }}
        >{item.name}
        {Boolean(item.id !== 'custom') && getIcons(item).map((icon)=>(
            icon
        ))}
        </button>
    );
};

MenuItem.displayName = 'MenuItem';
MenuItem.propTypes = {
    /* Menu Item */
    item: PropTypes.shape({
    }),
    onClick: PropTypes.func
};


export default MenuItem;
