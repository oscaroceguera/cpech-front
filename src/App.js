import React, { useState } from 'react';
import axios from 'axios'
import logo from "./Imagen1-620x264.png"
import { TopBar, Form, Alerts } from "./App.styles";

const Input = ({title, placeholder, name, value, onChange}) => {
  return (
    <div>
      <label>
        {title} <span>*</span>
      </label>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

const initState = {
  name: '',
  phone: '',
  email: '',
  rut: ''
}

function App() {
  const [fields, setFields] = useState(initState)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  const [isSuccess, setIsSuccess] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target

    setFields({
      ...fields,
      [name]: value
    })
  }

  const onSave = async () => {
    setIsError(null)
    setIsLoading(true)
    setIsSuccess(null)
    try {
      const response = await axios.post('http://localhost:5000/api/students', fields)
      console.log("onSave -> algo", response.data)
      setIsLoading(false);
      setFields(initState);
      setIsSuccess({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
        rut: response.data.rut,
      });
    } catch (error) {
      setIsLoading(false);
      setIsError(error.response.data.message);
    }
  }

  return (
    <>
      <TopBar>
        <div className="container">
          <img src={logo} />
        </div>
      </TopBar>
      <Form>
        <div className="header">
          <h1 className="title">Curso de Verano +NEM</h1>
          <h4 className="subTitle">
            No dejes pasar esta increíble oportunidad. Inscríbete acá
          </h4>
        </div>
        <div className="fields">
          <Input
            title="Nombre"
            placeholder="Ej. Jorge Canseco"
            name="name"
            onChange={handleChange}
            value={fields["name"]}
          />
          <Input
            title="Teléfono"
            placeholder="Ej. +567 2323 5432"
            name="phone"
            onChange={handleChange}
            value={fields["phone"]}
          />
          <Input
            title="Correo"
            placeholder="Ej. correo@gmail.com"
            name="email"
            onChange={handleChange}
            value={fields["email"]}
          />
          <Input
            title="RUT"
            placeholder="Ej. 26.23443.3234-1"
            name="rut"
            onChange={handleChange}
            value={fields["rut"]}
          />
        </div>
        <div className="btn-container">
          <button type="button" onClick={onSave}>
            Inscribirse
          </button>
        </div>
      </Form>
      <Alerts>
        {isLoading && <p>Guardando ....</p>}
        {isError && <p>{isError}</p>}
        {isSuccess && (
          <p>{isSuccess.name} te has subscrito al curso de verano!</p>
        )}
      </Alerts>
    </>
  );
}

export default App;
