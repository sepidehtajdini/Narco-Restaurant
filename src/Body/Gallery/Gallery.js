import { useContext, useState } from "react";
import MyContext from "../../MyContext";
import img1 from "../../img/photos/img1.jpeg";
import img2 from "../../img/photos/img2.jpg";
import img3 from "../../img/photos/img3.jpg";
import img4 from "../../img/photos/img4.jpeg";
import galleryPhoto from "../../img/svgs/gallery-orange.svg";
import "./gallery.css";
export default function Gallery({ id }) {
    const { titleBg } = useContext(MyContext);
    const [bigImg, setBigImg] = useState("hide");

    return (
        <div id={id}>
            <div className={titleBg + ' title'}>
                <img className="icon" src={galleryPhoto} alt="gallery icon" />
                تصاویر
            </div>
            <div className="small_img_div">
                <img
                    src={img1}
                    alt="narco restaurant"
                    className='small_img'
                    onClick={() => setBigImg("big_img_div big_img1")} />
                <img
                    src={img2}
                    alt="narco restaurant"
                    className='small_img'
                    onClick={() => setBigImg("big_img_div big_img2")} />
                <img
                    src={img3}
                    alt="narco food"
                    className='small_img'
                    onClick={() => setBigImg("big_img_div big_img3")} />
                <img
                    src={img4}
                    alt="narco food"
                    className='small_img'
                    onClick={() => setBigImg("big_img_div big_img4")} />
            </div>
            <div className={bigImg} />
        </div >
    );
}