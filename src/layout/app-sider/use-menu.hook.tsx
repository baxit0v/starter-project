import { HomeOutlined, ProductOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"


export const UseMenu = () => {
    const items: MenuProps["items"] = [
        {
            key: "/",
            icon: <HomeOutlined />,
            label: "Главная",
        },
        {
            key: "/category",
            icon: <ProductOutlined />,
            label: "Категории",
        },
    ]
    return items
}
