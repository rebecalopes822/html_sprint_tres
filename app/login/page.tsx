
"use client"

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
  });

  const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, nome: value }));
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, email: value }));
  };

  const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, telefone: value }));
  };

  const handleCondicaoEspecialChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, possuiCondicaoEspecial: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/usuarios', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
     
        console.log("Formulário enviado com sucesso!");
       
        setFormData({
          nome: "",
          email: "",
          senha: "",
          telefone: "",
          possuiCondicaoEspecial: "",
        });
        setIsButtonVisible(false);
      } else {
       
        console.error("Erro ao enviar formulário:", response.statusText);
      }
    } catch (error) {

      console.error("Erro ao enviar formulário:", error.message);
      console.log(error); 
    }
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

              onChange={handleNomeChange}

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
              onChange={handleEmailChange}

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

              onChange={handleTelefoneChange}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="possuiCondicaoEspecial">POSSUI CONDIÇÃO ESPECIAL? Digite "1" para (NÃO) e "2" para (SIM)</Label>

            <Input
              id="possuiCondicaoEspecial"
              name="possuiCondicaoEspecial"
              type="text"
              placeholder="Condição especial"
              value={formData.possuiCondicaoEspecial}

              onChange={handleCondicaoEspecialChange}

            />
          </InputGroup>
          <InputGroup>
            {isButtonVisible && (
              <Button onClick={handleSubmit}>Enviar</Button>
            )}
          </InputGroup>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};


export default Login;