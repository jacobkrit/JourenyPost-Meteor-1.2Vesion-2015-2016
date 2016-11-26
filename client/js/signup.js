

  Template.signup.events({
    'click [next]': function (e) {
      e.preventDefault();
      var code = parseInt(document.getElementById('icon_prefix').value);
      localStorage.setItem("bar", code);
  // alert(code);
        code=  parseInt(localStorage.getItem("bar"));


    // var query = {};
    // var myCustomField = "Codes";
    // var myCustomValue = code;
    // query[myCustomField] = myCustomValue;
    // var exist = Codes_Hotels.find(query).count();

      var exist = Users.find({ $and: [ {Code:code},{registered:0} ] }).count()
    //  registered = Users.findOne({Code:code}).registered;

        if (exist>0) {
                  //  Meteor.call("add",code);
                    window.location.href = '/date';
                 }
        else {

          Materialize.toast('Wrong code', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast

          }
        }
  });
