import Status from "../Status/Status";

const Tbody = ({customer}) => {
    return (
        <tbody>
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