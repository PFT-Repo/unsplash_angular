# UnsplashAngular
Proyecto de Angular en donde se despliegan imagenes aleatorias de la API de Unsplash.

<a href="https://www.codefactor.io/repository/github/pft-repo/unsplash_angular/overview/master"><img src="https://www.codefactor.io/repository/github/pft-repo/unsplash_angular/badge/master" alt="CodeFactor" /></a>

## Background | Problema a solucionar

Este proyecto fue realizado para cumplir los aspectos básicos de la prueba de <a href='https://nuwe.io/dev/competitions/vueling-tech-hack'>Vueling Tech Hack</a> patrocinado por <a href="https://nuwe.io/">Nuwe.io</a>

## Usage
Antes de comenzar a profundizar en los documentos del proyecto, vamos a explorar el sencillo uso de la aplicación.
<a href="https://unsplash-angular-gzvi.vercel.app/">Live Demo</a>
Como podemos observar en la Demo, la app consta de un boton que al presionarlo, despliega una serie de imagenes aleatorias traidas de la API de Unsplash en un contenedor del tipo Masonry.

## Solución adoptada

Mi solución fue crear un servicio llamado unsplash service que detallaré más adelante donde consigo recuperar imagenes de forma aleatoria de la api propia de unsplash.

Decidí dejarme llevar por el diseño propuesto en el reto, utilizando la misma tipografía y herarquia de colores en cuanto a estilos se refiere.

Esta app corre directamente en el app-component ( que es el componente por defecto de las SPA de Angular ) donde encontrarán un botón y para las imagenes generé un componente llamado card-item donde se van a cargar las imagenes.

Para realizar el grid Masonry he dado uso a una libreria extrerna llamada: <a href="https://masonry.desandro.com/">  Masonry </a> del desarrollador Desandro 

## Unsplash Service

En este servicio es donde realizamos la llamada a la Api usando nuestra Api_key obtenida desde la web: <a href="https://unsplash.com/developers">Unsplash developers</a>.

En mi caso particular, he decidido colocar la parte inicial de la url en una variable, ya que en caso de realizar otros llamados a la API con diferentes endpoints no tendria que re-escribir esos datos y me podría enfocar en los datos que me sean más relevantes.


## Installation
    clonamos el repo usando la siguiente linea de código:
```shell
    git clone https://github.com/PFT-Repo/unsplash_angular.git laCarpetaDondeLoVasAGuardar
```
    Procedemos a entrar en laCarpetaDondeLoVasAGuardaste e instalamos dependencias necesarias
```shell
   npm i
```
    Ya con las dependencias instaladas, procedemos a abrir la app con el siguiente comando
```shell
   ng serve -o
```
PD: cabe acotar que los comandos anteriormente mencionados debe utilizarse en una terminal.

## Contact info

> programasfulltech@gmail.com || TurpialCode

## License

[MIT](https://opensource.org/licenses/MIT)
