import React from 'react'
const base_url = "https://image.tmdb.org/t/p/w500";
function Card({ title, poster_path }) {
    return (
        <div className='card'>
            <img src={base_url + poster_path} alt={title} />
        </div>
    )
}

export default Card;