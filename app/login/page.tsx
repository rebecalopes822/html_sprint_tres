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
    sobrenome: "",
    email: "",
    senha: "",
    telefone: "",
    cargo: "",
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
      sobrenome: "",
      email: "",
      senha: "",
      telefone: "",
      cargo: "",
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
            <Label htmlFor="sobrenome">SOBRENOME</Label>
            <Input
              id="sobrenome"
              name="sobrenome"
              type="text"
              placeholder="Sobrenome"
              value={formData.sobrenome}
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
            <Label htmlFor="cargo">CARGO</Label>
            <Input
              id="cargo"
              name="cargo"
              type="text"
              placeholder="Cargo"
              value={formData.cargo}
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
