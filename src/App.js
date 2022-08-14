import React from 'react';
// import './App.css';
// import WeatherApp from './Component/WeatherApp';
// import NavBar from './NavBar';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; 
// import { Route, Switch } from 'react-router-dom';
import TodoList from './TodoList/TodoList';
// import "./Component/css/style.css"

function App() {
  return (
    <>
    {/* <NavBar />
    <Switch>
      <Route exact path = "/" component={WeatherApp}/>
      <Route exact path = "/todolist" component={TodoList}/>
      <Route exact path = "/" component={WeatherApp}/>
    </Switch> */}

    <TodoList />
    </>
  );
}

export default App;
