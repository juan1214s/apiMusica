import fs from "fs";
import path from "path";

const basePath = 'C:\\Users\\juan1\\Documents';
const folderName = 'canciones';

const fullPath = path.resolve(basePath, folderName);

export const archivoMusica = (req, res) => {
    try {
        const archivos = fs.readdirSync(fullPath);
        let canciones = archivos.map((archivo, index) => ({
            id: index + 1,  // Asigna un id único basado en el índice del archivo
            nombre: archivo,
            url: `http://localhost:5000/canciones/${archivo}` // Utiliza una URL válida
        }));
      
        res.json(canciones);
    } catch (error) {
        console.error("Error al leer el directorio:", error);
        res.status(500).json('Error en el servidor');
    }
};
