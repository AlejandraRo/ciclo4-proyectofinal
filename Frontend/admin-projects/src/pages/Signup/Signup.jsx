import styles from './Signup.module.css';
import UserRegister from '../../components/UseRegister/UserRegister';

export function Signup() {

  return (
    <div className={styles.container}> 
      <UserRegister></UserRegister>
    </div>
  )
}
