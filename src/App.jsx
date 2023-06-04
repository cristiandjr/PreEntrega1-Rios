import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="w-full">
      <NavBar />
      <Header />


      <div>
        <h2 className="ml-10 mt-10 text-3xl font-bold">
            <span className="underline text-orange-500">Recomendados</span> del día
        </h2>
        <div className="mt-5 mb-10 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <ItemListContainer greeting="Soy un producto desde una props" />
          <ItemListContainer greeting="Soy un producto desde una props" />
          <ItemListContainer greeting="Soy un producto desde una props" />
          <ItemListContainer greeting="Soy un producto desde una props" />
          <ItemListContainer greeting="Soy un producto desde una props" />
          <ItemListContainer greeting="Soy un producto desde una props" />
        </div>
      </div>
    </div>
  );
};

export default App;
