"use client";
import { useState } from "react";
import {
  Container,
  Title,
  SubTitle,
  Form,
  Label,
  Select,
  Option,
  Button,
  Result,
  CategoryContainer,
} from "./styles";

const Avaliacao = () => {
  const [designNota, setDesignNota] = useState<number | null>(null);
  const [acessibilidadeNota, setAcessibilidadeNota] = useState<number | null>(null);
  const [utilidadeNota, setUtilidadeNota] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container>
      <Title>Avaliação do Site</Title>
      <SubTitle>Agora através da sua avaliação saberemos o que precisamos melhorar no nosso site</SubTitle>
      <Form onSubmit={handleSubmit}>
        <CategoryContainer>
          <Label>Design e Interface do Site:</Label>
          <Select
            value={designNota ?? ""}
            onChange={(e) => setDesignNota(Number(e.target.value))}
            required
          >
            <Option value="">Selecione uma nota</Option>
            {[1, 2, 3, 4, 5].map((nota) => (
              <Option key={nota} value={nota}>
                {nota}
              </Option>
            ))}
          </Select>
        </CategoryContainer>
        <CategoryContainer>
          <Label>Quanto a aba "acessibilidade" está clara e funcional?</Label>
          <Select
            value={acessibilidadeNota ?? ""}
            onChange={(e) => setAcessibilidadeNota(Number(e.target.value))}
            required
          >
            <Option value="">Selecione uma nota</Option>
            {[1, 2, 3, 4, 5].map((nota) => (
              <Option key={nota} value={nota}>
                {nota}
              </Option>
            ))}
          </Select>
        </CategoryContainer>
        <CategoryContainer>
          <Label>Quanto foi útil a aba "acessibilidade" para você?</Label>
          <Select
            value={utilidadeNota ?? ""}
            onChange={(e) => setUtilidadeNota(Number(e.target.value))}
            required
          >
            <Option value="">Selecione uma nota</Option>
            {[1, 2, 3, 4, 5].map((nota) => (
              <Option key={nota} value={nota}>
                {nota}
              </Option>
            ))}
          </Select>
        </CategoryContainer>
        <Button type="submit">Enviar Avaliação</Button>
      </Form>
      {submitted && (
        <Result>
          <h2>Obrigado pela sua avaliação!</h2>
          <p>Design e Interface do Site: {designNota}</p>
          <p>Quanto a aba "acessibilidade" está clara e funcional?: {acessibilidadeNota}</p>
          <p>Quanto foi útil a aba "acessibilidade" para você?: {utilidadeNota}</p>
        </Result>
      )}
    </Container>
  );
};

export default Avaliacao;
