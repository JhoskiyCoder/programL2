import React from "react";
import Ticker from "../components/Ticker";
import Slider from "../components/Slider";

function HomePage(){
    return(
        <div>
            <Ticker/>
            <h1 style={{textAlign: 'center'}}>Главная страница</h1>
            <Slider/>
        </div>
    );
}
export default HomePage;