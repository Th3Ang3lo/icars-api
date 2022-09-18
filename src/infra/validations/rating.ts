import * as yup from 'yup'

export const rating = {
  author: yup
    .string()
    .max(255, 'O autor deve ter no máximo 255 caracteres.')
    .optional(),
  content: yup
    .string()
    .max(255, 'O conteúdo deve ter no máximo 255 caracteres.')
    .optional(),
  note: yup
    .number()
    .min(1, 'A nota deve ser entre 1 e 5.')
    .max(5, 'A nota deve ser entre 1 e 5.')
    .typeError('A nota deve ser entre 1 e 5.')
    .required('Campo nota obrigatório.')
}
