Descripción del Proyecto

El frontend del proyecto fue desarrollado utilizando Angular. La aplicación permite a los usuarios seleccionar un país y una ciudad, ingresar un presupuesto en COP, y obtener información sobre el clima en la ciudad seleccionada, así como la conversión del presupuesto a la moneda local.
2. Estructura del Proyecto

    src/app/components: Contiene los componentes de la aplicación.
        plan-viaje: Componente que permite seleccionar el país y la ciudad.
        presupuesto: Componente que permite ingresar el presupuesto en COP.
        fin-plan: Componente que muestra el resumen del plan de viaje.
        historico: Componente que muestra el historial de viajes.
    src/app/services: Contiene los servicios que se comunican con el backend.
        pais.service.ts: Servicio para manejar la lógica relacionada con los países.
        ciudad.service.ts: Servicio para manejar la lógica relacionada con las ciudades.
        fin-plan.service.ts: Servicio para manejar el almacenamiento del historial de viajes.
    src/assets/i18n: Contiene los archivos de traducción para los diferentes idiomas soportados en la aplicación.

3. Rutas

    /plan-viaje: Pantalla principal donde el usuario selecciona el país y la ciudad.
    /presupuesto: Pantalla para ingresar el presupuesto.
    /fin-plan: Pantalla de resumen del plan de viaje.
    /historico: Pantalla que muestra el historial de viajes.

4. Funcionalidades

    Selección de País y Ciudad: Utilizando un dropdown, el usuario puede seleccionar el país y la ciudad. Los datos se cargan dinámicamente desde el backend.
    Ingreso de Presupuesto: Se ingresa el presupuesto en COP, y se valida que sea un número positivo.
    Resumen del Plan de Viaje: Se muestra un resumen que incluye el clima, la conversión de moneda, y los datos seleccionados por el usuario.
    Historial de Viajes: Se muestra un historial de las consultas anteriores del usuario, incluyendo los datos de clima y moneda.

5. Servicios

    Interacción con el Backend: Los servicios de Angular se utilizan para interactuar con la API del backend y obtener los datos necesarios.
    Servicio de Traducción: Se utiliza @ngx-translate/core para implementar el cambio de idioma en toda la aplicación.

6. Responsividad

La aplicación está diseñada para ser responsive, utilizando Bootstrap para asegurar que se vea bien en dispositivos móviles, tablets, y pantallas grandes.
7. Pruebas

Se realizaron pruebas en diferentes navegadores y dispositivos para asegurar la funcionalidad correcta en todas las plataformas.
8. Despliegue

El frontend está preparado para ser desplegado en un servidor web. Los archivos compilados están en la carpeta dist/, listos para ser servidos por un servidor HTTP.# front-plan-viaje
