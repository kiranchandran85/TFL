import PropTypes from 'prop-types';
import React from 'react';
import './disruptItem.scss';

const DisruptItem = ({checked, disrupt}) => {
    return (
        <div className="disruptions">
            {Boolean(checked) && <div>Disruptions If Any :</div>}
            {Boolean(checked) && <div className="disruptDetails">
                { Boolean(disrupt.length) ? ( <div>Service currently suffering disruptions
                <ul> 
                { disrupt.map((d, ind) => (
                    <li key={ind} className="disrupt">{d}</li>
                ))}
                </ul></div>)
                : 
                <div>No service disruptions</div> }
            </div>}
        </div>
          );
};

DisruptItem.displayName = 'DisruptItem';
DisruptItem.propTypes = {
    /* Menu Item */
    item: PropTypes.shape({
    }),
    onClick: PropTypes.func
};


export default DisruptItem;
