
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import Loader from 'react-loader-spinner';
import MenuItem from '../menuItem/menuItem';
import './header.scss';

const Header = ({apiFault, brandText, brandMark, customMenu, isLoaded, menuItems, onClick, retrieveServices}) => {
    useEffect(() => {
        retrieveServices();
      }, [retrieveServices]);

    return(
        <header className="c-header">
            <div>
                <div className="c-header__brandMark">
                    {brandMark && <img src={brandMark} alt={brandText} />}
                </div>
                <div className="c-header__brandText">{brandText}</div>
            </div>
            {apiFault && <div className="c-header__error">There was an error</div>}
            {!Boolean(isLoaded) && <Loader/>}
            {!apiFault && <div className="c-header__menuBar">
                {Boolean(menuItems && menuItems.length) && menuItems.map((item) => (
                    <MenuItem 
                    key={item.id}
                    item={item}
                    onClick={onClick}
                    />
                ))}
                {Boolean(isLoaded && customMenu) && <MenuItem 
                    key={customMenu.id}
                    item={customMenu}
                    onClick={customMenu.onClick}
                />}
            </div>}
        </header>
    );
};

Header.displayName = 'Header';
Header.propTypes = {
    apiFault: PropTypes.shape({}),
    /** Header text to be displayed */
    brandText: PropTypes.string,
    /** The image for the brand */
    brandMark: PropTypes.node,
    isLoaded: PropTypes.bool,
    /* Menu Items */
    menuItems: PropTypes.arrayOf(PropTypes.shape({
    })),
    onClick: PropTypes.func,
    retrieveServices: PropTypes.func
};


export default Header;
