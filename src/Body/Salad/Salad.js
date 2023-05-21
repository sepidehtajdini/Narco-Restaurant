import { useContext } from "react";
import MyContext from "../../MyContext";
import saladPhoto from "./img/salad-svgrepo-com.svg";
import MenuItem from "../MenuItem/MenuItem";
import "./salad.css";
export default function Salad({ id }) {
    const { order, salads, flexType ,titleBg} = useContext(MyContext);
    function order_italianSalad() {
        order(salads.italianSalad.name, salads.italianSalad.price)
    }
    function order_beafSalad() {
        order(salads.beafSalad.name, salads.beafSalad.price)
    }
    function order_chickenSalad() {
        order(salads.chickenSalad.name, salads.chickenSalad.price)
    }
    function order_grilledChickenSezar() {
        order(salads.grilledChickenSezar.name, salads.grilledChickenSezar.price)
    }
    function order_schnitzelSezar() {
        order(salads.schnitzelSezar.name, salads.schnitzelSezar.price)
    }
    return (
        <div id={id} className="item_wall salad_wall">
            <div className={titleBg+" title"}>
                <img src={saladPhoto} className="icon" alt="salad icon" />
                سالاد
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="italianSalad"
                    itemName={salads.italianSalad.name}
                    price={salads.italianSalad.price}
                    ingredients={salads.italianSalad.ingredients}
                    onClick={order_italianSalad} />
                <MenuItem
                    picClass="beafSalad"
                    itemName={salads.beafSalad.name}
                    price={salads.beafSalad.price}
                    ingredients={salads.beafSalad.ingredients}
                    onClick={order_beafSalad} />
                <MenuItem
                    picClass="chickenSalad"
                    itemName={salads.chickenSalad.name}
                    price={salads.chickenSalad.price}
                    ingredients={salads.chickenSalad.ingredients}
                    onClick={order_chickenSalad} />
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="schnitzelSezar"
                    itemName={salads.grilledChickenSezar.name}
                    price={salads.grilledChickenSezar.price}
                    ingredients={salads.grilledChickenSezar.ingredients}
                    onClick={order_schnitzelSezar} />
                <MenuItem
                    picClass="grilledChickenSezar"
                    itemName={salads.schnitzelSezar.name}
                    price={salads.schnitzelSezar.price}
                    ingredients={salads.schnitzelSezar.ingredients}
                    onClick={order_grilledChickenSezar} />
            </div>
        </div>
    )
}