import * as yup from 'yup'

export const auth = {
  email: yup
    .string()
    .email('E-mail inválido.')
    .max(255, 'O e-mail deve ter no máximo 255 caracteres.')
    .required('E-mail obrigatório.'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres.')
    .max(255, 'A senha deve ter no máximo 255 caracteres.')
    .required('Senha obrigatória.')
}
