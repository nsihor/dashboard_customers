import Status from "../Status/Status";
import styles from "./styles.module.scss"

const Tbody = ({customer}) => {
    return (
        <tbody className={styles.tbody}>
            <tr>
                <td>{customer.name}</td>
                <td>{customer.company}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.email}</td>
                <td>{customer.country}</td>
                <td><Status isActive={customer.status}/></td>
            </tr>
        </tbody>
    )
}

export default Tbody;