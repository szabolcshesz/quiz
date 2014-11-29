
(function($,W,D)
{
    var JQUERY4U = {};
 
    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#SignUpForm").validate({
                rules: {
                    usr: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    pwd: {
                        required: true,
                        minlength: 5
                    },
                    agree: "required"
                },
                messages: {
                    usr: "Please enter your username",
                    pwd: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    email: "Please enter a valid email address"
                    
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }
 
    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
 
})(jQuery, window, document);



/*  ** The Old Way ** 
function validateForm(){
  var user = document.forms["SignUpForm"]["usr"].value;
  var email = document.forms["SignUpForm"]["email"].value;
  var pwd = document.forms["SignUpForm"]["pwd"].value;
  
  if (user == null ||user == "" ) {
  alert ("Please enter Username");
  return false;
 } 
 
 if (email == null ||email == "" ) {
  alert ("Please enter Email address");
  return false;
 }  
 
 if (pwd == null ||pwd == "" ) {
  alert ("Please enter Password");
  return false;
 }   
} */
