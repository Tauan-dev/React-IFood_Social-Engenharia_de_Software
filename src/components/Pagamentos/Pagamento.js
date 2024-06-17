import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  TextField,
  Divider,
  Box,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

function Pagamento() {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <img src="/assets/ifome.png" alt="Logo" style={{ height: "50px" }} />
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Seu pedido em:</Typography>
          <Typography variant="h5">
            Quentinha da Esmeralda - Salobrinho
          </Typography>
          <Typography variant="body2" color="red">
            Ver Cardápio
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">1x Marmita Feijoada completa</Typography>
            <Typography variant="body2" color="red">
              Editar
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Remover
            </Typography>
            <Divider style={{ margin: "16px 0" }} />
            <Box display="flex" alignItems="center">
              <LocalOfferIcon style={{ marginRight: "8px" }} />
              <TextField
                variant="outlined"
                size="small"
                placeholder="Código do Cupom"
                style={{ flexGrow: 1 }}
              />
            </Box>
            <Typography variant="body2" style={{ marginTop: "8px" }}>
              Subtotal: R$ ---
            </Typography>
            <Typography variant="body2">Taxa de serviço: R$ ---</Typography>
            <Typography variant="body2">Entrega: R$ ---</Typography>
            <Divider style={{ margin: "16px 0" }} />
            <Typography variant="h6">Total: R$ ---</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => navigate("/formas-pagamento/listar")} // Navegar para a rota desejada
          >
            Escolher forma de pagamento
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Pagamento;
