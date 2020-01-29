import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import ObjectCard from './object-card'
import { getObjectList } from './getObjectList'

// const getObjectList = async () => {
//     console.log('запрос');
//     const URL = "http://134.209.138.34/items";
//     const result = await fetch(URL);
//     const data = await result.json();
//     return data;
// }

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "center",
        marginTop: "5vw",
    }
})

const App = () => {
    const classes = useStyles();
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const getData = () => {
        setIsLoading(true);
        getObjectList()
            .then(resp => {
                setData(resp);
                setIsLoading(false);
            })
    }
    document.addEventListener('DOMContentLoaded', getData);
    if (Object.keys(data).length === 0) return null;
    return (
        <div className={classes.wrapper}>
            {data.map((el, i) => {
                return i<9 ? <ObjectCard data={el} /> : null
            })}
        </div>
    )
}

export default App