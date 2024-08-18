import styles from "./styles.module.scss"

const PaginationBtn = ({p, handleChangePage, countOfPages, currentPage}) => {
    const btnStyle = p === currentPage ? styles.btn_active : styles.btn_inactive;

    const ChangePage = () => {
        if (p === '<') {
            if (currentPage <= 1) {
                return null;
            } else {
                handleChangePage(cp => cp - 1);
            }
        } else if (p === '>') {
            if (currentPage >= countOfPages) {
                return null;
            } else {
                handleChangePage(cp => cp + 1);
            }
        } else {
            handleChangePage(p);
        }
    }

    return (
        <button className={btnStyle} onClick={ChangePage}>{p}</button>
    )
}

export default PaginationBtn;