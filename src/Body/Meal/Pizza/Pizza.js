import { useContext } from "react";
import MenuItem from "../../MenuItem/MenuItem";
import MyContext from "../../../MyContext";
import pizzaPhoto from "./img/pizza-svgrepo-com.svg";
import "./pizza.css";
export default function Pizza() {
    const { pizzas, order, flexType,titleBg } = useContext(MyContext);
    function order_atrinaPizza() {
        order(pizzas.atrinaPizza.name, pizzas.atrinaPizza.price)
    }
    function order_steakPizza() {
        order(pizzas.steakPizza.name, pizzas.steakPizza.price)
    }
    function order_bolognesePizza() {
        order(pizzas.bolognesePizza.name, pizzas.bolognesePizza.price)
    }
    function order_chickenPizza() {
        order(pizzas.chickenPizza.name, pizzas.chickenPizza.price)
    }
    function order_peperoni() {
        order(pizzas.peperoni.name, pizzas.peperoni.price)
    }
    return (
        <div className="item_wall pizza_wall">
            <div className={titleBg+" title"}>
                <img src={pizzaPhoto} className="icon" alt="pizza icon" />
                پیتزا
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="atrinaPizza"
                    itemName={pizzas.atrinaPizza.name}
                    price={pizzas.atrinaPizza.price}
                    ingredients={pizzas.atrinaPizza.ingredients}
                    onClick={order_atrinaPizza} />
                <MenuItem
                    picClass="steakPizza"
                    itemName={pizzas.steakPizza.name}
                    price={pizzas.steakPizza.price}
                    ingredients={pizzas.steakPizza.ingredients}
                    onClick={order_steakPizza} />
                <MenuItem
                    picClass="bolognesePizza"
                    itemName={pizzas.bolognesePizza.name}
                    price={pizzas.bolognesePizza.price}
                    ingredients={pizzas.bolognesePizza.ingredients}
                    onClick={order_bolognesePizza} />
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="chickenPizza"
                    itemName={pizzas.chickenPizza.name}
                    price={pizzas.chickenPizza.price}
                    ingredients={pizzas.chickenPizza.ingredients}
                    onClick={order_chickenPizza} />
                <MenuItem
                    picClass="peperoni"
                    itemName={pizzas.peperoni.name}
                    price={pizzas.peperoni.price}
                    ingredients={pizzas.peperoni.ingredients}
                    onClick={order_peperoni} />
            </div>
        </div>
    )
}