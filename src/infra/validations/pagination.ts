import * as yup from 'yup'

export const pagination = {
  page: yup
    .number()
    .optional()
    .min(1, 'O valor mínimo é 1.')
    .typeError('A página deve ser um valor numérico.'),
  limit: yup
    .number()
    .optional()
    .max(50, 'O valor máximo é 50.')
    .typeError('O limite deve ser um valor numérico.')
}
