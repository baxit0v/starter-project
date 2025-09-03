import { LoginForm } from "./login-form/login-form"

import s from './auth.module.css'

export const AuthPage = () => {
  return (
    <div className={s.root}>
      <LoginForm />
    </div>
  )
}
