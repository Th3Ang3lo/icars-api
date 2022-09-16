import * as yup from 'yup'

const maxSizeInMb = 50

export const file = {
  size: yup.mixed().optional().test('imageSize', `Limite de ${maxSizeInMb} mb excedido.`, (size: number) => {
    const maxFileSizeInBytes = maxSizeInMb * 1024 * 1024
    return !(size > maxFileSizeInBytes)
  }),
  mimetype: yup.string().optional().oneOf(['image/jpeg', 'image/png'], 'Tipo de arquivo inválido.')
}
