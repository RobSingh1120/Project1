$(document).ready(function(){

    var base_url = $('body').attr('data-baseurl');
    var csrf_token = $('[name="_token"]').val();

/**********Prefix by sapce***********/
$.validator.methods.customValidation = function (value, element) {
    if (/^\s/.test(value) == !0) ab = !1;
    else ab = !0;
    return ab
};


/**********Check Image Extension***********/
$.validator.methods.checkExtension = function (value, element) {
   // alert(value);
    var res = (/[.]/.exec(value)) ? /[^.]+$/.exec(value) : undefined;

    /*if (/^\s/.test(value) == !0) ab = !1;
    else ab = !0;*/
    if (res == 'png' || res == 'jpeg' || res == 'jpg' || res == undefined || res == 'PNG' || res == 'JPEG' || res == 'JPG') {
        return true;
    }else{
        return false;
    }
};

/**********Check Book Extension***********/
$.validator.methods.checkBookExtension = function (value, element) {
   // alert(value);
    var res = (/[.]/.exec(value)) ? /[^.]+$/.exec(value) : undefined;
    /*if (/^\s/.test(value) == !0) ab = !1;
    else ab = !0;*/
    if (res == 'pdf' || res == 'epub' || res == undefined) {
        return true;
    }else{
        return false;
    }
};

/**********Check Contract Extension***********/
$.validator.methods.checkContractExtension = function (value, element) {
   // alert(value);
    var res = (/[.]/.exec(value)) ? /[^.]+$/.exec(value) : undefined;
    /*if (/^\s/.test(value) == !0) ab = !1;
    else ab = !0;*/
    if (res == 'pdf' || res == undefined) {
        return true;
    }else{
        return false;
    }
};

$.validator.methods.emailVal = function(value) {
           var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if(reg.test(value) != true)
                ab = false;
            else 
                ab = true;
            return ab; 
        };

$.validator.methods.alphabetsOnly = function (value, element) {
    if (/^[a-zA-Z ]*$/.test(value) != !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};

$.validator.methods.UrlVal = function (value, element) {
    if (/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(value) != !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};

$.validator.methods.alphaNumericOnly = function (value, element) {
    if (/^(?![0-9]*$)[a-zA-Z0-9' ']+$/i.test(value) != !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};

/*$.validator.methods.PhoneValidation = function (value, element) {
    if (/[\-]?[0-9]*$/.test(value) != !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};
*/
$.validator.methods.PhoneValidation = function (value, element) {
    if (/^(?!(\d)\1{9})(?!0123456789|1234567890|0987654321|9876543210)\d{10}$/.test(value) != !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};


$.validator.methods.PasswordValidation = function (value, element) {

    $(this).blur(function () {
        var pass = $('#password').val();
        ab = !1;
        if (value) {
            if (pass == '') {
                ab = !1;
            } else {
                ab = !0;
            }
        }
        return ab;
    });
};


$.validator.methods.PrefixNotSpace = function (value, element) {
    if (/^\s*[\da-zA-Z][\da-zA-Z\s]*$/.test(value) != !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};

$.validator.methods.PrefixByZero = function (value, element) {
    if (/^[1-9][0-9]*$/.test(value) != !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};

$.validator.methods.NoSpace = function (value, element) {
    if (/^\S*$/.test(value) != !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};

$.validator.methods.NoZeroAllowed = function (value, element) {
    if (/^(?!0+$)\d{10,10}$/.test(value) != !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};

$.validator.methods.isbnValidation = function (value, element) {
    if (/^(\d+-?)+\d+$/.test(value) != !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};

$.validator.methods.dateValidation = function (value, element) {
    if (/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(value) == !0) 
        ab = !1;
    else 
        ab = !0;
    return ab
};

/************Validate URL***********/
function validateURL(textval) {
    var urlregex = new RegExp("^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
    return urlregex.test(textval)
}

/*Image accepted type*/
        $.validator.addMethod( "extension", function( value, element, param ) {
        param = typeof param === "string" ? param.replace( /,/g, "|" ) : "png|jpe?g|pdf|doc|xls|xlsx|odt";
        return this.optional( element ) || value.match( new RegExp( "\\.(" + param + ")$", "i" ) );
        }, $.validator.format( "Only png,jpeg,jpg are allowed." ) );

jQuery.validator.addMethod("greaterThan", 
function(value, element, params) {

    if (!/Invalid|NaN/.test(new Date(value))) {
        return new Date(value) > new Date($(params).val());
    }

    return isNaN(value) && isNaN($(params).val()) 
        || (Number(value) > Number($(params).val())); 
},'Must be greater than {0}.');


/*
function Check(){

var reg =/<(.|\n)*?>/g; 

if (reg.test($('#YourTextAreaID').val()) == true) {

    var ErrorText ='do not allow HTMLTAGS';

    alert('ErrorText');

    }
}*/

/********************zeroNotAllowed Validation*********************/
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
    /*if (res == 0) {
        alert(res);
        if (len == 11) {
            return !0
        } else {
            return !1
        }
    } *//*else if (len == 10) {
        return !0
    } else {
        return !1
    }*/
};

/***************Special characters not allowed****************8*/
$.validator.methods.specialChar = function (value, element) {
    if (/^[A-Za-z0-9-]*$/.test(value) == !0) ab = !0;
    else ab = !1;
    return ab
};

/***************Special characters allowed****************8*/
$.validator.methods.specificSpecialChar = function (value, element) {
    if (/^[a-z0-9_.-]{2,25}$/.test(value) == !0) ab = !0;
    else ab = !1;
    return ab
};

/***************Special characters not allowed****************8*/
$.validator.methods.decimalNumber = function (value, element) {
    if (/^[0-9]+\.[0-9]+$/.test(value) == !0) ab = !0;
    else ab = !1;
    return ab
};

/*******Check Email********/
$.validator.methods.emailValidation = function (value, element) {
    var ab;
    $.ajax({
        method: "GET",
        url: 'checkExist',
        data: {
            param:'email',
            value: value
        },
        async: !1,
        dataType: 'json',
        success: function (data) {
            if (data == 1) {
                ab = !1
            } else {
                ab = !0
            }
        },
    });
    return ab
};

/*******Check Email with user_id********/
$.validator.methods.emailCheck = function (value, element) {
    var ab;
    var user_id = $('#user_id').val();
    $.ajax({
        method: "GET",
        url: base_url+'/en/admin/checkEmailExist',
        data: {
            email: value,
            user_id:user_id
        },
        async: !1,
        dataType: 'json',
        success: function (data) {
            if (data == 1) {
                ab = !1
            } else {
                ab = !0
            }
        },
    });
    return ab
};


/*******Check ISBN********/
$.validator.methods.isbnExist = function (value, element) {
    var ab;
    var book_id = $('#book_id').val();
    $.ajax({
        method: "GET",
        url: base_url+'/en/admin/isbnExist',
        data: {
            book_id: book_id,
            isbn: value
        },
        async: !1,
        dataType: 'json',
        success: function (data) {
            if (data == 1) {
                ab = !1
            } else {
                ab = !0
            }
        },
    });
    return ab
};

$("#login_form").validate({
    rules: {
        email: {
            required: !0,
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0
        },
        password: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16
        } 
    },
    messages: {
        email: {
            required: "*Please enter your email.",
            minlength: "Please enter atleast 6 characters.",
            maxlength: "Please enter maximum 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email."
        },
        password: {
            required: "*Please enter your password.",
            customValidation: "Password should not be prefix by space.",
            minlength:"Password contains atleast 8 characters.",
            maxlength:"Password contains maximum 16 characters."
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#register_form").validate({
    rules: {
        fname: {
            required: !0,
            minlength: 2,
            maxlength: 50,
            alphabetsOnly: !0,
            //alphaNumericOnly: !0,
            customValidation:!0/*,
            Check: !0*/
        },
        lname: {
            required: !0,
            minlength: 2,
            maxlength: 50,
            alphabetsOnly: !0,
            //alphaNumericOnly: !0,
            customValidation: !0
        },
        email: {
            required: !0,
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0,
            remote: {
                url: base_url + "/en/unique_email",
                type: "POST",
                headers: {
                    'X-CSRF-TOKEN': csrf_token
                },
                data: {
                    email: function() {
                        return $( "#email" ).val();
                    }
                }
            }
        },
        company_website: {
            required: !0,
            //url: !0,
            UrlVal: !0,
            maxlength: 150,
            minlength: 10
            //customValidation: !0
        },
        password: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16
        },
        password_confirmation: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16,
            equalTo: "#password"
        },
        mobile_number: {
            required:!0,
            minlength: 7,
            maxlength: 14,
            zeroNotAllowed:!0,
            number: !0,
            min:1
        },
        phone_code:{
            required: !0
        },
        phone_number: {
            minlength: 7,
            maxlength: 14,
            zeroNotAllowed:!0,
            number: !0,
            min:1
        },
        publisher_company: {
            required: !0,
            minlength: 2,
            customValidation: !0,
            maxlength: 150
        },
        company_address: {
            required: !0,
            minlength: 2,
            customValidation: !0,
            maxlength: 200
        },
        po_box: {
           required: !0,
           number:!0,
            minlength: 5,
            maxlength: 6
          
        }
        /*country: {
            required: !0,
            alphabetsOnly: !0
         }*/
       
    },
    messages: {
        fname: {
            required: "*Please enter your first name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
            alphabetsOnly: "Please enter alphabets only.",
            //alphaNumericOnly: "Please enter alphabets and numbers only.",
            customValidation: "First name should not be prefix by space."/*,
            Check: "Please hjghffghjuk"*/
        },
        lname: {
            required: "*Please enter your last name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
            alphabetsOnly: "Please enter alphabets only.",
            //alphaNumericOnly: "Please enter alphabets and numbers only.",
            customValidation: "Last name should not be prefix by space."
        },
        email: {
            required: "*Please enter your email.",
            minlength: "Please enter atleast 6 characters.",
            maxlength: "Please enter maximum 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email."
        },
        company_website: {
            required: "*Please enter your company website.",
            customValidation: "Company website should not be prefix by space.",
            maxlength: "Please enter maximum 150 characters.",
            minlength: "Please enter minimum 10 characters.",
            UrlVal: "Please enter valid url."
        },
        password: {
            required: "*Please enter your password.",
            customValidation: "Password should not be prefix by space.",
            minlength:"Password contains atleast 8 characters.",
            maxlength:"Password contains maximum 16 characters."
        },
        password_confirmation: {
            required: "*Please enter your confirm password.",
            customValidation: "Confirm password should not be prefix by space.",
            minlength:"Confirm password contains atleast 8 characters.",
            maxlength:"Confirm password contains maximum 16 characters.",
            equalTo:"Password and confirm password must be same."
        },
        
        mobile_number: {
            required: "*Please enter mobile number.",
            minlength: "Please enter minimum 7 characters.",
            maxlength: "Please enter maximum 14 characters.",
            zeroNotAllowed:"Please enter valid number",
            number: "Please enter digits only.",
            min:"Please enter valid number."
        },
        phone_code:{
            required: "*Please enter phonecode."
        },
        phone_number: {
            minlength: "Please enter minimum 7 characters.",
            maxlength: "Please enter maximum 14 characters.",
            zeroNotAllowed:"Please enter valid number.",
            number: "Please enter digits only.",
            min:"Please enter valid number."
        },
        publisher_company: {
            required: "*Please enter publisher company name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 150 characters.",
            customValidation: "Publisher company name should not be prefix by space."
        },
        company_address: {
            required: "*Please enter company address.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 200 characters.",
            customValidation: "Company address should not be prefix by space."
        },
        po_box:{
            required: "*Please enter P.O.Box.",
            number:"Please enter digits only.",
            maxlength: "Please enter maximum 6 characters.",
            minlength: "Please enter minimum 5 characters."
            
        }
        /*country:{
            required: "*Please enter country.",
            alphabetsOnly: "Please enter alphabets only."
        }*/
 },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#forgot_form").validate({
    rules: {
        email: {
            required: !0,
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0
        }
    },
    messages: {
        email: {
            required: "*Please enter your email.",
            minlength: "Enter atleast 6 characters.",
            maxlength: "Enter maximum 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email."
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#reset_form").validate({
    rules: {
        email: {
            required: !0,
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0
        },
        password: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16
        },
        password_confirmation: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16,
            equalTo: "#password" 
        }
    },
    messages: {
        email: {
            required: "*Please enter your email.",
            minlength: "Enter atleast 6 characters",
            maxlength: "Please enter 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email."
        },
        password: {
            required: "*Please enter your password.",
            customValidation: "Password should not be prefix by space.",
            minlength:"Enter atleast 8 characters.",
            maxlength:"Enter maximum 16 characters."
        },
        password_confirmation: {
            required: "*Please enter your confirm password.",
            customValidation: "Confirm password should not be prefix by space.",
            minlength:"Enter atleast 8 characters.",
            maxlength:"Enter maximum 16 characters.",
            equalTo:"Password and confirm password must be same."
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#edit_form").validate({
    rules: {
        first_name: {
            required: !0,
            minlength: 2,
            maxlength: 50,
            //alphabetsOnly: !0,
            alphaNumericOnly: !0,
            customValidation:!0
        },
        last_name: {
            required: !0,
            minlength: 2,
            maxlength: 50,
           // alphabetsOnly: !0,
            alphaNumericOnly: !0,
            customValidation:!0
        },
        
        company_website: {
            required: !0,
            //url: !0,
            UrlVal: !0,
            maxlength: 150,
            minlength: 10,
            customValidation:!0
        },
         mobile_no: {
            required: !0,
            minlength: 7,
            maxlength: 14,
            zeroNotAllowed:!0,
            number: !0,
            min:1
        },
        phone_no: {
            minlength: 7,
            maxlength: 14,
            zeroNotAllowed:!0,
            number: !0,
            min:1
        },
        company_name: {
            required: !0,
            minlength: 2,
            maxlength:150,
            customValidation:!0
        },
        company_add: {
            required: !0,
            minlength: 2,
            maxlength: 150,
            customValidation:!0
        },
        po_box: {
            required: !0,
            number:!0,
            minlength: 5,
            maxlength: 6,
            customValidation:!0
        },
        email:{
            email:!0,
            required: !0,
            emailValidation : !0,
            customValidation:!0
        },
        profileImage: {
           checkExtension : !0
           // extension : "jpg,png,jpeg"
            /*accept: "jpg,png,jpeg"*/

        },
        contractDoc: {
            checkContractExtension: !0
        },
        logoImage:{
            checkExtension : !0
        }
       
    },
    messages: {
        first_name: {
            required: "*Please enter your first name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
           // alphabetsOnly: "Please enter alphabets only.",
           alphaNumericOnly: "Please enter alphabets and numbers only.",
            customValidation:"First name should not be prefix by space."
        },
        last_name: {
            required: "*Please enter your last name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
           // alphabetsOnly: "Please enter alphabets only.",
           alphaNumericOnly: "Please enter alphabets and numbers only.",
            customValidation:"Last name should not be prefix by space."
        },
        
        company_website: {
            required: "*Please enter your company website.",
            //url: "Please enter valid URL.",
            UrlVal: "Plese enter valid url.",
            customValidation:"Website should not be prefix by space.",
            maxlength: "Please enter maximum 150 characters.",
            minlength: "Please enter minimum 10 characters."
        },
        mobile_no: {
            required: "*Please enter mobile number.",
            minlength: "Please enter minimum 7 characters.",
            maxlength: "Please enter maximum 14 characters.",
            zeroNotAllowed:"Please enter valid number",
            number: "Please enter digits only.",
            min:"Please enter valid number."
        },
        phone_no: {
            minlength: "Please enter minimum 7 characters.",
            maxlength: "Please enter maximum 14 characters.",
            zeroNotAllowed:"Please enter valid number.",
            number: "Please enter digits only.",
            min:"Please enter valid number."
        },
        company_name: {
            required: "*Please enter publisher company name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength:"Please enter maximum 150 characters.",
            customValidation:"Company Name should not be prefix by space."
        },
        company_add: {
            required: "*Please enter company address.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 150 characters.",
            customValidation:"Company address should not be prefix by space."
        },
        po_box:{
            required: "*Please enter P.O.Box.",
            number:"Please enter digits only.",
            minlength: "Please enter atleast 5 characters.",
            maxlength: "Please enter maximum 6 characters.",
            customValidation:"PO Box should not be prefix by space."
        },
        /*country:{
            required: "*Please enter country.",
            alphabetsOnly: "Please enter alphabets only."
        },*/
        email:{
            email:"Please enter valid email.",
            required: "*Please enter email.",
            emailValidation : "Email already exist.",
            customValidation:"Email should not be prefix by space."
         },
         profileImage: {
           checkExtension:"Please upload JPG, PNG, JPEG file."
           // extension : "jpg,png,jpeg"
            /*accept: "jpg,png,jpeg"*/

        },
        contractDoc: {
            checkContractExtension: "Please upload PDF file."
        },
        logoImage:{
            checkExtension:"Please upload JPG, PNG, JPEG file."
        }
 },
    submitHandler: function (form) {
        swal({
          title: "Confirmation!!!",
          text: "Are you sure?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#069edb",
          confirmButtonText: "Yes",
          closeOnConfirm: false
        },function(isConfirm) {
            if (!isConfirm) {
                window.location = base_url+'/en/publisher/edit-profile';
            }else{
                document.getElementById("edit_form").submit();
                //$('#edit_form').submit();
            }
        })

        //abc = 'sdsadsad';
        //checkBeginningWhiteSpace(abc)
    }
});


$("#discount_form").validate({
    rules: {
        discount: {
            required: !0,
            minlength: 1,
            maxlength: 3,
            max:100
        },
         start_date: {
            required: !0,
           
        },
         expiry_date: {
            required: !0,
          
        },
        
    },
    messages: {
        discount: {
            required: "*Please enter your discount.",
            minlength: "Enter atleast 1 digit.",
            maxlength: "Please enter 3 digits.",
            max:"Please enter discount below or equal to 100."
            
        },
         start_date: {
            required: "Please select start date.",
           
        },
         expiry_date: {
            required: "Please select end date.",
          
        }
       
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});




$("#reject_form").validate({
    rules: {
        "reasonType[]": {
            required: !0,
        },
         reasonText: {
            required: !0,
            minlength: 1,
            maxlength: 199
           
        },
        
        
    },
    messages: {
        "reasonType[]": {
            required: "*Please enter your reason type.",
        },
        reasonText: {
            required: "*Please enter your reason.",
            minlength: "Enter atleast 1 characters.",
            maxlength: "Please enter 200 characters.",
            
        }
       
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});




$("#changePass_form").validate({
    rules: {
        current_pass: {
            required: !0,
           // customValidation:!0,
            minlength:8,
            maxlength:16
        },
        new_pass: {
            required: !0,
           // customValidation:!0,
            minlength:8,
            maxlength:16
        },
        confirm_pass: {
            required: !0,
            //customValidation:!0,
            minlength:8,
            maxlength:16,
            equalTo: "#new_pass" 
        }
    },
    messages: {
        current_pass: {
            required: "*Please enter your current password.",
            minlength: "Current password contains atleast 8 characters.",
            maxlength: "Current password contains maximum 16 characters.",
            //customValidation: "Email should not be prefix by space."
            
        },
        new_pass: {
            required: "*Please enter your new password.",
          //  customValidation: "Password should not be prefix by space.",
            minlength:"New password contains atleast 8 characters.",
            maxlength:"New password contains maximum 16 characters."
        },
        confirm_pass: {
            required: "*Please enter confirm password.",
            //customValidation: "Password should not be prefix by space.",
            minlength:"Confirm password contains atleast 8 characters.",
            maxlength:"Confirm password contains maximum 16 characters.",
            equalTo:"New password and Confirm password must be same."
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#book_form").validate({
    rules: {
        isbn_number: {
            required: !0,
            minlength: 10,
            maxlength: 20,
            customValidation:!0,
            isbnValidation: !0,
            zeroNotAllowed:!0,
            isbnExist:!0
        },
         book_name: {
            required: !0,
            customValidation:!0,
           // alphabetsOnly: !0,
          // alphaNumericOnly: !0,
            minlength:3,
            maxlength:100
        },
        author_type: {
            required: !0,
            customValidation:!0,
            alphaNumericOnly: !0,
            minlength:3,
            maxlength:30
        },
        rating: {
            required: !0
        },
        language: {
            required: !0
        },
        category: {
            required: !0
        },
        reviews: {
            required: !0,
            customValidation:!0,
            minlength:4,
            maxlength:30
        },
        no_purchased: {
            required: !0,
            customValidation:!0,
            number:!0,
            min:1,
            maxlength:5,
            PrefixByZero: !0
        },
        description: {
            required: !0,
            customValidation:!0/*,
            Check:!0*/
            
        },
        publish_date: {
            required: !0
        },
        expiry_date: {
            required: !0,
            greaterThan: "#publishDate"
        },
        currency: {
            required: !0,
        },
        price: {
            required: !0,
           // number: !0,
           // decimalNumber:!0,
            maxlength: 10,
            minlength: 1,
            min:1/*,
            PrefixByZero:!0*/
        },
        coverImage: {
            required: !0,
           // extension : "jpg,png,jpeg"
           checkExtension:!0
            /*accept: "jpg,png,jpeg"*/

        },
        uploadBook: {
            required: !0,
            checkBookExtension: !0/*,
            accept: ".pdf"*/
        },
        uploadBookSample: {
            required: !0,
            checkBookExtension: !0/*,
            accept: ".pdf"*/
        },
        paid_type:{
            required: !0
        },
        no_of_pages:{
            required: !0,
            number: !0,
            minlength: 2,
            maxlength: 5,
            min:1,
            PrefixByZero: !0
        },
         edition_no: {
            required: !0,
            //number: !0,
            minlength: 2,
            maxlength: 5//,
            //min:1,
            //PrefixByZero: !0
        },
        publisherUser:{
            required: !0
        }
    },
    messages: {
       isbn_number: {
            required: "Please enter ISBN number.",
            minlength: "Please enter minimum 10 digits.",
            maxlength: "Please enter maximum 20 digits.",
            customValidation:"Isbn field do not prefix by space.",
            isbnValidation: "Please enter valid ISBN number.",
            zeroNotAllowed:"Please enter valid ISBN number.",
            isbnExist:"ISBN already exists."
        },
        book_name: {
            required: "Please enter book name.",
            minlength: "Please enter minimum 3 characters.",
            customValidation:"Book name field do not prefix by space.",
            maxlength:"Please enter maximum 100 characters."
            //alphaNumericOnly: "Please enter alphabets and numbers only.",
            //alphabetsOnly:"Please enter alphabets only."
        },
        author_type: {
            required: "Please enter author name.",
            minlength: "Please enter minimum 3 characters.",
            customValidation:"Author name field do not prefix by space.",
            maxlength: "Please enter maximum 30 characters.",
            alphaNumericOnly: "Please enter alphabets and numbers only.",
        },
        rating: {
            required: "Please enter rating."
        },
        language: {
            required: "Please enter language."
        },
        category: {
            required: "Please enter category."
        },
        reviews: {
            required: "Please enter reviews.",
            minlength: "Please enter minimum 4 characters.",
            maxlength: "Please enter maximum 30 characters.",
            customValidation:"This field do not prefix by space."
        },
        no_purchased: {
            required: "Please enter no. of purchased allowed.",
            customValidation:"No. of Purchased field do not prefix by space.",
            min:"Please enter valid number.",
            maxlength:"Please enter maximum 5 characters.",
            PrefixByZero:"Please enter valid number."
        },
        description: {
            required: "Please enter description.",
            customValidation:"Description field do not prefix by space."
        },
        publish_date: {
            required: "Please enter publish date."
        },
        expiry_date: {
            required: "Please enter expiry date.",
            greaterThan: "Expiry Date must be greater than publish date."
        },
        currency: {
            required: "Please select currency."
        },
        price: {
           // decimalNumber : "Please enter correct price.",
            required: "Please enter price.",
            customValidation:"Price field do not prefix by space.",
            minlength: "Price must contain one digits.",
            maxlength: "Price should contain maximum 10 characters.",
            //number: "Price should contains digits only.",
            min:"Please enter valid price.",
            PrefixByZero: "Please enter valid price."
        },
        coverImage: {
            required: "Please select cover image.",
            checkExtension:"Please upload jpf, png, jpeg file."
        },
        uploadBook: {
            required: "Please select File.",
            checkBookExtension:"Please upload epub or pdf file."
        },
        uploadBookSample: {
            required: "Please select file.",
            checkBookExtension:"Please upload epub or pdf file."
        },
        paid_type:{
            required: "Please select book type."
        },
        no_of_pages:{
            required: "Please enter number of pages.",
            minlength: "Minimum number of pages should be in 2 digits.",
            maxlength: "Maximum number of pages should be upto 5 digits.", 
            number: "Please enter digits only.",
            min:"Please enter valid number.",
            PrefixByZero:"Please enter valid number."
        },
        edition_no: {
            required: "Please enter edition number.",
            minlength: "Minimum edition number should be in 2 digits.",
            maxlength: "Maximum edition number should not be upto 5 digits.", 
            number: "Please enter digits only.",
            min:"Please enter valid number.",
            PrefixByZero:"Please enter valid number."
        },
        publisherUser:{
            required: "Please enter publisher user."
        }

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#edit_book").validate({
 rules: {
        isbn_number: {
            required: !0,
            minlength: 10,
            maxlength: 20,
            customValidation:!0,
            isbnValidation: !0,
            zeroNotAllowed:!0,
            isbnExist:!0
        },
         book_name: {
            required: !0,
            customValidation:!0,
            minlength:3,
            maxlength:100/*,
            alphabetsOnly:!0*/
        },
        author_type: {
            required: !0,
            customValidation:!0,
            minlength:3,
            maxlength:30
        },
        rating: {
            required: !0
        },
        language: {
            required: !0
        },
        category: {
            required: !0
        },
        reviews: {
            required: !0,
            customValidation:!0,
            minlength:4,
            maxlength:30
        },
        no_purchased: {
            required: !0,
            customValidation:!0,
            number:!0,
            min:1,
            maxlength:5,
            PrefixByZero: !0
        },
        description: {
            required: !0,
            customValidation:!0
        },
        publish_date: {
            required: !0
        },
        expiry_date: {
            required: !0,
            greaterThan:"#publishDate"
        },
        currency: {
            required: !0,
        },
        price: {
            required: !0,
            //number: !0,
            maxlength: 10,
            minlength: 1,
            min:1/*,
            PrefixByZero: !0*/
        },
        coverImage: {
           // extension : "jpg,png,jpeg"
           checkExtension: !0
            /*accept: "jpg,png,jpeg"*/

        },
        uploadBook: {
            //accept: ".pdf"
            checkBookExtension:!0
        },
        uploadBookSample: {
            //accept: ".pdf"
            checkBookExtension:!0
        },
        paid_type:{
            required: !0
        },
        edition_no: {
            required: !0,
           // number: !0,
            minlength: 2,
            maxlength: 5//,
            //min:1,
            //PrefixByZero: !0
        },
        no_of_pages:{
            required: !0,
            number: !0,
            PrefixByZero: !0,
            minlength: 2,
            maxlength: 5,
            min:1
        
        }
    },
    messages: {
       isbn_number: {
            required: "Please enter ISBN number.",
            minlength: "Please enter minimum 10 digits.",
            maxlength: "Please enter maximum 20 digits.",
            customValidation:"Isbn field do not prefix by space.",
            isbnValidation:"Please enter valid ISBN number.",
            zeroNotAllowed:"Please enter valid ISBN number.",
            isbnExist:"ISBN already exists."
        },
        book_name: {
            required: "Please enter book name.",
            minlength: "Please enter minimum 3 characters.",
            customValidation:"Book field do not prefix by space.",
            maxlength:"Please enter maximum 100 characters."/*,
            alphabetsOnly: "Please enter alphabets only."*/
        },
        author_type: {
            required: "Please enter author name.",
            minlength: "Please enter minimum 3 characters.",
            customValidation:"Author field do not prefix by space.",
            maxlength: "Please enter maximum 30 characters."
        },
        rating: {
            required: "Please enter rating."
        },
        language: {
            required: "Please enter language."
        },
        category: {
            required: "Please enter category."
        },
        reviews: {
            required: "Please enter reviews.",
            minlength: "Please enter minimum 4 characters.",
            maxlength: "Please enter maximum 30 characters.",
            customValidation:"Reviews field do not prefix by space."
        },
        no_purchased: {
           required: "Please enter no. of purchased allowed.",
            customValidation:"No. of purchased field do not prefix by space.",
            min:"Please enter valid number.",
            maxlength:"Please enter maximum 5 characters.",
            PrefixByZero:"Please enter valid number."
        },
        description: {
            required: "Please enter description.",
            customValidation:"Description field do not prefix by space."
        },
        publish_date: {
            required: "Please enter publish date."
        },
        expiry_date: {
            required: "Please enter expiry date.",
            greaterThan: "Expiry Date must be greater than publish date."
        },
        currency: {
            required: "Please select currency."
        },
        price: {
            required: "Please enter price.",
            customValidation:"Price field do not prefix by space.",
            minlength: "Price must contain one digit.",
            maxlength: "Price contains maximum 10 digits.",
            number: "Price should contains digits only.",
            PrefixByZero: "Please enter valid price.",
            min:"Please enter valid price."
        },
        coverImage: {
            required: "Please select cover image.",
            checkExtension:"Please upload jpg, png, jpeg file."
        },
        uploadBook: {
            required: "Please select file.",
            checkBookExtension:"Please upload epub or pdf file."
        },
        uploadBookSample: {
            required: "Please select file.",
            checkBookExtension:"Please upload epub or pdf file."
        },
        paid_type:{
            required: "Please select book type."
        },
        coverImage: {
           checkExtension:"Please upload jpg, png, jpeg file."
        },
        uploadBook: {
            checkBookExtension:"Please upload epub or pdf file."
        },
        uploadBookSample: {
            //accept: ".pdf"
            checkBookExtension:"Please upload epub or pdf file."
        },
        paid_type:{
            required: "Please select book type."
        },
        edition_no: {
            required: "Please enter edition number.",
            minlength: "Minimum edition number should be in 2 digits.",
            maxlength: "Maximum edition number should not be upto 5 digits.", 
            number: "Please enter digits only.",
            min:"Please enter valid number.",
            PrefixByZero:"Please enter valid number."
        },
        no_of_pages:{
            required: "Please enter number of pages.",
            number: "Please enter digits only.",
            PrefixByZero: "Please enter valid number.",
            minlength: "Minimum number of pages should be in 2 digits.",
            maxlength: "Maximum number of pages should be upto 5 digits.", 
            min:"Please enter valid number.",
           
        }

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#subauthor_form").validate({
    rules: {
        email: {
            required: !0,
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0
        },
        password: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16
        },
         confirm_pass: {
            required: !0,
            //customValidation:!0,
            minlength:8,
            maxlength:16,
            equalTo: "#password" 
        }
    },
    messages: {
        email: {
            required: "*Please enter your email.",
            minlength: "Email contains atleast 6 characters",
            maxlength: "Email contains maximum 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email."
        },
        password: {
            required: "*Please enter your password.",
            customValidation: "Password should not be prefix by space.",
            minlength:"Password contains atleast 8 characters.",
            maxlength:"Password contains maximum 16 characters."
        },
        confirm_pass: {
            required: "*Please enter confirm password.",
            //customValidation: "Password should not be prefix by space.",
            minlength:"Confirm password contains atleast 8 characters.",
            maxlength:"Confirm password contains maximum 16 characters.",
            equalTo:"New password and confirm password must be same."
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#edit_subauthor").validate({
    rules: {
        email: {
            required: !0,
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0
        },
        password: {
            required: !0,
            customValidation:!0,
            minlength:8,
           // maxlength:16
        }
    },
    messages: {
        email: {
            required: "*Please enter your email.",
            minlength: "Email contains atleast 6 characters",
            maxlength: "Email contains maximum 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email."
        },
        password: {
            required: "*Please enter your password.",
            customValidation: "Password should not be prefix by space.",
            minlength:"Password contains atleast 8 characters.",
           // maxlength:"Password contains maximum 16 characters."
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#add_user").validate({
    rules: {
        fname: {
            required: !0,
            minlength: 2,
            maxlength: 50,
            alphabetsOnly: !0
           // NoSpace: !0
        },
        lname: {
            required: !0,
            minlength: 2,
            maxlength: 50,
            alphabetsOnly: !0,
            NoSpace: !0
        },
         username: {
            required: !0,
            minlength: 2,
            maxlength: 25,
            customValidation: !0,
            specificSpecialChar: !0,
            NoSpace: !0
        },
        email: {
            required: !0,
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0,
            remote: {
                url: base_url + "/en/admin/unique_email/user",
                type: "POST",
                headers: {
                    'X-CSRF-TOKEN': csrf_token
                },
                data: {
                    email: function() {
                        return $( "#email" ).val();
                    }
                }
            }
        },
        password: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16
        },
        password_confirmation: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16,
            equalTo: "#password"
        },
        
       mobile_number: {
            required: !0,
            minlength: 7,
            maxlength: 14,
            zeroNotAllowed:!0,
            number: !0,
            min:1
        },
        phonecode:{
            required: !0,
            //noallzero: !0
        },
        /*country: {
            required: !0
        },
        occupation: {
            required: !0
        },*/
        dob: {
          //  required: !0
        },
        gender:{
          //  required: !0
        }
       
    },
    messages: {
        fname: {
            required: "*Please enter your first name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
           alphabetsOnly: "Please enter alphabets only."
          //  NoSpace: "Please not enter space."
        },
        lname: {
            required: "*Please enter your last name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
            alphabetsOnly: "Please enter alphabets only.",
            NoSpace: "Please not enter space."
        },
        username: {
            required: "*Please enter username.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 25 characters.",
            customValidation: "Username should not be prefix by space.",
            specificSpecialChar: "Please enter alphabets and special characters(_.-)",
            NoSpace: "Spaces are not allowed."
          
        },
        email: {
            required: "*Please enter your email.",
            minlength: "Please enter atleast 6 characters.",
            maxlength: "Please enter maximum 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email."
        },
        password: {
            required: "*Please enter your password.",
            customValidation: "Password should not be prefix by space.",
            minlength:"Password contains atleast 8 characters.",
            maxlength:"Password contains maximum 16 characters."
        },
        password_confirmation: {
            required: "*Please enter your confirm password.",
            customValidation: "Confirm password should not be prefix by space.",
            minlength:"Confirm password contains atleast 8 characters.",
            maxlength:"Confirm password contains maximum 16 characters.",
            equalTo:"Password and confirm password must be same."
        },
        mobile_number: {
            required: "*Please enter mobile number.",
            minlength: "Please enter minimum 7 characters.",
            maxlength: "Please enter maximum 14 characters.",
            zeroNotAllowed:"Please enter valid number.",
            number: "Please enter digits only.",
            min:"Please enter valid number."
        },
        phonecode:{
           required: "Please enter phonecode."
            //PhoneValidation: "Please enter valid phone number."
        },
        /*country: {
            required: "*Please enter country."
        },
        occupation: {
            required: "*Please enter occupation."
        },*/
        dob:{
       //     required: "*Please enter dob."
        },
        gender: {
         //   required: "*Please enter gender."
        }
 },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#edit_user").validate({
    rules: {
        first_name: {
            required: !0,
            minlength: 2,
            maxlength: 50,
            alphaNumericOnly: !0
           // alphabetsOnly: !0,
           // customValidation:!0
        },
        last_name: {
            required: !0,
            minlength: 2,
            maxlength: 50,
            alphaNumericOnly: !0
           // alphabetsOnly: !0,
           // customValidation:!0
        },
         username: {
            required: !0,
            minlength: 2,
            maxlength: 25,
            customValidation:!0,
            NoSpace: !0
        }, 
        email: {
            required: !0,
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0,
            emailCheck : !0
            /*remote: {
                url: base_url + "/en/admin/unique_email/user",
                type: "POST",
                headers: {
                    'X-CSRF-TOKEN': csrf_token
                },
                data: {
                    email: function() {
                        return $( "#email" ).val();
                    }
                }
            }*/
        },
        password: {
            customValidation:!0,
            minlength:8,
            maxlength:16
        },
        password_confirmation: {
            customValidation:!0,
            // PasswordValidation:!0,
            minlength:8,
            maxlength:16,
            /*remote: {
                url: base_url + "/en/admin/require_pass",
                type: "POST",
                headers: {
                    'X-CSRF-TOKEN': csrf_token
                },
                data: {
                    password: function() {
                        return $( "#password" ).val();
                    }
                }
            },*/
            equalTo: "#password"
        },
        
        mobile_number: {
            required: !0,
            minlength: 7,
            maxlength: 14,
            zeroNotAllowed:!0,
            number: !0,
            min:1
        },
        phonecode:{
         //  required: !0
         //   noallzero: !0
        }
       /* country: {
            required: !0
        },*/
       /*occupation: {
           // required: !0
           //maxlength: 60
        } ,
        dob: {
            required: !0
        },*/
       /* gender:{
            required: !0
        }*/
       
    },
    messages: {
        first_name: {
            required: "*Please enter your first name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
            alphaNumericOnly: "Please enter alphabets and numbers only."
            //alphabetsOnly: "Please enter alphabets only.",
            //customValidation:"First Name should not prefix by space."
        },
        last_name: {
            required: "*Please enter your last name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
            alphaNumericOnly: "Please enter alphabets and numbers only."
            //alphabetsOnly: "Please enter alphabets only.",
            //customValidation:"Last Name should not prefix by space."
        },
        username: {
            required: "*Please enter username.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 25 characters.",
            customValidation:"Username should not prefix by space.",
            NoSpace: "Spaces are not allowed. "
         
        },
        email: {
            required: "*Please enter your email.",
            minlength: "Please enter atleast 6 characters",
            maxlength: "Please enter maximum 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email.",
            emailCheck:"This email is already exists."
        },
        password: {
            customValidation: "Password should not be prefix by space.",
            minlength:"Password contains atleast 8 characters.",
            maxlength:"Password contains maximum 16 characters."
        },
        password_confirmation: {
            customValidation: "Confirm password should not be prefix by space.",
          //  PasswordValidation: "Please enter password first.",
            minlength:"Confirm password contains atleast 8 characters.",
            maxlength:"Confirm password contains maximum 16 characters.",
            equalTo:"Password and confirm password must be same."
        },
       mobile_number: {
            required: "*Please enter mobile number.",
            minlength: "Please enter minimum 7 characters.",
            maxlength: "Please enter maximum 14 characters.",
            zeroNotAllowed:"Please enter valid number",
            number: "Please enter digits only.",
            min:"Please enter valid number"
          
        },
        phonecode:{
         //  required: "Please enter phonecode."
           // noallzero: "Phone number should not contain all zeroes."
        }
        /*country: {
            required: "*Please enter country."
        },
        occupation: {
          //  required: "*Please enter occupation."
         // maxlength : "Please enter maximum 60 characters."
        }/*,
        dob:{
            required: "*Please enter dob."
        },*/
        /*gender: {
            required: "*Please enter gender."
        }*/
 },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#admin_publisher").validate({
    rules: {
        fname: {
            required: !0,
            minlength: 2,
            maxlength: 50,
            //alphabetsOnly: !0
            //NoSpace:!0,
            alphabetsOnly: !0
        },
        lname: {
            required: !0,
            minlength: 2,
            maxlength: 50,
          //  NoSpace: !0,
           alphabetsOnly: !0
        },
        admin_email: {
            required: !0,
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0,
            remote: {
                url: base_url + "/en/admin/unique_email",
                type: "POST",
                headers: {
                    'X-CSRF-TOKEN': csrf_token
                },
                data: {
                    email: function() {
                        return $( "#email" ).val();
                    }
                }
            }
        },
        company_website: {
            required: !0,
           // url: !0,
            UrlVal: !0,
            maxlength: 150,
            minlength:10
        },
        password: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16,
            NoSpace:!0
        },
        password_confirmation: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16,
            equalTo: "#password"
        },
        
        mobile_number: {
            required: !0,
            minlength: 7,
            maxlength: 14,
            zeroNotAllowed:!0,
            number: !0,
            min:1
        },
        phonecode:{
            required: !0
        },
        phone_number: {
            minlength: 7,
            maxlength: 14,
            zeroNotAllowed:!0,
            number: !0,
            min: 1
        },
        publisher_company: {
            required: !0,
            minlength: 2,
            maxlength: 150
        },
        company_address: {
            required: !0,
            minlength: 2,
            maxlength: 200
        },
        po_box: {
            required: !0,
            number: !0,
            minlength: 5,
            maxlength: 6/*,
            PhoneValidation: !0*/
        },
        country: {
            //required: !0,
           // alphabetsOnly: !0
         }
       
    },
    messages: {
        fname: {
            required: "*Please enter your first name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
            NoSpace: "Please not enter space.",
            alphabetsOnly: "Please enter alphabets only."
            //alphaNumericOnly: "Please enter alphabets and numbers only."
        },
        lname: {
            required: "*Please enter your last name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
            NoSpace: "Please not enter space.",
            alphabetsOnly: "Please enter alphabets only."
          // alphaNumericOnly: "Please enter alphabets and numbers only."
        },
        admin_email: {
            required: "*Please enter your email.",
            minlength: "Please enter atleast 6 characters.",
            maxlength:"Please enter maximum 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email."
        },
        company_website: {
            required: "*Please enter your company website.",
            maxlength: "Please enter maximum 150 characters.",
            minlength: "Please enter atleast 10 characters.",
            UrlVal: "Plese enter valid url."
        },
        password: {
            required: "*Please enter your password.",
            customValidation: "Password should not be prefix by space.",
            minlength:"Password contains atleast 8 characters.",
            NoSpace: "Please not enter space.",
            maxlength:"Password contains maximum 16 characters."
        },
        password_confirmation: {
            required: "*Please enter your confirm password.",
            customValidation: "Confirm password should not be prefix by space.",
            minlength:"Confirm password contains atleast 8 characters.",
            maxlength:"Confirm password contains maximum 16 characters.",
            equalTo:"Password and confirm password must be same."
        },
        
        mobile_number: {
            required: "*Please enter mobile number.",
            minlength: "Please enter minimum 7 characters.",
            maxlength: "Please enter maximum 14 characters.",
            zeroNotAllowed:"Please enter valid number.",
            number: "Please enter digits only.",
            min:"Please enter valid number."
        },
        phonecode:{
            required: "*Please enter phonecode."
        },
       phone_number: {
            minlength: "Please enter minimum 7 characters.",
            maxlength: "Please enter maximum 14 characters.",
            zeroNotAllowed:"Please enter valid number",
            number: "Please enter digits only.",
            min:"Please enter valid number."
        },
        publisher_company: {
            required: "*Please enter publisher company name.",
            maxlength: "Please enter maximum 150 characters."
        },
        company_address: {
            required: "*Please enter company address.",
            maxlength: "Please enter maximum 200 characters."
        },
        po_box:{
            required: "*Please enter P.O.Box.",
            maxlength: "Please enter maximum 6 characters.",
            minlength: "Please enter minimum 5 characters.",
            number: "Please enter numbers only." /*,
            PhoneValidation: "Please enter valid P.O.Box."*/
        },
        country:{
           // required: "*Please enter country.",
            //alphabetsOnly: "Please enter alphabets only."
        }
 },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#edit_admin_publisher").validate({
    rules: {
        first_name: {
            required: !0,
            minlength: 2,
            maxlength: 50,
            //alphabetsOnly: !0
            alphaNumericOnly: !0
        },
        last_name: {
            required: !0,
            minlength: 2,
            maxlength: 50,
           // alphabetsOnly: !0
           alphaNumericOnly: !0
        },
        
        company_website: {
            required: !0,
           // url: !0,
            UrlVal: !0,
            maxlength: 150,
            minlength: 10
        },
         mobile_no: {
            required: !0,
            minlength: 7,
            maxlength: 14,
            zeroNotAllowed:!0,
            number: !0,
            min:1
        },
        phonecode:{
            required: !0
        },
        phone_no: {
            minlength: 7,
            maxlength: 14,
            zeroNotAllowed:!0,
            number: !0,
            min:1
        },
        company_name: {
            required: !0,
            minlength: 2,
            maxlength: 150
        },
        company_add: {
            required: !0,
            minlength: 2,
            maxlength: 200
        },
        po_box: {
            required: !0,
            minlength: 5,
            maxlength: 6
        },
        country: {
           // required: !0,
          //  alphabetsOnly: !0
         },
         admin_email:{
            email:!0,
            required: !0,
            minlength: 6,
            maxlength: 70,
            //emailValidation : !0
            emailCheck: !0,
        /*    remote: {
                url: base_url + "/en/admin/unique_email",
                type: "POST",
                headers: {
                    'X-CSRF-TOKEN': csrf_token
                },
                data: {
                    email: function() {
                        return $( "#email" ).val();
                    }
                }
            }*/
         }
       
    },
    messages: {
        first_name: {
            required: "*Please enter your first name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
            //alphabetsOnly: "Please enter alphabets only."
            alphaNumericOnly: "Please enter alphabets and numbers only."
        },
        last_name: {
            required: "*Please enter your last name.",
            minlength: "Please enter atleast 2 characters.",
            maxlength: "Please enter maximum 50 characters.",
           // alphabetsOnly: "Please enter alphabets only."
           alphaNumericOnly: "Please enter alphabets and numbers only."
        },
        
        company_website: {
            required: "*Please enter your company website.",
            maxlength: "Please enter maximum 150 characters.",
            UrlVal: "Plese enter valid url."
        },
        mobile_no: {
            required: "*Please enter mobile number.",
            minlength: "Please enter minimum 7 characters.",
            maxlength: "Please enter maximum 14 characters.",
            zeroNotAllowed:"Please enter valid number.",
            number: "Please enter digits only.",
            min:"Please enter valid number."
        },
        phonecode:{
            required: "*Please enter phonecode."
        },
        phone_no: {
            minlength: "Please enter minimum 7 characters.",
            maxlength: "Please enter maximum 14 characters.",
            zeroNotAllowed:"Please enter valid number.",
            number: "Please enter digits only.",
            min:"Please enter valid number."
        },
        company_name: {
            required: "*Please enter publisher company name.",
            maxlength:"Please enter maximum 150 characters."
        },
        company_add: {
            required: "*Please enter company address.",
            maxlength: "Please enter 200 characters."
        },
        po_box:{
            required: "*Please enter P.O.Box.",
            maxlength:"Please enter maximum 6 characters.",
            minlength:"Please enter minimum 5 characters."
        },
        country:{
            //required: "*Please enter country.",
            // alphabetsOnly: "Please enter alphabets only."
        },
        admin_email:{
            email:"Please enter valid email.",
            required: "*Please enter email.",
            emailCheck:"This email is already exists.",
            minlength: "Please enter minimum 6 characters.",
            maxlength: "Please enter maximum 70 characters."
            //emailValidation : "Email already exist.",
         }
 },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#admin_editBook").validate({
 rules: {
        isbn_number: {
            required: !0,
            minlength: 10,
            maxlength: 20,
            customValidation:!0,
            isbnValidation: !0,
            zeroNotAllowed:!0,
            isbnExist:!0
        },
         book_name: {
            required: !0,
            customValidation:!0,
            minlength:3,
            maxlength:50/*,
            alphabetsOnly:!0*/
        },
        author_type: {
            required: !0,
            customValidation:!0,
            minlength:3,
            maxlength:30
        },
        rating: {
            required: !0
        },
        language: {
            required: !0
        },
        category: {
            required: !0
        },
        reviews: {
            required: !0,
            customValidation:!0,
            minlength:4,
            maxlength:30
        },
        no_purchased: {
            required: !0,
            customValidation:!0,
            number:!0,
            min:1,
            maxlength:5,
            PrefixByZero: !0
        },
        description: {
            required: !0,
            customValidation:!0
        },
        publish_date: {
            required: !0
        },
        expiry_date: {
            required: !0,
            greaterThan:"#publishDate"
        },
       /* currency: {
            required: !0,
        },*/
        priceId: {
            number: !0,
            maxlength: 10,
            minlength: 1,
            customValidation:!0,
            //PrefixByZero:!0
        },
        publisherUser: {
              required: function(element){
               if(($("#priceId").val() != "")) {
                return true;
              } else {
                return false;
              }
            }
        },
        coverImage: {
            //extension : "jpg,png,jpeg"
            /*accept: "jpg,png,jpeg"*/
            checkExtension: !0
        },
        uploadBook: {
            //accept: ".pdf"
            checkBookExtension: !0
        },
        uploadBookSample:{
            checkBookExtension: !0
        },
        paid_type:{
            required: !0
        },
        no_of_pages:{
            required: !0,
            number: !0,
            minlength: 2,
            maxlength: 5,
            min:1,
            PrefixByZero: !0
        },
        edition_no:{
            required: !0,
            //number: !0,
            minlength: 2,
            maxlength: 5/*,
            min:1,
            PrefixByZero: !0*/
        }
    },
    messages: {
       isbn_number: {
            required: "Please enter ISBN number.",
            minlength: "Please enter minimum 10 digits.",
            maxlength: "Please enter maximum 20 digits.",
            customValidation:"Isbn field do not prefix by space.",
            isbnValidation:"Please enter valid ISBN number.",
            zeroNotAllowed:"Please enter valid ISBN number.",
            isbnExist:"ISBN already exists."
        },
        book_name: {
            required: "Please enter book name.",
            minlength: "Please enter minimum 3 characters.",
            customValidation:"Book field do not prefix by space.",
            maxlength:"Please enter maximum 50 characters."/*,
            alphabetsOnly: "Please enter alphabets only."*/
        },
        author_type: {
            required: "Please enter author name.",
            minlength: "Please enter minimum 3 characters.",
            customValidation:"Author field do not prefix by space.",
            maxlength: "Please enter maximum 30 characters."
        },
        rating: {
            required: "Please enter rating."
        },
        language: {
            required: "Please enter language."
        },
        category: {
            required: "Please enter category."
        },
        reviews: {
            required: "Please enter reviews.",
            minlength: "Please enter minimum 4 characters.",
            maxlength: "Please enter maximum 30 characters.",
            customValidation:"Reviews field do not prefix by space."
        },
        no_purchased: {
            required: "Please enter no. of purchased allowed.",
            customValidation:"No. of purchased field do not prefix by space.",
            min:"Please enter valid number.",
            maxlength:"Please enter maximum 5 characters.",
            PrefixByZero:"Please enter valid number."
        },
        description: {
            required: "Please enter description.",
            customValidation:"Description field do not prefix by space."
        },
        publish_date: {
            required: "Please enter publish date."
        },
        expiry_date: {
            required: "Please enter expiry date.",
            greaterThan: "Expiry Date must be greater than publish date."
        },
        currency: {
            required: "Please select currency."
        },
        priceId: {
            //required: "Please enter Price.",
            customValidation:"Price field do not prefix by space.",
            minlength: "Price must contain one digits.",
            maxlength: "Price should contain maximum 10 characters.",
            number: "Price should contains digits only.",
            //min:"Please enter valid price.",
            //PrefixByZero: "Please enter valid price."
        },
        coverImage: {
            //extension : "jpg,png,jpeg"
            /*accept: "jpg,png,jpeg"*/
            checkExtension:"Please upload jpg, png, jpeg file."
        },
        uploadBook: {
            //accept: ".pdf"
            checkBookExtension:"Please upload epub or pdf file."
        },
        uploadBookSample:{
           checkBookExtension:"Please upload epub or pdf file."
        },
        paid_type:{
            required: "Please select book type."
        },
        no_of_pages:{
            required: "Please enter number of pages.",
            minlength: "Minimum number of pages should be in 2 digits.",
            maxlength: "Maximum number of pages should be upto 5 digits.", 
            number: "Please enter digits only.",
            min:"Please enter valid number.",
            PrefixByZero:"Please enter valid number."
        },
        edition_no:{
            required: "Please enter edition number.",
            minlength: "Minimum edition number should be in 2 digits.",
            maxlength: "Maximum edition number should not be upto 5 digits.", 
            number: "Please enter digits only.",
            min:"Please enter valid number.",
            PrefixByZero:"Please enter valid number."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#editcategoryModal").validate({
 rules: {
        english_name: {
            required: !0,
            maxlength:50,
            alphabetsOnly: !0
        },
         arabic_name: {
            required: !0,
            maxlength:50
        },
        french_name: {
            required: !0,
            maxlength:50,
            alphabetsOnly:!0
        }
    },
    messages: {
       english_name: {
            required: "Please enter category name in english.",
            maxlength: "Please enter maximum 50 characters.",
            alphabetsOnly: "Please enter alphabets only."
        },
        arabic_name: {
            required: "Please enter category name in arabic.",
            maxlength: "Please enter maximum 50 characters."
        },
        french_name: {
            required: "Please enter category name in french.",
            maxlength: "Please enter maximum 50 characters.",
            alphabetsOnly: "Please enter alphabets only."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#addCategoryModal").validate({
 rules: {
        category: {
            required: !0,
            maxlength: 50,
            alphabetsOnly: !0
        },
         name_ar: {
            required: !0,
            maxlength: 50
        },
        name_fr: {
            required: !0,
            maxlength: 50
        }
    },
    messages: {
       category: {
            required: "Please enter category name in english.",
            maxlength: "Please enter maximum 50 characters.",
            alphabetsOnly: "Please enter alphabets only."
        },
        name_ar: {
            required: "Please enter category name in arabic.",
            maxlength: "Please enter maximum 50 characters."
        },
        name_fr: {
            required: "Please enter category name in french.",
            maxlength: "Please enter maximum 50 characters."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#editOccupationModal").validate({
 rules: {
        occupation: {
            required: !0,
            maxlength:50
        }
    },
    messages: {
       occupation: {
            required: "Please enter occupation .",
            maxlength: "Please enter maximum 50 characters."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#helpCategory_modal").validate({
 rules: {
        category: {
            required: !0,
            maxlength: 50
        }
    },
    messages: {
       category: {
            required: "Please enter help and support category .",
            maxlength: "Please enter maximum 50 characters."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#edit_helpCategory_Modal").validate({
 rules: {
        english_name: {
            required: !0,
            maxlength: 50
        }
    },
    messages: {
       english_name: {
            required: "Please enter help and support category .",
            maxlength: "Please enter maximum 50 characters."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#addOccupationModal").validate({
 rules: {
        occupation: {
            required: !0,
            maxlength: 50
        }
    },
    messages: {
       occupation: {
            required: "Please enter occupation .",
            maxlength: "Please enter maximum 50 characters."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#addRejectionModal").validate({
 rules: {
        reason: {
            required: !0,
            maxlength: 50
        }
    },
    messages: {
       reason: {
            required: "Please enter rejection reason .",
            maxlength: "Please enter maximum 50 characters."
        }

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#editRejectionModal").validate({
 rules: {
        reason: {
            required: !0,
            maxlength:50
        }
    },
    messages: {
       reason: {
            required: "Please enter occupation .",
            maxlength: "Please enter maximum 50 characters."
        }

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#addLanguageModal").validate({
 rules: {
        language: {
            required: !0
        }
    },
    messages: {
       language: {
            required: "Please enter language ."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#editLanguageModal").validate({
 rules: {
        language: {
            required: !0
        }
    },
    messages: {
       language: {
            required: "Please enter language ."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

/*$("#editCarousel").validate({
 rules: {
        carouselImage: {
            accept : "jpg,png,jpeg"
        }
    },
    messages: {
       carouselImage: {
            accept: "Please enter valid extension file (jpg,png,jpeg)."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});*/


$("#carouselImage").change(function() {

    var val = $(this).val();

    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
        case 'gif': case 'jpg': case 'png': case 'jpeg':
            
            break;
        default:
            $(this).val('');
            // alert("Image is invalid.");
            swal({
              title: 'Nope!!',
              text: "Please enter valid file extensions(jpg,png,jpeg)",
              type: "warning",
            },
            function() {
              window.location.href = public_url + '/admin/master/carousel/list';
            });
            break;
    }
});


$("#LogoImage").change(function() {

    var val = $(this).val();

    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
        case 'gif': case 'jpg': case 'png': case 'jpeg':
            
            break;
        default:
            $(this).val('');
            // alert("Image is invalid.");
            swal({
              title: 'Nope!!',
              text: "Please enter valid file extensions(jpg,png,jpeg)",
              type: "warning",
            },
            function() {
              window.location.href = public_url + '/admin/master/logo';
            });
            break;
    }
});

$("#edit_admin_form").validate({
    rules: {
        admin_email: {
            required: !0,
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0
        },
        username: {
            required: !0,
            minlength:4,
            maxlength:25,
            customValidation:!0,
            NoSpace: !0
        } 
    },
    messages: {
        admin_email: {
            required: "*Please enter your email.",
            minlength: "Please enter atleast 6 characters",
            maxlength: "Please enter maximum 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email.",
            NoSpace: "No Spaces are allowed."
        },
        username: {
            required: "*Please enter your username.",
            customValidation: "Username should not be prefix by space.",
            minlength:"Username contains atleast 4 characters.",
            maxlength:"Username contains maximum 25 characters.",
            NoSpace: "Spaces are not allowed. "
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#admin_reward_form").validate({
    rules: {
        purchasing: {
            required: !0,
            number: !0,
            //PhoneValidation: !0,
            PrefixByZero: !0
          //  minlength: 3

        },
        user_will: {
            required: !0,
            number: !0,
           // PhoneValidation: !0,
            PrefixByZero: !0
        },
         lending: {
            required: !0,
            number: !0,
            //PhoneValidation: !0,
            PrefixByZero: !0
        },
         borrow: {
            required: !0,
            number: !0,
          //  PhoneValidation: !0,
            PrefixByZero: !0
        },
         sharing: {
            required: !0,
            number: !0,
          //  PhoneValidation: !0,
            PrefixByZero: !0
        },
        referring: {
            required: !0,
            number: !0,
           // PhoneValidation: !0,
            PrefixByZero: !0
        }  
         
    },
    messages: {
        purchasing: {
            required: "*Please enter price of book.",
            number: "Please enter digits only.",
            //minlength: "Please enter price greater than 100.",
          //  PhoneValidation: "Please enter valid number.",
            PrefixByZero: "Please enter integer value."
        },
        user_will: {
            required: "*Please enter points for purchasing a book.",
            number: "Please enter digits only.",
          //  PhoneValidation: "Please enter valid number.",
            PrefixByZero: "Please enter integer value."
        },
        lending: {
            required: "*Please enter points for lending a book.",
            number: "Please enter digits only.",
         //   PhoneValidation: "Please enter valid number.",
            PrefixByZero: "Please enter integer value."
        },
        borrow: {
            required: "*Please enter points for borrowing a book.",
            number: "Please enter digits only.",
          //  PhoneValidation: "Please enter valid number.",
            PrefixByZero: "Please enter integer value."
        },
        sharing: {
            required: "*Please enter points for sharing a quote.",
            number: "Please enter digits only.",
          //  PhoneValidation: "Please enter valid number.",
            PrefixByZero: "Please enter integer value."
        },
        referring: {
            required: "*Please enter points for referring a book.",
            number: "Please enter digits only.",
         //   PhoneValidation: "Please enter valid number.",
            PrefixByZero: "Please enter integer value."
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#notification_form").validate({
    rules: {
        message: {
            required: !0,
            maxlength: 200
        },
        send_notification:{
            required: !0
        },
        select_type:{
            required:!0
        },
        'user_name[]':{
            required: !0
        }
    },
    messages: {
        message: {
            required: "*Please enter some text.",
            maxlength: "Please enter maximum 200 characters."
        },
        send_notification:{
            required: "Please select sender."
        },
        select_type:{
            required: "Please select type."
        },
        'user_name[]':{
            required: "Please select users."
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


/*$("#publisher_index").validate({
    rules: {
        query: {
            maxlength: 50
        }
       
    },
    messages: {
        query: {
            maxlength: "Please enter maximum 50 characters."
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});*/

$("#quotes_form").validate({
    rules: {
        quotes: {
            required: !0,
            maxlength: 250
        },
        quotes_by: {
            required: !0,
            alphaNumericOnly: !0,
            maxlength: 50
           
        },
         reference: {
            required: !0,
            alphaNumericOnly: !0,
            maxlength: 100
        },
         'tags[]': {
            required: !0
        }
       
    },
    messages: {
        quotes: {
            required: "*Please select quote.",
            maxlength: "Please enter maximum 250 characters."
        },
        quotes_by: {
            required: "*Please enter quotes by.",
            alphaNumericOnly: "Please enter alphabets and numbers only.",
            maxlength: "Please enter maximum 50 characters."
            
        },
        reference: {
            required: "*Please enter reference.",
            alphaNumericOnly: "Please enter alphabets and numbers only.",
            maxlength: "Please enter maximum 100 characters."
            
        },
        'tags[]': {
            required: "*Please enter tags."
            
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#add-subadmin").validate({
 rules: {
        email: {
            required: !0,
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0,
            emailCheck: !0,
        },
        password: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:16
        },
        confirmpassword: {
            required: !0,
            customValidation:!0,
            minlength:8,
            maxlength:10,
            equalTo: "#password"
        }
    },
    messages: {
        email: {
            required: "*Please enter your email.",
            minlength: "Please enter atleast 6 characters",
            maxlength: "Please enter maximum 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email.",
            emailCheck:"This email is already exists."
        },
       password: {
            required: "*Please enter your password.",
            customValidation: "Password should not be prefix by space.",
            minlength:"Password contains atleast 8 characters.",
            maxlength:"Password contains maximum 16 characters."
        },
        confirmpassword: {
            required: "*Please enter your confirm password.",
            customValidation: "Confirm password should not be prefix by space.",
            minlength:"Confirm password contains atleast 8 characters",
            maxlength:"Confirm password contains maximum 16 characters",
            equalTo:"Password and confirm password must be same."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});



$("#edit-subadmin").validate({
 rules: {
        email: {
            minlength: 6,
            maxlength: 70,
            customValidation:!0,
            email:!0,
            emailVal : !0,
            //emailCheck: !0,
        },
        password: {
            customValidation:!0,
            minlength:8,
            maxlength:16
        },
        confirmpassword: {
            customValidation:!0,
            minlength:8,
            maxlength:10,
            equalTo: "#password"
        }
    },
    messages: {
        email: {
            required: "*Please enter your email.",
            minlength: "Please enter atleast 6 characters",
            maxlength: "Please enter maximum 70 characters.",
            customValidation: "Email should not be prefix by space.",
            email:"Please enter valid email.",
            emailVal : "Please enter valid email.",
            emailCheck:"This email is already exists."
        },
       password: {
            required: "*Please enter your password.",
            customValidation: "Password should not be prefix by space.",
            minlength:"Password contains atleast 8 characters.",
            maxlength:"Password contains maximum 16 characters."
        },
        confirmpassword: {
            required: "*Please enter your confirm password.",
            customValidation: "Confirm password should not be prefix by space.",
            minlength:"Confirm password contains atleast 8 characters.",
            maxlength:"Confirm password contains maximum 16 characters.",
            equalTo:"Password and confirm password must be same."
        }
        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#advertisement_form").validate({
    rules: {
        title: {
            required: !0,
            minlength: 6,
            maxlength: 30
        },
        'position[]': {
            required: !0
        },
          description: {
            required: !0,
            customValidation:!0,
            minlength:5,
            maxlength:150
        },
        language : {
            required: !0
        }
    },
    messages: {
        title: {
            required: "*Please enter your title.",
            minlength: "Please enter atleast 6 characters.",
            maxlength: "Please enter maximum 30 characters."
        },
        'position[]': {
            required: "*Please choose your position."
        },
        description:{
            required: "*Please enter your description.",
            minlength: "Please enter atleast 5 characters.",
            maxlength: "Please enter maximum 150 characters."
        },
        language:{
            required: "Please enter language."
        }

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#edit_advertisement").validate({
    rules: {
        title: {
            required: !0,
            minlength: 6,
            maxlength: 30
        },
        'position[]': {
            required: !0
        },
          description: {
            required: !0,
            customValidation:!0,
            minlength:5,
            maxlength:150
        },
        language : {
            required: !0
        }
    },
    messages: {
        title: {
            required: "*Please enter your title.",
            minlength: "Please enter atleast 6 characters.",
            maxlength: "Please enter maximum 30 characters."
        },
        'position[]': {
            required: "*Please choose your position."
        },
        description:{
            required: "*Please enter your description.",
            minlength: "Please enter atleast 5 characters.",
            maxlength: "Please enter maximum 150 characters."
        },
        language:{
            required: "Please enter language."
        }

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});



});







$('#profile-email').change(function(){
    var newEmail = $(this).val();
    var oldEmail = $('#old-email').val();
    if (newEmail != oldEmail) {
        swal({
          title: "Confirmation!!!",
          text: "Updating your email will require you email verification.",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#069edb",
          confirmButtonText: "Yes",
          closeOnConfirm: false
        },function(isConfirm) {
        	if (!isConfirm) {
        		window.location = base_url+'/en/publisher/edit-profile';
        	}else{
        		swal.close()
        	}
        })
    }
       // $('#exampleModal').modal('show');   
});

$('#country_id').change(function() {
    var countryId = $(this).val();
    $('#phone_code').val(countryId);
});


/*Currency convertor*/
$("#currency").change(function() {

    var currency = $(this).val();
   // alert(currency);
    var url = base_url+'/en/publisher/getCurrency/'+currency;
    var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
    var pathArray = window.location.pathname.split( '/' );
    var segment_1 = pathArray[7];
   //alert(segment_1);
    if (segment_1 == 'orderList') {
        $.ajax({
            method:"GET",
            url:url,
            // data:{ 'value' : currency },
            success:function(data){
                $('#totalEarning').text(data);
            }
        })
        window.location = base_url+'/en/publisher/orderList?local_currency='+currency;
        //window.location = base_url+'/en/publisher/orderList?'+window.location.search + window.location.hash+'local_currency='+currency;
    }else if (segment_1 == 'addBooks') {
        $.ajax({
            method:"GET",
            url:base_url+'/en/publisher/getSymbole/'+currency,
            data:{ 'value' : currency },
            success:function(data){
                console.log(data);
                document.getElementById("currency-drop").value = data;
            }
        })
    }else if (segment_1 == 'bookList') {
        $.ajax({
            method:"GET",
            url:url,
            // data:{ 'value' : currency },
            success:function(data){
                $('#totalEarning').text(data);
            }
        })
        window.location = base_url+'/en/publisher/bookList/'+pathArray[8]+'?local_currency='+currency;
    }else{
        $.ajax({
            method:"GET",
            url:url,
            // data:{ 'value' : currency },
            success:function(data){
                // console.log(data);
                $('#totalEarning').text(data);
            }
        })
    }
    
});



/*Currency convertor*/
$("#admin_currency").change(function() {
    var currency = $(this).val();
    var url = base_url+'/en/admin/getCurrencyChange/'+currency+window.location.search;

    var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;

    var pathArray = window.location.pathname.split( '/' );
    var segment_1 = pathArray[7];
    var publisher = pathArray[8];
    //alert(publisher);
    if (segment_1 == 'addBook') {
        $.ajax({
            method:"GET",
            url:base_url+'/en/publisher/getSymbole/'+currency,
            data:{ 'value' : currency },
            success:function(data){
                console.log(data);
                document.getElementById("currency-drop").value = data;
            }
        })
    }else if (segment_1 == 'book-managment') {
        $.ajax({
            method:"GET",
            url:url,
            // data:{ 'value' : currency },
            success:function(data){
                $('#totalEarning').text(data);
            }
        })
        window.location = base_url+'/en/admin/book-managment/'+pathArray[8]+'?local_currency='+currency;
    }else if (segment_1 == 'publisher-dashboard') {
        $.ajax({
            method:"GET",
            url:url+'?publisher='+publisher,
            // data:{ 'value' : currency },
            success:function(data){
                $('#totalEarningPublisher').text(data);
            }
        })
        //window.location = base_url+'/en/admin/publisher-dashboard/'+publisher;
    }else{
        $.ajax({
            method:"GET",
            url:url,
            // data:{ 'value' : currency },
            success:function(data){
                // console.log(data);
                $('#adminEarnings').text(data);
            }
        })
    }
    
});

/*Reply Page*/

$("#reply-form").validate({
 rules: {
        reply: {
            required: !0,
            minlength: 6,
            maxlength: 200,
            customValidation:!0
        }
    },
    messages: {
        reply: {
            required: "*Please enter your message.",
            minlength: "Please enter atleast 6 characters",
            maxlength: "Please enter maximum 200 characters.",
            customValidation: "Message should not be prefix by space."
        }        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#add_testimonial").validate({
 rules: {
        image: {
            required: !0,
        },
        title: {
            required: !0,
            minlength: 6,
            maxlength: 100,
            customValidation:!0
        },
        userId: {
            required: !0,
        }
    },
    messages: {
        image: {
            required: "*Please select your image.",

        },
        title: {
            required: "*Please enter title.",
            minlength: "Please enter atleast 6 characters",
            maxlength: "Please enter maximum 100 characters.",
            customValidation: "Title should not be prefix by space."
        },
        userId: {
            required: "*Please select customer.",

        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#carousalForm").validate({
 rules: {
        image: {
            required: !0
        },
        radio_type:{
            required:!0
        },
        select_radio_link:{
            url:!0
        }
    },
    messages: {
        image: {
            required: "*Please select your image."
        },
        radio_type:{
            required:"Please select type."
        },
        select_radio_link:{
            url:"Please enter valid URL."
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});




$("#carousalFormupdate").validate({
 rules: {
        radio_type:{
            required:!0
        },
        select_radio_link:{
            url:!0
        }
    },
    messages: {
        radio_type:{
            required:"Please select type."
        },
        select_radio_link:{
            url:"Please enter valid URL."
        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#add_static").validate({
 rules: {

        page_name: {
            required: !0,
            minlength: 6,
            maxlength: 100,
            customValidation:!0
        },

    },
    messages: {
        page_name: {
            required: "*Please enter title name.",
            minlength: "Please enter atleast 6 characters.",
            maxlength: "Please enter maximum 100 characters.",
            customValidation: "Title name should not be prefix by space."
        },

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#addModal").validate({
 rules: {

        subcategory: {
            required: !0,
            minlength: 1,
            maxlength: 50,
            customValidation:!0,
            alphabetsOnly:!0
        },

    },
    messages: {
        subcategory: {
            required: "*Please enter sub category name.",
            minlength: "Please enter atleast 1 characters.",
            maxlength: "Please enter maximum 50 characters.",
            customValidation: "Sub category name should not be prefix by space.",
            alphabetsOnly:"Please enter alphabets only."
        },

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#editSubCategoryModal").validate({
 rules: {

        subcategory: {
            required: !0,
            minlength: 1,
            maxlength: 50,
            customValidation:!0,
            alphabetsOnly:!0
        },

    },
    messages: {
        subcategory: {
            required: "*Please enter sub category name.",
            minlength: "Please enter atleast 1 characters.",
            maxlength: "Please enter maximum 50 characters.",
            customValidation: "Sub category name should not be prefix by space.",
            alphabetsOnly:"Please enter alphabets only."
        },

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#add_promotion").validate({
 rules: {

        title: {
            required: !0,
            minlength: 1,
            maxlength: 50,
            customValidation:!0
        },

    },
    messages: {
        title: {
            required: "*Please enter title name.",
            minlength: "Please enter atleast 1 characters.",
            maxlength: "Please enter maximum 50 characters.",
            customValidation: "Title name should not be prefix by space."
        },

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#add_reward").validate({
    rules: {
        start_date: {
            required: !0
        },
        end_date: {
            required: !0
        },
        expiry_date: {
            required: !0
        },
        group_type: {
            required: !0
        },
        'group[]': {
            required: !0
        },
        'users[]': {
            required: !0
        },
        rewardtype: {
            required: !0
        },
        readHour: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        hours_point: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        occupation_point: {
            required: !0,
            min:1
        },
        dob: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        purchasing: {
            required: !0,
            number:!0,
            min:1,
            max:10000,
            customValidation:!0
        },
        lend_point: {
            required: !0,
            number:!0,
            max:100,
            min:1,
            customValidation:!0
        },
        sharing_point: {
            required: !0,
            number:!0,
            max:100,
            min:1,
            customValidation:!0
        },
        refering_friend_point: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        social_point: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        'category[]': {
            required: !0
        },
        category_point: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        review_addition_point: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        'author[]': {
            required: !0
        },
        author_point: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        'payment[]': {
            required: !0
        },
        payment_point: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        review: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        'language[]': {
            required: !0
        },
        language_point: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        refrral_numbers: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        refrral_numbers_point: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        referral_code: {
            required: !0
        },
        referral_code_point: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        customized_group: {
            required: !0,
            number:!0,
            min:1,
            max:100,
            customValidation:!0
        },
        total_purchase: {
            required: !0,
            number:!0,
            //max:100,
            min:2,
            maxlength:10,
            customValidation:!0
        },
        total_purchase_point: {
            required: !0,
            number:!0,
            max:100,
            min:1,
            customValidation:!0
        },
        ceiling: {
            required: !0,
            number:!0,
            max:100,
            min:1,
            customValidation:!0
        },
        ceiling_point: {
            required: !0,
            number:!0,
            max:100,
            min:1,
            customValidation:!0
        },
        purchase_point:{
            required: !0,
            number:!0,
            max:100,
            min:1,
            customValidation:!0
        },
        hours:{
            required:!0,
            number:!0
        },
        less_hour:{
            required:!0,
            number:!0
        },
        more_hour:{
            required:!0,
            number:!0
        },
        from_hour:{
            required:!0,
            number:!0
        },
        to_hour:{
            required:!0,
            number:!0
        },
        /*Purchase a book*/
        bookPrice:{
            required:!0,
            number:!0
        },
        less_bookPrice:{
            required:!0,
            number:!0
        },
        more_bookPrice:{
            required:!0,
            number:!0
        },
        from_bookPrice:{
            required:!0,
            number:!0
        },
        to_bookPrice:{
            required:!0,
            number:!0
        },
        /*Total Purchase book*/
        totalPrice:{
            required:!0,
            number:!0
        },
        less_total_purchase:{
            required:!0,
            number:!0
        },
        more_total_purchase:{
            required:!0,
            number:!0
        },
        from_total_purchase:{
            required:!0,
            number:!0
        },
        to_total_purchase:{
            required:!0,
            number:!0
        }
    },
    messages: {
        start_date: {
            required: "*Please select start date."
        },
        end_date: {
            required: "*Please select end date."
        },
        expiry_date: {
            required: "*Please select expiry date."
        },
        group_type: {
            required: "*Please group type."
        },
        'group[]': {
            required: "*Please select group."
        },
        'users[]': {
            required: "*Please select users."
        },
        rewardtype: {
            required: "*Please select reward type."
        },
        readHour: {
            required: "Please enter read hours.",
            number:"Please enter digits only.",
            max:"Reading hours must be less than 100.",
            customValidation:"This could not be prefix by space."
        },
        hours_point: {
            required: "Please enter read hours points.",
            number:"Please enter digits only.",
            max:"Reading hours points must be less than 100.",
            customValidation:"This could not be prefix by space."
        },
        occupation_point: {
            required: "Please enter occupation points.",
            number:"Please enter digits only.",
            min:"Please enter valid digits.",
            max:"Occupation points must be less than 100.",
            customValidation:"This could not be prefix by space."
        },
        dob: {
            required: "Please enter date of birth point.",
            number:"Please enter digits only.",
            max:"Date of birth must be less than 100.",
            customValidation:"This could not be prefix by space."
        },
        purchasing: {
            required: "Please enter number of purchase.",
            number:"Please enter digits only.",
            max:"Number of purchase must be less than 100.",
            customValidation:"This could not be prefix by space."
        },
        lend_point: {
            required: "Please enter lend points.",
            number:"Please enter digits only.",
            max:"Lend points must be less than 100.",
            customValidation:"This could not be prefix by space."
        },
        sharing_point: {
            required: "Please enter sharing points.",
            number:"Please enter digits only.",
            max:"Sharing points must be less than 100.",
            customValidation:"This could not be prefix by space."
        },
        refering_friend_point: {
            required: "Please enter points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        } ,
        social_point: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        } ,
        'category[]': {
            required: "*Please select category."
        } ,
        category_point: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        } ,
        review_addition_point: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        } ,
        'author[]': {
            required: "*Please select author."
        } ,
        author_point: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        } ,
        'payment[]': {
            required: "*Please select payment type."
        } ,
        payment_point: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        } ,
        review: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        } ,
        'language[]': {
            required: "*Please select language."
        } ,
        language_point: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        } ,
        refrral_numbers: {
            required: "Please enter number of referrals.",
            number:"Please enter digits only.",
            min:"Please enter valid digits.",
            max:"Number must be less than 100.",
            customValidation:"This could not be prefix by space."
        } ,
        refrral_numbers_point: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        }   ,
        referral_code: {
            required: "*Please generate code."
        },
        referral_code_point: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            min:"Please enter valid digits.",
            customValidation:"This could not be prefix by space."
        },
        customized_group: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        },
        total_purchase: {
            required: "Please enter number of total purchase.",
            number:"Please enter digits only.",
            max:"Number of total purchase must be less than 100.",
            min:"Number of total purchase must be greater than 2.",
            maxlength:"Please enter maximum 10 digits.",
            customValidation:"This could not be prefix by space."
        },
        total_purchase_point: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        },
        ceiling: {
            required: "Please enter ceiling points.",
            number:"Please enter digits only.",
            max:"Ceiling must be less than 100.",
            customValidation:"This could not be prefix by space."
        },
        ceiling_point: {
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        },
        purchase_point:{
            required: "Please enter Points.",
            number:"Please enter digits only.",
            max:"Points must be less than 100.",
            customValidation:"This could not be prefix by space."
        }        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
    });


$("#groups_form").validate({
 rules: {
        reference: {
            required: !0,
            minlength: 3,
            maxlength: 30,
            customValidation: !0         
        },
        group_description: {
            required: !0
        },
        'selectType[]': {
            required: !0
        },
        'occupationType[]': {
            required: !0
        },
        from_dob: {
            required: !0
        },
        to_dob: {
            required: !0
        },
        from_created: {
            required: !0
        },
        to_created: {
            required: !0
        },
        'country[]': {
            required: !0
        },
        hours: {
            required: !0/*,
            number:!0,
            min:1*/
        },
        less: {
            required: !0,
            number:!0,
            min:1
        },
        dob: {
            required: !0
        },
        more: {
            required: !0,
            number:!0,
            min:1
        },
        from: {
            required: !0,
            number:!0,
            min:1
        },
        to: {
            required: !0,
            number:!0,
            min:1
        },
        points: {
            required: !0/*,
            number:!0,
            min:1*/
        },
        less_point: {
            required: !0,
            number:!0,
            min:1
        },
        more_point: {
            required: !0,
            number:!0,
            min:1
        },
        from_point: {
            required: !0,
            number:!0,
            min:1
        },
        to_point: {
            required: !0,
            number:!0,
            min:1
        },
         purchase: {
            required: !0
        },
         'category[]': {
            required: !0
        },
        more_purchase: {
            required: !0,
            number:!0,
            min:1
        },
        less_purchase: {
            required: !0,
            number:!0,
            min:1
        },
        from_purchase: {
            required: !0,
            number:!0,
            min:1
        },
        to_purchase: {
            required: !0,
            number:!0,
            min:1
        },
        
    },
    messages: {
        reference: {
            required: "*Please enter your group name.",
            minlength: "Please enter atleast 3 characters.",
            maxlength: "Please enter maximum 30 characters.",
            customValidation : "This is not prefix by space."
           
        },
        group_description: {
            required: "*Please enter group description.",
           
        },
        'selectType[]': {
            required: "*Please select group type.",
           
        },
        'occupationType[]': {
            required: "*Please select occupation type."
        },
        from_dob: {
            required: "*Please enter define the dob range."
        },
        to_dob: {
            required: "*Please enter define the dob range."
        },
        from_created: {
            required: "*Please define the created range."
        },
        to_created: {
            required: "*Please define the created range."
        },
        'country[]': {
            required: "*Please select country."
        },
        hours: {
            required: "*Please select Read hours type.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        },
        less: {
            required: "*Please enter minimum hours.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        },
        more: {
            required: "*Please enter maximum hours.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        },
        from: {
            required: "*Please enter define hours range.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        },
        to: {
            required: "*Please enter define hours range.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        },
        points: {
            required: "*Please select total point type."/*,
            number:"Please enter digits only.",
            min:"Please enter valid number."*/
        },
        less_point: {
            required: "*Please enter minimum point.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        } ,
        more_point: {
            required: "*Please enter maximum point.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        } ,
        from_point: {
            required: "*Please enter define point range.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        } ,
        to_point: {
            required: "*Please enter define point range.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        }, 
         purchase: {
            required: "*Please select total purchase."
        }, 
        'category[]': {
            required: "*Please select category type."
        }, 
        less_purchase: {
            required: "*Please enter minimun purchase.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        },
        more_purchase: {
            required: "*Please enter maximum purchase.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        },
        from_purchase: {
            required: "*Please enter define purchase range.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        },
        to_purchase: {
            required: "*Please enter define purchase range.",
            number:"Please enter digits only.",
            min:"Please enter valid number."
        },        
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


$("#add_news").validate({
    rules: {
        news_title: {
            required: !0,
            minlength:1,
            maxlength:50
        },
        publish_date: {
            required: !0,
        },
        language: {
            required: !0,
        },
         description: {
            required: !0,
        }
    },
    messages: {
        news_title: {
            required: "*Please enter your news title.",
            minlength: "News title contains atleast 1 characters.",
            maxlength: "News title contains maximum 16 characters.",
            //customValidation: "Email should not be prefix by space."

        },
        publish_date: {
            required: "*Please enter your date.",

        },
        language: {
            required: "*Please select language.",

        },
         description: {
            required: "*Please enter description."

        }
    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#booxell_form").validate({
    rules: {
        profileImage:{
            required:!0
        },
        book_name: {
            required: !0,
            customValidation:!0,
            minlength:3,
            maxlength:100
        },
        author_name: {
            required: !0,
            customValidation:!0,
            minlength:3,
            maxlength:30
        },
        price: {
            required: !0,
            maxlength: 10,
            minlength: 1,
            min:1,
            digits: true
        },
        publisherUser: {
            required: !0,
        }
    },
    messages: {
        profileImage:{
            required:"Please upload image."
        },
        book_name: {
            required: "Please enter book name.",
            minlength: "Please enter minimum 3 characters.",
            customValidation:"Book field do not prefix by space.",
            maxlength:"Please enter maximum 50 characters."
        },
        author_name: {
            required: "Please enter author name.",
            minlength: "Please enter minimum 3 characters.",
            customValidation:"Author field do not prefix by space.",
            maxlength: "Please enter maximum 30 characters."
        },
        price: {
            required: "*Please enter price.",
            digits: "Please enter digits only."
        },
        publisherUser: {
            required: "*Please select publisher."
        }

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});

$("#updatebooxell_form").validate({
    rules: {
        book_name: {
            required: !0,
            customValidation:!0,
            minlength:3,
            maxlength:100
        },
        author_name: {
            required: !0,
            customValidation:!0,
            minlength:3,
            maxlength:30
        },
        price: {
            required: !0,
            maxlength: 10,
            minlength: 1,
            min:1,
            digits: true
        },
        publisherUser: {
            required: !0,
        }
    },
    messages: {
        book_name: {
            required: "Please enter book name.",
            minlength: "Please enter minimum 3 characters.",
            customValidation:"Book field do not prefix by space.",
            maxlength:"Please enter maximum 50 characters."
        },
        author_name: {
            required: "Please enter author name.",
            minlength: "Please enter minimum 3 characters.",
            customValidation:"Author field do not prefix by space.",
            maxlength: "Please enter maximum 30 characters."
        },
        price: {
            required: "*Please enter price.",
            digits: "Please enter digits only."
        },
        publisherUser: {
            required: "*Please select publisher."
        }

    },
    submitHandler: function (form) {
        abc = 'sdsadsad';
        checkBeginningWhiteSpace(abc)
    }
});


