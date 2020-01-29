import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import Modal from 'react-modal';

import Gallery from './popup-image-gallery'
import { getObjectInfo } from './getObjectList'

const useStyles = makeStyles({
    card: {
        width: "25%",
        minWidth: 300,
        height: "25%",
        minHeight: 300,
        marginBottom: 50,
    },
    cardAction: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    wide: {
        width: "100%",
        textAlign: "center"
    },
    modalContent: {
        width: "100%",
        heigth: "100%",
    }
})

// const getData = async (id) => {
//     const URL = `http://134.209.138.34/item/${id}`;
//     const result = await fetch(URL);
//     const data = await result.json();
//     console.log(data);
//     return data;
// }

const ObjectCard = ({ data }) => {
    const classes = useStyles();
    Modal.setAppElement('#root')
    const [modalIsOpen, setIsOpen] = useState(false);
    const [info, setInfo] = useState({});
    const [images, setImages] = useState({});
    const openModal = () => {
        setIsOpen(true);
        getObjectInfo(data.id)
            .then(resp => {
                setInfo(resp)
                setImages(resp[0].images)
            })
    }
  
    const closeModal = () => {
      setIsOpen(false);
    }
  
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <Gallery images={images} />
                <Typography gutterBottom variant="h5" component="h3">
                    {info[0] ? info[0].title : null}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                    {info[0] ? info[0].price : null}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    {info[0] ? info[0].description : null}
                </Typography>
            </Modal>
            <Card className={classes.card} onClick={openModal}>
                <CardActionArea className={classes.cardAction}>
                    <CardMedia
                        component="img"
                        alt={data.title}
                        image={data.previewImage}
                        height="70%"
                    />
                    <CardContent className={classes.wide}>
                        <Typography gutterBottom variant="h5" component="h3">
                            {data.title}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            {data.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {data.address}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default ObjectCard;