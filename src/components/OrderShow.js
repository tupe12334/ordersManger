import React, { useLayoutEffect, useEffect, useState } from 'react';
import OrdeView from './OrdeView';
import { db } from '../services/firebase';

var ordersRef = db.ref('orders')


export default function OrderShow() {
    const [orders, Setorders] = useState([""])
    const [ordersViewToShow, setordersViewToShow] = useState(null)
    useEffect(() => {
        getOrdersFromDB()
    }, []);
    function getOrdersFromDB() {
        ordersRef.on('value', snap => {
            var temp = snap.val()
            var temp2 = Object.entries(temp)
            setordersViewToShow(temp2.map((order) => {
                var thisOrder = order[1]
                //console.log(order[1]);
                var dateformat = order[1].DDdate + "/" + order[1].MMdate + "/" + thisOrder.YYdate
                var address = thisOrder.street + " " + thisOrder.house + " " + thisOrder.city
                //console.log(address);
                //console.log(dateformat);
                return (
                    <OrdeView key={counter++} rcivername={order[1].reciverName} date={dateformat} address={address} />
                )
            })
            )
        })
    }

    var counter = 0
    return (
        <div>
            {ordersViewToShow}
        </div>
    )



}