import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  margin: 3rem 0;
`;

export const Form = styled.form`
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;

  @media (min-width: 768px) {
    width: 48%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #000;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Title = styled.h2`
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background-color: #00a3ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #00a3ff;
    border: 1px solid #00a3ff;
    opacity: 0.8;
  }
`;