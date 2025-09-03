import { $authHost } from "@/api"
import type { IParams, IResponseData, IResponseSingleData } from "../service.types"
import type { ICategory, ICategoryForm } from "./category.types"

export const CategoryService = {
    getAll: async (params: IParams) => {
        const res = await $authHost.get<IResponseData<ICategory>>('/category', { params })
        return res.data
    },
    getById: async (id: number | string) => {
        const res = await $authHost.get<IResponseSingleData<ICategory>>(`/category/${id}`)
        return res.data
    },
    create: async (formData: ICategoryForm) => {
        const res = await $authHost.post<IResponseSingleData<ICategory>>('/category', formData)
        return res.data
    },
    update: async (formData: ICategory) => {
        const {id, ...data} = formData
        const res = await $authHost.put<IResponseSingleData<ICategory>>(`/category/${id}`, data)
        return res.data
    },
    delete: async (id: number | string) => {
        const res = await $authHost.delete(`/category/${id}`)
        return res.data
    },
}