import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 7rem 0;
  background-color: #00a3ff;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Text = styled.text`
  position: relative;
  width: 1rem;
`;

export const DivSection = styled.section`
  background-color: #00a3ff;
  padding: 0 2rem;
`;


export const DivMain = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: justify;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
  

  @media (max-width: 767px) {
    margin-top: 2rem; 
  }
`;

export const ContentArea = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const ImageArea = styled.div`
  flex:1;
  max-width: 50%;
  display: flex;
  position: relative;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 767px) {
    img {
      max-height: 300px; 
      object-fit: cover; 
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5em;
`;

export const Section = styled.section`
  margin-top: 20px;
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 30px;
  padding: 10px 0;
  background-color: #f0f0f0;
`;

export const IMG = styled(Image)`
  width: auto;
  height: auto;
`;

export const Divs = styled.div`
  margin-top: 90px;
  display: grid;
  margin-bottom: 90px;
  grid-template-columns: 1fr;
  padding: 0 2rem;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    gap: 150px;
  }
`;

export const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LayoutContainer = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: medium;
  font-weight: bold;
  width: 100%;
`;

export const Descricao = styled.text`
  font-size: small;
  text-align: justify;
`;
