import styled from "styled-components";

const colors = {
  gray: "#F0F0F0", 
  blue: "#00A3FF",
  black: "#000000",
  white: "#FFFFFF",
};

export const Section = styled.section`
  color: ${colors.black};
  font-family: "Arial";
  background-color: ${colors.gray}; 
  overflow: hidden;
`;

export const BlueDiv = styled.div`
  background-color: ${colors.blue};
  color: ${colors.white};
  text-align: center;
  padding: 1.675rem 0;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FlexDivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  text-align: justify;
`;

export const Button = styled.button`
  background-color: ${colors.blue};

  color: ${colors.black};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  width: 200px;
  &:hover {
    background-color: ${colors.white}; 
    color: ${colors.blue}; 
    border: 0.2px solid ${colors.blue}; 
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin: 0 auto 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  text-align: end;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 60%;
  height: 50%;
`;

export const LayoutContainer = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
`;

export const AcessibilidadeText = styled.span`
  color: ${colors.black};
`;
