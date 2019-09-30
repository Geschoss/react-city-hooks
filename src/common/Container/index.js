import React from "react";
import styles from "./Container.module.css";

const Container = ({ children }) => {
    return (
        <>
            <div className={styles.header}>React hooks</div>
            <div className={styles.container}>
                {children}
            </div>
        </>
    );
};

export default Container;
