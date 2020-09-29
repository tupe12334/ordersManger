import React from 'react';
import { Paper } from '@material-ui/core/';


export default function OrdeView(props) {
    return (
        <div>
            <Paper>
                {props.rcivername}
            </Paper>
        </div>
    )
}