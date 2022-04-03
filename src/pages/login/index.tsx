import React, { useCallback, useContext, useState } from "react";
import * as C from "./styles";
import { MdAlternateEmail } from "react-icons/md";
import { VscLock } from "react-icons/vsc";
import { useForm } from 'react-hook-form';
import { AuthContext} from '../../contexts/AuthContext'
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
const { signIn } = useContext(AuthContext);
  const { register, handleSubmit} = useForm();


  const handleSignIn = async(data)=>{
	const result = await signIn(data);
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
            <p>
              Receba transições em tempo real, dos seus encarregados e alunos. E
              Mas envie convocatórias para todos os encarregados sem gastar
              dinheiro de papel, facíl, seguro e rápido.
            </p>
          </div>
        </div>
      </section>
      <section className="left">
        <div className="content-form">
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div>
              <h3>Faça login com sua conta PIA</h3>
            
              <div className="groups-input">
                <span className="icon">
                  <MdAlternateEmail />
                </span>
                <input
                  type="text"
                  placeholder="E-mail"
				  {...register("email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="groups-input">
                <span className="icon">
                  <VscLock />
                </span>
                <input
                  type="password"
                  placeholder="Senha"
				  {...register("password")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="b-acess">
                <button type="submit">Iniciar sessão</button>
                <a href="#">Não sabes a tua palavra pass?</a>
              </div>
            </div>
            <div className="b-create-count">
              <button>Criar nova conta</button>
            </div>
          </form>
        </div>
      </section>
    </C.Container>
  );
}
