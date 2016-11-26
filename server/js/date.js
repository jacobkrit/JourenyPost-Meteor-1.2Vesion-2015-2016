Meteor.methods({
   date: function (date,code) {
     Users.update({Code : code}, { $set: { Days : date } });
   },
});
