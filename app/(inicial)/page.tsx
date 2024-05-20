"use client";
import {
  Container,
  ImageArea,
  MainTitle,
  IMG,
  DivMain,
  Divs,
  Bloco,
  Title,
  Descricao,
  DivSection,
  Text,
  Flex,
  LayoutContainer,
} from "./styles";

import imagem from "/olho.jpg";

import { Info } from "@phosphor-icons/react";

const Inicial = () => {
  return (
    <>
      <DivSection>
        <LayoutContainer>
          <Container>
            <DivMain>
              <MainTitle>BEM VINDO!</MainTitle>
              <Text>
                PROJETO COM FOCO NA INCLUSÃO PARA PESSOAS DEFICIENTES VISUAIS
                COM O OBJETIVO DE CRIAR UMA EXPERIÊNCIA ÚNICA E INCLUSIVA PARA
                TODOS OS USUÁRIOS. ESTAMOS ENTUSIASMADOS EM APRESENTAR NOSSO
                LEITOR DE VOZ, UMA FERRAMENTA INOVADORA, A QUAL PROPORCIONARÁ
                UMA INTERAÇÃO INCRÍVEL E ACESSÍVEL.
              </Text>
            </DivMain>
            <ImageArea>
              <IMG
                src="/olho.jpg"
                width={500}
                height={500}
                alt="Descrição da imagem"
              />
            </ImageArea>
          </Container>
        </LayoutContainer>
      </DivSection>
      <LayoutContainer>
        <Divs id="acessibilidade">
          <Bloco>
            <Flex>
              <Title>O QUE OFERECEMOS</Title>
              <div>
                <Info size={22} weight="fill" />
              </div>
            </Flex>
            <Descricao>
              Leitor de texto dinâmico, transformando um texto em uma voz. Nosso
              leitor permite que o usuário com deficiência visual escute o que
              está sendo apresentado no texto.
            </Descricao>
          </Bloco>
          <Bloco>
            <Flex>
              <Title>CADASTRE-SE PARA UMA EXPERIÊNCIA PERSONALIZADA</Title>

              <div>
                <Info size={22} weight="fill" />
              </div>
            </Flex>
            <Descricao>
              Nós acreditamos na importância de oferecer uma experiência
              verdadeiramente personalizada e acessível. Para garantir que
              possamos atender suas necessidades específicas e proporcionar a
              melhor experiência possível, solicitamos que você realize um
              rápido cadastro informando sobre sua deficiência visual
            </Descricao>
          </Bloco>
          <Bloco>
            <Flex>
              <Title>NOSSO COMPROMISSO COM O SUPORTE INCLUSIVO</Title>
              <div>
                <Info size={22} weight="fill" />
              </div>
            </Flex>
            <Descricao>
              Estamos empenhados em oferecer suporte abrangente e acessível.
              Queremos garantir que cada pessoa, independente de suas
              necessidades, sinta-se totalmente apoiada ao explorar nossa
              plataforma. Para isso, apresentamos o nosso compromisso com o
              suporte inclusivo.
            </Descricao>
          </Bloco>
        </Divs>
      </LayoutContainer>
    </>
  );
};

export default Inicial;
