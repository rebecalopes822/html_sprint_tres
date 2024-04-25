"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  IconContainer,
} from "./styles";
import { EnvelopeSimple } from "@phosphor-icons/react";

const Contato = () => {
  return (
    <Table>
      <tbody>
        <TableHeader>
          <TableCell>Nome</TableCell>
          <TableCell>Email Institucional</TableCell>
          <TableCell>RM</TableCell>
        </TableHeader>
        <TableRow>
          <TableCell>Giovanna Lima</TableCell>
          <TableCell>
            <IconContainer>
              <EnvelopeSimple size={24} />
              <span>rm553369@fiap.com.br</span>
            </IconContainer>
          </TableCell>
          <TableCell>553369</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Rebeca Lopes</TableCell>
          <TableCell>
            <IconContainer>
              <EnvelopeSimple size={24} />
              <span>rm553764@fiap.com.br</span>
            </IconContainer>
          </TableCell>
          <TableCell>553764</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
};

export default Contato;
