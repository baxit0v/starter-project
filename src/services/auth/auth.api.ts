import { useQuery } from "@tanstack/react-query"
import { AuthService } from "./auth.service"


export const useGetProfile = () => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: () => AuthService.profile(),
        staleTime: Infinity,
    })
}