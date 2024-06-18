import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import {
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Paper,
  Box,
  Divider,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PaymentIcon from "@mui/icons-material/Payment";
import CloseIcon from "@mui/icons-material/Close";

const ListarFormasPagamento = () => {
  const [formasPagamento, setFormasPagamento] = useState([]);
  const [openPixDialog, setOpenPixDialog] = useState(false);
  const navigate = useNavigate();

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

  const handleOpenPixDialog = () => {
    setOpenPixDialog(true);
  };

  const handleClosePixDialog = () => {
    setOpenPixDialog(false);
  };

  const handleFinalizarCompra = (formaPagamento) => {
    navigate("/finalizar-compra", { state: { formaPagamento } });
  };

  const handlePixFinalizarCompra = () => {
    setOpenPixDialog(false);
    navigate("/avaliar");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: "24px", height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Finalize seu Pedido
            </Typography>

            <Button variant="text" style={{ textTransform: "none" }}>
              <img
                src="/assets/download (3).png"
                alt="Pix"
                style={{ height: "50px", marginRight: "8px" }}
              />
              Entrega
            </Button>
            <Typography variant="body1">
              Rua Senhora das Graças, Ilhéus/BA
            </Typography>

            <Typography variant="subtitle1" style={{ marginTop: "16px" }}>
              Pague pelo site
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              style={{ marginTop: "8px" }}
            >
              <PaymentIcon style={{ marginRight: "8px" }} />
              <Typography variant="body1">Pague na entrega</Typography>
            </Box>
            <Button
              onClick={handleOpenPixDialog}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
                padding: 0,
                textTransform: "none",
              }}
            >
              <img
                src="/assets/pix.png"
                alt="Pix"
                style={{ height: "24px", marginRight: "8px" }}
              />
              <Typography variant="body1">Pague com Pix</Typography>
            </Button>
            <Dialog open={openPixDialog} onClose={handleClosePixDialog}>
              <DialogTitle>
                <Typography variant="h6">Estamos quase lá!</Typography>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleClosePixDialog}
                  aria-label="close"
                  style={{ position: "absolute", right: 8, top: 8 }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <img
                  src="/assets/qrcode.jpeg"
                  alt="Pix Modal"
                  style={{ width: "100%" }}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handlePixFinalizarCompra}
                  variant="contained"
                  color="primary"
                >
                  Finalizar compra
                </Button>
              </DialogActions>
            </Dialog>
            <Box style={{ marginTop: "16px" }}>
              {formasPagamento.map((fp) => (
                <Button
                  key={fp.COD_FORMA_PAGTO}
                  variant="outlined"
                  startIcon={<PaymentIcon />}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "8px",
                    width: "100%",
                    textTransform: "none",
                  }}
                  onClick={() => handleFinalizarCompra(fp)}
                >
                  {fp.DCR_FORMA_PAGTO}
                </Button>
              ))}
            </Box>
            <Typography variant="subtitle1" style={{ marginTop: "16px" }}>
              Adicione um novo cartão
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              style={{ marginTop: "8px" }}
              onClick={() => navigate("/formas-pagamento/add")}
            >
              Adicionar novo cartão
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: "24px" }}>
            <Typography variant="h6" gutterBottom>
              Seu pedido em:
            </Typography>
            <Typography variant="h5">
              Quentinha da Esmeralda - Salobrinho
            </Typography>
            <Typography variant="body2" color="red">
              Ver Cardápio
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              style={{ marginTop: "16px" }}
            >
              <Typography variant="body1">
                1x Marmita Feijoada completa
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  color="red"
                  style={{ cursor: "pointer" }}
                >
                  Editar
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ cursor: "pointer" }}
                >
                  Remover
                </Typography>
              </Box>
            </Box>
            <Divider style={{ margin: "16px 0" }} />
            <Box display="flex" alignItems="center">
              <LocalOfferIcon style={{ marginRight: "8px" }} />
              <Typography variant="body1">Cupom</Typography>
            </Box>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Código do Cupom"
              fullWidth
              style={{ marginTop: "8px" }}
            />
            <Typography variant="body2" style={{ marginTop: "16px" }}>
              Subtotal: R$ ---
            </Typography>
            <Typography variant="body2">Taxa de serviço: R$ ---</Typography>
            <Typography variant="body2">Entrega: R$ ---</Typography>
            <Divider style={{ margin: "16px 0" }} />
            <Typography variant="h6">Total: R$ ---</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListarFormasPagamento;
