import { useMessage } from "@/hooks"
import { AuthService, type ILoginForm } from "@/services/auth"
import { useAuthStore } from "@/store"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { Button, Card, Form, Input, Typography } from "antd"
import { useEffect } from "react"

export const LoginForm = () => {
  const [form] = Form.useForm<ILoginForm>()
  const { message } = useMessage()
  const { setUser, logout } = useAuthStore()
  const navigate = useNavigate()
  const { mutate: login, isPending, isSuccess } = useMutation({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      message.success({
        message: "Вы успешно вошли в систему",
      })
      setUser(data.data)

    },
    onError: () => {
      message.error({
        message: "Неправильный логин или пароль",
      })
      logout()
    },
  })

  useEffect(() => {
    if (isSuccess) {
      navigate({ to: "/" })
    }
  }, [isSuccess, navigate])

  const onFinish = (values: ILoginForm) => {
    login(values)
  }

  return (
    <Card style={{ width: 360 }}>
      <Typography.Title style={{ textAlign: "center" }} level={3}>
        Логин
      </Typography.Title>
      <Form
        form={form}
        layout="vertical"
        autoComplete='off'
        onFinish={onFinish}>
        <Form.Item<ILoginForm> name="phone" label="Телефон" required>
          <Input type="phone" />
        </Form.Item>
        <Form.Item<ILoginForm> name="password" label="Пароль" required>
          <Input.Password />
        </Form.Item>
        <Form.Item label={null}>
          <Button loading={isPending} block type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
