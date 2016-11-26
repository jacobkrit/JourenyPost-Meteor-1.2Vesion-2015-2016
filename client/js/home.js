Template.home.helpers({
 name: function () {
   code =  parseInt(localStorage.getItem("bar"));

   return Users.find({Code:code});


   },


});
Template.home.events({


'click [login]': function (e) {
  code =  parseInt(localStorage.getItem("bar"));
  if (isNaN(code)) {
    window.location.href = '/login';

  }
  else {
    window.location.href = '/program';

  }
},
'click [logout]': function (e) {
  localStorage.setItem("bar", parseInt("asdads"));
  localStorage.setItem("days", 0);
  window.location.href = '/';

}








})
