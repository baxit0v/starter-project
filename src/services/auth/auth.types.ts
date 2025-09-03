
export type IUser = {
    id: number
    phone: string
    role: {
        id: number
        name: 'employee' | 'hr' | 'director'
    }
    token: string
}

export type ILoginForm = {
    phone: string
    password: string
}