import styles from "./styles.module.scss";

const HelloWorld = () => {
    return (
        <div className={styles.helloStyle}>
            <div className={styles["less-module"]}>
                less module
            </div>
        </div>
    )
}


export default HelloWorld;