import React from 'react'
import styles from '../Style/SignUp.module.css';
const SignUp = () => {
  return (
    <div className={styles.registrationForm}>
        <form className={styles.form}>
            <div className={styles.formIcon}>
                <span><i className="icon icon-user"></i></span>
            </div>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    className={`${styles.formControl} ${styles.item}`}
                    placeholder="Username"
                />
            </div>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    className={`${styles.formControl} ${styles.item}`}
                    placeholder="Email"
                />
            </div>
            <div className={styles.formGroup}>
                <input
                    type="password"
                    className={`${styles.formControl} ${styles.item}`}
                    placeholder="Password"
                />
            </div>
            <div className={styles.formGroup}>
                <input
                    type="password"
                    className={`${styles.formControl} ${styles.item}`}
                    placeholder="Password"
                />
            </div>
            <div className={styles.formGroup}>
            <input
                type="text"
                className={`${styles.formControl} ${styles.item}`}
                placeholder="Phone Number"
            />
            </div>
            <div className={styles.formGroup}>
            <button
                type="button"
                className={`btn btn-block ${styles.createAccount}`}
            >
                Create Account
            </button>
            </div>
        </form>
{/*       <div className={styles.socialMedia}>
        <h5>Sign up with social media</h5>
        <div className={styles.socialIcons}>
          <a href="#"><i className="icon-social-facebook" title="Facebook"></i></a>
          <a href="#"><i className="icon-social-google" title="Google"></i></a>
          <a href="#"><i className="icon-social-twitter" title="Twitter"></i></a>
        </div>
      </div> */}
    </div>
  )
}

export default SignUp
