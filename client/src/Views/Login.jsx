import React, { useState } from 'react';
import styles from '../Style/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleBirthDateChange = (e) => setBirthDate(e.target.value);

  const handleCreateAccount = () => {
    // Logic to handle account creation
    console.log('Creating account...');
  };

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
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            className={`${styles.formControl} ${styles.item}`}
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            className={`${styles.formControl} ${styles.item}`}
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            className={`${styles.formControl} ${styles.item}`}
            id="phone-number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            className={`${styles.formControl} ${styles.item}`}
            id="birth-date"
            placeholder="Birth Date"
            value={birthDate}
            onChange={handleBirthDateChange}
          />
        </div>
        <div className={styles.formGroup}>
          <button
            type="button"
            className={`btn btn-block ${styles.createAccount}`}
            onClick={handleCreateAccount}
          >
            Create Account
          </button>
        </div>
      </form>
      <div className={styles.socialMedia}>
        <h5>Sign up with social media</h5>
        <div className={styles.socialIcons}>
          <a href="#"><i className="icon-social-facebook" title="Facebook"></i></a>
          <a href="#"><i className="icon-social-google" title="Google"></i></a>
          <a href="#"><i className="icon-social-twitter" title="Twitter"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Login;
