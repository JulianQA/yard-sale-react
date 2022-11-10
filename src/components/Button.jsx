import React from 'react'

function Button({ name, classAtributes, click }) {
   return (
      <button
         className={classAtributes}
         type='submit'
         onClick={(e) => click && click(e)}
      // onClick={(e) => e.preventDefault()}
      >
         {name}
      </button>
   )
}

export { Button }