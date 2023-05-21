import { useContext, useState } from "react";
import MyContext from "../../MyContext";
import Hotdrinks from "./Hotdrinks";
import Colddrinks from "./Colddrinks";
import "./drinks.css";
export default function Drinks({ id }) {
    return (
        <div id={id}>
            <Hotdrinks />
            <Colddrinks />
        </div>
    )
}