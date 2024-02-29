import { useContext } from "react";
import MenuItem from "../../MenuItem/MenuItem";
import MyContext from "../../../MyContext";
import sandwichPhoto from "../../../img/svgs/sandwich-svgrepo-com.svg";
import "./sandwich.css";
export default function Sandwich() {
    const { sandwiches, order, flexType, titleBg } = useContext(MyContext);
    function order_springChicken() {
        order(sandwiches.springChicken.name, sandwiches.springChicken.price)
    }
    function order_steakSandwich() {
        order(sandwiches.steakSandwich.name, sandwiches.steakSandwich.price)
    }
    function order_roastBeafSandwich() {
        order(sandwiches.roastBeafSandwich.name, sandwiches.roastBeafSandwich.price)
    }
    return (
        <div className="item_wall sandwich_wall">
            <div className={titleBg + " title"}>
                <img src={sandwichPhoto} className="icon" alt="sandwich icon" />
                ساندویچ
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="springChicken"
                    itemName={sandwiches.springChicken.name}
                    price={sandwiches.springChicken.price}
                    ingredients={sandwiches.springChicken.ingredients}
                    onClick={order_springChicken} />
                <MenuItem
                    picClass="steakSandwich"
                    itemName={sandwiches.steakSandwich.name}
                    price={sandwiches.steakSandwich.price}
                    ingredients={sandwiches.steakSandwich.ingredients}
                    onClick={order_steakSandwich} />
                <MenuItem
                    picClass="roastBeafSandwich"
                    itemName={sandwiches.roastBeafSandwich.name}
                    price={sandwiches.roastBeafSandwich.price}
                    ingredients={sandwiches.roastBeafSandwich.ingredients}
                    onClick={order_roastBeafSandwich} />
            </div>
        </div>
    )
}