// Creando los Actions Methods
// GET "/"

import configKeys from "../../config/configKeys";

// GET "/index"
const home = (req, res) => {
  // 1. Generando el view-model
  const viewModel = {
    title: 'Express',
    author: 'Angel Mora Jimenez',
  };

  // 2. Madamos a generar la vista con el Template Engine
  res.render('home/home', viewModel);
};

//GET "/about"
const about = (req, res) => {
  const viewModel = {
    appVersion: configKeys.appVersion,
  }
  res.render('home/about', viewModel);
};

// Exportando el Controlador
export default { home, about };
