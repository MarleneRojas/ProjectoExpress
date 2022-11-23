import mongoose from 'mongoose';
import logger from './winston';

class MongooseOdm {
    // Constructor de la clase
    constructor(url) {
        this.url = url;
    }

    // Metodo para conectar a la BD
    async connect() {
        try {
            // Configuracion que requiere mongoose
            mongoose.Promise = global.Promise;
            logger.info(`🛸Conectando a la DB: ${this.url}`);
            // Intento de conexion 
            const connection = await mongoose.connect(this.url);
            return connection;
        } catch (error) {
            logger.error(
                `🦋 No se pudo realizar la conexion debido a: ${error.message}`
            );
            return false;
        }
    }
}
export default MongooseOdm;
