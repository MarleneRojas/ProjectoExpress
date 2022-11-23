// Importamos la dependencia de dotEnv
import dotEnv from 'dotenv';

// Cargar las variables de entorno
dotEnv.config();

// Creando un objeto de configuracion
const defaultConfig = {
  port: process.env.port || 3000,
  appVersion: process.env.APP_VERSION,
};

// Crear una configuracion para desarrollo
const devConfig = {
  env: 'develoment',
  mongoUrl: process.env.DEV_DATABASE_URL,
  debug: process.env.DEBUG,
};

// Configuracion para produccion
const prodConfig = {
  env: 'production',
  mongoUrl: 'cloud url',
};

// Funcion que dado en el entorno de ejecucion
// nos retorne el objeto de configuracion adecuado
function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'production':
      return prodConfig;
    default:
      return prodConfig;
  }
}

// Exportar la configuracion
export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
