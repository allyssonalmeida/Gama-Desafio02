import React, {useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function NovoCliente() {
  const history = useHistory();
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  function handleForm(e){
    e.preventDefault();
    const cliente = {
      id: clientes.length + 1,
      nome: nome,
      email: email,
      telefone: telefone,
      endereco: endereco,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      cep: cep,
    }
    const newClientes = [...clientes, cliente];
    setClientes(newClientes);
    setTimeout(()=>{
      history.push("/clientes");
    }, 500);
  }

  useEffect(()=>{
    if(clientes.length > 0){
      localStorage.setItem('clientes',JSON.stringify(clientes));
    }
  },[clientes]);

  useEffect(()=>{
    const client = JSON.parse(localStorage.getItem('clientes'));
    if(client && client.length > 0){
      setClientes(client);
    }
  },[]);

  return(
    <>
    <Header />
      <section>
        <h1>Cadastro de Produto</h1>
        <div className="content_wrapper">
          <form onSubmit={handleForm}>
            <fieldset>
              <label htmlFor="nome">Nome: </label>
              <input type="text" id="nome" inputMode="text"  
                value={nome} 
                onChange={e => setNome(e.target.value)} 
                placeholder="João da Silva" 
                required
              />
            </fieldset>
            <div className="field-group">
              <fieldset>
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="joaosilva@email.com"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="telefone">Telefone: </label>
                <input type="phone" id="telefone" value={telefone} 
                  onChange={e => setTelefone(e.target.value)} 
                  placeholder="11 91234-1234"
                  required 
                />
              </fieldset>
            </div>
            <fieldset>
              <label htmlFor="endereco">Endereço: </label>
              <input type="text" id="endereco" inputMode="text"  
                value={endereco} 
                onChange={e => setEndereco(e.target.value)} 
                placeholder="Rua das Angélicas" 
                required
              />
            </fieldset>
            <div className="field-group">
              <fieldset>
                <label htmlFor="complemento">Complemento: </label>
                <input type="text" id="complemento" inputMode="text"  
                  value={complemento} 
                  onChange={e => setComplemento(e.target.value)} 
                  placeholder="Apartamento 103" 
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="bairro">Bairro: </label>
                <input type="text" id="bairro" inputMode="text"  
                  value={bairro} 
                  onChange={e => setBairro(e.target.value)} 
                  placeholder="Centro" 
                  required
                />
              </fieldset>
            </div>
            <div className="field-group">
              <fieldset>
                <label htmlFor="cidade">Complemento: </label>
                <input type="text" id="cidade" inputMode="text"  
                  value={cidade} 
                  onChange={e => setCidade(e.target.value)} 
                  placeholder="Cidade Imaginária" 
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="cep">CEP: </label>
                <input type="text" id="cep" inputMode="text"  
                  value={cep} 
                  onChange={e => setCep(e.target.value)} 
                  placeholder="123456-789" 
                  required
                />
              </fieldset>
            </div>
            <fieldset>
              <button type="submit">Finalizar Cadastro</button>
            </fieldset>
          </form>
        </div>
      </section>
    <Footer />
    </>
  );
}

export default NovoCliente;