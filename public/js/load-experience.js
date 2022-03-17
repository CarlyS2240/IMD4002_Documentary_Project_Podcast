AFRAME.registerComponent('load-experience',{
    init: function() {
        console.log('scene loaded');

        document.querySelector('#continue-container').style.display = 'flex';
        document.querySelector('#loading-animation').style.display = 'none';
        document.querySelector('#background').style.display = 'none';
    }
  });

  const loadExperience = function(){
      document.querySelector('#user-gesture-overlay').style.display = 'none';
  }