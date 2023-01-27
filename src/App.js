import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetailScreen from "./components/detailComponents/DetailScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/new-recipe" element={<NewRecipeScreen />}></Route>
        <Route path="/recipes/:recipeId" element={<DetailScreen />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
