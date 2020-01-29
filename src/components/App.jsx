import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import uniquid from 'uniquid'

import ObjectCard from './object-card'
import { getObjectList } from './getInfo'

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        // flexDirection: "column",
        flexWrap: "wrap",
        // alignContent: "center",
        marginTop: "2vw",
        justifyContent: "space-around"
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

    if (isLoading) return (
        <div className={classes.wrapper}>
                <CircularProgress />
        </div>
    )

    return (
        <div className={classes.wrapper}>
            {data.map((el, i) => {
                return <ObjectCard data={el} key={uniquid()}/>
            })}
        </div>
    )
}

export default App