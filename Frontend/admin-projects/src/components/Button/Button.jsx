import styles from './Button.module.css';

export function Button({label, onSelect }) {
    
    return <button className={styles.button} onClick={onSelect}>{label}</button>;
}