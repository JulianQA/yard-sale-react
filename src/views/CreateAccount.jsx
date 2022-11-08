import React from 'react'
import { Button } from '../components/Button'
function CreateAccount() {
   return (
      <div className="myaccount">
         <div className="myaccount__form-container">
            <h1 className="form-container__title">My account</h1>

            <form action="/" className="form">
               <label for="name" className="form__label">Name</label>
               <input type="text" id="name" placeholder="Your Name" className="form__input-name" />

               <label for="email-adress" className="form__label">Email adress</label>
               <input type="email" id="email-adress" placeholder="email@example.com" className="form__input-emailAdress" />

               <label for="password" className="form__label">Password</label>
               <input type="password" id="password" placeholder="**********" className="form__input-password" />
            </form>
            <Button
               name={'Create'}
               classAtributes={'primary-button create-button'}
            />
         </div>
      </div>
   )
}

export { CreateAccount }