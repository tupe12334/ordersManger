import React, { useState, useEffect } from 'react';
import { Paper, Typography, Card, CardContent, CardHeader } from '@material-ui/core/';
// import Geocode from '../services/googleMaps';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import getGeoCoding from '../services/opencage';



export default function OrdeView(props) {
    const [position, setposition] = useState()
    const [zoom, setZoom] = useState(13)
    setposition(getGeoCoding(props.address))
    useEffect(() => {
        //
    }, [position])
    return (
        <Card style={{ margin: "10px" }}>
            <CardHeader
                title={"משלוח אל: " + props.rcivername}
                subheader={props.date}>
                <Typography>

                </Typography>
            </CardHeader>
            <CardContent>
                <Map style={{ height: "500px" }} center={position} zoom={zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                         </Popup>
                    </Marker>
                </Map>
            </CardContent>




        </Card>
    )
}