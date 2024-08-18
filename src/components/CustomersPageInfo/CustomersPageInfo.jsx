import styles from "./styles.module.scss"

const CustomersPageInfo = ({from, to, overall}) => {
    return (
        <p className={styles.info}>Showing data {from} to {to} of  {overall} entries</p>
    )
}

export default CustomersPageInfo;