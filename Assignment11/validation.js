$("#form").validate({
    rules: {
       firstname: 'required',
       lastname: 'required',
       city: {
          required: true,
          city: true,
          maxlength: 255,
       },
    }
 });

 messages: {
    firstname: 'This field is required',
  },

 submitHandler: function(form) {
    form.submit();
 });