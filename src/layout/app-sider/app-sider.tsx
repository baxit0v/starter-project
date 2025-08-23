import { useNavigate, useRouterState } from "@tanstack/react-router"
import Sider from "antd/es/layout/Sider"
import { UseMenu } from "./use-menu.hook"
import { Menu } from "antd"


export const AppSider = () => {
    const items = UseMenu()
    const navigate = useNavigate()
    const router = useRouterState()
    const currentPath = router.location.pathname
    return (
        <Sider collapsible>
            <Menu
                theme="dark"
                mode="inline"
                onSelect={(item) =>
                    navigate({
                        to: item.key,
                    })
                }
                selectedKeys={[currentPath]}
                items={items}
            />
        </Sider>
    )
}
