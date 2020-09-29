import React, { useEffect, useState } from 'react';
import OrdeView from './OrdeView';
import { db } from '../services/firebase';



export default function OrderShow() {
    var ordersRef = db.ref('orders')
    const [orders, Setorders] = useState([""])
    useEffect(() => {
        getOrdersFromDB()
    })

    function getOrdersFromDB() {
        ordersRef.on('value', snap => {
            console.log("snap " + snap);
            var temp = snap.val()
            Setorders( Object.keys(temp))
            console.log(orders);
        })
    }
    var counter = 0
    console.log(orders);
    var ordersViewToShow = orders.map((order) => {
        console.log(order);
        console.log("ordersViewToShow" + ordersViewToShow);
        return (
            <OrdeView key={counter++} rcivername={order} />
        )
    })
    return (
        <div>
            {ordersViewToShow}
        </div>
    )
}