import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AliceCarousel from 'react-alice-carousel'

import 'react-alice-carousel/lib/alice-carousel.css'
import './carousel-fix.css'

const useStyles = makeStyles({
    sliderWrapper: {
        display: "flex",
        justifyContent: "center",
    },
    image: {
        pointerEvents: "none"
    }
})

const Gallery = ({ images }) => {
    const classes = useStyles();
    if (Object.keys(images).length === 0) return null 
    return (
        <div className={classes.sliderWrapper}>
            <AliceCarousel mouseTrackingEnabled buttonsDisabled={true}>
                {images.map((el) => {
                    return (
                        <img src={el} className={classes.image}></img>
                    )
                })}
            </AliceCarousel>
            
        </div>    
)
}

export default Gallery