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
      if (form.checkValidity() === true) {
      alert("Data submitted!")}
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
                case "Chris":
            document.getElementById("myText").value = "Chris";
            document.getElementById("myText2").value = "Vandenberg";
            document.getElementById("myText3").value = "2000";
            document.getElementById("myText4").value = "1985-02-22";
                    break;
                case "Jess":
            document.getElementById("myText").value = "Jess";
            document.getElementById("myText2").value = "Popei";
            document.getElementById("myText3").value = "1750";
            document.getElementById("myText4").value = "1984-12-03";
                    break;
                case "Stacy":
            document.getElementById("myText").value = "Stacy";
            document.getElementById("myText2").value = "Parker";
            document.getElementById("myText3").value = "1550";
            document.getElementById("myText4").value = "1987-08-11";
                    break;
                    case "Patric":
            document.getElementById("myText").value = "Patric";
            document.getElementById("myText2").value = "Calister";
            document.getElementById("myText3").value = "1700";
            document.getElementById("myText4").value = "1985-09-25";
                    break;
                    case "Pizza Website":
            document.getElementById("myText").value = "Pizza Website";
            document.getElementById("myText2").value = "This is a Frontend project about a pizza ordering system.";
            document.getElementById("myText3").value = "2020-05-01";
                    break;
                    case "Hospital ERP":
            document.getElementById("myText").value = "Hospital ERP";
            document.getElementById("myText2").value = "BackEnd project for hospital ERP management.";
            document.getElementById("myText3").value = "2020-07-12";
                    break;
                    case "High School Registry":
            document.getElementById("myText").value = "High School Registry";
            document.getElementById("myText2").value = "BackEnd project about High School Registry.";
            document.getElementById("myText3").value = "2020-04-23";
                    break;
                    case "Furniture E-Shop":
            document.getElementById("myText").value = "Furniture E-Shop";
            document.getElementById("myText2").value = "FrondEnd and BackEnd - Final Project.";
            document.getElementById("myText3").value = "2020-03-07";
                    break;
            default:
            document.getElementById("myText").value = "Tiltle";
            document.getElementById("myText2").value = "Tiltle";
            document.getElementById("myText3").value = "Tiltle";
            document.getElementById("myText4").value = "YYYY-MM-DD";
            document.getElementById("myText5").value = "YYYY-MM-DD";
            break;
        }
    }//
   
