import React from 'react'
import { Button } from '../components/Button';
function Login() {
   return (
      <>
         <div className='login'>
            <div className="login__container">
               <form className='login__form'>
                  <label htmlFor="email" className="label login-form__email-label">
                     Email Adress
                  </label>
                  <input type="email" id="email" className='input login-form__email-input' />

                  <label htmlFor="password" className="label login-form__password-label">
                     Password
                  </label>
                  <input type="password" id="password" className='input login-form__password-input' />

                  <Button
                     name={'Log in'}
                     classAtributes={'primary-button login-form__submit-button'}
                  />
                  {/* <a href="#">Forgot my password</a> */}
                  <p>Forgot my password</p>
               </form>

               {/* <a href="#">Sign up</a> */}
               <p>Sign up</p>
            </div>
         </div>
      </>
   );
}

export { Login }