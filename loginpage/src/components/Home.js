import React from "react";
import styles from "../css/Home.module.css";
import Card from "./Card";

const Home = (props) => {
  return (
    <Card className={styles.home}>
      <h1>Welcome Back!</h1>
    </Card>
  );
};

export default Home;
