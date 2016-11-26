


Meteor.methods({
  add: function (code) {      //Define method to set tasks to private
    Users.update({Code : code}, { $set: { registered:1 } });
  }
})
