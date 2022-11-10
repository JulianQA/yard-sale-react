import React, { useRef } from 'react'
import { Button } from '../components/Button';
function Login() {
   const form = useRef(null);
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(form.current);
      const data = {
         username: formData.get('email'),
         password: formData.get('password')
      }
      console.log(data);
   }
   return (
      <div className='login'>
         <div className="login__container">
            <form
               className='login__form'
               ref={form}
            // onSubmit={handleFormSubmit}
            >
               <label htmlFor="email" className="label login-form__email-label">
                  Email Adress
               </label>
               <input
                  type="email"
                  id="email"
                  name='email'
                  className='input login-form__email-input'
               />

               <label htmlFor="password" className="label login-form__password-label">
                  Password
               </label>
               <input
                  type="password"
                  id="password"
                  name='password'
                  className='input login-form__password-input' />

               <Button
                  name={'Log in'}
                  classAtributes={'primary-button login-form__submit-button'}
                  click={handleFormSubmit}
               />
               {/* <a href="#">Forgot my password</a> */}
               <p>Forgot my password</p>
            </form>

            {/* <a href="#">Sign up</a> */}
            <Button
               name={'Sign up'}
               classAtributes={'secondary-button'}
            />
         </div>
      </div>
   );
}

export { Login }