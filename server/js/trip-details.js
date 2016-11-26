

Meteor.methods({
    tripUpdate: function (number,travel_type,budget,min_age, max_age,code) {   
     Users.update({Code : code}, 
      { $set: 
        { People : number,
          Relationship : travel_type,
          Budget : budget,
          Age_Min : min_age,
          Age_Max : max_age
        }
      });
   }
 })