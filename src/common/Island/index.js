import React from 'react';
import styles from './Island.css';

const Island = ({ children }) => (
        <div className={styles.root}>
            {children}
        </div>
    );



export default Island;
