
$(function(){
    $("#SignupForm").validate({
        rules:{
            name:{
            required:true, 
            minlength: 5
            },
            email:{
                required:true,
                email:true
            },
            phone: {
                required: true,
                mobile:true
            },
            password: {
                required: true,
                minlength:5
            },
            con: {
                required: true,
                equalTo: "#password"
            }

        },
        messages: {
            name: {
                required:" Please Enter your Full Name",
                minlength: "Minimum length is 5"
            },
            email: {
                required: "Please enter an email address",
                email: "Please enter a valid email"
            },
            phone: {
                required: "Please Enter a phone number",
                mobile:"Please enter a valid phone number"
            },
            password: {
                required: "Please enter a password",
                minlength: "Minimum length is 5"
            },
            con: {
                required: "Please enter a password",
                equalTo: "Please enter same password as above"
            }
        }


    });
});