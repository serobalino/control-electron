// db.ts
import sql, { ConnectionPool } from 'mssql';

const config1: sql.config = {
    server: 'nombre_servidor_1',
    database: 'nombre_base_datos_1',
    options: {
        trustedConnection: true,
        encrypt: true,
    },
};

const config2: sql.config = {
    server: 'nombre_servidor_2',
    database: 'nombre_base_datos_2',
    options: {
        trustedConnection: true,
        encrypt: true,
    },
};

let db: ConnectionPool;

async function connectToDatabase(selectedDatabase: string) {
    if (selectedDatabase === 'database1') {
        db = new sql.ConnectionPool(config1);
    } else if (selectedDatabase === 'database2') {
        db = new sql.ConnectionPool(config2);
    } else {
        throw new Error('Base de datos no válida.');
    }

    try {
        await db.connect();
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (err) {
        throw new Error('Error al conectar con la base de datos: ' + err.message);
    }
}

function getDatabaseConnection(): ConnectionPool {
    if (!db) {
        throw new Error('Conexión a la base de datos no establecida.');
    }
    return db;
}

export { connectToDatabase, getDatabaseConnection };
