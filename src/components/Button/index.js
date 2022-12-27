import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

export default function Button({
    to,
    href,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    primary = false,
    outline = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = "button";
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }

    const classes = cx("wrapper", { primary, outline, small, large, text, disabled, rounded });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}
