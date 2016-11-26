
Meteor.methods({
 
    setReason: function (value,code) {   
     Users.update({Code : code}, { $set: { Reason : value } });
   }
   }
);