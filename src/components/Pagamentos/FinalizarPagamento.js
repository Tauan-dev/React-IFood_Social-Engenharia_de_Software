import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  Divider,
} from "@mui/material";

const FinalizarCompra = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formaPagamento } = location.state || { formaPagamento: {} };

  const handleAvaliar = () => {
    navigate("/avaliar");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "24px" }}>
            <Typography variant="h6" gutterBottom>
              Finalize sua Compra
            </Typography>
            <Typography variant="subtitle1">
              Pagamento com: {formaPagamento.DCR_FORMA_PAGTO}
            </Typography>
            <Divider style={{ margin: "16px 0" }} />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body1">Total: R$ ---</Typography>
              <Button
                variant="contained"
                color="success"
                onClick={handleAvaliar}
              >
                Confirmar Pagamento
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FinalizarCompra;
