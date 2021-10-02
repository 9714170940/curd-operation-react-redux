import React from 'react'
import useFilter from '../components/filter'
import {Form,Table,Button} from 'react-bootstrap'


const Filter = () => {

    const [{user,users,initialUser,setUser,mergeFunc,dispatch,deleteUser,updateUser}] = useFilter()

    return (
        <>
         <Form.Group className='my-3'>
          <Form.Control placeholder='Filtering' name='filterData' value={user.filterData}
          onChange={(e)=>{
            const {value} = e.target
            const filter = [...users].filter(data=>data.name===value||
            [...data.name].join('').toLowerCase().includes(value)||
            [...data.name].join('').toUpperCase().includes(value)||
            String(data.name).indexOf(value) !== -1);
            setUser({...user,filter,filterData:value})
          }} />
        </Form.Group>
      {users.length > 0 ? <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th onClick={()=>mergeFunc()}>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Login Remember</th>
          </tr>
        </thead>
        <tbody>
          {
            !user.filterData?(users.map((data, i) => {
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
            })):(user.filter.map((data, i) => {
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
            }))
          }
        </tbody>
      </Table>
      </> : null} 
        </>
    )
}

export default Filter
