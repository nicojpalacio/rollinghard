import React from 'react'
import Hardware from '../Components/Hardware';

export default function Home(props) {
    const mapHardwares = props.hardwares.map((hardware, i) => (<Hardware key={i} hardware={hardware} />));
    return (
        <>
            <h2>Hardwares</h2>
            <div className="d-flex flex-wrap justify-content-between">{mapHardwares}</div>
        </>
    )
}