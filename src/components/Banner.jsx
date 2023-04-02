import React, { useState, useEffect } from 'react'
import axios from 'axios';
const url = "https://api.themoviedb.org/3/trending/all/day?api_key=140ca6acce3db6bed02de44581757054";
const base_url = "https://image.tmdb.org/t/p/w500";
const Banner = () => {
    const [banner, setBanner] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const { data: { results } } = await axios.get(url);
            setBanner(results[0]);
        }
        fetchData();
        console.log(banner);
    }, [])
    return (
        <main className="banner">
            <img src={base_url + banner.backdrop_path} alt="" />
        </main>
    )
}

export default Banner;
