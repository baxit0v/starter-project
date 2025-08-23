import { ContactsOutlined, HomeOutlined, ProductOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"


export const UseMenu = () => {
    const items: MenuProps["items"] = [
        {
            key: "/",
            icon: <HomeOutlined />,
            label: "Главная",
        },
        {
            key: "/1",
            icon: <ProductOutlined />,
            label: "Товары",
        },
        {
            key: "/2",
            icon: <ContactsOutlined />,
            label: "Контакты",
        },
    ]
    return items
}
