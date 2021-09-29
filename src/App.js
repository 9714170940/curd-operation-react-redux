import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, updateUser, submitUser } from './app/actions/action'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Table } from 'react-bootstrap'


const App = () => {

  const initialUser = {
    name: '',
    email: '',
    password: '',
    cPassword: '',
    isLoggedRemember: false
  }

  const users = useSelector(state => state?.userList?.users);

  
  const dispatch = useDispatch()
  const [user, setUser] = useState(initialUser)

  const flexBox = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  return (
    <Container style={flexBox} >
      <Form style={{ width: '400px' }} onSubmit={(e) => {
        e.preventDefault()
        dispatch(submitUser(user))
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
      {users.length > 0 ? <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Login Remember</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((data, i) => {
              return (
                <tr key={i} >
                  <td>{i+1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>{data.isLoggedRemember? 'true':'false'}</td>
                  <td><Button variant='danger' onClick={()=>dispatch(deleteUser(data.id))} >Delete</Button></td>
                  <td><Button variant='primary' onClick={()=>setUser(data)} >View</Button></td>
                  <td><Button variant='warning' onClick={()=>dispatch(updateUser(i,user),setUser(initialUser))} >Update</Button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table> : null}
    </Container>

  )
}

export default App
