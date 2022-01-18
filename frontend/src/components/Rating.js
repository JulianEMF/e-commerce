import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span>
                <i style={{ color }} className={value >=1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}/>
                <i style={{ color }} className={value >=2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}/>
                <i style={{ color }} className={value >=3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}/>
                <i style={{ color }} className={value >=4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}/>
                <i style={{ color }} className={value >=5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}/>
            </span>
            <span>
                {/* This means that if texts exists, then display it*/}
                {text && text}
            </span>
        </div>
    )
}

// This will pass props by default to every instance of this component
Rating.defaultProps = {
    color: '#F8E825'
}

// This will validate that the proper props are passed
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating
