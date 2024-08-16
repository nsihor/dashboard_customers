import {Link} from "react-router-dom";
import logo from "../../../src/images/svg/logo.svg"
import styles from "./styles.module.scss"

const Title = () => {
    return (
        <Link className={styles.title} to='/'>
            <svg className={styles.title__svg} viewBox="0 0 37 37">
                <use xlinkHref={`${logo}#logo`}></use>
            </svg>
            <h1 className={styles.title__text}>Dashboard
                <span className={styles.title__v}> v.01</span>
            </h1>
        </Link>
    )
}

export default Title;