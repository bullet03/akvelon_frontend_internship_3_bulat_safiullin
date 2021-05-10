import React from "react"
import { Route, Switch } from "react-router-dom";
import CodingFunctions from "./components/CodingFunctions/CodingFunctions";
import Registartion from "./components/Registration";
import Slider from './components/Slider'
import Header from './components/Header'
import styles from './App.module.css'

function App() {
  return (
    <section className={styles.wrapper}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Slider />
        </Route>
        <Route path="/registration">
          <Registartion />
        </Route>
        <Route path="/functions">
          <CodingFunctions />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
