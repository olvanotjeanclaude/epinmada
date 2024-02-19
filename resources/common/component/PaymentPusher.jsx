import React, { useEffect } from 'react'
import Pusher from 'pusher-js';

function PaymentPusher({ children }) {
    useEffect(() => {
        const options = {
            broadcaster: 'pusher',
            key: '83585968f3eb09ba0b38',
            cluster: 'eu',
            forceTLS: true
        };

        Pusher.logToConsole = true;

        var pusher = new Pusher(options.key, {
            cluster: 'eu'
        });

        var channel = pusher.subscribe('payment');
        channel.bind('App\\Events\\MvolaPaymentDone', function (data) {
            console.log(data);
        });
    }, []);

    return <>{children}</>;
}

export default PaymentPusher