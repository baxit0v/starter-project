import { Button } from "antd"
import { MainLayout } from "./main-layout"
import { useNavigate } from "@tanstack/react-router"

export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <MainLayout>
            <h1>Not Found 404</h1>
            <Button onClick={() => navigate({ to: '/' })}>Back to home</Button>
        </MainLayout>
    )
}
