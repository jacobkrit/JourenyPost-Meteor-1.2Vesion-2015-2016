codedb=0;
maildb=0;

  Template.login.events({
    'click [connect]': function (e) {
      e.preventDefault();
       mail = document.getElementById('icon_prefix_email').value;
       code = parseInt(document.getElementById('icon_prefix_Country').value);


       if (codedb==0) {
         Materialize.toast('please fill correct   the code', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast

       }


    // var query = {};
    // var myCustomField = "Codes";
    // var myCustomValue = code;
    // query[myCustomField] = myCustomValue;
    // var exist = Codes_Hotels.find(query).count();

      codedb = Users.findOne({Code:code}).Code;
      maildb = Users.findOne({Code:code}).Mail;
      registered = Users.findOne({Code:code}).registered;
      days = Users.findOne({Code:code}).Days;




        if (code==codedb && mail==maildb ) {
          localStorage.setItem("bar", code);
          localStorage.setItem("days", parseInt(days));

                    window.location.href = '/program';
                 }
        else {

          Materialize.toast('Wrong code', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast

          }
        }
  });
