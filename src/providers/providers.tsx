import type { PropsWithChildren } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { App, ConfigProvider } from "antd"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: false,
        },
    },
})
export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider>
                <App>{children}</App>
            </ConfigProvider>
        </QueryClientProvider>
    )
}
