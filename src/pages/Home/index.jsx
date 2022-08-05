import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../../components/Form';
import { schema } from '../../validators/registerUser';
import Input from '../../components/Input';

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function registerUser(data) {
    console.log(data);

    // // faz o login
    // api.post()

    // navigate('/dashboard', { replace: true });
  }

  return (
    <Form onSubmit={handleSubmit(registerUser)}>
      <Input
        id='email'
        label='Email'
        {...register('email')}
        error={errors?.email}
      />
      <Input
        id='name'
        label='Name'
        {...register('name')}
        error={errors?.name}
      />

      <button type='submit'>Cadastrar</button>
    </Form>
  );
};
export default Home;
