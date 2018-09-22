$(document).ready(function() {
    
    $.validator.methods.customValidation = function (value, element) {
    if (/^\s/.test(value) == !0) ab = !1;
    else ab = !0;
    return ab
};

$.validator.methods.alphabetsOnly = function (value, element) {
    if (/^[a-zA-Z ]*$/.test(value) != !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};


$.validator.methods.zeroNotAllowed = function (value, element) {
    var str = value;
    var res = str.charAt(0);
    var len = str.length;
    if (str == '0000000000') {
        return !1
    }if (str == '00000000000') {
        return !1
    }if (str == '000000000000') {
        return !1
    }if (str == '0000000000000') {
        return !1
    }if (str == '00000000000000') {
        return !1
    }if (str == '000000000000000') {
        return !1
    }if (str == '0000000000000000') {
        return !1
    }if (str == '00000000000000000') {
        return !1
    }if (str == '000000000000000000') {
        return !1
    }if (str == '0000000000000000000') {
        return !1
    }if (str == '00000000000000000000') {
        return !1
    }else{
        return !0
    }
    };

 
   
    $("#registration").validate({
        rules: {
            name:
            {
                required: !0,
            minlength: 2,
            maxlength: 30,
            alphabetsOnly: !0,
            
            customValidation:!0
              
            },
            zone:{
                  required: !0,
                  customValidation:!0
            },
            ward:{
                required: !0,
                  customValidation:!0
              },
            Mobile: {
                required: true,
                required: true,
                maxlength:10

            },
            
            
            place: {
                required: true,
                minlength: 2
                

                
            },
            pass: {
                required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16
            },
            conPass: {
                required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16,
                equalTo: "#pass"
            },
            Image:
            {
                required:true
            },
            checkbox:{
                required:true
            },
            agree: "required"
        },

         messages: {
            name: 
            {
            required : "Enter a valid name",
            minlength:"Minimum 2 characters allowed.",
            maxlength: "Maximum 30 characters required.",
           alphabetsOnly :"Numbers not allowed."
            },
            zone:{ 
               required:"please enter a  zone",
               minlength:"Minimum 2 characters allowed.",
            maxlength: "Maximum 30 characters required."
            
                   },
                   ward:{
                    required:"please enter a  ward",
                    minlength:"Minimum 2 characters allowed.",
                  maxlength: "Maximum 30 characters required."
                   },
                    Mobile: {
                required: "Please enter your phone number",
                required:"enter only numeric value.",
                maxlength: "Please enter only 10 digit no."
            },
            place: {
                required: "Please enter a location",
                minlength: "Minimum 2 characters are allowed"
                
               
            },
            pass: {
                required: "Please provide a password",
                maxlength: "Your password must be accept 16 characters."
            },
            conPass: {
                required: "Please provide a password",
                maxlength: "Your password must be accept 16 characters.",
                equalTo: "Please enter the same password as above."
            },
            Image:{
                required:"please provide a picture"
            },
            checkbox:{
                required:"Agree to terms "
            },
            agree: "Please accept our policy"
        },
        submitHandler: function(form) {
      form.submit();
    }
});

});
    
