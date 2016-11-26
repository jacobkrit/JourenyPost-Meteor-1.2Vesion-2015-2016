Vuide_Program = new Mongo.Collection("vuide_program");

Users = new Mongo.Collection("users");


  // This code only runs on the client


  Template.vuides.helpers({
	 vuide_program: function () {

       code = parseInt(localStorage.getItem("bar"));
       category1= Users.findOne({Code : code}).Tourism_Category1 ;



      if (category1=="Dolianiti"){
        return Vuide_Program.find({Families_Suitable:5 });
      };
      if (category1=="Patseas_Local"){
        return Vuide_Program.find({YoungLocal_Suitable:5 });
      };
      if (category1=="Patseas_Fun"){
        return Vuide_Program.find({YoungFun_Suitable:5 });
      };
      if (category1=="Kazakou"){
        return Vuide_Program.find({Alernative_Suitable:5 });
      };

    },
    vuide_program1: function () {

        code = parseInt(localStorage.getItem("bar"));
        category2= Users.findOne({Code : code}).Tourism_Category2 ;




       if (category2=="Dolianiti"){
         return Vuide_Program.find({Families_Suitable:5 });
       };
       if (category2=="Patseas_Local"){
         return Vuide_Program.find({YoungLocal_Suitable:5 });
       };
       if (category2=="Patseas_Fun"){
         return Vuide_Program.find({YoungFun_Suitable:5 });
       };
       if (category2=="Kazakou"){
         return Vuide_Program.find({Alernative_Suitable:5 });
       };

     },

  });

  Template.vuides.events({
     "click [select]": function (event, template) {
       // Prevent default browser form submit
       event.preventDefault();
       registered = Users.findOne({Code:code}).registered;

       if (registered!=0) {
         window.location.href = '/';
         return
       }
        vuide=parseInt(this.Code);
        //alert(vuide);
       Meteor.call("add",code);
       Meteor.call("setVuide",vuide,parseInt(localStorage.getItem("bar")));

       window.location.href = '/program';
       return;
       }
      });
