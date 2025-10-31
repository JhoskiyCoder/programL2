import React from "react";
import { useSelector } from "react-redux";

export default function Users(){
    const user = useSelector((state)=> state.auth.user);

    return(
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>Добро пожаловать, {user?.username}!</h2>
            <p>Ура получилось</p>
        </div>
    )

}