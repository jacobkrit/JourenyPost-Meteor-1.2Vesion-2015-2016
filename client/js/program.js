Activities = new Mongo.Collection("activities");

 Template.program.helpers({
   name: function () {
     code =  parseInt(localStorage.getItem("bar"));
     return Users.find({Code:code});


     },



  // breakfast: function () {
 //      return Breakfast.find({ show : "yes" });
  // },
 //   morning: function () {
 //      return Morning.find({ show : "yes" });
 //  },
 //   lunch: function () {
 //      return Lunch.find({ show : "yes" });
 //  },
 //   afternoon: function () {
 //      return Afternoon.find({ show : "yes" });
 //  },
 //   night: function () {
 //      return Night.find({ show : "yes" });
 //  }

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
   breakfast_d1: function () {
      code = parseInt(localStorage.getItem("bar"));
     // alert(code);
      temp = Users.findOne({Code : code});
      a1=temp.d1_b11;

     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   morning1_d1: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d1_m11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   morning2_d1: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d1_m21;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   lunch_d1: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d1_l11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   afternoon1_d1: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d1_a11;
     // alert(a1);
     // alert(Activities.find().count());
     //  temp2=Activities.findOne({ Code_v : a1 });
     //  string=temp2.Description_t;
     // //alert(string);
     //  mikos=string.split(' ').length;
     // //alert(string.substr(0, string.indexOf(' ')));


     //  first=string.split(" ")[0]+" "+string.split(" ")[1]+" "+string.split(" ")[2]+" "+string.split(" ")[3]+" "+string.split(" ")[4]+" "+string.split(" ")[5]+" "+string.split(" ")[6]+" "+string.split(" ")[7];
     // alert(first);
     //  second=
     // alert(string.split(' ').length);

     return Activities.find({ Code : a1 });
   },
   afternoon2_d1: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d1_a21;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   night_d1: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d1_n11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   breakfast_d2: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d2_b11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   morning1_d2: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d2_m11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   morning2_d2: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d2_m21;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   lunch_d2: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d2_l11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   afternoon1_d2: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d2_a11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   afternoon2_d2: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d2_a21;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   night_d2: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d2_n11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   breakfast_d3: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d3_b11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   morning1_d3: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d3_m11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   morning2_d3: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d3_m21;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   lunch_d3: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d3_l11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   afternoon1_d3: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d3_a11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   afternoon2_d3: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d3_a21;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   },
   night_d3: function () {
      code = parseInt(localStorage.getItem("bar"));
      temp = Users.findOne({Code : code});
      a1=temp.d3_n11;
     // alert(a1);
     // alert(Activities.find().count());
     return Activities.find({ Code : a1 });
   }, breakfast_d4: function () {
       code = parseInt(localStorage.getItem("bar"));
      // alert(code);
       temp = Users.findOne({Code : code});
       a1=temp.d4_b11;

      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    morning1_d4: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d4_m11;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    morning2_d4: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d4_m21;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    lunch_d4: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d4_l11;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    afternoon1_d4: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d4_a11;
      // alert(a1);
      // alert(Activities.find().count());
      //  temp2=Activities.findOne({ Code_v : a1 });
      //  string=temp2.Description_t;
      // //alert(string);
      //  mikos=string.split(' ').length;
      // //alert(string.substr(0, string.indexOf(' ')));


      //  first=string.split(" ")[0]+" "+string.split(" ")[1]+" "+string.split(" ")[2]+" "+string.split(" ")[3]+" "+string.split(" ")[4]+" "+string.split(" ")[5]+" "+string.split(" ")[6]+" "+string.split(" ")[7];
      // alert(first);
      //  second=
      // alert(string.split(' ').length);

      return Activities.find({ Code : a1 });
    },
    afternoon2_d4: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d4_a21;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    night_d4: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d4_n11;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    breakfast_d5: function () {
       code = parseInt(localStorage.getItem("bar"));
      // alert(code);
       temp = Users.findOne({Code : code});
       a1=temp.d5_b11;

      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    morning1_d5: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d5_m11;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    morning2_d5: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d5_m21;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    lunch_d5: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d5_l11;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    afternoon1_d5: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d5_a11;
      // alert(a1);
      // alert(Activities.find().count());
      //  temp2=Activities.findOne({ Code_v : a1 });
      //  string=temp2.Description_t;
      // //alert(string);
      //  mikos=string.split(' ').length;
      // //alert(string.substr(0, string.indexOf(' ')));


      //  first=string.split(" ")[0]+" "+string.split(" ")[1]+" "+string.split(" ")[2]+" "+string.split(" ")[3]+" "+string.split(" ")[4]+" "+string.split(" ")[5]+" "+string.split(" ")[6]+" "+string.split(" ")[7];
      // alert(first);
      //  second=
      // alert(string.split(' ').length);

      return Activities.find({ Code : a1 });
    },
    afternoon2_d5: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d5_a21;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    night_d5: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d5_n11;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },

    breakfast_d6: function () {
       code = parseInt(localStorage.getItem("bar"));
      // alert(code);
       temp = Users.findOne({Code : code});
       a1=temp.d6_b11;

      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    morning1_d6: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d6_m11;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    morning2_d6: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d6_m21;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    lunch_d6: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d6_l11;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    afternoon1_d6: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d6_a11;
      // alert(a1);
      // alert(Activities.find().count());
      //  temp2=Activities.findOne({ Code_v : a1 });
      //  string=temp2.Description_t;
      // //alert(string);
      //  mikos=string.split(' ').length;
      // //alert(string.substr(0, string.indexOf(' ')));


      //  first=string.split(" ")[0]+" "+string.split(" ")[1]+" "+string.split(" ")[2]+" "+string.split(" ")[3]+" "+string.split(" ")[4]+" "+string.split(" ")[5]+" "+string.split(" ")[6]+" "+string.split(" ")[7];
      // alert(first);
      //  second=
      // alert(string.split(' ').length);

      return Activities.find({ Code : a1 });
    },
    afternoon2_d6: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d6_a21;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },
    night_d6: function () {
       code = parseInt(localStorage.getItem("bar"));
       temp = Users.findOne({Code : code});
       a1=temp.d6_n11;
      // alert(a1);
      // alert(Activities.find().count());
      return Activities.find({ Code : a1 });
    },



 });




 Template.program.events({
///*	alert("test") */
      'click [refreshd1b1]': function (e) {
      e.preventDefault();
      //alert("geia");
       code = parseInt(localStorage.getItem("bar"));
      //genika na mpun auta sto server,wste na ginei pio elafrus o client??

      Meteor.call("refreshd1b1",code);

    },
    'click [refreshd1m1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd1m1",code);
                },
    'click [refreshd1m2]': function (e) {
      e.preventDefault();
      //alert("pressed");
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd1m2",code);
                },
    'click [refreshd1l1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd1l1",code);
                },
    'click [refreshd1a1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd1a1",code);
                },
    'click [refreshd1a2]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd1a2",code);
                },
    'click [refreshd1n1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd1n1",code);
                },
    'click [refreshd2b1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd2b1",code);
                },
    'click [refreshd2m1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd2m1",code);
                },
    'click [refreshd2m2]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd2m2",code);
                },
    'click [refreshd2l1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd2l1",code);
                  //window.location.reload(true);
      //Session.set('code',code);
    },
    'click [refreshd2a1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd2a1",code);
                },
    'click [refreshd2a2]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd2a2",code);
                },
    'click [refreshd2n1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd2n1",code);
                },
    'click [refreshd3b1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd3b1",code);
                },
    'click [refreshd3m1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd3m1",code);
                },
    'click [refreshd3m2]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd3m2",code);
                },
    'click [refreshd3l1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd3l1",code);
                },
    'click [refreshd3a1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd3a1",code);
                },
    'click [refreshd3a2]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd3a2",code);
                },
    'click [refreshd3n1]': function (e) {
      e.preventDefault();
       code = parseInt(localStorage.getItem("bar"));
      Meteor.call("refreshd3n1",code);
    },
