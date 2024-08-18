import styles from "./styles.module.scss"

const PaginationBtn = ({t, isActive = false}) => {
    const btnStyle = isActive ? styles.btn_active : styles.btn_inactive

    return (
        <button className={btnStyle}>{t}</button>
    )
}

export default PaginationBtn;