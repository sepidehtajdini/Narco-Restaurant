import { useContext } from "react";
import MyContext from "../../../MyContext";
import MenuItem from "../../MenuItem/MenuItem";
import pastaPhoto from "../../../img/svgs/noodles-spaguetti-svgrepo-com.svg";
import "./pasta.css";
export default function Pasta() {
    const {pastas, order, flexType,titleBg } = useContext(MyContext);
    function order_beafAlfredo() {
        order(pastas.beafAlfredo.name, pastas.beafAlfredo.price)
    }
    function order_chickenAlfredo() {
        order(pastas.chickenAlfredo.name, pastas.chickenAlfredo.price)
    }
    return (
        <div className="item_wall pasta_wall">
            <div className={titleBg+" title"}>
                <img src={pastaPhoto} className="icon" alt="pasta icon" />
                پاستا
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="beafAlfredo"
                    itemName={pastas.beafAlfredo.name}
                    price={pastas.beafAlfredo.price}
                    ingredients={pastas.beafAlfredo.ingredients}
                    onClick={order_beafAlfredo} />
                <MenuItem
                    picClass="chickenAlfredo"
                    itemName={pastas.chickenAlfredo.name}
                    price={pastas.chickenAlfredo.price}
                    ingredients={pastas.chickenAlfredo.ingredients}
                    onClick={order_chickenAlfredo} />
            </div>
        </div>
    )
}