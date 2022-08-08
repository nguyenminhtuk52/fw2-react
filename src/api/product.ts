import instance from "./instance";


export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}
export const read = (id: any) => {
    const url = `/products/${id}`
    return instance.get(url)
}
export const createProduct = (data: any) => {
    const url = "/products"
    return instance.post(url, data)
}
export const updateProduct = (data: any, id: any) => {
    const url = `/products/${id}`
    return instance.put(url, data)
}
export const remove = (id: any) => {
    const url = `/products/${ id }`
    return instance.delete(url)
}
export const changeStatus = (id :any,data:any)=>{
    const url = `products/${id}`
    return instance.patch(url,data)
}