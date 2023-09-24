import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './../css/login.css';
import axios from 'axios'
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationError, setValidationError] = useState({})
    const navigate = useNavigate();
    
    const loginUser = async (e) => { 
        e.preventDefault();
        const formData = new FormData()
        
        formData.append('email', email)
        formData.append('password', password)
        
        await axios.post(`http://localhost:8000/api/login`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate('/ceb');
    }).catch(({response})=>{
        if(response.status===422){
          setValidationError(response.data.errors)
        }else{
          Swal.fire({
            text:response.data.message,
            icon:"error"
          })
        }
      })
    }
  return (
    <div className='container-fluid login-full-wrap'>
        <div className="container login-wrap border w-50 p-4 rounded">
        <Form onSubmit={loginUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => {
                          setEmail(event.target.value)
                      }} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => {
                          setPassword(event.target.value)
                      }} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </div>
    </div>
  )
}
