import styles from "./styles.module.scss"

const PageTitle = ({page, addText}) => {
    return (
        <div className={styles.title}>
            <h3>{page}</h3>
            {addText && <span className={styles.title__addText}>{addText}</span>}
        </div>
    )
}

export default PageTitle;