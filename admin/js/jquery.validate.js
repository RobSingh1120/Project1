
     $("#registration").validate({
        rules: {
           
            MobileNo: {
                required: true,
                required: true,
                minlength:10,
                maxlength:10

            },
           
            agree: "required"
        },

         messages: {
            MobileNo: 
            {
            required : "Enter a valid No",
             minlength:"please enter valid phone no",
                maxlength:"please enter 10 digit mobile no."
            
                      },
            agree: "Please accept our policy"
        },
        submitHandler: function(form) {
      form.submit();
    }
});

    
