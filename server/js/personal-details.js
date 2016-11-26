Meteor.methods({
    profileUp: function (name,surename,email,country,code) {     
     Users.update({Code : code}, 
      { $set: 
        { First_Name : name,
          Last_Name : surename,
          Mail : email,
          Country : country
        }
      });
   }
 })