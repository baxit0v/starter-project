
import { NotFound } from "@/layout"
import { routeTree } from "@/routeTree.gen"
import { useAuthStore } from "@/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { App, ConfigProvider } from "antd"
import "@ant-design/v5-patch-for-react-19"

const router = createRouter({
    routeTree, context: {
        auth: undefined!
    },
    defaultNotFoundComponent: () => <NotFound />
})

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: false,
        },
    },
})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export const Providers = () => {
    const auth = useAuthStore()
    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider>
                <App>
                    <RouterProvider router={router} context={{ auth }} />
                </App>
            </ConfigProvider>
        </QueryClientProvider>
    )
}
