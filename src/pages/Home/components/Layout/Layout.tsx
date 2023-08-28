import s from "./Layout.module.scss";
interface ILayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