//asdasdas/

'click [refreshd4b1]': function (e) {
e.preventDefault();
//alert("geia");
 code = parseInt(localStorage.getItem("bar"));
//genika na mpun auta sto server,wste na ginei pio elafrus o client??

Meteor.call("refreshd4b1",code);

},
'click [refreshd4m1]': function (e) {
e.preventDefault();
 code = parseInt(localStorage.getItem("bar"));
Meteor.call("refreshd4m1",code);
          },
'click [refreshd4m2]': function (e) {
e.preventDefault();
//alert("pressed");
 code = parseInt(localStorage.getItem("bar"));
Meteor.call("refreshd4m2",code);
          },
'click [refreshd4l1]': function (e) {
e.preventDefault();
 code = parseInt(localStorage.getItem("bar"));
Meteor.call("refreshd4l1",code);
          },
'click [refreshd4a1]': function (e) {
e.preventDefault();
 code = parseInt(localStorage.getItem("bar"));
Meteor.call("refreshd4a1",code);
          },
'click [refreshd4a2]': function (e) {
e.preventDefault();
 code = parseInt(localStorage.getItem("bar"));
Meteor.call("refreshd4a2",code);
          },
'click [refreshd4n1]': function (e) {
e.preventDefault();
 code = parseInt(localStorage.getItem("bar"));
Meteor.call("refreshd4n1",code);
          },

          //day5

          'click [refreshd5b1]': function (e) {
          e.preventDefault();
          //alert("geia");
           code = parseInt(localStorage.getItem("bar"));
          //genika na mpun auta sto server,wste na ginei pio elafrus o client??

          Meteor.call("refreshd5b1",code);

        },
        'click [refreshd5m1]': function (e) {
          e.preventDefault();
           code = parseInt(localStorage.getItem("bar"));
          Meteor.call("refreshd5m1",code);
                    },
        'click [refreshd5m2]': function (e) {
          e.preventDefault();
          //alert("pressed");
           code = parseInt(localStorage.getItem("bar"));
          Meteor.call("refreshd5m2",code);
                    },
        'click [refreshd5l1]': function (e) {
          e.preventDefault();
           code = parseInt(localStorage.getItem("bar"));
          Meteor.call("refreshd5l1",code);
                    },
        'click [refreshd5a1]': function (e) {
          e.preventDefault();
           code = parseInt(localStorage.getItem("bar"));
          Meteor.call("refreshd5a1",code);
                    },
        'click [refreshd5a2]': function (e) {
          e.preventDefault();
           code = parseInt(localStorage.getItem("bar"));
          Meteor.call("refreshd5a2",code);
                    },
        'click [refreshd5n1]': function (e) {
          e.preventDefault();
           code = parseInt(localStorage.getItem("bar"));
          Meteor.call("refreshd5n1",code);
                    },

                    //day6

                    'click [refreshd6b1]': function (e) {
                    e.preventDefault();
                    //alert("geia");
                     code = parseInt(localStorage.getItem("bar"));
                    //genika na mpun auta sto server,wste na ginei pio elafrus o client??

                    Meteor.call("refreshd6b1",code);

                  },
                  'click [refreshd6m1]': function (e) {
                    e.preventDefault();
                     code = parseInt(localStorage.getItem("bar"));
                    Meteor.call("refreshd6m1",code);
                              },
                  'click [refreshd6m2]': function (e) {
                    e.preventDefault();
                    //alert("pressed");
                     code = parseInt(localStorage.getItem("bar"));
                    Meteor.call("refreshd6m2",code);
                              },
                  'click [refreshd6l1]': function (e) {
                    e.preventDefault();
                     code = parseInt(localStorage.getItem("bar"));
                    Meteor.call("refreshd6l1",code);
                              },
                  'click [refreshd6a1]': function (e) {
                    e.preventDefault();
                     code = parseInt(localStorage.getItem("bar"));
                    Meteor.call("refreshd6a1",code);
                              },
                  'click [refreshd6a2]': function (e) {
                    e.preventDefault();
                     code = parseInt(localStorage.getItem("bar"));
                    Meteor.call("refreshd6a2",code);
                              },
                  'click [refreshd6n1]': function (e) {
                    e.preventDefault();
                     code = parseInt(localStorage.getItem("bar"));
                    Meteor.call("refreshd6n1",code);
                              },





  });









