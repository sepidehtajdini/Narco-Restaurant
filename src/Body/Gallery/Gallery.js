import { useContext, useState } from "react";
import MyContext from "../../MyContext";
import img1 from "./img/img1.jpeg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpeg";
import galleryPhoto from "../../Header/img/gallery-orange.svg";
import "./gallery.css";
export default function Gallery({ id }) {
    const { titleBg } = useContext(MyContext);
    const [big_img1, setBig_img1] = useState("hide");
    const [big_img2, setBig_img2] = useState("hide");
    const [big_img3, setBig_img3] = useState("hide");
    const [big_img4, setBig_img4] = useState("hide");
    function selectImg1() {
        setBig_img2("hide");
        setBig_img3("hide");
        setBig_img4("hide");
        setBig_img1("big_img");
    }
    function selectImg2() {
        setBig_img1("hide");
        setBig_img3("hide");
        setBig_img4("hide");
        setBig_img2("big_img");
    }
    function selectImg3() {
        setBig_img1("hide");
        setBig_img2("hide");
        setBig_img4("hide");
        setBig_img3("big_img");
    }
    function selectImg4() {
        setBig_img1("hide");
        setBig_img2("hide");
        setBig_img3("hide");
        setBig_img4("big_img");
    }
    return (
        <div id={id}>
            <div className={titleBg + ' title'}>
                <img className="icon" src={galleryPhoto} alt="gallery icon" />
                تصاویر
            </div>
            <div className="small_img_div">
                <img src={img1} alt="narco restaurant" className='small_img' onClick={selectImg1} />
                <img src={img2} alt="narco restaurant" className='small_img' onClick={selectImg2} />
                <img src={img3} alt="narco food" className='small_img' onClick={selectImg3} />
                <img src={img4} alt="narco food" className='small_img' onClick={selectImg4} />
            </div>
            <div className="big_img_div">
                <img src={img1} alt="narco restaurant" className={big_img1} />
                <img src={img2} alt="narco restaurant" className={big_img2} />
                <img src={img3} alt="narco food" className={big_img3} />
                <img src={img4} alt="narco food" className={big_img4} />
            </div>
        </div >
    );
}