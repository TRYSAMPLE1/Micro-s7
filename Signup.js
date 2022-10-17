
$().ready(function(){
    $("#signupForm").validate({
        rules:{
            names:{
            required:true, 
            minlength: 5
            },
            email:{
                required:true,
                email:true
            },
            mobile: {
                required: true,
                mobile:true
            },
            password: {
                required: true,
                minlength:5
            },
            confirm_password: {
                required: true,
                equalTo: "#password"
            }

        },
        messages: {
            names: {
                required:" Please Enter your Full Name",
                minlength: "Minimum length is 5"
            },
            email: {
                required: "Please enter an email address",
                email: "Please enter a valid email"
            },
            mobile: {
                required: "Please Enter a phone number",
                mobile:"Please enter a valid phone number"
            },
            password: {
                required: "Please enter a password",
                minlength: "Minimum length is 5"
            },
            confirm_password: {
                required: "Please enter a password",
                equalTo: "Please enter same password as above"
            }
        }


    });
});