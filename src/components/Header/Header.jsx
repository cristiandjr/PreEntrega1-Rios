import Hero from "../../assets/img/hero.jpg";

const Header = () => {
  return (
    <div className="relative bg-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={Hero}
          alt="Imagen de hero"
        />
      </div>
      <div className="max-w-7xl mx-auto relative text-center">
        <h1 className="text-4xl font-extrabold text-black">
          ¡Bienvenid@ a CoderMmerce nuestra tienda en línea!
        </h1>
        <p className="mt-4 text-lg text-black">
        ¡Encuentra los mejores productos para todas tus necesidades!
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-block bg-gray-300 py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-200 transition-colors duration-300"
          >
            🛒 Explorar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
