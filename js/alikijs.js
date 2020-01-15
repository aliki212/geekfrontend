// Custom Script to highlight the active date in the hours list -->

   //for validating new courses
       (function() {
      'use strict';
      window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      }
      form.classList.add('was-validated');
      }, false);
      });
      }, false);
      })();
    // for active on tabs
    $(document).ready(function(){
    $('.btn86').click(function(){
        $('.btn86').addClass('active').siblings().removeClass('active');       
    });
    });
     //for editing existing courses:
    function myFunction(element) {
        switch(element)
        {
            case "Java":
            document.getElementById("myText").value = element;
            document.getElementById("myText2").value = "Stream1";
            document.getElementById("myText3").value = "Type1";
            document.getElementById("myText4").value = "2020-01-01";
            document.getElementById("myText5").value = "2020-03-01";
            break;
            case "C#":
            document.getElementById("myText").value = element;
            document.getElementById("myText2").value = "Stream2";
            document.getElementById("myText3").value = "Type2";
            document.getElementById("myText4").value = "2020-02-02";
            document.getElementById("myText5").value = "2020-05-24";
                break;
                case "HTML/CSS":
            document.getElementById("myText").value = element;
            document.getElementById("myText2").value = "Stream3";
            document.getElementById("myText3").value = "Type3";
            document.getElementById("myText4").value = "2020-03-03";
            document.getElementById("myText5").value = "2020-06-11";
                break;
                case "SoftSkills":
            document.getElementById("myText").value = element;
            document.getElementById("myText2").value = "Stream4";
            document.getElementById("myText3").value = "Type4";
            document.getElementById("myText4").value = "2021-04-04";
            document.getElementById("myText5").value = "2020-07-22";
                break;
                case "Gary":
            document.getElementById("myText").value = "Gary";
            document.getElementById("myText2").value = "Netherware";
            document.getElementById("myText3").value = "BackEnd";
                break;
            case "Mary":
                document.getElementById("myText").value = "Mary";
                document.getElementById("myText2").value = "Parsons";
                document.getElementById("myText3").value = "FrontEnd";
                break;
            case "Clark":
                document.getElementById("myText").value = "Clark";
                document.getElementById("myText2").value = "Stevens";
                document.getElementById("myText3").value = "Security Systems";
                    break;
                case "Claire":
            document.getElementById("myText").value = "Claire";
            document.getElementById("myText2").value = "Fonta";
            document.getElementById("myText3").value = "Development";
                break;
            default:
            document.getElementById("myText").value = "Tiltle";
            document.getElementById("myText2").value = "Course Stream";
            document.getElementById("myText3").value = "Course Type";
            document.getElementById("myText4").value = "YYYY-MM-DD";
            document.getElementById("myText5").value = "YYYY-MM-DD";
            break;
        }
    }//
   
