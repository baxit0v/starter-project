import { AppHeader } from "@/layout/app-header/app-header"
import { Layout, theme } from "antd"
import { type PropsWithChildren } from "react"
import { AppSider } from "./app-sider/app-sider"

const { Content } = Layout

export const MainLayout = ({ children }: PropsWithChildren) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    return (
        <Layout>
            <AppSider/>
            <Layout style={{ minHeight: "100vh" }}>
                <AppHeader/>
                <Content style={{ margin: "10px" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: '100%',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}