import React, { useState } from 'react';
import { Paper, Typography, Card, CardContent, CardHeader } from '@material-ui/core/';
import Geocode from '../services/googleMaps';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default function OrdeView(props) {

    function getCordinent(Address) {
        console.log(Address);
        Geocode.fromAddress(Address).then((response) => {
            console.log(response);
        })
    }
    const position = [51.505, -0.09]
    const [zoom, setZoom] = useState(13)
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