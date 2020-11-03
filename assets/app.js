     // capturo los elementos con los que voy a interactuar
     const video =  document.querySelector("video");
     const button = document.querySelector("button");

     // creo el prototipo media player al que le paso la configuracion que va a tener el video
     function MediaPlayer(config){ 
       this.media = config.el;
     };

     // creo la funcion que reproduce y pausa el video
     MediaPlayer.prototype.play = function() {
       this.media.paused ? this.media.play() : this.media.pause()
     }
     // le asigno una constante a la función de pausar y reproducir y le paso el elemento video
      const player = new MediaPlayer({el: video});

     // creo la llamada onclick
     button.onclick = () => player.play();
