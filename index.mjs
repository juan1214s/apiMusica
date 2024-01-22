import app from "./app.mjs";

const iniciarServidor = async () => {
  await app.listen(app.get("port"));
  console.log(`El servidor está escuchando en el puerto ${app.get("port")}`);
};

iniciarServidor();

