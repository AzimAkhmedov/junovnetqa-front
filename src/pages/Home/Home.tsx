import { useEffect } from "react";
import s from "./Home.module.scss";
import { Card, Layout } from "./components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllJobs } from "../../store/jobs";

const Home = () => {
  const dispatch = useAppDispatch();
  const { loading, error, errorMessage, jobs } = useAppSelector(
    (state) => state.jobs
  );
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (loading) {
    return (
      <Layout>
        <h1>Загрузка...</h1>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <h1>Ошибка! {errorMessage}</h1>
      </Layout>
    );
  }

  return (
    <div className={s.root}>
      <div className="container">
        <h1>Самые актуальные прфессии в IT на сегодняшний день!</h1>
      </div>

      <Layout>
        <div className={s.layout}>
          {jobs.length ? (
            jobs.map((e, i) => <Card text={e.job_title} key={i} />)
          ) : (
            <h3>К сожалению, пока пусто(</h3>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
