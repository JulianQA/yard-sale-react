import React from 'react'
import { Button } from '../components/Button'
function Account() {
   return (
      <div className="editAccount">
         <div className="form-container">
            <h1 className="title">My account</h1>

            <form className="form">
               <label for="name" className="label">Name</label>
               <p className="value">Camila Yokoo</p>

               <label for="email-adress" className="label">Email adress</label>
               <p className="value">camilayokoo@gmail.com</p>

               <label for="password" className="label">Password</label>
               <p className="value">*********</p>
            </form>


            <Button
               name={'Edit'}
               classAtributes={'secondary-button edit-button'}
            />
         </div>
      </div>
   )
}

export { Account }