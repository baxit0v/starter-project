import { useFilters } from "@/hooks"
import { useGetAllCategory, type ICategory } from "@/services/category"
import type { ColumnsType } from "antd/es/table"
import Table from "antd/es/table"
import { CreateCategoryForm } from "./category-form/create-category-form"

export const CategoryPage = () => {
    const { filters, setFilters } = useFilters('/_layout/category/')
    const { data } = useGetAllCategory({
        limit: 10,
        page: filters.page ?? 1,
    })

    const columns: ColumnsType<ICategory> = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
        },
        {

        }
    ]

    return (
        <>
            <CreateCategoryForm />
            <Table
                rowKey={(row) => row.id}
                pagination={
                    {
                        total: data?.pagination.count ?? 0,
                        onChange: (page) => setFilters({ page }),
                    }
                }
                dataSource={data?.data || []}
                columns={columns}
                bordered
            />
        </>
    )
}