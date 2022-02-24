import axios from 'axios';


const url='http://localhost:3003/users';

export const getUsers=async()=>{
    return await axios.get(url);
}

export const Adduser=async(user)=>{
    return await axios.post(url,user);
}

export const Edit=async(id)=>{
    return ( await axios.get(`${url}/${id}`)
    )
}

export const userUpdate=async (id,user)=>{
    return await axios.put(`${url}/${id}`,user)
}

export const deleteUser=async(id)=>{
    return await axios.delete(`${url}/${id}`)
}