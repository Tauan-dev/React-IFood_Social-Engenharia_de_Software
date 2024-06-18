import React, { useState, useEffect } from "react";
import api from "../../api";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";

const ListarEntregas = () => {
  const [entregas, setEntregas] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedEntrega, setSelectedEntrega] = useState(null);

  useEffect(() => {
    const fetchEntregas = async () => {
      try {
        const response = await api.get("/entregas");
        setEntregas(response.data);
      } catch (error) {
        console.error("Erro ao carregar entregas", error);
      }
    };

    fetchEntregas();
  }, []);

  const handleClickOpen = (entrega) => {
    setSelectedEntrega(entrega);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEntrega(null);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "24px" }}>
      <Typography variant="h4" gutterBottom>
        Listar Entregas
      </Typography>
      <Grid container spacing={3}>
        {entregas.map((entrega) => (
          <Grid item xs={12} sm={6} md={4} key={entrega.COD_ENTREGA}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Pedido #{entrega.COD_PEDIDO}
                </Typography>
                <Box display="flex" alignItems="center" mb={1}>
                  <DeliveryDiningIcon style={{ marginRight: "8px" }} />
                  <Typography variant="body2">
                    Funcionário: {entrega.COD_FUNCIONARIO}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <LocationOnIcon style={{ marginRight: "8px" }} />
                  <Typography variant="body2">
                    Endereço: {entrega.DCR_ENDERECO}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <AttachMoneyIcon style={{ marginRight: "8px" }} />
                  <Typography variant="body2">
                    Valor: R$ {entrega.VLR_ENTREGA.toFixed(2)}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <Typography variant="body2">
                    Complemento: {entrega.DCR_COMPLEM}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleClickOpen(entrega)}
                >
                  Detalhar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedEntrega && (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle>
            Detalhes da Entrega #{selectedEntrega.COD_ENTREGA}
          </DialogTitle>
          <DialogContent>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOnIcon style={{ marginRight: "8px" }} />
              <Typography variant="body2">
                Referência: {selectedEntrega.TXT_REFERENCIA}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body2">
                Cidade: {selectedEntrega.COD_CIDADE}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body2">
                Bairro: {selectedEntrega.COD_BAIRRO}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body2">
                Localidade: {selectedEntrega.COD_LOCALIDADE}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body2">
                Encomenda: {selectedEntrega.FLAG_ENCOMENDA}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body2">
                Entregador: {selectedEntrega.FLAG_ENTREGADOR}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body2">
                Saída: {new Date(selectedEntrega.DATA_SAIDA).toLocaleString()}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body2">
                Entrega:{" "}
                {new Date(selectedEntrega.DATA_ENTREGA).toLocaleString()}
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default ListarEntregas;
