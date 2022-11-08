import React from 'react'

function Button({ name, classAtributes }) {
   return (
      <button
         className={classAtributes}
         type='submit'
         onClick={(e) => e.preventDefault()}
      >
         {name}
      </button>
   )
}

export { Button }