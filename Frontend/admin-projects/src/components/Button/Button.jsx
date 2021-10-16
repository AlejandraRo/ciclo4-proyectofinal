import styles from './Button.module.css';

export function Button({label}) {
    return <button className={styles.button}>{label}</button>;
}