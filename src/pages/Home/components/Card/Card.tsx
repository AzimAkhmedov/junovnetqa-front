import styles from "./Card.module.scss";
interface ICardProps {
  text: string;
}
const Card = ({ text }: ICardProps) => {
  return <div className={styles.card}>{text}</div>;
};

export default Card;
