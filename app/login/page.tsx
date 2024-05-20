"use client";
import { ChangeEvent, useState } from "react";
import {
  Button,
  Form,
  FormContainer,
  Input,
  InputGroup,
  Label,
  PageContainer,
  Title,
} from "./styles";
 
const Login = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    possuiCondicaoEspecial: "",
    loginEmail: "",
    loginSenha: "",
  });
 
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleButtonClick = () => {
    setFormData({
      nome: "",
      email: "",
      senha: "",
      telefone: "",
      possuiCondicaoEspecial: "",
      loginEmail: "",
      loginSenha: "",
    });
    setIsButtonVisible(false);
  };
 
  return (
    <PageContainer>
      <FormContainer>
        <Form>
          <Title>PREENCHA COM SUAS INFORMAÇÕES PESSOAIS</Title>
          <InputGroup>
            <Label htmlFor="nome">NOME</Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">E-MAIL</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="telefone">TELEFONE</Label>
            <Input
              id="telefone"
              name="telefone"
              type="text"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="possuiCondicaoEspecial">POSSUI CONDIÇÃO ESPECIAL? S para (sim) e N para (não)</Label>
            <Input
              id="possuiCondicaoEspecial"
              name="possuiCondicaoEspecial"
              type="text"
              placeholder="Condição especial"
              value={formData.possuiCondicaoEspecial}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup>
            {isButtonVisible && (
              <Button onClick={handleButtonClick}>Enviar</Button>
            )}
          </InputGroup>
        </Form>
 
        <Form>
          <Title>PARA LOGAR</Title>
          <InputGroup>
            <Label htmlFor="loginEmail">EMAIL</Label>
            <Input
              id="loginEmail"
              name="loginEmail"
              type="email"
              placeholder="Email"
              value={formData.loginEmail}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="loginSenha">SENHA</Label>
            <Input
              id="loginSenha"
              name="loginSenha"
              type="password"
              placeholder="Senha"
              value={formData.loginSenha}
              onChange={handleInputChange}
            />
          </InputGroup>
          {isButtonVisible && (
            <Button onClick={handleButtonClick}>Enviar</Button>
          )}
        </Form>
      </FormContainer>
    </PageContainer>
  );
};
 
export default Login;
 