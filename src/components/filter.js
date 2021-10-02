import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, updateUser, submitUser, sortingData, unSortData } from '../app/actions/action'

const useFilter = () => {
  
  const initialUser = {
    name: '',
    email: '',
    password: '',
    cPassword: '',
    filterData:'',
    filter:[],
    isLoggedRemember: false
  }

  const users = useSelector(state => state?.userList?.users);
  
  const dispatch = useDispatch()
  const [user, setUser] = useState(initialUser)
  const [toggle, setToggle] = useState(false)

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

  const mergeFunc = () => {
    setToggle(prev=>!prev);
    if(toggle){
      // eslint-disable-next-line no-mixed-operators
      users.sort((a, b) => a.name > b.name && 1 || -1)
      dispatch(sortingData(users))
    }
    else{
      // eslint-disable-next-line no-mixed-operators
      users.sort((a, b) => a.name < b.name && 1 || -1)
      dispatch(unSortData(users))
    }
  }

    return [{user, users,flexBox, initialUser, setUser, dispatch, submitUser,handleChange,mergeFunc,deleteUser,updateUser}]
}

export default useFilter
