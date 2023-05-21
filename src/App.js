import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import Body from "./Body/Body";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./restaurant.css";
export default function App() {
    const [mode, setMode] = useState("dark");
    const [titleBg, setTitleBg] = useState("title_dark");
    const [lightModeClass, setLightModeClass] = useState("hide");
    const [darkModeClass, setDarkModeClass] = useState("darkMode");
    const [headerBtnClass, setHeaderBtnClass] = useState("header_btn_dark");
    const [navbarToggleBtnMode, setNavbarToggleBtnMode] = useState("navbarToggleBtn_dark");

    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(1);
    const [flexType, setFlexType] = useState("flex_row_div");

    const [billDisplay, setBillDisplay] = useState("hide");
    const [introduction, setIntroduction] = useState("dark_introduction");
    const [dropdownMenu, setDropdownMenu] = useState("hide");
    const [largeNavbarDisplay, setLargeNavbarDisplay] = useState("hide");
    const [smallNavbarDisplay, setSmallNavbarDisplay] = useState("header_smallNavbar_hide");

    useEffect(() => {
        const myArr = [];
        if (sessionStorage.length !== 0) {
            for (let i = 0; i < sessionStorage.length; i++) {
                const result = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
                myArr.push(result.price * result.number);
            }
            setCounter(myArr.reduce((a, b) => a += b));
        }
    }, [])
    const drinks = {
        hotDrinks: {
            "masala": { name: 'چای ماسالا', price: 69000, ingredients: "دارچین، هل، زنجبیل، میخک، رازیانه" },
            "hotChocolate": { name: "هات چاکلت", price: 71000, ingredients: 'شکلات تخته ای تلخ و شیرین، شیر، خامه، شکر' },
            "whiteChocolate": { name: "وایت چاکلت", price: 71000, ingredients: 'شکلات سفید، شیر، خامه، پودر وانیل، شکر' },
            'tea': { name: "چای سیاه ایرانی", price: 59000 }
        },
        coldDrinks: {
            'juice': { name: 'آبمیوه فصل', price: 47000 },
            'lemonade': { name: 'لیموناد', price: 70000, ingredients: 'لیموی تازه، شکر، یخ' },
            "peanutShake": { name: "شیک بادام زمینی", price: 87000, ingredients: 'بادام زمینی، خامه، شیر، بستنی' },
            "nutellaShake": { name: "شیک نوتلا", price: 77000, ingredients: 'نوتلا، خامه، شیر، بستنی' },
            'icedAmericano': { name: "آیس امریکانو", price: 59000, ingredients: 'اسپرسو، آب سرد، یخ' },
            'icedLate': { name: "آیس لاته", price: 69000, ingredients: 'اسپرسو، شیر سرد، یخ' }
        }
    };
    const breakfast = {
        'omlet': { name: "املت", price: 70000 },
        'sausages': { name: "سوسیس تخم مرغ", price: 80000 },
        'friedEgg': { name: "نیمرو", price: 60000 }
    };
    const desserts = {
        'appleCake': { name: "کیک سیب دارچین", price: 79000, ingredients: 'سیب، دارچین، گردو' },
        'cheeseCake': { name: "چیز کیک", price: 89000, ingredients: 'پنیر خامه ای، خامه' }
    };
    const burgers = {
        'specialBurger': { name: "اسپشیال برگر", price: 247000, ingredients: "گوشت برگر، پنیر چدار،سس تارتار، پیاز کاراملایز، کاهو رسمی، سیب زمینی سرخ شده" },
        'schnitzelBurger': { name: "شنیسل برگر", price: 237000, ingredients: "نان برگر، شنیسل مرغ، سیب زمینی سرخ شده، سس تای چیلی" }
    }
    const salads = {
        'italianSalad': { name: "سالاد ایتالیایی", price: 187000, ingredients: "،میکس برگ های سبز ایتالیایی، سس چرمولا، خیار، گوجه چری، پنیر پارمزان" },
        'beafSalad': { name: "سالاد ایتالیایی با بیف", price: 259000, ingredients: "میکس برگ های سبز ایتالیایی، سس چرمولا، خیار، گوجه چری، پنیر پارمزان، گریل بیف" },
        'chickenSalad': { name: "سالاد ایتالیایی با مرغ گریل", price: 247000, ingredients: "میکس برگ های سبز ایتالیایی، سس چرمولا، خیار، گوجه چری، پنیر پارمزان، سینه مرغ گریل" },
        'grilledChickenSezar': { name: "سالاد سزار با مرغ گریل", price: 277000, ingredients: "کاهو رسمی، سس سزار، پنیر پارمژان، نان کروتن، زیتون سیاه، سینه مرغ گریل" },
        'schnitzelSezar': { name: "سالاد سزار با شنیسل", price: 289000, ingredients: "کاهو رسمی، سس سزار، پنیر پارمژان، نان کروتن، زیتون سیاه، شنیسل مرغ" }
    }
    const pastas = {
        'beafAlfredo': { name: 'پاستا بیف آلفردو', price: 279000, ingredients: 'پاستا پنه، سس آلفردو، پنیر پارمزان، زیتون سیاه، نان کروتن، فیله گوساله' },
        'chickenAlfredo': { name: 'پاستا چیکن آلفردو', price: 267000, ingredients: 'پاستا پنه، سس آلفردو، پنیر پارمزان، زیتون سیاه، نان کروتن، سینه مرغ' }
    }
    const appetizers = {
        'babyPotato': { name: "بیبی پوتیتو", price: 117000, ingredients: "سیب زمینی تنوری، اسپشیال اسپایس، سس تای چیلی" },
        'frenchFries': { name: "سیب زمینی سرخ شده", price: 117000, ingredients: "سیب زمینی سرخ شده، اسپشیال اسپایس، سس تای چیلی" },
        'wings': { name: "بال سوخاری تند", price: 127000, ingredients: "بال مرغ سوخاری، سس تایلندی، کاهو رسمی، سس چرمولا، کنجد" },
        'mushrooms': { name: "قارچ کبابی با سس مخصوص", price: 87000, ingredients: "قارچ کبابی، سس مخصوص، لیمو" },
        'garlicBread': { name: "نان سیر", price: 79000, ingredients: "نان چاپاتا، پنیر موزارلا، سیر، پیازچه" }
    }
    const sandwiches = {
        'springChicken': {
            name: "اسپرینگ چیکن", price: 249000, ingredients: "نان چاپاتا، سینه مرغ گریل، سس تارتار، پیاز، کاهو رسمی، سبزیجات میکس ایتالیایی"
        },
        'steakSandwich': { name: "ساندویچ استیک", price: 297000, ingredients: "ان چاپاتا، فیله گوساله، پیاز کاراملایز، پنیر گودا، میکس سبزیجات ایتالیایی، سس تارتار" },
        'roastBeafSandwich': { name: "ساندویچ رست بیف", price: 257000, ingredients: "گوشت گوساله، نان چاپاتا، کاهو جولین، سس تارتار، پنیر گودا، سیب زمینی سرخ شده (ساید)" },
    }
    const pizzas = {
        'atrinaPizza': { name: "پیتزا آترینا", price: 243000, ingredients: "ژامبون ممتاز، سوسیس کوکتل، سس مخصوص آترینا" },
        'bolognesePizza': { name: "پیتزا بلونز", price: 297000, ingredients: "گوشت چرخ کرده و سس قارچ کرمی و فلفل کاپری" },
        'chickenPizza': { name: "پیتزا چیکن سزار", price: 287000, ingredients: "سینه مرغ گریل شده، سس سزار، زیتون سیاه" },
        'steakPizza': { name: "پیتزا استیک", price: 297000, ingredients: "فیله گوساله طعم دار شده، سیر، فلفل دلمه ترکی" },
        'peperoni': { name: "پیتزا پپرونی", price: 287000, ingredients: "پپرونی، سس گوجه-پنیر موتزارلا" }
    }
    function order(name, price) {
        if (sessionStorage.getItem(name)) {
            alert("این مورد قبلا انتخاب شده است")
            return
        };
        sessionStorage.setItem(name, JSON.stringify({ price: price, number: number }));
        setCounter(counter + (price * number));
        setNumber(1);
        alert(`${name} افزوده شد.`)
    }
    function open_dropdownMenu() {
        if (dropdownMenu === "hide") {
            if (mode === "dark") { setDropdownMenu("dropdown_menu dropdown_dark") }
            else if (mode === "light") { setDropdownMenu("dropdown_menu dropdown_light") }
        }
        if (dropdownMenu !== "hide") {
            setDropdownMenu("hide")
        }
    }
    function toggleDarkLight() {
        if (mode === "dark") {
            setDarkModeClass("hide");
            setLightModeClass("lightMode");
            setTitleBg("title_light");
            setIntroduction("light_introduction");
            setHeaderBtnClass("header_btn_light");
            setNavbarToggleBtnMode("navbarToggleBtn_light");
            setMode("light");
            if (dropdownMenu !== "hide") {
                setDropdownMenu("dropdown_menu dropdown_light")
            }
        }
        if (mode === "light") {
            setLightModeClass("hide");
            setDarkModeClass("darkMode");
            setTitleBg("title_dark");
            setIntroduction("dark_introduction");
            setHeaderBtnClass("header_btn_dark");
            setNavbarToggleBtnMode("navbarToggleBtn_dark");
            setMode("dark");
            if (dropdownMenu !== "hide") {
                setDropdownMenu("dropdown_menu dropdown_dark")
            }
        }
    }
    return (
        <MyContext.Provider
            value={{
                mode, setMode,
                titleBg, setTitleBg,
                toggleDarkLight,
                darkModeClass, setDarkModeClass,
                lightModeClass, setLightModeClass,
                headerBtnClass,
                navbarToggleBtnMode,
                open_dropdownMenu,
                counter, setCounter,
                number, setNumber,
                billDisplay, setBillDisplay,
                drinks, breakfast, desserts, burgers, salads, pastas, appetizers,
                sandwiches, pizzas,
                order,
                smallNavbarDisplay, setSmallNavbarDisplay,
                largeNavbarDisplay, setLargeNavbarDisplay,
                dropdownMenu, setDropdownMenu,
                flexType, setFlexType,
                introduction, setIntroduction,
            }}>
            <Header />
            <Body />
            <Footer />
        </MyContext.Provider>
    )
}