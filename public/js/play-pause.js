document.addEventListener("DOMContentLoaded", function() {
    AFRAME.registerComponent('play-pause', {
        init: function(){

            //Tutorial for play/pause feature by Danilo Pasquariello, 'Video (A-Frame Tutorial - WebVR)', https://www.youtube.com/watch?v=5KjyTU07EHo

            const element = document.querySelector('#videoControls');
            const element2 = document.querySelector('#videoControls2');
            const element3 = document.querySelector('#videoControls3');
            const element4 = document.querySelector('#videoControls4');
            const element5 = document.querySelector('#videoControls5');
            
            element.addEventListener("click", () => {
            
                var myVideo = document.querySelector('#video');
                var videoControls = document.querySelector('#videoControls');
                this.el.addEventListener('click', function () {
                    if (myVideo.paused) {
                        myVideo.play();
                        videoControls.setAttribute('src', '#pause');
                    } else {
                        myVideo.pause();
                        videoControls.setAttribute('src', '#play');
                    }
            
                });
            });

            element2.addEventListener("click", () => {

                var myVideo2 = document.querySelector('#video2');
                var videoControls2 = document.querySelector('#videoControls2');
                this.el.addEventListener('click', function () {
                    if (myVideo2.paused) {
                        myVideo2.play();
                        videoControls2.setAttribute('src', '#pause2');
                    } else {
                        myVideo2.pause();
                        videoControls2.setAttribute('src', '#play2');
                    }
                
                });
            });

            element3.addEventListener("click", () => {
        
                var myVideo3 = document.querySelector('#video3');
                var videoControls_3 = document.querySelector('#videoControls3');
                this.el.addEventListener('click', function () {
                    if (myVideo3.paused) {
                        myVideo3.play();
                        videoControls_3.setAttribute('src', '#pause3');
                    } else {
                        myVideo3.pause();
                        videoControls_3.setAttribute('src', '#play3');
                    }
                
                });
            });

            element4.addEventListener("click", () => {

                var myVideo4 = document.querySelector('#video4');
                var videoControls4 = document.querySelector('#videoControls4');
                this.el.addEventListener('click', function () {
                    if (myVideo4.paused) {
                        myVideo4.play();
                        videoControls4.setAttribute('src', '#pause4');
                    } else {
                        myVideo4.pause();
                        videoControls4.setAttribute('src', '#play4');
                    }
                
                });
            });

            element5.addEventListener("click", () => {
    
                var myVideo5 = document.querySelector('#video5');
                var videoControls5 = document.querySelector('#videoControls5');
                this.el.addEventListener('click', function () {
                    if (myVideo5.paused) {
                        myVideo5.play();
                        videoControls5.setAttribute('src', '#pause5');
                    } else {
                        myVideo5.pause();
                        videoControls5.setAttribute('src', '#play5');
                    }
                
                });
            });


            
        }
    })
});