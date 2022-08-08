import instance from "./instance";


export const getAllUsers = () => {
    const url = "/users"
    return instance.get(url)
}
export const readUsers = (id: any) => {
    const url = `/users/${id}`
    return instance.get(url)
}
export const removeUsers = (id: any) => {
    const url = `/users/${ id }`
    return instance.delete(url)
}
export const readUser = (id: any) => {
    const url = `/users/${id}`
    return instance.get(url)
}
export const updateUser = (data: any, id: any) => {
    const url = `/users/${id}`
    return instance.put(url, data)
}
export const login = (values:any) =>{
    const url = `signin`
    return instance.post(url,values)
}
export const register = (values:any) =>{
    const url = `register`
    return instance.post(url,values)
}