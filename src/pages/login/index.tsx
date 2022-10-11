import React, { useContext, useState } from 'react';
import * as C from './styles';
import { MdAlternateEmail } from 'react-icons/md';
import { VscLock } from 'react-icons/vsc';
import { useForm } from 'react-hook-form';
import Button from '@components/ui/button';
import { AuthContext } from '@contexts/AuthContext';

type FormValues = {
  email: string;
  password: string;
};
// const loginFormSchema = yup.object().shape({
//   email: yup.string().email('Email is not valid').required('Email is required'),
//   password: yup.string().required('Password is required')
// });
const defaultValues = {
  email: '',
  password: ''
};

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues
  });
  const { signIn } = useContext(AuthContext);

  async function onSubmit({ email, password }: FormValues) {
    setLoading(true);
    await signIn({ email, password });
    setLoading(false);
  }
  return (
    <C.Container>
      <section className="right">
        <div>
          <div className="logo">
            <div>
              <img className="logo-img" src="/logo.svg" />
            </div>
            <span className="logo-title">Pagamentos Instituicional Angola</span>
            <p className="">
              Receba transições em tempo real, dos seus encarregados e alunos. E
              Mas envie convocatórias para todos os encarregados sem gastar
              dinheiro de papel, facíl, seguro e rápido.
            </p>
          </div>
        </div>
      </section>
      <section className="left">
        <div className="content-form bg-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h3>Faça login com sua conta PIA</h3>

              <div className="groups-input">
                <span className="icon">
                  <MdAlternateEmail />
                </span>
                <input
                  type="text"
                  placeholder="E-mail"
                  {...register('email')}
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="groups-input">
                <span className="icon">
                  <VscLock />
                </span>
                <input
                  type="password"
                  placeholder="Senha"
                  {...register('password')}
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                {errorMsg && <span style={{ color: '#d00' }}>{errorMsg}r</span>}
              </div>
              <div className="b-acess">
                <Button className="w-full" loading={loading} disabled={loading}>
                  Entrar
                </Button>

                <a href="#">Não sabes a tua palavra pass?</a>
              </div>
            </div>
            <div className="b-create-count">
              <button onClick={() => reset()}>Criar nova conta</button>
            </div>
          </form>
        </div>
      </section>
    </C.Container>
  );
}
