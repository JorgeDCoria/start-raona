### Prueba técnica — React developer - RAONA

# Bienvenido a Star Raona: Explora el Mundo del Cine

¡Hola y bienvenido a StarRaona! Estamos emocionados de tenerte a bordo en este emocionante viaje a través del fascinante mundo del cine. StarRaona es tu compañero perfecto para explorar, descubrir y disfrutar de una amplia gama de películas de todas las épocas, géneros y culturas.
**Lanzamos la primera etapa**, en la cual podras navegar y buscar las peliculas que te imaginas.

### Deploy

> Nuestro sitio, Visitanos => => [StartRaona](https://start-raona.vercel.app/)

## Table of Contents

1. [¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?](#cómo-decidió-las-opciones-técnicas-y-arquitectónicas-utilizadas-como-parte-de-su-solución)
2. [¿Hay alguna mejora que pueda hacer en su envío?](#hay-alguna-mejora-que-pueda-hacer-en-su-envío)
3. [¿Qué haría de manera diferente si se le asignara más tiempo?](#que-haria-de-manera-diferente-si-se-le-asignara-mas-tiempo)
4. [Instalacion](#instalacion)

## ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

En la realización de este proyecto, emplee un conjunto de tecnologías y enfoques que han sido solicitados, sim embargo tengo en claro que las mismas garantizan la solidez, escalabilidad y mantenibilidad de la solución.

Para el desarrollo de la interfaz de usuario, he utilizado la combinación de React y TypeScript. React proporciona una estructura eficiente para construir componentes reutilizables, mientras que TypeScript agrega una capa adicional de seguridad y claridad al código mediante la definición de tipos robustos. Esto es especialmente beneficioso para proyectos a largo plazo, ya que ayuda a prevenir errores y facilita la colaboración en equipo.

La administración del estado se ha logrado utilizando Redux Toolkit, una herramienta que simplifica la gestión del estado global de la aplicación. Mediante "slices" y "actions", he organizado de manera eficiente los datos utilizados en el sistema.

En cuanto a los estilos, he optado por Sass (Syntactically Awesome Stylesheets) para crear hojas de estilo más estructuradas y mantenibles. La modularización de los estilos se ha logrado mediante la definición de estilos específicos para cada componente en archivos SCSS separados. Además, he establecido un conjunto de variables y configuraciones globales para garantizar la coherencia visual en todo el proyecto. Si bien es mi primer contacto con la tecnologia me llevo una muy buena impresion de la misma, aun queda mucho por aprender para lograr usarla de forma eficiente y escalable.

La arquitectura del proyecto sigue el enfoque similar al "Clean Architecture", que busca dividir las responsabilidades en capas claramente definidas. Esto se refleja en la estructura de directorios que he implementado:

- **pages** para las vistas.
- **components** para componentes reutilizables y estructuras de diseño.
- **styles** para los estilos de los componentes y definición de variables,
- **types** para definir los tipos de objetos.
- **redux** para el estado global gestionado con Redux.
- **services** para las peticiones a la API y modificaciones de estado,
- **adapter** para el mapeo de datos.
- **hooks** para los hooks personalizados.

La modularización y la organización del código contribuyen en gran medida a la escalabilidad del proyecto. Esto significa que, a medida que el proyecto evolucione y crezca, será más sencillo agregar nuevas funcionalidades y realizar cambios sin afectar otras partes del código.

En resumen, las decisiones en torno a las opciones técnicas y arquitectónicas se han basado con el objetivo de garantizar la escalabilidad, mantenibilidad y robustez de la solución desarrollada.

## ¿Hay alguna mejora que pueda hacer en su envío?

Sí, reconozco que aún hay una cantidad considerable de código por documentar.Además, como mencioné en el apartado anterior, este proyecto representa mi primer encuentro con Sass, por lo que soy consciente de que el código podría beneficiarse de las amplias capacidades que ofrece esta tecnología. Planeo aplicar mejoras que se centren en buenas prácticas y una mayor reutilización de código.

## ¿Qué haría de manera diferente si se le asignara más tiempo?

- Retomando el item anterior, consideraría dividir aún más los archivos de estilos para lograr una mejor modularización y organización..
- Profundizaría en el análisis y la implementación de la gestión de estados globales para asegurar un flujo de datos óptimo.
- implementar hooks personalizados.
- Definir Errores personalizados.
- Realizaría una investigación más exhaustiva sobre el diseño de la experiencia del usuario (UX) y trabajaría en la implementación de diseños que mejoren la usabilidad y estética del sistema.

## Instalacion

1. Clonar repositorio.
1. Ejecutar comando `npm install`.
1. Registrarse en [themoviedb](https://developer.themoviedb.org/docs). para obtener un api-key
1. Crear archivo `.env` y agregar las varibles de entorno:

```
VITE_APP_API_KEY=<registrarse en la api para obtener una api-key>
VITE_APP_MOVIE_BASE_URL="https://api.themoviedb.org/3/"
VITE_APP_IMAGE_BASE_URL="https://image.tmdb.org/t/p/w500/"
```

5. Abrir una terminal en la ubicacion del proyecto.
1. Ejecutar el comando `npm run dev`.
1. Listo!! Abres tu navegador y a explorar:
1. Consultar ante cualquier duda.

> Dado que nuestro proyecto se encuentra en su primera fase, es posible que encuentres algún error. Si te topas con algún problema, no dudes en ponerte en contacto con nosotros para que podamos abordarlo.
