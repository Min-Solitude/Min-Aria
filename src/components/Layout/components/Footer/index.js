import classNames from "classnames/bind";
import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Button from "@/components/Button";

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("firstContent")}>
                <p>
                    All album artwork and metadata featured on this page is the copyright of the respective arists and
                    no endorsement is implied. The logos and icons for all third-party apps and services are the
                    trademarks of their respective companies.
                </p>
            </div>
            <div className={cx("secondContent")}>
                <div className={cx("infomation")}>
                    <p>
                        Made by Replay, a studio making simple apps for your Mac, brought to you by Alasdair Monk &
                        Hector Simpson.
                    </p>
                </div>
                <div className={cx("socialNetWork")}>
                    <Button outline href="https://www.facebook.com/kien.mon.33/">
                        <FontAwesomeIcon icon={faFacebook} className={cx("icon")} />
                    </Button>
                    <Button outline href="https://www.instagram.com/ktys4tt/">
                        <FontAwesomeIcon icon={faInstagram} className={cx("icon")} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
