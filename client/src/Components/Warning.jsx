import React from 'react'

const Warning = () => {
  return (
    <div class="d-flex justify-content-center">
        <div class="alert alert-danger" role="alert" style={{maxWidth:"700px", maxHeight:"200px"}}>
        <h4 class="alert-heading">¡Aviso!</h4>
        <p>No abrimos hoy</p>
        <hr/>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
    </div>
  )
}

export default Warning
