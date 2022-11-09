import React from 'react'
import logo from "../assets/logos/logo_yard_sale.svg"
import { Button } from '../components/Button'
function CreateNewPassword() {
   return (
      <div className="create-password">
         <div className="form-container">
            <img src={logo} alt="logo" className="logo" />

            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>

            <form action="/" className="form">
               <label for="password" className="label">Password</label>
               <input type="password" id="password" placeholder="*********" className="input input-password" />

               <label for="reenter-password" className="label">Re-enter Password</label>
               <input type="password" id="reenter-password" placeholder="*********" className="input input-password" />

               <Button
                  name={'Confirm'}
                  classAtributes={'primary-button confirm-button'}
               />
            </form>
         </div>
      </div>
   )
}

export { CreateNewPassword }