import React from 'react';

export default function Like(props) {
    const { isLiked, toggleLike } = props;
    return (
        <div>
            <span
                className='material-icons'
                style={{ cursor: 'pointer' }}
                onClick={toggleLike}
            >
                {isLiked ? 'favorite' : 'favorite_border'}
            </span>
        </div>
    );
}
