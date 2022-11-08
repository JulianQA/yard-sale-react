import React from 'react'
import { Button } from '../components/Button'
function SendEmail() {
   return (
      <div className="send-email">
         <div className="send-email__layout">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="layout__logo" />

            <h1 className="layout__title">Email has been sent</h1>
            <p className="layout__subtitle">Please check your inbox for instructions on how to reset the password</p>

            <div className="layout__icon-email">
               <img src="./icons/email.svg" alt="iconEmail" />
            </div>

            <Button
               name={'Login'}
               classAtributes={'primary-button confirm-button'}
            />
            <p className="send-email__resend">
               <span>Didn't receive the email?</span>
               <a href="/">Resend</a>
            </p>
         </div>
      </div>
   )
}

export { SendEmail }