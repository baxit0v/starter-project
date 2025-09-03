import { CategoryService, type ICategoryForm } from "@/services/category"
import { useMutation } from "@tanstack/react-query"
import { Button, Drawer, Form, Input } from "antd"
import { useState } from "react"

export const CreateCategoryForm = () => {
    const [open, setOpen] = useState(false)
    const [form] = Form.useForm<ICategoryForm>()

    const { mutate: create } = useMutation({
        mutationFn: CategoryService.create,
        onSuccess: () => {
            form.resetFields()
        }
    })

    const onFinish = (values: ICategoryForm) => {
        create(values)
    }
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>Создать</Button>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item<ICategoryForm> name={'name'} label={'Название'}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">Создать</Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    )
}
