Template.personal_details.events({
  'click [connect]': function (e) {
    code=  parseInt(localStorage.getItem("bar"));
    e.preventDefault();
    var name = document.getElementById('icon_prefix_fname').value;
    var surename = "empty";
    var email = document.getElementById('icon_prefix_email').value;
    var country = document.getElementById('icon_prefix_Country').value;

    if (name =="") {
      Materialize.toast('please fill in the name field', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
      return
    }


    if (email =="") {
      Materialize.toast('please fill in the email field', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
      return
    }


  //  alert(name);
  //  alert(email);
  //    alert(country);

  registered = Users.findOne({Code:code}).registered;
if (registered==0) {
  Meteor.call("profileUp",name,surename,email,country, code);
                     window.location.href = '/trip-details';
}
else {

  Materialize.toast('sry you didnt come here legaly', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast

  }






      }
})
