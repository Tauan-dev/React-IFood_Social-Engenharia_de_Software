import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function Card() {
  return (
    <ImageList sx={{ width: "98.5vw", height: "100vh" }} cols={3}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ width: "100%", height: "100%" }}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Café da manhã",
    author: "Café da Maria",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "X-Tudo",
    author: "O hamburgão",
  },
  {
    img: "/assets/pizza-5275191_1280.jpg",
    title: "Pizza",
    author: "Cantina italiana",
  },
  {
    img: "/assets/charcuterie-338498_1280.jpg",
    title: "Churrasco",
    author: "Boteco Gaúcho",
    cols: 2,
  },
  {
    img: "/assets/cake-1869227_1280.jpg",
    title: "Torta de pessêgo",
    author: "Torta da Katie",
    cols: 2,
  },
  {
    img: "/assets/food-712665_1280.jpg",
    title: "Sushi",
    author: "O Japa",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "/assets/pasta-3547078_1280.jpg",
    title: "Macarronada",
    author: "Cantina italiana",
  },
  {
    img: "/assets/tart-1283822_1280.jpg",
    title: "Torta de morango",
    author: "Torta da Katie",
  },
  {
    img: "/assets/pancakes-2291908_1280.jpg",
    title: "Panqueca",
    author: "Café da Maria",
    rows: 2,
    cols: 2,
  },
];
