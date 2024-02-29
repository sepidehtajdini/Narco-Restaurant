import { useContext } from "react";
import MyContext from "../../MyContext";
import MenuItem from "../MenuItem/MenuItem";
import cakePhoto from "../../img/svgs/muffin-svgrepo-com.svg";
import "./desserts.css";
export default function Desserts({ id }) {
    const { desserts, order, flexType, titleBg } = useContext(MyContext);

    function order_appleCake() {
        order(desserts.appleCake.name, desserts.appleCake.price)
    }
    function order_cheeseCake() {
        order(desserts.cheeseCake.name, desserts.cheeseCake.price)
    }
    return (
        <div id={id} className="item_wall desserts_wall">
            <div className={titleBg + " title"}>
                <img className="icon" src={cakePhoto} alt="cake icon" />
                کیک
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="appleCake"
                    itemName={desserts.appleCake.name}
                    price={desserts.appleCake.price}
                    onClick={order_appleCake}
                    ingredients={desserts.appleCake.ingredients}
                />
                <MenuItem
                    picClass="cheeseCake"
                    itemName={desserts.cheeseCake.name}
                    price={desserts.cheeseCake.price}
                    onClick={order_cheeseCake}
                    ingredients={desserts.cheeseCake.ingredients}
                />
            </div>
        </div>
    )
}