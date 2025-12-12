import React from "react";

function Ticker(){
    return(
        <div style={{
            background: '#ffffff',
            overflow: 'hidden',
            nowrap: 'nowrap',
            color : '#0a0a0a',
            padding: '10px',
            width: '100%',

        }}>
            <marquee>Кимпинтяоо</marquee>
        </div>
    )
}

export default Ticker;