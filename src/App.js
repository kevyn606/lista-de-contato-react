import React, { useState } from 'react';
import Cadastro from './components/Cadastro/cadastro';
import './style.css'

const App = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [listaDeContato, setListaDeContato] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [editandoIndex, setEditandoIndex] = useState(-1);

  const adicionarContato = () => {
    if (nome && telefone && email) {
      const novoContato = {
        nome: nome,
        telefone: telefone,
        email: email
      };
      setListaDeContato([...listaDeContato, novoContato]);
      setNome('');
      setTelefone('');
      setEmail('');
    } else {
      alert('Preencha todos os campos antes de adicionar o contato.');
    }
  };

  const editarContato = (index) => {
    setEditandoIndex(index);
    setNome(listaDeContato[index].nome);
    setTelefone(listaDeContato[index].telefone);
    setEmail(listaDeContato[index].email);
  };

  const salvarEdicao = () => {
    if (nome && telefone && email) {
      const novaLista = listaDeContato.map((contato, index) => {
        if (index === editandoIndex) {
          return {
            nome: nome,
            telefone: telefone,
            email: email
          };
        }
        return contato;
      });
      setListaDeContato(novaLista);
      setNome('');
      setTelefone('');
      setEmail('');
      setEditandoIndex(-1);
    } else {
      alert('Preencha todos os campos antes de salvar a edição.');
    }
  };

  const removerContato = (index) => {
    const novaLista = listaDeContato.filter((contato, idx) => idx !== index);
    setListaDeContato(novaLista);
    if (editandoIndex === index) {
      setEditandoIndex(-1);
    }
  };

  return (
  <div className='container'>
    <div className='conteudo'>
      <h1>NOVO CONTATO</h1>
      <Cadastro
        nome={nome}
        setNome={setNome}
        telefone={telefone}
        setTelefone={setTelefone}
        email={email}
        setEmail={setEmail}
        adicionarContato={adicionarContato}
        botaoAdicionarHabilitado={nome && telefone && email}
      />
      {listaDeContato.length > 0 && (
        <div>
          <h2>Lista de Contatos:</h2>
          <ul>
            {listaDeContato.map((contato, index) => (
              <li key={index}>
                {editandoIndex === index ? (
                  <>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className='buton-salvar-2 ' onClick={() => salvarEdicao()}>salvar</button>
                  </>
                ) : (
                  <>
                  <div className='conteudo-editar'>
                    <p>Nome: {contato.nome}</p>
                    <p>Telefone: {contato.telefone}</p>
                    <p>Email: {contato.email}</p>
                    <button className='buton-editar' onClick={() => editarContato(index)}>Editar</button>
                    <button className='buton-excluir' onClick={() => removerContato(index)}>Excluir</button>
                  </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
  );
};

export default App;

