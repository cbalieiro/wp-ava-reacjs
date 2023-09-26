import React, {useState} from 'react'

function DefaultPage() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
      });
  return (
    <div>DefaultPage</div>
  )
}

export default DefaultPage