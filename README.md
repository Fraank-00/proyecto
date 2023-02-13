# proyecto
...<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto final</title>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&family=Playfair+Display:wght@700&family=Raleway:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="../css/proyect.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
   <link href="https://github.com/Fraank-00/proyecto.git"rel="stylesheet" type="text">
</head>

<body>
 <header class="topheader">
<nav class="topnav">
<a href="#" class="logo">
<img height="50"
width="50"
src="https://randomuser.me/api/portraits/men/1.jpg" 
alt="programador">
<p> Francisco Lopez {Programador}</p>
</a>
<button class="open-menu" aria-label="Abrir Menu">
    <i class='bx bx-menu-alt-left' alt="Abrir Menu"></i>
</button>
<ul class="menu">
    <button class="close-menu" aria-label="Cerrar Menu">
        <i class='bx bx-menu-alt-left' alt="Cerrar Menu"></i>
    </button>
    <li><a href="#profile" class="selected">Perfil</a></li>
    <li><a href="#experience">Experiencia</a></li>
    <li><a href="#skills">Habilidades</a></li>
    <li><a href="#contact">Contacto</a></li>
</ul>
</nav>
 </header>

 <div class="horizontal-padding vertical-padding">
     <section class="profile" id="profile">
     <div class="profile-info">
     <h1 class="profile-title">Hola, <br/>Soy Francisco Lopez</h1>
     <p class="profile-details">
        Soy un apasionado por el desarrollo de software con mas de 10
        años de experiencia en varios lenguajes de programacion.
     </p>
     <button class="profile-btn">
        Descargar CV
     </button>
     </div>
     <span class="profile-img-section">
     <img class="profile-img" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Programador">
     <div class="profile-img-line"></div>
     </span>
     </section>
 </div>
 
</section>
<section>
<div class="experiences" id="experiences">
    <img src="../imagenes/wave (1).svg" alt="division" class="wave">
    <div class="experiences-body">
    <h2 class="experiencie-title">Experiencia</h2>
    <div class="experiencies-grid">
        <div class="empty"></di>
        <div class="line"></div>
    <div class="experience">
    <div class="experience-date">2017-2019
        <p></p>
     <div class="experience-company">  <u>Tecnoligia Argentina</u>
        <p></p>
     <div class="experience-position">  Senior software 
        <p></p>
      <div class="experince-description">
        <p></p>
        Desarrolo de intefaz y front end , usado por ciertos clientes para desplegar anuncios 
        a escala usando los diferentes lengujae en la programacion al igual que la estructura del server
        entre otras tecnologias.
        Comprender el trabajo en equipo , brinando capacitacion a las empresas de USA , desarrollando 
        nuevo conocimiento.
      </div>
      <div class="experience-date">2018-2019
        <p></p>
      <div class="experience-company"> <u>Poxdan</u> 
        <p></p>
     <div class="experience-position">Senior software
        <p></p>
      <div class="experince-description">
        <p></p>
        Desarrolo de intefaz y front end , usado por ciertos clientes para desplegar anuncios 
        a escala usando los diferentes lengujae en la programacion al igual que la estructura del server
        entre otras tecnologias.Encargado enseñansa a nuevos desarroladores.
      </div>
      <div class="experience-date">2020-2023
        <p></p>
      <div class="experience-company"> <u>Dexus</u>
        <p></p>
     <div class="experience-position">Senior software
        <p></p>
      <div class="experince-description">
        <p></p>
        Desarrolo de intefaz y front end , usado por ciertos clientes para desplegar anuncios 
        a escala usando los diferentes lengujae en la programacion al igual que la estructura del server
        entre otras tecnologias. desarollo de las infraestructura de AWS.
      </div>
     </div>   
     </div>   
    </div>
    </div>
    </div>
    </div>
    <img src="../imagenes/wave (1).svg" alt="division" class="wave-botton">
    </section>
 <div class="horizontal-padding vertical-padding">
    <section class="skills" id="skills">
        <h2 class="skills-title">Habilidades</h2>
        <ul class="skills-list">
            <li class="skills-skills">CCS</li>
            <li class="skills-skills">HTML</li>
            <li class="skills-skills">JavaScript</li>
        </ul>
    </div>
    </section>
 </div>
 <div class="horizontal-padding vertical-padding">
  <section class="contact" id="contact">
      <h2 class="skills-title">Contacto</h2>
 <div class="horizontal-padding vertical-padding">
  <section class="contact" id="contact">
  <h2 class="contact-title"></h2>
  <div class="contact-detaills">
    <div class="contact-details-group">
      <p class="contact-label">Direccion :</p>
      <p class="contact-text"> Montevideo, Uruguay</p>
    </div>
    <div class="contact-details-group">
      <p class="contact-label">Email :</p>
      <p class="contact-text">Fran.456@gmail.com</p>
    </div>
    <div class="contact-details-group">
      <p class="contact-text">
        Deje su mensaje y con gusto le respondere</p>
    </div>
  </div>
  <form class="contact-form">
    <div class="contact-form-group">
      <label for="name">Nombre</label>
      <input required type="text"name="name" id="name">
    </div>
    <div class="contact-form-grup">
      <label for="name">Email</label>
      <input required type="email"name="email" id="email">
    </div>
    <div class="contact-form-group">
      <label for="message">Mensaje</label>
     <textarea required name="message" id="message" rows="6"></textarea>
    </div>

    <button type="submit" class="contact-form-submit">Enviar</button>
  </form>
  <nav class=" social">
    <ul class="social-list">
      <li>
    <img src="../imagenes/youtube.svg" alt="Youtube profile">
   </li>
   <li>
     <img src="../imagenes/facebook.svg" alt="facebook profile">
    </li>
    <li>
       <img src="../imagenes/twitter.svg" alt="twitter profile">
      </li>
    </ul>
  </nav>
  </section>
</div>
<script  src="../java/index.js"></script>
</body>
</html>
