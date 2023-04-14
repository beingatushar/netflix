import React from 'react'
import Row from "../components/Row";
const Main = () => {


    return (
        <main>
            <Row title={"Upcoming"} endpoint={"https://api.themoviedb.org/3/movie/upcoming?api_key=140ca6acce3db6bed02de44581757054&language=hi&page=1&region=in"} />
            <Row title={"Now Playing"} endpoint={"https://api.themoviedb.org/3/movie/now_playing?api_key=140ca6acce3db6bed02de44581757054&language=hi&page=1&region=in"} />
            <Row title={"Popular"} endpoint={"https://api.themoviedb.org/3/movie/popular?api_key=140ca6acce3db6bed02de44581757054&language=hi&page=1&region=in"} />
        </main>
    )
}

export default Main;
