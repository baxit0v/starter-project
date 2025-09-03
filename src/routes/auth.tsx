import { AuthPage } from '@/components/screens/auth'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth')({
    component: RouteComponent,
})

function RouteComponent() {
    return <AuthPage/>
}
