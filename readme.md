# Proyecto 2 - Game boy simulation

> Crearemos una simulación de game boy de tal manera que se puedan mostrar diversas imágenes.

# Manejo
> Para que la game boy se encienda, debemos hacer click en el botón "start" y comenzará a sonar una música, así como se encenderá el led en amarillo y mostrará la pantalla inicial de Nintendo. <br>
> Para mostrar imágenes se pueden pulsar cualquiera de los botones siempre y cuando hayamos pulsado antes "start". <br>
> El botón reset nos llevará a la imagen inicial de Nintendo. 

# Desarrollo
> Establecemos los elementos a través de divs, siendo el div clase "gameboy" aquel que usaremos para la base incorportando  "box-shadow" para darle sombreado <br>
> Incluimos en nuestro archivo de CSS todos los estilos necesarios a traves de cada clase. Priorizamos el uso de flex por su versatilidad y el posicionamiento absoluto. Todas las unidades de medida generalmente serán relativas "em" excepto en casos concretos que usaremos px <br>
> Incluimos más divs, que compondrán la pantalla, el panel que lo rodea, el altavoz y los respectivos botones <br>
> En JS definimos las variables con sus respectivos id y utilizamos addEventListener para todos los botones que queremos accionar. <br> 
> También incluimos "powerOn" para que reconozca cuando está encendida o apagada la game boy dependiendo si hemos pulsado start o no (funcionando como un interruptor) para así bloquear los botones si está apagada<br>
>Inluimos música a través de newAudio incluyendolo en la funcióm, para que suene solo si start está accionado.
# Futuras implementaciones
> Incluir movimiento en los botones

# Copyright y licencia
> Uso libre
