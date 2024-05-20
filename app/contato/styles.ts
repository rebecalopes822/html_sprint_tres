import styled from 'styled-components';

export const Table = styled.table`
  margin: 50px auto;
  width: 80%;
  border-collapse: collapse;
  background-color: #fff;
  height: 40vh;
  margin-top: 110px;
  margin-bottom: 225px;
`;

export const TableHeader = styled.tr`
  background-color: #00A3FF;
  color: #fff;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  text-align: center;
  padding: 12px 35px;
  color: black;
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;

  svg {
    fill: #00A3FF;
  }

  span {
    margin-left: 5px; 
  }
`;