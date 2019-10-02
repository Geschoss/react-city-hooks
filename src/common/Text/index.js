import React from 'react';
import styles from './Text.module.css';
import log from '../../utils/log';

const Text = ({ text }) => {
    log(`render Text with: ${text}`);

    return <div className={styles.root}>{text}</div>;
};

export default Text;
