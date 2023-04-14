import React, { useState, useEffect } from 'react';
import Card from "../components/Card"
import axios from 'axios';
const Row = ({ endpoint, title }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data: { results } } = await axios.get(endpoint);
            setData(results);
        }
        fetchData();
        console.log(data);
    }, [])
    return (
        <div className="row">
            <h2>{title}</h2>
            <div>
                {
                    data.map((elem, idx) => {
                        if (elem.poster_path)
                            return <Card key={elem.id} {...elem} />
                        else return "";
                    })
                }
            </div>

        </div>
    )
}

export default Row;
