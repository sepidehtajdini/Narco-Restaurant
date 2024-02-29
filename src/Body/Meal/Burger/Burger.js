import { useContext } from "react";
import MenuItem from "../../MenuItem/MenuItem";
import MyContext from "../../../MyContext";
import burgerPhoto from "../../../img/svgs/burger-svgrepo-com.svg";
import "./burger.css";
export default function Burger() {
    const { burgers, order, flexType,titleBg } = useContext(MyContext);
    function order_specialBurger() {
        order(burgers.specialBurger.name, burgers.specialBurger.price);
    }
    function order_schnitzelBurger() {
        order(burgers.schnitzelBurger.name, burgers.schnitzelBurger.price);
    }
    return (
        <div className="item_wall burger_wall">
            <div className={titleBg+" title"}>
                <img src={burgerPhoto} className="icon" alt="burger icon" />
                برگر
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="specialBurger"
                    itemName={burgers.specialBurger.name}
                    price={burgers.specialBurger.price}
                    ingredients={burgers.specialBurger.ingredients}
                    onClick={order_specialBurger} />
                <MenuItem
                    picClass="schnitzelBurger"
                    itemName={burgers.schnitzelBurger.name}
                    price={burgers.schnitzelBurger.price}
                    ingredients={burgers.schnitzelBurger.ingredients}
                    onClick={order_schnitzelBurger} />
            </div>
        </div>
    )
}