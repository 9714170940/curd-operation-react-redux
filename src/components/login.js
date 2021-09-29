import { useDispatch } from 'react-redux';
import { decodeUser } from '../app/actions/action';

const useLogin = () => {

    const dispatch = useDispatch()
    const googleResponse = (response) => {
        if(response !== undefined){
           dispatch(decodeUser(response.tokenId))
        }else{
            dispatch(decodeUser(''))
        }
    }

    return [{googleResponse}]
}

export default useLogin
