import React from 'react'
import Row from "../components/Row";
import { useState, useEffect } from 'react';
import axios from 'axios';
const url = "https://api.themoviedb.org/3/trending/all/day?api_key=140ca6acce3db6bed02de44581757054";
const Main = () => {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data: { results } } = await axios.get(url);
            setTrending(results);
        }
        fetchData();
        console.log(trending);
    }, [])

    return (
        <main>
            <Row title={"Trending Now"} data={trending} />
            <Row title={"Trending Now"} data={trending} />
            <Row title={"Trending Now"} data={trending} />
            <Row title={"Trending Now"} data={trending} />
        </main>
    )
}

export default Main;
