import React from 'react';
import './style.css'

const Cadastro = (props) => {
  return (
    <div>
      <label>
        Nome:
        <input type='name' value={props.nome} onChange={(e) => props.setNome(e.target.value)} />
      </label>
      <br />
      <label>
        Telefone:
        <input type="text" value={props.telefone} onChange={(e) => props.setTelefone(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
      </label>
      <button className='buton-salvar' onClick={props.adicionarContato} disabled={!props.botaoAdicionarHabilitado}>+</button>
    </div>
  );
};

export default Cadastro;