/*General Actions*/ 

window.addEventListener('load', function(){
  var newVideo = document.getElementById('video');
  newVideo.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);

  newVideo.play();

});