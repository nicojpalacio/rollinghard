import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import Tablahardware from "../Components/Tablahardware";
import { guardarEnLocalStorage } from "../Utils/localStorage";



export default function Admin({hardwares , setHardwares}) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({ titulo: '', imagen: '', description:'' })
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (form.checkValidity() === true) {
      const nuevohardware = [...hardwares, input];
      setHardwares(nuevohardware)
      guardarEnLocalStorage({key:'hardwares' , value:nuevohardware})
    }

  };
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name
    setInput({...input, [name]: value})
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 flex-column">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              required
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Titulo"
              name= 'titulo'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              required
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Url"
              name= 'imagen'
            />
            
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              required
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Descipcion"
              name= 'description'
            />
            
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <Button type='submit' className="btn btn-primary">Submit</Button>
      </Form>
      <Tablahardware hardwares={hardwares}/>        
    </>
  );
}
