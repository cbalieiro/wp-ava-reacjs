import React from 'react'
import ContainerInput from '../molecules/ContainerInput'

function DefaultForm(props) {
  return (
    <React.Fragment>
    <h2>Formulário em React</h2>
    <form onSubmit={" AÇÃO = MÉTODO / FUNÇÃO"}>
    <ContainerInput/> 
    <ContainerInput/>
    <ContainerInput/>
    </form>
    </React.Fragment>
  )
}

export default DefaultForm