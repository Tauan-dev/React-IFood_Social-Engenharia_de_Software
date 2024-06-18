import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import axios from "axios";

const CriarEntrega = () => {
  const [formData, setFormData] = useState({
    COD_PEDIDO: "",
    COD_FUNCIONARIO: "",
    DATA_SAIDA: "",
    DATA_ENTREGA: "",
    VLR_ENTREGA: "",
    DCR_ENDERECO: "",
    DCR_COMPLEM: "",
    NUM_CEP: "",
    TXT_REFERENCIA: "",
    COD_CIDADE: "",
    COD_BAIRRO: "",
    COD_LOCALIDADE: "",
    FLAG_ENCOMENDA: "",
    FLAG_ENTREGADOR: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/InserirEntregas", formData);
      alert("Entrega registrada com sucesso!");
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao registrar entrega", error);
      alert("Erro ao registrar entrega. Tente novamente.");
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "24px", marginTop: "24px" }}>
        <Typography variant="h4" gutterBottom>
          Criar Nova Entrega
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {[
              { name: "COD_PEDIDO", label: "Código do Pedido" },
              { name: "COD_FUNCIONARIO", label: "Código do Funcionário" },
              { name: "DATA_SAIDA", label: "Data de Saída", type: "date" },
              { name: "DATA_ENTREGA", label: "Data de Entrega", type: "date" },
              {
                name: "VLR_ENTREGA",
                label: "Valor da Entrega",
                type: "number",
              },
              { name: "DCR_ENDERECO", label: "Endereço" },
              { name: "DCR_COMPLEM", label: "Complemento" },
              { name: "NUM_CEP", label: "CEP" },
              { name: "TXT_REFERENCIA", label: "Referência" },
              { name: "COD_CIDADE", label: "Código da Cidade" },
              { name: "COD_BAIRRO", label: "Código do Bairro" },
              { name: "COD_LOCALIDADE", label: "Código da Localidade" },
              {
                name: "FLAG_ENCOMENDA",
                label: "Flag Encomenda",
                type: "number",
              },
              {
                name: "FLAG_ENTREGADOR",
                label: "Flag Entregador",
                type: "number",
              },
            ].map((field) => (
              <Grid item xs={12} sm={6} key={field.name}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label={field.label}
                  name={field.name}
                  type={field.type || "text"}
                  value={formData[field.name]}
                  onChange={handleChange}
                  InputLabelProps={
                    field.type === "date" ? { shrink: true } : {}
                  }
                />
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="space-between" marginTop="16px">
            <Button variant="contained" color="primary" type="submit">
              Registrar Entrega
            </Button>
            <Button variant="contained" color="secondary" type="button">
              Cancelar
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default CriarEntrega;
