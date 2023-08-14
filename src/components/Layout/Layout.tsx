import s from "./Layout.module.scss";
import Stars from "../../assets/icons/Stars.png";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={s.root}>
      {children}
      <img src={Stars} alt="" />
    </div>
  );
};

export default Layout;
