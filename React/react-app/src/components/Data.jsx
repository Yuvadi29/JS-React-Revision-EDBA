import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Data = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getApiData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
                // .then((res) => setData(res.data))
                // .then((res) => console.log(res))
                // .then(json => console.log(json))
                console.log(res.data.title);
                setData(res.data);
        }

        getApiData();
    }, []);

    return (
        <div>{data.title}</div>
    )
}

export default Data