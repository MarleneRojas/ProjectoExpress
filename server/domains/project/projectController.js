// Creando los Actions Methods
// del controlador Project

// GET "/project"
// GET "/project/list"
const list = (req, res) => {
  // 1. Generando el view-model
  const viewModel = {};
  // 2. Madamos a generar la vista con el Template Engine
  res.render('project/list', viewModel);
};

// GET "/project/add"
// GET "/project/create"
const showAddProjectForm = (req, res) => {
  const viewModel = {};
  res.render('project/add', viewModel);
};

// POST "/project/add"
// POST "/project/create"
const addProject = (req, res) => {
  // Rescatando la info del fornmulario
  const { validData, errorData: error } = req;
  let project = {};
  // objeto tendra datos para servir en la plantilla en las mostrar en interfaz grafica los errores
  let errorModel = {};
  // Desesctructurando y renombrando error de datos
  // Verificando si hay error de validación
  if (error) {
    // Rescatar los datos del formulario
    // que fallaron en la validacion
    project = error.value;
    // Quiero generrar un objeto que contenga
    // los campos con error y susu errores
    errorModel = error.inner.reduce((prev, curr) => {
      // Creando una variable temporal donde
      // guardare el elemento anterior
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
    // res.status(200).json({ error, project });
    // res.status(200).json({ errorModel, error });
  } else {
    // Desestructurando datos del formulario
    // const { validData: projectData } = req;
    // Si los datos del formulario fueron validos
    // Se asigna a project
    project = validData;
  }
  // Contestando los datos del proyecti
  res.status(200).render('project/add', { project, errorModel });
};

// Exportando el Controlador
export default { list, showAddProjectForm, addProject };
