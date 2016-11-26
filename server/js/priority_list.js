


Meteor.methods({
    priority: function (rest1,rest2,rest3,rest4, fun1,fun2,fun3,fun4,fun5,code) {
     Users.update({Code : code},
      { $set:
        { Restaurants_Fast : rest1,
          Restaurants_Casual : rest2,
          Restaurants_Fine : rest3,
          Restaurants_Cafe : rest4,
          Fun_Clubs : fun1,
          Fun_Bars : fun2,
          Fun_Traditional : fun3,
          Fun_Cinemas : fun4,
          Fun_Adventure : fun5
        }
      });
   }
 })
