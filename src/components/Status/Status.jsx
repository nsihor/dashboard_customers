import styles from "./styles.module.scss"
import clsx from "clsx";

const Status = ({isActive}) => {
    const statusStyle = isActive ? styles.status_active : styles.status_inactive;

    return (
        <div className={clsx(styles.status, statusStyle)}>
            <span className={styles.status__text}>
                {isActive ? 'Active' : 'Inactive'}
            </span>
        </div>
    )
}

export default Status;