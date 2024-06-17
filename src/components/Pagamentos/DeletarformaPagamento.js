import React, { useState, useEffect } from "react";
import api from "../../api";
import {
  Container,
  Typography,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeletarFormaPagamento = () => {
  const [formasPagamento, setFormasPagamento] = useState([]);

  useEffect(() => {
    const fetchFormasPagamento = async () => {
      try {
        const response = await api.get("/formas_pagamento");
        setFormasPagamento(response.data);
      } catch (error) {
        console.error("Erro ao carregar formas de pagamento", error);
      }
    };

    fetchFormasPagamento();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/formas_pagamento/${id}`);
      setFormasPagamento(
        formasPagamento.filter((fp) => fp.COD_FORMA_PAGTO !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar forma de pagamento", error);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "24px" }}>
      <Paper elevation={3} style={{ padding: "24px" }}>
        <Typography variant="h6" gutterBottom>
          Formas de Pagamento
        </Typography>
        <List>
          {formasPagamento.map((fp, index) => (
            <React.Fragment key={fp.COD_FORMA_PAGTO}>
              <ListItem>
                <ListItemText primary={fp.DCR_FORMA_PAGTO} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(fp.COD_FORMA_PAGTO)}
                    sx={{ color: "red" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              {index < formasPagamento.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default DeletarFormaPagamento;
