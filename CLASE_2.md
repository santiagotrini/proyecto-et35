# Unidad 1 - Clase 2

## Gestión de la integración del proyecto

De acuerdo al PMBOK, el área de integración tiene seis procesos. El propósito
de esta área es coordinar, combinar y unificar los procesos de la dirección
de proyectos pertenecientes a otras áreas. Nos interesan tres procesos tal
como los describe el PMBOK:
* **4.1** Desarrollar el acta de constitución del proyecto.
* **4.4** Monitorear y controlar el trabajo del proyecto.
* **4.5** Realizar el control integrado de cambios.

### Desarrollar el acta de constitución del proyecto

Este proceso se lleva a cabo prácticamente en cualquier proyecto. Se trata
básicamente de conseguir autorización por escrito para iniciar un proyecto. Es
por supuesto indispensable si se trata de un proyecto que requiere destinar
recursos financieros o de algún tipo y es lo primero que se hace en un proyecto.
Es el proceso que lo inicia. Requiere algún tipo de formalidad, por ejemplo, la
firma de alguna autoridad por encima del proyecto que se va a llevar a cabo.
Para el PMBOK el documento que se firma y da origen al proyecto se denomina
acta de constitución del proyecto. Lo que típicamente da origen al proyecto y
aparece por escrito en esa acta es lo que se conoce en la jerga como _SOW_ o
**enunciado de trabajo** del proyecto. Un enunciado de trabajo típico es el
pedido de un cliente que se nos acerca pidiendo la implementación de algún
sistema de información en particular.

#### Caso de negocio

Hay que diferenciar el enunciado de trabajo de lo que el PMBOK llama **caso de
negocio**. Esto último es la necesidad que da origen al proyecto y se pueden
distinguir al menos siete tipos diferentes:
* Demanda del mercado
* Necesidad de la organización
* Solicitud de un cliente
* Avance tecnológico
* Requisito legal
* Impacto ecológico
* Necesidad social

#### Acta de constitución del proyecto

Para el PMBOK la salida de este proceso es el acta con toda la información
preliminar del proyecto
Algunas cosas que suelen aparecer por escrito al iniciar un proyecto son:
* El propósito o justificación del proyecto
* Los objetivos y requisitos
* Los supuestos y restricciones
* Los límites del proyecto
* El cronograma de hitos
* El presupuesto preliminar
* La lista de interesados
* El director del proyecto y el patrocinador

### Monitorear el trabajo del proyecto y realizar el control integrado de cambios

Estos dos procesos del área de integración son importantes para nosotros porque
en ingeniería de software tenemos una herramienta de uso muy difundido que
automatiza parte de estos procesos. Esa herramienta es un **VCS** (_version control system_)
y la que vamos a utilizar es Git. Básicamente estos dos procesos nos hablan
de la importancia de saber quién, cómo y cuándo se introducen cambios en el
proyecto. Ya sea trabajo previamente acordado en la definición del alcance, o
cambios propuestos más adelante en el ciclo de vida del proyecto. Un VCS nos
da la posibilidad de revisar la historia completa del desarrollo (al menos la parte
de implementación y _testing_) del proyecto. Además se debe proveer un mecanismo
formal para introducir cambios en el proyecto. Por ejemplo si se desea agregar
una nueva característica a un sistema no definida al inicio, o cambiar una librería
de software por otra más nueva.


## Licencias

### Derecho de autor

### GNU GPLv3

### Apache License 2.0

### MIT License

### The Unlicense

## Gestión del alcance del proyecto

El alcance de un proyecto es el producto o servicio que se desea completar en el proyecto. Pero tambien son los resultados que se esperan obtener del proyecto, cómo ganancias, satisfacción de los interesados, etc. El alcance del proyecto debe determinar qué trabajo es parte del proyecto y que se debe entregar o proveer, y también debe definir los límites del proyecto, lo que no es parte del mismo. En general, cuando se inicia un proyecto, antes de la fase de planificación propiamente dicha, tenemos una idea general de que queremos hacer. La idea de definir el alcance del proyecto es la de refinar esos requisitos de alto nivel lo mejor posible. Mientras más esfuerzo pongamos en definir el alcance, menos cambios tendremos que hacer a lo largo de la ejecución del mismo. Esto nos ahorra mayores costos o esfuerzo en la ejecución del proyecto. Además sirve como pauta para la satisfacción de todos los interesados y como línea de control durante el desarrollo del proyecto.

Nos interesan los siguientes procesos de esta área:
* **5.2** Recopilar requisitos
* **5.3** Definir el alcance
* **5.4** Crear la EDT
* **5.5** Validar el alcance

