import Burger from "./Burger/Burger";
import Pasta from "./Pasta/Pasta";
import Sandwich from "./Sandwich/Sandwich";
import Pizza from "./Pizza/Pizza";
export default function Meal({ id }) {
    return (
        <div id={id}>
            <Pizza />
            <Pasta />
            <Sandwich />
            <Burger />
        </div>
    )
}