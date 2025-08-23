import { Avatar, theme } from "antd"
import { Header } from "antd/es/layout/layout"

export const AppHeader = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    return (
        <>
            <Header style={{ padding: 0, background: colorBgContainer }}>
                <Avatar style={{ margin: 10 }} size="large">E</Avatar>
            </Header>
        </>
    )
}
