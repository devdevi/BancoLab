# Mejora Experiencia de App Banco Estado

![Mou icon](http://3.bp.blogspot.com/-aPDeH9T47oo/TwEPPCIEUTI/AAAAAAAAAxo/_SZ5DiQXHJk/s1600/banco+estado.png)

## Desarrollado para
[Laboratoria](https://laboratoria.la)
## Introducción
### Reto para hackaton:
>***Elige una app del App Store o Play Store que tenga muchas descargas pero que su experiencia no sea tan buena. Testéala, re-diséñala e impleménta tu versión mejorada.*** 

Dedicamos investigación primero una ronda entre cada uno de los miembros del equipo haciéndonos las siguientes preguntas: ¿Qué App que tengo en mi celular que uso regularmente tiene mala experiencia de usuario a mi parecer? el objetivo de esta pregunta era : 1. Establecer confianza entre los miembros; 2. Identificar  mala experiencia  usuario de una app que tenga altos índices de descarga o que fuera usada regularmente entre los miembros del equipo, este segundo punto con el fin para desarrollar un proyecto que pueda tener sentido para el staff completo.  
Luego de investigar en AppStore y PlayStore app que cumplieran con el requerimiento del reto, ideas e intercambios de opiniones en el equipo,  se realizó un listado preliminar:



Se realizó una votación, en la cual finalmente se decidió usar la App de Banco Estado por los siguientes motivos:

1. Pertenece a Banco Estado, el cual es de uso masivo entre los chilenos. Actualmente tiene 10.081 de valoraciones, si bien es de 3.6 el promedio, analizamos que el porcentaje de personas con puntuación de una estrella es el segundo mayor luego de la puntuación de 5 estrellas. Esto nos llevó a las siguientes preguntas: *¿Porqué la App de Banco Estado a pesar de tener una valoración superior al 2.5 es valorada por los usuarios de forma negativa?
¿O porqué la App es percibida en forma negativa si no está mal calificada?*




2. El equipo vió una oportunidad en el ámbito de trabajo técnico Front-end y un desafío en el aspecto UX.


Para responder nuestras preguntas, revisamos los comentarios de los usuarios en la PlayStore, percibiendo tres grandes categorías:

- Problemas técnicos de la plataforma de la app(tiempos de espera, mala conexión, problemas al logear o verificar transacciones, etc.), que consideramos salia del campo de acción y capacidades de cada una para este proyecto.

- Reclamos sobre la app en forma negativa pero sin una explicación de los motivos.

- Reclamos por funcionalidades que no están disponibles y que les gustaría que tuvieran.



Entre estas últimas calificaciones, encontramos una funcionalidad que muchos solicitaban para poder calificar en forma positiva la aplicación: la capacidad de transferir a terceros directamente desde el celular sin tener que pasar por el sitio web para agregar los destinatarios de la transacción:


Ante los reclamos de los usuarios Banco Estado responde activamente, no dando una solución a este problema de depósitos a terceros en el celular por el momento.

Con estos antecedentes decidimos definir nuestro proyecto con la mejora del flujo de usuario al tratar de depositar en el celular a terceros que no hayan sido guardados previamente desde el sitio web.

## UX Research

### User Proto-Personas 

Se realizó un user proto-persona en base a los comentarios de los usuarios en la playStore, [la misión y visión de Banco Estado en su sitio web](http://www.corporativo.bancoestado.cl/acerca-del-bancoestado/plan-estrat%C3%A9gico/misi%C3%B3n-visi%C3%B3n-y-valores-corporativos) y el [mapa estratégico de lineamientos, ámbito de clientes](http://www.corporativo.bancoestado.cl/acerca-del-bancoestado/plan-estrat%C3%A9gico/el-mapa-estrategico-bancoestado-2015---2018): *Liderazgo en Banca Masiva de personas.* Y los testimonios de personas cercanas que usan la aplicación. 


### User Proto-Persona 1
- **Nombre:** Camilo Gutierrez.

- **Ocupación:** Estudiante Universitario nocturno. Trabaja medio tiempo diurno.

- **Edad aproximada:** 20-30 años.

- **Clase Social:** clase media.

- **Comportamientos:** 
Usa su banco en el celular por qué estudia y trabaja a la vez por lo que entre los traslados aprovecha de pagar cuentas y deudas a sus amigos. 
Le gusta comprar por redes sociales a tiendas de su interés.

- **Necesidades y Objetivos:**
Necesita aprovechar los tiempos muertos que tiene entre los traslados desde el trabajo a su casa o a su trabajo en la noche.
Su trabajo no le permite acceder a su computador en el día para revisar sus cuentas desde el sitio web de escritorio.
Necesita un método rápido para pagar y depositar a personas nuevas desde el celular en forma constante, sin tener que usar el sitio web previamente. 

### User Proto-Persona 2

- **Nombre:** Daniela Pérez.

- **Ocupación:** Profesional emprendedora.

- **Edad aproximada:** 25 años.

- **Clase Social:** clase media.

- **Comportamientos:** 
Usa su banco en el celular por qué esté empezando un microemprendimiento de repostería a domicilio, y necesita comprar los ingredientes cuando tiene un encargo. Para ello deposita directemte a pequeños microemprendedores como ella.

- **Necesidades y Objetivos:**
Quedó desempleada hace poco, por lo que trata de no gastar en locomoción, comprando vía internet o por redes sociales insumos para su microemprendimiento. Tiene poco tiempo ya que tiene hijos que debe cuidar, por lo que necesita optimizar sus tiempos y facilitar sus trámites.

### User Proto-Persona 3

- **Nombre:** Claudio Fernandez.

- **Ocupación:** vendedor.

- **Edad aproximada:** 36 años.

- **Clase Social:** clase baja.

- **Comportamientos:** 
Es immigrante que obtuvo la nacionalidad hace pocos meses y está en el país trabajando jornada completa como vendedor de ropa. Tiene cuenta Rut y la ocupa para hacer todos sus pagos y trámites en el país. 

- **Necesidades y Objetivos:**
Necesita tener las funcionalidades necesarias para poder transferir a terceros por su celular ya que no posee un computador de escritorio personal del que puede disponer durante el día.
A veces se pierde en las calles y direcciones, por ello le hes más cómodo siempre utilizar su celular comó informativo.

### User Proto-Persona 4

- **Nombre:** Mariela Avendaño.

- **Ocupación:** estudiante enseñanza media.

- **Edad aproximada:** 17 años.

- **Clase Social:** clase baja.

- **Comportamientos:** 
Le gusta vitrinear online productos importados de china, le gusta el maquillaje y el k-pop, por lo que siempre compra en tiendas de facebook. Es asidua a las redes sociales y al uso de celular.

- **Necesidades y Objetivos:**
Está acostumbrada a la interacción con las nuevas tecnologías, por lo que percibe de manera natural usar la app móvil de su banco, no tiene mucha paciencia para planificar sus pagos vía desktop, le gusta pagar inmediatamente y en cualquier lugar para no complicarse la vida.

### User Proto-Persona 5

- **Nombre:** Roberto Lara.

- **Ocupación:** Ingeniero.

- **Edad aproximada:** 36 años.

- **Clase Social:** clase alta.

- **Comportamientos:** 
Viaja constamente dentro del país por motivos laborales, le gusta tener ordenadas sus finanzas y cuando era universitario usaba la cuenta rut Banco Estado. Ahora sigue usandola a modo de billetera virtual para no sobrepasarse en gastos planificados.

- **Necesidades y Objetivos:**
Es un usuario no muy recurrente a través de redes sociales, pero que en algunas ocasiones utiliza su banca móvil de cuenta-rut, en general está acostumbrado a otras app de bancos mejor calificadas en experiencia de usuario en la playStore.


## Estudio de contenidos

Se realizó un estudio de los contenidos solicitados por banco estado en el sitio online para ingresar una nueva cuenta de destino, y que sea guardada con el fin de replicar y optimizar el task flow seleccionado.


Acción Usuario| soluciones propuestas| 
------------ | ------------- 
Ingresar rápidamente para transferir | botón transferir en home y en mis productos 
Entender rápidamente donde está la información que busco| botón de notificaciones en home, barra superior. Nueva jerarquía visual en general.
Facilitar los pasos para realizar el flujo de tarea de usuario | indicadores de colores para indicar acciones en botones, destacar información.
indicar los pasos que debe serguir dentro del proceso  | se mantiene los pasos porqué es posible que confundan al usuario se si cambian los pasos en forma repetina.
Ofrecer una imagen de cercanía sin quitar la formalidad de un banco| iconos de mano aprobando al confirmar datos previos al depósito, uso de fotografías para las cuentas frecuentes que se guardan desde el celular.


![IMG](http://i66.tinypic.com/13zbjwj.png)

### Task Flow
Este task Flow de hizo analizando los puntos que requiere agregar una nueva cuenta para hacer un despósito.





### Scketch
Se hizo un scketch preliminar que se llevó a un programa de prototypado para ser testeado el flujo de tarea y luego construir el wireframe mas rápido.


### Wireframe alta Calidad
Se dedidió hacer un prototipo de alta fidelidad para poder ser entregado al equipo front y así desarrollar de mejor manera, por ello se realizó en Figma que permite copiar el código en CSS.




[Wireframe](https://www.figma.com/proto/gncudFk7eiSc5dnY5wZBj6rS/Banco-Estado?scaling=contain&node-id=3%3A1)

[Acceso al proyecto en Figma](https://www.figma.com/file/gncudFk7eiSc5dnY5wZBj6rS/Banco-Estado)

### Testeo

#### Objetivos:
Probar Flujo de tarea
Testear jerarquía visual
Accesibilidad
Si facilita la experiencia de usuario

#### Introducción:
Eres usuario de la app de banco estado y necesitas devolver el monto que tu amiga te prestó en el último carrete, pero ella está de vacaciones, para ello usas tú aplicación móvil para depositar a través de la banca móvil. Los datos de su cuenta te los envío por WhatsApp, porque no la tienes registrada como cuenta frecuente de destino. ¿Cómo harías el depósito a través de tu app móvil?
El pago es a través de tu cuenta RUT,  el monto $ 20.000. pesos y el nombre de tu amiga es María. 


#### Resultados
El primer testeo a una joven de 22 años usuaria frecuente de célular, terminó antes de que ejecutara la tarea completa por problemas técnicos del dispositivo en el cual se hizo el testeo (celular) hasta el comienzo de la tarea, siguió sin problemas las pasos esperados. 


[Testeo Video 1](https://drive.google.com/file/d/1AevmMTl0M5_3RJShUtyvf6ZxzMW_cKph/view?usp=sharing)
No finalizado por problemas técnicos del dispositivo.

## Conclusiones
Esperamos que los testeos que deben realizarse puedan darnos un feedback que sirva para verificar nuestras hipótesis. Los testeos previos en forma informal si verifican que el flujo de la tarea es fácil de realizar, pero se necesita más tiempo para poder verificarlo en otros usuarios potenciales.


##### Herramientas
***Front:***
React
Dependencias de Bootstrap
Creación de componentes (8)
API Rut
GitHub

***UX***
Skecktches a mano alzada
Personas
Investigación cuantitativa
Entrevistas en vivo
Prototipo de Figma
Github




