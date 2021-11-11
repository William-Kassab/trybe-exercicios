import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />)
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });
    
  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Exercício 1', () => {
  it('Verifica se existe um botão que adiciona tarefa', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('Verifica se o botão possui o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toHaveValue('Adicionar');
  });
  it('Verifica se ao clicar no botão a tarefa digitada é salva', () => {
    render(<App />);
    const button = screen.getByRole('button');
    const inputTask = screen.getByLabelText('Tarefa:');
    const tasks = screen.getByTestId('tasks');

    userEvent.type(inputTask, 'teste');
    userEvent.click(button);
    
    expect(inputTask).toHaveValue('');
    expect(tasks).toHaveTextContent('teste');
  });
});
