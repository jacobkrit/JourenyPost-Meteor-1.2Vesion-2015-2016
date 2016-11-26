Meteor.methods({
   setTourism_Categories: function (category1,category2,code) {
     Users.update({Code : code}, { $set: { Tourism_Category1 : category1, Tourism_Category2: category2 } });
   },
});
