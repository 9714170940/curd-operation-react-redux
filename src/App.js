import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap'
import useFilter from './components/filter';
import { NavLink } from 'react-router-dom';


const App = () => {

  const [{user,flexBox, initialUser,setUser, dispatch, submitUser, handleChange}] = useFilter();

  return (
    <Container style={flexBox} >
      <Form style={{ width: '400px' }} onSubmit={(e) => {
        const {filterData,filter,...auth} = user
        e.preventDefault()
        dispatch(submitUser(auth))
        setUser(initialUser)
      }} >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" required placeholder="Ronak Kapadi"
            name='name' value={user.name} onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" required placeholder="ronak@gmail.com"
            name='email' value={user.email} onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" required placeholder="Password"
            name='password' value={user.password} onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" required placeholder="Password"
            name='cPassword' value={user.cPassword} onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me"
            onChange={(e)=>setUser({...user,isLoggedRemember: !user.isLoggedRemember})} checked={user.isLoggedRemember} value={user.isLoggedRemember}
          />
        </Form.Group>
        <Button style={{ width: '100%' }} type="submit" variant="primary">
          SignUp
        </Button>
      </Form>
      <NavLink to='/users'>Users Lists</NavLink>
    </Container>

  )
}

export default App
