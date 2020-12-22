# Proyecto MINTIC - UTP - Ciclo 3 - Semana4 5 Grupo 34

## Descripción

Elaborar un login

## Colaboradores
Rodrigo Gallo - Full Stack developer
Harvy Santiago Rosero - Full Stack developer
Alexander Montenegro - Full Stack developer
Ivan Gonzalez - Full Stack developer

### Contenido

## Portafolio de servicios

- Generar un sitio web público (landing page) en donde se debe encontrar:
  - Sección superior con un menú, el menú debe contar con:
    - Enlaces a las demás secciones del sitio (o páginas si han elegido crear este recurso) y contar con un botón de login. 
    - La sección superior también debe contar con:
      - Un banner (con al menos 3 imágenes que cambien tipo carrusel) de temática acorde al tipo de soluciones que se ofrezca.
  - Una sección de acuerdo a la información de su reto, donde se describan de manera general en qué sector y que tipo de soluciones ofrecen como empresa, un texto corto, infografía o imagen donde expresen el porqué las soluciones que ustedes ofrecen son de alta calidad.
  - Sección deberá contar con los servicios que la empresa ofrece, estos servicios deben: 
    - Ser gestionados desde el backend del proyecto y deberán contar con:
      - Un nombre o título
      - Imagen acorde al tipo de servicio o producto 
      - Descripción del mismo. 
      - Se recomienda crear una página independiente donde puedan detallar la investigación que se hizo acerca del producto y una mejor descripción de lo que ofrecerían o de la tecnología que utilizan en el servicio o producto ofertado.
  - Sección inferior donde creen algunos casos de éxito o testimonios de las soluciones que ustedes ofrecen, donde van a referenciar porque su solución fue exitosa, con:
    - Con una foto
    - Un texto 
    - El nombre de la persona y/o empresa, 
    - Recuerden que estos datos son de dummy y deberán ser construidos por los integrantes del
  equipo.
  - Un footer donde deberá estar:
    - La información de contacto, que podrían ser un par de correos electrónicos, 
    - Las diferentes ciudades donde trabajan
    - Un teléfono y celular (no utilizar números telefónicos reales)
    - También contener un enlace al repositorio del proyecto final de github, el repositorio debe ser público.

## Backend o Zona de Gestión
El backend o la zona de gestión, deberá contar con:
  - La administración de los servicios que se van a visualizar en el sitio web principal o Portafolio de Servicios
  - Los nombres de las rutas, componentes y demás aspectos técnicos están definidos en la sección requisitos obligatorios estructura backend. 
  - El backend implementará el módulo de autenticación realizado en la semana 3 para validar los usuarios y sus roles.
  - Zona de administración debe contar con la gestión o CRUD de:
    - Artículos 
    - Categorías (como dos elementos de nombre genérico independiente
  del servicios que se vaya a implementar) 
  - Usuarios allí mismo.
  - Para el manejo de rutas, se debe implementar el router-view con el fin de sacar provecho del poder de Vue y su característica de SPA.
  - El back deberá proveer una API que permitirá realizar las diferentes peticiones a sus componentes desde el landing page.

## Requisitos obligatorios estructura backend

- Usuario
  - /api/usuario/login
  - '/api/usuario/list'
  - '/api/usuario/add'
  - '/api/usuario/update'
  - '/api/usuario/activate'
  - '/api/usuario/deactivate'
- Categoría
  - '/api/usuario/list'
  - '/api/usuario/add'
  - '/api/usuario/update'
  - '/api/usuario/activate'
  - '/api/usuario/deactivate'
- Artículo
  - '/api/usuario/list'
  - '/api/usuario/add'
  - '/api/usuario/update'
  - '/api/usuario/activate'
  - '/api/usuario/deactivate'

### Modelos
- Usuario
  - Atributos
    - Rol
      - tipos posibles: Administrador, Vendedor, Almacenero
    - Nombre
    - Email
    - Estado
- Categoría
  - Atributos
    - Nombre
    - Descripción
    - Estado
- Artículo
  - Atributos
    - Código
    - Nombre
    - Descripción
    - Estado
    - Identificador de Categoría

## Estructura Frontend

- /public
  - /html
  - /images
  - /styles
  - index.html
- /src
  - /assets
    - /files
    - /images
  - /components
    - Articulo.vue
    - ArticuloData.vue
    - CasoCard.vue
    - Categoria.vue
    - HelloWorld.vue
    - home.vue
    - Login.vue
    - userData.vue
    - Usuario.vue
  - /plugins
    - vutify.js
  - /router
    - index.js
  - /store
    - index.js
  - /views 
    - Home.vue
  - App.vue
  - main.js

## Estructura Backend

- /config
  - config.json
- /controllers
  - ArticuloController.js
  - CategoriaController.js
  - UsuarioController.js
- /middlewares
- /migrations
- /models
  - articulo.js
  - categoria.js
  - usuario.js
  - index.js
- /routes
  - articulo.js
  - categoria.js
  - usuario.js
  - index.js
- /seeders
- /services
- token.js
- /test
- index.js

## Project setup
En ambos proyectos se debe correr:

```
npm install
```

### Compiles and hot-reloads for development of Forntend
```
npm run serve
```

### Compiles and hot-reloads for development of Backend
```
node server
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Proceso GIT

1. Crear repositorio GitHub 
   1. Ubicacion de github : https://github.com/
2. Crear branches de control de código
   1. Master o Main : Solo para Releases
   2. dev :  rama de desarrollo usada para controlar los pull requests de funcionaldiades subidas
3. Crear carpeta local 
   1. En windows con el comando 
   ```
   MD Directorio
   ```
   o
   ```
   MKDIR Directorioo 
   ```
4. Clonar repositorio 
   ```
   git clone repositorio
   ```
   ```
   git remote add origin URL_repositorio
   ```
5. Crear branch de trabajo 
   ```
   git checkout -b newbranch
   ```
6. Realizar sitio - Creado en VSCode (https://code.visualstudio.com/)
7. Guardar cambios en repositorio local 
   ```
   git add .
   ```
   ```
   git commit -m "Mensaje de commit"
   ```
8. Subir cambios a repositorio como branch nuevo
   ```
   git push origin newbranch
   ```
9.  Realizar pull request en github
   1. Usar funcionalidad  web en github
10. Hacer pull request en sitio local para actualizar
    ```
    git pull origin dev
    ```
12. Repetir desde el paso 4 hasta tener el sitio release listo


&copy; Copyright 2020 

