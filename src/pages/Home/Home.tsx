import React from "react";
import s from "./Home.module.scss";
import { Card } from "./components";
const data = [
  {
    text: "нагрузочное тестирование",
  },
  {
    text: "ручное тестирование",
  },
  {
    text: "backend разработчик",
  },
  {
    text: "frontend разработчик",
  },
  {
    text: "разработка на Python",
  },
  {
    text: "разработка на Java",
  },
  {
    text: "data science",
  },
  {
    text: "fullstack разработчик",
  },
];
const Home = () => {
  return (
    <div className={s.root}>
      <div className="container">
        <h1>Самые актуальные прфессии в IT на сегодняшний день!</h1>
      </div>
      <div className={s.content}>
        <div className="container">
          <div className={s.layout}>
            {data.map((e, i) => (
              <Card text={e.text} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
