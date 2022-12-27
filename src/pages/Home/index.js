import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Button from "@/components/Button";
import { iconProjects, images } from "@/assets";

const cx = classNames.bind(styles);

export default function Home() {
    // let banner = document.getElementById("banner");
    // let count = 50;
    // for (var i = 0; i < count; i++) {
    //     let leftSnow = Math.floor(Math.random() * banner.clientWidth);
    //     let topSnow = Math.floor(Math.random() * banner.clientHeight);
    //     let widthSnow = Math.floor(Math.random() * 50);
    //     let timeSnow = Math.floor(Math.random() * 5 + 5);
    //     let blurSnow = Math.floor(Math.random() * 20);
    //     let div = document.createElement("div");
    //     div.classList.add("snow");
    //     div.style.left = leftSnow + "px";
    //     div.style.top = topSnow + "px";
    //     div.style.width = widthSnow + "px";
    //     div.style.height = widthSnow + "px";
    //     div.style.animationDuration = timeSnow + "s";
    //     div.style.filter = "blur(" + blurSnow + "px)";
    //     banner.appendChild(div);
    // }
    return (
        <div className={cx("container")}>
            <div className={cx("banner")} id="banner">
                <div className={cx("content")}>
                    <h1>
                        Explore the life you want to live. <br />
                        Put your money to work
                    </h1>
                    <Button primary>Get in Touch</Button>
                </div>
                {/* <div className={cx("snow")}></div> */}
            </div>
            <section className={cx("firstHomeContent")}>
                <div className={cx("title")}>
                    <h2>Black Advantage</h2>
                </div>
                <div className={cx("content")}>
                    <div className={cx("item")}>
                        <img className={cx("icon")} src={iconProjects.world} alt="world" />
                        <h3>Financical Expertixe</h3>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old
                        </p>
                    </div>
                    <div className={cx("item")}>
                        <img className={cx("icon")} src={iconProjects.cup} alt="cup" />
                        <h3>Financical Expertixe</h3>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old
                        </p>
                    </div>
                    <div className={cx("item")}>
                        <img className={cx("icon")} src={iconProjects.education} alt="cell Phone" />
                        <h3>Financical Expertixe</h3>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old
                        </p>
                    </div>
                </div>
            </section>
            <section className={cx("secondContentHome")}>
                <div className={cx("content")}>
                    <div className={cx("card")}>
                        <h4 className={cx("title")}>ANALYSIS OF YOUR WEALTH</h4>
                        <h3>
                            Helping you contents the dots. So you can see what life could look like into the future.
                        </h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.
                        </p>
                        <div className={cx("item")}>
                            <img src={images.character} alt="character" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
