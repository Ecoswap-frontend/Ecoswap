import React, { useContext } from 'react'
import { userContext } from '../../Components/Context';
import styles from "./SignUpLogin.module.css"

 const SignUpLogin = () => {
    const {name} = useContext(userContext)
  return (
    <>
        <div className={styles.container}>welcome</div>
    </>
  )
}

export default SignUpLogin;