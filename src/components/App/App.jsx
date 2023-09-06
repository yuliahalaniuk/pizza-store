import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import scss from "./App.module.scss";

function App() {
  return (
    <div className={scss.container}>
      <Header />
      <Categories />
    </div>
  );
}

export default App;
