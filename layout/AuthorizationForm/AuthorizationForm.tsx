import React, { useState, useEffect } from "react";
import { Htag } from "../../components/Htag";
import { Ptag } from "../../components/Ptag";
import { Button } from "../../components/Button";
import styles from './AuthorizationForm.module.scss';

export const AuthorizationForm = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
  const [nameInput, setNameInput] = useState<boolean>(false);
  const [passInput, setPassInput] = useState<boolean>(false);

  const errorMessage = 'Length must be more 3 characters';

  useEffect(() => {
    (username.length > 3 && password.length > 3) ?
      setDisabledBtn(false) : setDisabledBtn(true);

    setNameInput(checkInput(username));
    setPassInput(checkInput(password));
  }, [username, password]);

  function checkInput(state: string): boolean {
    return (state.length >= 1 && state.length <= 3) ? true : false;
  }

  function formCleaning() {
    if (!disabledBtn) {
      setUsername('');
      setPassword('');
    }
  }

  return (
    <div className={styles.authorizationForm}>
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.descriptionWrapper}>
            <Htag tag="h3">
              Get started today!
            </Htag>

            <Ptag size='large'>
              Learn more about how you can save our planet&apos;s nature.
              From smart consumption to switching to renewable energy,
              each of us can do our part to save the planet.
            </Ptag>
          </div>
          <div className={styles.formWrapper}>
            <Htag tag="h5">Log in</Htag>

            <form 
              className={styles.form}
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input 
                type="text" 
                name="username" 
                placeholder="User Name" 
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              {nameInput && (
                <span className={`${styles.span} ${styles.spanName}`}>
                  {errorMessage}
                </span>
              )}

              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {passInput && (
                <span className={`${styles.span} ${styles.spanPass}`}>
                  {errorMessage}
                </span>
              )}

              <Button
                type="submit"
                appearance="colored"
                disabled={disabledBtn}
                onClick={formCleaning}
              >
                Book a demo
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
