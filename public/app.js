var app = angular.module('aplicacion', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl : 'public/template/indexslider/indexslider.html'
    })
    $routeProvider.when('/inicio', {
        templateUrl : 'public/template/inicio.html'
    })
    $routeProvider.when('/logistica', {
      templateUrl : 'public/template/carreras/logistica.html'
    })
    $routeProvider.when('/mantenimiento', {
      templateUrl : 'public/template/carreras/mantenimiento.html'
    })
   $routeProvider.when('/calificaciones', {
      templateUrl : 'public/template/alumnos/calificaciones.html'
    })
    $routeProvider.when('/horario', {
      templateUrl : 'public/template/alumnos/horario.html'
    })
    $routeProvider.when('/inscripciones', {
      templateUrl : 'public/template/alumnos/inscripciones.html'
    })
     $routeProvider.when('/practicaprofesional', {
      templateUrl : 'public/template/alumnos/practicaprofesional.html'
    })
      $routeProvider.when('/preinscripciones', {
      templateUrl : 'public/template/alumnos/preinscripciones.html'
    })
     $routeProvider.when('/reinscripciones', {
      templateUrl : 'public/template/alumnos/reinscripciones.html'
    })
      $routeProvider.when('/reticula', {
      templateUrl : 'public/template/alumnos/reticula.html'
    })
     $routeProvider.when('/serviciosocial', {
      templateUrl : 'public/template/alumnos/serviciosocial.html'
    })
    $routeProvider.when('/titulacion', {
      templateUrl : 'public/template/alumnos/titulacion.html'
    })
      $routeProvider.when('/tutorias', {
      templateUrl : 'public/template/alumnos/tutorias.html'
    })
      $routeProvider.when('/convocatoria', {
      templateUrl : 'public/template/de interes/convocatoria.html'
    })
     $routeProvider.when('/reformaeducativa', {
      templateUrl : 'public/template/de interes/reformaeducativa.html'
    })
      $routeProvider.when('/reformaintegral', {
      templateUrl : 'public/template/de interes/reformaintegral.html'
    })
      $routeProvider.when('/serviciosadministrativos', {
      templateUrl : 'public/template/departamentos/serviciosadministrativos.html'
    })
      $routeProvider.when('/serviciosdocentes', {
      templateUrl : 'public/template/departamentos/serviciosdocentes.html'
    })
      $routeProvider.when('/serviciosescolares', {
      templateUrl : 'public/template/departamentos/serviciosescolares.html'
    })
       $routeProvider.when('/subdireccionacademica', {
      templateUrl : 'public/template/departamentos/subdireccionacademica.html'
    })
      $routeProvider.when('/vinculacion', {
      templateUrl : 'public/template/departamentos/vinculacion.html'
    })
      $routeProvider.when('/descargas', {
      templateUrl : 'public/template/descargas/descargas.html'
    })
      $routeProvider.when('/tutoriales', {
      templateUrl : 'public/template/descargas/tutoriales.html'
    })
      $routeProvider.when('/historiadelplantel', {
      templateUrl : 'public/template/informacion general/historiadelplantel.html'
    })
      $routeProvider.when('/informaciondelplantel', {
      templateUrl : 'public/template/informacion general/informaciondelplantel.html'
    })
      $routeProvider.when('/asesorias', {
      templateUrl : 'public/template/programa de apoyo/asesorias.html'
    })
      $routeProvider.when('/becas', {
      templateUrl : 'public/template/programa de apoyo/becas.html'
    })
      $routeProvider.when('/construye-t', {
      templateUrl : 'public/template/programa de apoyo/construye-t.html'
    })
       $routeProvider.when('/programajovenes', {
      templateUrl : 'public/template/programa de apoyo/programajovenes.html'
    })
      $routeProvider.when('/emprendedores', {
      templateUrl : 'public/template/programa de apoyo/emprendedores.html'
    })
      $routeProvider.when('/microsoft', {
      templateUrl : 'public/template/programa de apoyo/microsoft.html'
    })
      $routeProvider.when('/proteccioncivil', {
      templateUrl : 'public/template/programa de apoyo/proteccioncivil.html'
    })
      $routeProvider.when('/pruebaenlace', {
      templateUrl : 'public/template/programa de apoyo/pruebaenlace.html'
    })
      $routeProvider.when('/yonoabandono', {
      templateUrl : 'public/template/programa de apoyo/yonoabandono.html'
    })
     $routeProvider.when('/direccion', {
      templateUrl : 'public/template/direccion.html'
    })
       $routeProvider.when('/directorio', {
      templateUrl : 'public/template/directorio.html'
    })
      $routeProvider.when('/informacion', {
      templateUrl : 'public/template/informacion.html'
    })
       $routeProvider.when('/introduccionalplantel', {
      templateUrl : 'public/template/informacion general/introduccionalplantel.html'
    })
      $routeProvider.when('/galeriadefotos', {
      templateUrl : 'public/template/informacion general/galeriadefotos.html'
    })
      $routeProvider.when('/galeriadefotos2', {
      templateUrl : 'public/template/informacion general/galeriadefotos2.html'
    })
      $routeProvider.when('/galeriadefotos3', {
      templateUrl : 'public/template/informacion general/galeriadefotos3.html'
    })
       $routeProvider.when('/noticias', {
      templateUrl : 'public/template/noticias.html'
    })
      $routeProvider.when('/principal', {
      templateUrl : 'public/template/Noticias/principal.html'
    })
    $routeProvider.when('/academicos', {
      templateUrl : 'public/template/Noticias/academicos.html'
    })
      $routeProvider.when('/generales', {
      templateUrl : 'public/template/Noticias/generales.html'
    })
    $routeProvider.when('/vinculacion', {
      templateUrl : 'public/template/Noticias/vinculacion.html'
    })
    $routeProvider.when('/otros', {
      templateUrl : 'public/template/Noticias/otros.html'
    })
    .otherwise({
        redirectTo: '/'
     });
});