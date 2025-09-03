import { useQuery } from "@tanstack/react-query";
import type { IParams } from "../service.types";
import { CategoryService } from "./category.service";

export const useGetAllCategory = (params: IParams) => {
    return useQuery({
        queryKey: ['category', ...Object.values(params)],
        queryFn: () => CategoryService.getAll(params),
        staleTime: Infinity,
    })
}

export const useGetByIdCategory = (id: number | string) => {
    return useQuery({
        queryKey: ['category', id],
        queryFn: () => CategoryService.getById(id),
        staleTime: Infinity,
    })
}