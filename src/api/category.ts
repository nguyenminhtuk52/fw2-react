import instance from "./instance";


export const getAllCate = () => {
    const url = "/category"
    return instance.get(url)
}
export const readCate = (id: any) => {
    const url = `/category/${id}`
    return instance.get(url)
}
export const createCate = (data: any) => {
    const url = "/category"
    return instance.post(url, data)
}
export const updateCate = (data: any, id: any) => {
    const url = `/category/${id}`
    return instance.put(url, data)
}
export const removeCate = (id: any) => {
    const url = `/category/${ id }`
    return instance.delete(url)
}
export const getProductByCate = (id:any) =>{
    const url = `/category/${id}?_embed=products`
    return instance.get(url)
}