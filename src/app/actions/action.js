import {deleteData,submitData,updateData,viewData, decodeData} from '../utils/constant'


export const submitUser = (user) => {
    const {id,...otherData} = user
    return {
        type:submitData,
        payload: {...otherData,id:Math.random().toString()}
    }
}

export const deleteUser = (id) => {
    return {
        type:deleteData,
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

export const decodeUser = (data) => {
    return {
        type: decodeData,
        payload: data
    }
}

