import React from "react";

function Ticker(){
    return(
        <div style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            background: '#222',
            color : '#0f0',
            padding: '10px'
        }}>
            <marquee>Добро пожаловать на сайт IT-122</marquee>
        </div>
    )
}

export default Ticker;