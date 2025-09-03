import { useAuthStore } from "@/store"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Popover, theme } from "antd"
import { Header } from "antd/es/layout/layout"

export const AppHeader = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    const { user, logout } = useAuthStore()
    return (
        <>
            <Header style={{
                padding: 10,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                background: colorBgContainer
            }}>
                <Popover
                    content={
                        <div style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, width: 130, padding: 5
                        }
                        }>
                            <div style={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5
                            }}>
                                <UserOutlined style={{ fontSize: 18 }} />
                                <p style={{ fontWeight: '500', fontSize: 19 }}>{user?.role.name.toUpperCase() || ''}</p>
                            </div>

                            <p style={{ fontSize: 16, marginBottom: 5 }}>{user?.phone.toUpperCase() || ''}</p>

                            <Button onClick={logout} danger block>
                                Выйти
                            </Button>
                        </div>
                    }
                >
                    <Avatar style={{ backgroundColor: "#ccc" }}>
                        {/* {user?.role.name.toUpperCase() || ''} */}
                        <UserOutlined />
                    </Avatar>
                </Popover>
            </Header>
        </>
    )
}
