

    //DECLARE A VARIABLE TO START TIME (1)

        var start = new Date().getTime();


        //RANDOM COLOR GENERATOR (9)

        function getRandomColor() {

          var letters = '0123456789ABCDEF'.split('');

          var color = '#';

          for(var i =0; i < 6; i++) {

            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }

    //MAKE SHAPE APPEAR (7)

        function makeShapeAppear(){

          //VARIABLES TO STYLE THE BOX AND CIRCLE IN RANDOM SIZES

            var top = Math.random() * 400;

            var left = Math.random() * 400; 

            var width = Math.random() * 200 + 100;

      // MAKE THE BOX A CIRCLE (8)  

            if(Math.random() > 0.50) {

                document.getElementById("shape").style.borderRadius = '50%';
            }else{
              document.getElementById("shape").style.borderRadius = '0';
            }

            // MAKE THE BOX AND CIRCLE NICE WITH THE RIGHT WIDTH AND HEIGHT (7)

         document.getElementById("shape").style.backgroundColor = getRandomColor(); 

        document.getElementById("shape").style.width = width + "px"; 


        document.getElementById("shape").style.height = width + "px"; 


        document.getElementById("shape").style.top = top + "px"; 

         document.getElementById("shape").style.left= left + "px";

          //MAKE SHAPE APPEAR(5)
        document.getElementById("shape").style.display = "block";


          //IMMEDIATELY THE SHAPE APPEARS, START TIME (6)
           start = new Date().getTime();
        }


        // RANDOM TIME FOR THE SHAPE TO REAPPEAR 7
        function appearAfterDelay() {

          //shape will appear after 1 second
       setTimeout(makeShapeAppear, Math.random() * 2000);

        }
      
        appearAfterDelay();

       // click on the shape for it to disappear (1)
      document.getElementById("shape").onclick = function(){

      document.getElementById("shape").style.display = "none";

    // variable to know the time taken for the circle or box to interchange (2)
      var end = new Date().getTime();
      var timeTaken = (end - start) / 1000;

      // display time taken for shape to disappear or reappear(4)

     document.getElementById("timeTaken").innerHTML = timeTaken + "s";
     
     // IT CONTINUES REAPPEARING
     appearAfterDelay();
    }


