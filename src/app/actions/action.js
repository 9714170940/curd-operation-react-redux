import {deleteData,submitData,updateData, sortData, unSortingData, filteringData} from '../utils/constant'


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

export const sortingData = (data) => {
    return {
        type:sortData,
        payload:data
    }
}

export const unSortData = (data) => {
    return {
        type:unSortingData,
        payload:data
    }
}

export const filterData = (data) => {
    return {
        type:filteringData,
        payload:data
    }
}
