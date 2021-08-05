import React from 'react'
import HelloComponent from './HelloComponent';
import HelloComponentFunction from './HelloComponentFunction';
import AlertComponent from './AlertComponent';
import CounterComponent from './CounterComponent';

export default function UseCaseOne() {
    return (
        <div>
            <h1>Hello React</h1>
            <HelloComponent name="Zartab" lastname="Nakhwa" />
            <HelloComponent name="Arun" college="Hinduja" />
            <HelloComponent country="India" state="MH" />

            <hr />
            <HelloComponentFunction name="Zartab" />
            <hr />
            <AlertComponent />
            <hr />
            <CounterComponent />

        </div>
    )
}
