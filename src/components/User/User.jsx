import styles from "./styles.module.scss"

const User = ({user}) => {
    return (
        <div className={styles.user}>
            <img className={styles.user__photo} src={user.photo} alt="user"/>
            <div className={styles.user__info}>
                <span className={styles.user__info__name}>{user.name}</span>
                <span className={styles.user__info__role}>{user.role}</span>
            </div>
        </div>
    )
}

export default User;