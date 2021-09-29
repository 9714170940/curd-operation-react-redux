import {deleteData,submitData,updateData,viewData,decodeData} from '../utils/constant'

let initialState = {
    users:[]
}

export const userList = (state = initialState,action) => {
    switch(action.type){
        case submitData :
            return {
                ...state,
                users: [...state.users,action.payload]
            }
            case deleteData:

            let cloneUsers = state.users.filter(user => user.id !== action.id)
            return {
                ...state,
                users:[...cloneUsers]
            }
        case viewData:
            return {
                ...state,
                view: state.users[action.id]
            }
        case updateData:
            if(!Object.values(action.payload).includes('')){
                state.users[action.id] = action.payload
                return state
            }else{alert("Please fill in the data")}
            return state
        case decodeData:
            return{
                ...state,
                oAuth: action.payload,
            }
        default : return state
    }
}

