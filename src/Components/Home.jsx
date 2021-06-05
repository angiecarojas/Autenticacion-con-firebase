import React from "react";
const Home = () => {
  return (
    <div className="container md:w-3/4 mx-auto mt-20 mb-10">
      <h1 className="font-bold text-center mx-auto text-5xl my-5">
        Crud con Login
      </h1>
      <p className="w-11/12 lg:w-3/4 mx-auto text-3xl mb-10">
        Crud e inicio de sesion con autenticacionconectado a firebase.
      </p>
      <p className="w-11/12 lg:w-3/4 text-3xl mx-auto">
        Este proyecto esta creado con React.js y firebase tanto como 
        base de datos y tambien como en la autenticacion de usuarios.
      </p>
    </div>
  );
};

export default Home;
