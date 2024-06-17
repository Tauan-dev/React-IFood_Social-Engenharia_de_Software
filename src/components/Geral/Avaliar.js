import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Rating,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AvalieNos = () => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = () => {
    alert(`Avaliação enviada: ${rating} estrelas`);
    // Aqui você pode adicionar lógica para enviar a avaliação para o servidor
    navigate("/");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "24px", textAlign: "center" }}>
            <img
              src="/assets/smiling-young-delivery-man-wearing-uniform-with-cap-holding-out-paper-food-package-front-isolated-orange-wall.jpg"
              alt="Delivery Man"
              style={{ width: "50%", marginBottom: "16px" }}
            />
            <Typography variant="h5" gutterBottom color="primary">
              Obrigado por comprar com a gente!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Nosso entregador já está a caminho, para entregar sua comida
            </Typography>
            <Typography variant="body2" gutterBottom>
              Gostou dos nossos serviços? Avalie-nos
            </Typography>
            <Rating
              name="rating"
              value={rating}
              precision={0.5}
              onChange={handleRatingChange}
              style={{ fontSize: "2rem", margin: "16px 0" }}
            />
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Enviar Avaliação
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AvalieNos;
