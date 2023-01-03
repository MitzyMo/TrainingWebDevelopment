/*General Actions*/ 

/*Action to automátically play the video in a loop*/
window.addEventListener('load', function(){
  var newVideo = document.getElementById('video');
  newVideo.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);

  newVideo.play();

});