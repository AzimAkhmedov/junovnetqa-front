import { Box } from "@mui/material";
import s from "./Help.module.scss";
import { Layout } from "../../components";
const Help = () => {
  return (
    <div className={s.root + " container"}>
      <Layout>
        <h1>Добро пожаловать друг!</h1>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          risus ac magna aliquam sagittis in a lorem. Proin molestie nunc quis
          molestie feugiat. Nam scelerisque, ante et auctor ornare, justo est
          consequat arcu, vitae pretium nunc erat sit amet nisi. Praesent
          bibendum nec massa ut consequat. Pellentesque tincidunt diam at
          fermentum consequat. Mauris ornare ex nibh, sed consectetur ante
          viverra et. Nullam sit amet ornare purus, ut pretium velit.
        </p>
        <div className={s.info}>
          <div className={s.banner}>
            <h2>Как устроен наш сайт?</h2>
            <p>
              orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vitae risus ac magna aliquam sagittis in a lorem. Proin molestie
              nunc quis molestie feugiat. Nam scelerisque, ante et auctor
              ornare, justo est consequat arcu, vitae pretium nunc erat sit amet
              nisi. Praesent bibendum nec massa ut consequat. Pellentesque
              tincidunt diam at fermentum consequat. Mauris ornare ex nibh, sed
              consectetur ante viverra et. Nullam sit amet ornare purus, ut
              pretium velit.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Help;
