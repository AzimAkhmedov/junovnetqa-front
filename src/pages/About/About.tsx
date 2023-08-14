import React from "react";
import s from "./About.module.scss";
import { Box, Typography } from "@mui/material";
import Stars from "../../assets/icons/Stars.png";
const About = () => {
  return (
    <div className={s.root}>
      <Box className={"container " + s.container}>
        <h1>О нас</h1>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          risus ac magna aliquam sagittis in a lorem. Proin molestie nunc quis
          molestie feugiat. Nam scelerisque, ante et auctor ornare, justo est
          consequat arcu, vitae pretium nunc erat sit amet nisi. Praesent
          bibendum nec massa ut consequat. Pellentesque tincidunt diam at
          fermentum consequat. Mauris ornare ex nibh, sed consectetur ante
          viverra et. Nullam sit amet ornare purus, ut pretium velit.
        </p>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          risus ac magna aliquam sagittis in a lorem. Proin molestie nunc quis
          molestie feugiat. Nam scelerisque, ante et auctor ornare, justo est
          consequat arcu, vitae pretium nunc erat sit amet nisi. Praesent
          bibendum nec massa ut consequat. Pellentesque tincidunt diam at
          fermentum consequat. Mauris ornare ex nibh, sed consectetur ante
          viverra et. Nullam sit amet ornare purus, ut pretium velit.
        </p>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          risus ac magna aliquam sagittis in a lorem. Proin molestie nunc quis
          molestie feugiat. Nam scelerisque, ante et auctor ornare, justo est
          consequat arcu, vitae pretium nunc erat sit amet nisi. Praesent
          bibendum nec massa ut consequat. Pellentesque tincidunt diam at
          fermentum consequat. Mauris ornare ex nibh, sed consectetur ante
          viverra et. Nullam sit amet ornare purus, ut pretium velit.
        </p>
        <img src={Stars} alt="" />
      </Box>
    </div>
  );
};

export default About;
