import {deleteData,submitData,updateData,viewData} from '../utils/constant'


export const submitUser = (user) => {
    return {
        type:submitData,
        payload: {...user,id:Math.random().toString()}
    }
}

export const deleteUser = (id) => {
    return {
        type:deleteData,
        id: id
    }
}
export const viewUser = (id) => {
    return {
        type:viewData,
        id: id
    }
}

export const updateUser = (id,updateUser) => {
    return {
        type:updateData,
        id: id,
        payload:updateUser
    }
}

