Meteor.methods({
    dayUpdate: function (Start_Month,Start_Day,Start_Period,End_Month,End_Day,End_Period,code) {     
     Users.update({Code : code}, 
      { $set: 
        { Start_Month : Start_Month ,
         Start_Day : Start_Day,
         Start_Period : Start_Period, 
         End_Month :End_Month,
         End_Day : End_Day,
         End_Period : End_Period}
      });
   }
});