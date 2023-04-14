import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaPlay } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=140ca6acce3db6bed02de44581757054&language=hi&region=in"
const base_url = "https://image.tmdb.org/t/p/w500";
const Banner = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const { data: { results } } = await axios.get(url);
            for (let elem of results) {
                if (elem.title && elem.overview) {
                    setData(elem);
                    break;
                }
                console.log(elem);
            }
        }
        fetchData();
    }, [])
    return (
        <div className='banner' >
            <img src={base_url + data.backdrop_path} alt={data.title} />
            <div>
                <h2>{data.title}</h2>
                <p >{data.overview}</p>
                <div>
                    <button> <FaPlay />  Play</button>
                    <button> <AiFillInfoCircle /> More Info</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
