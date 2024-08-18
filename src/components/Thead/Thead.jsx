import styles from "./styles.module.scss"

const Thead = () => {
    return (
        <thead className={styles.thead}>
            <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
            </tr>
        </thead>
    )
}

export default Thead;