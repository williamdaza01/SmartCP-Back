# SmartCP-Back

## Instrucciones de Ejecución

Para poner en marcha este proyecto, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/williamdaza01/SmartCP-Back.git
   ```

   O bien, descarga el proyecto en formato ZIP y extráelo en tu sistema.

2. Navega al directorio raíz del proyecto:

   ```bash
   cd SmartCP-Back
   ```

3. Instala las dependencias del proyecto ejecutando:

   ```bash
   npm install
   ```

4. Inicia la aplicación en modo de desarrollo con el siguiente comando:

   ```bash
   npm run start-dev
   ```

   Esto iniciará el servidor y podrás acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

## Estructura de Directorios y Archivos

La estructura de este proyecto se organiza de la siguiente manera:

```
.:
est.txt
index.js
node_modules/
package.json
package-lock.json
README.md
src/
template.html
vercel.json
```

- **est.txt:** Archivo de texto que puede contener información adicional o registros.

- **index.js:** Archivo principal de la aplicación Node.js.

- **node_modules/:** Directorio que contiene las dependencias de tu proyecto.

- **package.json:** Archivo de configuración del proyecto que incluye información sobre las dependencias y comandos de ejecución.

- **package-lock.json:** Archivo generado que almacena información detallada sobre las dependencias.

- **README.md:** Este archivo que proporciona información sobre el proyecto.

- **src/:** Directorio principal de la aplicación.

  - **Controllers/:** Directorio que contiene controladores de la aplicación.

    - **ReserveController.js**
    - **SquareController.js**
    - **StationController.js**
    - **UserController.js**

  - **Models/:** Directorio que contiene modelos de datos de la aplicación.

    - **ReserveModel.js**
    - **SquareModel.js**
    - **StationModel.js**
    - **UserModel.js**

  - **Routers/:** Directorio que contiene rutas de la aplicación.

    - **router.js**

  - **utils/:** Directorio que puede contener utilidades o archivos de utilidad.

- **template.html:** Archivo HTML que puede ser utilizado en tu aplicación.

- **vercel.json:** Archivo de configuración de Vercel que define la configuración de despliegue para tu proyecto.
