import { useContext } from "react";
import MyContext from "../../MyContext";
import MenuItem from "../MenuItem/MenuItem";
import appetizerPhoto from "./img/french-fries-fries.svg";
import "./appetizer.css";
export default function Appetizer({ id }) {
    const { appetizers, order, flexType, titleBg } = useContext(MyContext);
    function order_babyPotato() {
        order(appetizers.babyPotato.name, appetizers.babyPotato.price)
    }
    function order_frenchFries() {
        order(appetizers.frenchFries.name, appetizers.frenchFries.price)
    }
    function order_wings() {
        order(appetizers.wings.name, appetizers.wings.price)
    }
    function order_mushrooms() {
        order(appetizers.mushrooms.name, appetizers.mushrooms.price)
    }
    function order_garlicBread() {
        order(appetizers.garlicBread.name, appetizers.garlicBread.price)
    }
    return (
        <div id={id} className="item_wall appetizer_wall">
            <div className={titleBg + " title"}>
                <img src={appetizerPhoto} className="icon" alt="appetizer icon" />
                پیش غذا
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="babyPotato"
                    itemName={appetizers.babyPotato.name}
                    price={appetizers.babyPotato.price}
                    ingredients={appetizers.babyPotato.ingredients}
                    onClick={order_babyPotato} />
                <MenuItem
                    picClass="frenchFries"
                    itemName={appetizers.frenchFries.name}
                    price={appetizers.frenchFries.price}
                    ingredients={appetizers.frenchFries.ingredients}
                    onClick={order_frenchFries} />
                <MenuItem
                    picClass="wings"
                    itemName={appetizers.wings.name}
                    price={appetizers.wings.price}
                    ingredients={appetizers.wings.ingredients}
                    onClick={order_wings} />
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="mushrooms"
                    itemName={appetizers.mushrooms.name}
                    price={appetizers.mushrooms.price}
                    ingredients={appetizers.mushrooms.ingredients}
                    onClick={order_mushrooms} />
                <MenuItem
                    picClass="garlicBread"
                    itemName={appetizers.garlicBread.name}
                    price={appetizers.garlicBread.price}
                    ingredients={appetizers.garlicBread.ingredients}
                    onClick={order_garlicBread} />
            </div>
        </div>
    )
}