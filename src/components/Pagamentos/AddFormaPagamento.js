import React, { useState } from "react";
import api from "../../api";
import {
  Container,
  TextField,
  Button,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CancelIcon from "@mui/icons-material/Cancel";

const AddFormaPagamento = () => {
  const [descricao, setDescricao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/formas_pagamento", { DCR_FORMA_PAGTO: descricao });
      alert("Forma de pagamento adicionada com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar forma de pagamento", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={4}
        p={3}
        component="form"
        onSubmit={handleSubmit}
        sx={{ boxShadow: 3, borderRadius: 2, backgroundColor: "#fff" }}
      >
        <img
          src="/assets/ifome.png"
          alt="Logo"
          style={{ height: "50px", marginBottom: "16px" }}
        />
        <Typography variant="h6" gutterBottom>
          Adicionar Cartão
        </Typography>
        <TextField
          fullWidth
          label="Descrição da Forma de Pagamento"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Número do Cartão"
          variant="outlined"
          margin="normal"
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Data de Validade"
              placeholder="MM/YY"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="CVV"
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>
        <TextField fullWidth label="País" variant="outlined" margin="normal" />
        <TextField fullWidth label="CEP" variant="outlined" margin="normal" />
        <Box display="flex" justifyContent="space-between" mt={3}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<CreditCardIcon />}
            type="submit"
            sx={{ mr: 2 }}
          >
            Adicionar Cartão
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<CancelIcon />}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddFormaPagamento;
