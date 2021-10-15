import './App.css';
import React from 'react'
import Name from './Name'
import Endereco from './Endereco';
import Cargo from './Cargo';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '', 
      email:'',
      CPF: '',
      endereco: '',
      cidade: '',
      curriculo: '',
      cargo: '',
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'radio' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="form">
        <fieldset className="fields">
          <Name value={this.state.name} handleChange={this.handleChange} />
          <label>Email:
            <input name="email" type="text" maxLength="50" required></input>
          </label>
          <label>CPF:
            <input name="CPF" type="text" maxLength="11" required></input>
          </label>
          <Endereco value={this.state.endereco} handleChange={this.handleChange} />
          <label>Cidade:
            <input name="cidade" type="text" maxLength="28" required></input>
          </label>
          <label>Estado:
            <select name="estado" required></select>
          </label>
          <label>Casa:
            <input name="casaApto" type="radio" required></input>
          </label>
          <label>Apartamento:
            <input name="casaApto" type="radio" required></input>
          </label>
        </fieldset>

        <fieldset className="fields">
          <label>Resumo do currículo:
            <textarea name="curriculo" type="text" maxLength="1000" required></textarea>
          </label>
          <Cargo value={this.state.cargo} handleChange={this.handleChange} />
          <label>Descrição do cargo:
            <textarea name="descricaoCargo" type="text" maxLength="500" required></textarea>
          </label>
        </fieldset>
      </div>
    );
  }
}

export default App;
