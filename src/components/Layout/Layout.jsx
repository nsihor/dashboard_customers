import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import styles from "./styles.module.scss"

const Layout = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => window.innerWidth >= 992 ? setIsMobile(false) : setIsMobile(true);
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.container}>
            {isMobile ? <Header/> : <Aside/>}
            <Outlet />
        </div>
    )
}

export default Layout;