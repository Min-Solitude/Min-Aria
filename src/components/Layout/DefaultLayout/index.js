import classNames from "classnames/bind";
import Header from "@/components/Layout/components/Header";
import styles from "./DefaultLayout.module.scss";
import Footer from "@/components/Layout/components/Footer";
const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
    return (
        <div className={cx("warpper")}>
            <Header />
            <div className={cx("content")}>{children}</div>
            <Footer />
        </div>
    );
}