### Recolección y análisis de requisitos

Los requisitos son las características que deben cumplir los entregables del proyecto. Generalmente los interesados del proyecto definen los requisitos. Los requisitos deben ser documentados para poder ser usados en la planificación, y para tener constancia de qué se espera de manera precisa del producto a entregar. Forman un mínimo de lo que se espera, y por lo tanto sirven para controlar el progreso del proyecto y que el mismo se ajuste a la calidad deseada en el resultado final. Decimos que los requisitos son funcionales cuándo describen qué debe hacer nuestro producto. Esto es muy común en ingeniería de software, generalmente los requisitos funcionales son las capacidades y funciones de nuestra aplicación. Los requisitos pueden también ser no funcionales (relativos a la calidad, diseño, costos, etc.).
Algunas técnicas de recolección de requisitos son:
* Entrevistas: con los interesados, generalmente los clientes o beneficiarios del proyecto.
* Análisis de documentos: de la organización a la que está destinada el proyecto.
* Cuestionarios (similar a las entrevistas).
* Prototipos (para descubrir requisitos que no se ven a primera vista).
* Observaciones: similar al prototipo, porque las entrevistas pueden dar requisitos incompletos.


 Lo importante es generar a través de estas y otras técnicas una documentación exhaustiva sobre los requisitos de nuestro proyecto y posteriormente realizar un análisis integral de los mismos. En el análisis de los requisitos buscaremos inconsistencias (requisitos incompatibles) o requisitos que no pueden ser alcanzados dadas las restricciones del proyecto (costo, tiempo, recursos humanos, etc.). También hay que eliminar las ambiguedades en los requisitos, y descartar cualquier requisito que no sea verificable, es decir, que no se pueda determinar en un tiempo finito si el proyecto cumple o no dicho requisito.

### Definición del alcance

Definir el alcance de un proyecto es dar una descripción detallada del proyecto y del producto a realizar. Es posible que no todos los requisitos encontrados en la etapa anterior pasen a formar parte del proyecto. En esta etapa se definen los requisitos definitivos a partir de la documentación generada en el paso anterior. El proceso de definir el alcance debe generar un documento con la descripción final del trabajo a realizar, qué es lo que se va a entregar, los supuestos y las restricciones. Aquí podemos definir también explícitamente que cosas no entran en el alcance del proyecto de modo que los interesados del proyecto no se lleven ninguna sorpresa más adelante. Este documento o enunciado debe contener lo siguiente:

* Descripción del alcance del producto.
* Criterios de aceptación.
* Entregables (los productos o servicios que son resultado del proyecto). Aquí pueden incluirse también los hitos.
* Exclusiones.
* Restricciones.
* Supuestos.


  Es importante que el trabajo final, lo que se entrega, esté bien definido, así como los hitos, que pueden marcar la finalización de una fase, generalmente con algún entregable asociado para verificación por parte de los interesados. Los hitos del proyecto marcan un momento en el qué se pueda controlar el progreso del proyecto y decidir por la continuación del mismo.

### Estructura de desglose del trabajo (EDT)

  La estructura de desglose del trabajo es el paso final en la definición del alcance del proyecto. Consiste en un gráfico jerárquico del trabajo a realizar para alcanzar los objetivos del proyecto. El primer nivel consiste en el proyecto entero, y a partir de ahí se descompone el proyecto en unidades cada vez más pequeñas. El objetivo de esta representación es llegar a un nivel dónde las unidades de trabajo sean más fáciles de estimar en su duración o costo, también conocidas como paquetes de trabajo o actividades. Por ejemplo, si el proyecto es el de construir una casa, una actividad en el último nivel de la EDT puede ser pasar los cables, o pintar la cocina, etc. Es importante respetar la jerarquización de las unidades de trabajo, y que en cada nivel esté contenido el esfuerzo total del proyecto. Esta herramienta hace más sencillo gestionar luego el cronograma y el presupuesto del proyecto. La siguiente imagen muestra un ejemplo de EDT.


![Ejemplo de EDT/WBS](img/edt3.png)     

## Cuestionario

1. Dar ejemplos y explicar cada uno de los casos de negocio mencionados.
2. ¿Qué son los supuestos de un proyecto?
3. ¿Qué se entiende por alcance de un proyecto?
4. pregunta
5. pregunta
6. pregunta
7. pregunta
8. pregunta
9. pregunta
10. pregunta

## Bibliografía

* AAVV. (2013). Guía de los fundamentos para la dirección de proyectos
(guía del PMBOK®) - Quinta edición.
* Heldman, K. (2013). PMP: Project Management Professional Exam Study Guide.
Sybex. (En inglés).
