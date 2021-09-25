import {deleteData,submitData,updateData,viewData} from '../utils/constant'

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
            state.users[action.id] = action.payload
            return state
        default : return state
    }
}

