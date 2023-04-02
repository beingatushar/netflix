import React, { useState, useEffect } from 'react';
import Card from "../components/Card"
const Row = ({ data = [], title }) => {


    return (
        <div className="row">
            <h2>{title}</h2>
            <div>
                {
                    data.map((elem, idx) =>
                        <Card key={idx} {...elem} />
                    )
                }
            </div>

        </div>
    )
}

export default Row;
