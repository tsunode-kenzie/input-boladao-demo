import * as yup from 'yup';

export const schema = yup.object({
  email: yup
    .string()
    .email('Deve ser um email')
    .required('Email é obrigatório'),
  name: yup.string().required('Nome é obrigatório'),
});
