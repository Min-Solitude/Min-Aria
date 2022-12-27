import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* Menu  */}
                <input type="checkbox" id="menuMobile" />
                <label for="menuMobile" className={cx("menuChild")}>
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <div className={cx("menu")}>
                    <Button text to="./">
                        Home
                    </Button>
                    <Button text to="./about">
                        About
                    </Button>
                    <Button text to="./following">
                        Stories
                    </Button>
                    <Button text to="./following">
                        Help
                    </Button>
                </div>
                <Button rounded>Login</Button>
            </div>
        </header>
    );
}