Template.program.events({




  'click [logout]': function (e) {
    localStorage.setItem("bar", parseInt("asdads"));
    localStorage.setItem("days", 0);
    window.location.href = '/';

  }  ,









  'click [day2]': function (e) {
    $( "#2" ).addClass( "active blue" );
    $( "#1,  #3, #4, #5 , #6" ).removeClass( "active blue" );
    $( ".day1,  .day3, .day4, .day5 .day6" ).hide();
    $(".day2").show();

  },
  'click [day3]': function (e) {
    $( "#3" ).addClass( "active blue" );
    $( "#1,  #2, #4, #5 , #6" ).removeClass( "active blue" );
    $( ".day1,  .day2, .day4, .day5 , .day6" ).hide();
    $(".day3").show();
    // edw 8a valw ena hide gia na dixnoume day
  },
  'click [day4]': function (e) {
    $( "#4" ).addClass( "active blue" );
    $( "#1,  #3, #2, #5 , #6" ).removeClass( "active blue" );
    $( ".day1,  .day3, .day2, .day5, .day6" ).hide();
    $(".day4").show();
  },
  'click [day5]': function (e) {
    $( "#5" ).addClass( "active blue" );
    $( "#1,  #3, #4, #2 , #6" ).removeClass( "active blue" );
    $( ".day1,  .day3, .day4, .day2, .day6" ).hide();
    $(".day5").show();
  },
  'click [day1]': function (e) {
    $( "#1" ).addClass( "active blue" );
    $( "#2,  #3, #4, #5 , #6" ).removeClass( "active blue" );
    $( ".day2,  .day3, .day4, .day5, .day6" ).hide();
    $(".day1").show();
  },
  'click [day6]': function (e) {
    $( "#6" ).addClass( "active blue" );
    $( "#2,  #3, #4, #5, #1"  ).removeClass( "active blue" );
    $( ".day2,  .day3, .day4, .day5, .day1" ).hide();
    $(".day6").show();
  },
})
//$( "#1 #2 #3 #4 #5" ).removeClass( "active blue" );
