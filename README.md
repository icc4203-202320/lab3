
**Nombres de integrantes del grupo**: (completar aquí)
# Proyecto 1.3 - Primera aproximación al Frontend Web Móvil con React

En este laboratorio desarrollarás una parte del frontend de la aplicación Travel Log, utilizando React.

Los objetivos son:

* Familiarizarse con la arquitectura de aplicación React con múltiples componentes de primer nivel, utilizando enrutamiento de tipo _hash routing_ con React.
* Comprender cómo proveer navegabilidad entre los componentes.
* Familiarizarse con uso de CSS en React.
* Familiarizarse con componentes de biblioteca MUI.
* Desarrollar primeras llamadas al backend.

## Arquitectura de la aplicación de frontend

La aplicación de este proyecto base está constituida por varios componentes que puedes encontrar en `src/components`. Existen ciertos componentes de nivel página, como `HomePage`, `Trips Page`, `SearchPage`, `MapPage`, `SearchPage`, etc., y otros componentes enfocados en proveer una funcionalidad y experiencia de navegación por la aplicación, como `TopNav` y `BottomBar`.

Te recomendamos revisar estos componentes para que puedas ver las bibliotecas (módulos) utilizados, con componentes y hooks externos incorporados a la aplicación.

La aplicación utiliza componentes de interfaz de usuario de la biblioteca [MUI](https://mui.com/), la cual es una adaptación de componentes de Material UI de Google para React.

## Configuración de la aplicación de frontend

Los parámetros de configuración de la aplicación de frontend son los siguientes:

* `AUTH_TOKEN`: La aplicación base no tiene un formulario de acceso (login) de usuario. Por lo tanto, si se requiere conectar con _endpoints_ de _backend_, se puede enviar un token configurable en el archivo `constants.js`. La generación de este token se realiza mediante la misma llamada a backend vista en el [laboratorio 1](https://github.com/icc4203-202320/lab1).
* `baseUrl`: Esta variable declarada en index.js contiene la URL del backend. El _hostname_ es obtenido a través del objeto `window` de la API del DOM. El número de puerto para usar el backend en modo producción (docker) es el 9090. Si se usa el backend en modo desarrollo, entonces se puede modificar esta variable y dejar en 3000.

## Estilos de CSS

En `App.css` están definidos los estilos personalizados que son aplicados a los componentes de la aplicación. Se puede ver que contenedores y elementos de navegación se ajustan a un RWD usando _media queries_. Sin embargo, no hay trato especial con base la orientación del dispositivo móvil vertical u horizontal, sino que sólo se considera el ancho de la vista.

En este proyecto, podrán modificar los estilos de CSS, y ajustarlos para que la aplicación se asemeje al diseño que han prototipado. Además, parte de la evaluación consistirá en que el RWD opere de forma óptima y en casos en donde sea pertinente aprovechar la orientación horizontal/vertical del dispositivo.

## Enrutamiento de tipo hash (_hash routing_)





## Vamos a la acción



## Referencias


