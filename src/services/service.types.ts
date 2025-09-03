export type IPagination = {
    count: number
    next: string | null
    previous: string | null
}

export type IResponseData<T> = {
    data: T[]
    pagination: IPagination
}

export type IResponseSingleData<T> = {
    data: T
}

export type IParams = {
    id?: string | number
    page?: number
    limit?: number
}
