AFRAME.registerComponent('load-experience',{
    init: function() {
        console.log('scene loaded');

        document.querySelector('#continue-container').style.display = 'flex';
        document.querySelector('#loading-animation').style.display = 'none';
    }
  });

  const loadExperience = function(){
      //hide user gesture overlay
      document.querySelector('#user-gesture-overlay').style.display = 'none';

    
     // document.querySelector('#rotate_portrait_ID2').style.display = 'block';

    

  }