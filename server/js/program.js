


Meteor.methods({
  addBreakfast: function () {      //Define method to set tasks to private

    Breakfast.update({show : "no"}, { $set: { show : "yes" } });
  },
   deleteBreakfast: function (name) {      //Define method to set tasks to private

    Breakfast.update({Attraction_Name : name}, { $set: { show : "no" } });
  },
   deleteMorning: function (name) {      //Define method to set tasks to private

    Morning.update({Attraction_Name : name}, { $set: { show : "no" } });
  },
  refreshd1b1: function (code) {      //Define method to set tasks to private
    //console.log("arxh");
     temp = Users.findOne({Code : code});
     a1=temp.d1_b11;
     a2=temp.d1_b12;
     a3=temp.d1_b13;
     //alert("server");
   //  console.log("server");
       //   console.log(a1);

  //   console.log(a2);

    // console.log(a3);

    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d1_b11 : a2,
        d1_b12 : a3,
        d1_b13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d1_b11 : a2,
            d1_b12 : a3
      } });
      }
    }
  },
  refreshd1m1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d1_m11;
     a2=temp.d1_m12;
     a3=temp.d1_m13;
    //prepei na mpoune if 0!!!!
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d1_m11 : a2,
        d1_m12 : a3,
        d1_m13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d1_m11 : a2,
            d1_m12 : a1
      } });
      }
    }
  },
  refreshd1m2: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d1_m21;
     a2=temp.d1_m22;
     a3=temp.d1_m23;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d1_m21 : a2,
        d1_m22 : a3,
        d1_m23 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d1_m21 : a2,
            d1_m22 : a1
      } });
      }
    }
  },
  refreshd1l1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d1_l11;
     a2=temp.d1_l12;
     a3=temp.d1_l13;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d1_l11 : a2,
        d1_l12 : a3,
        d1_l13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d1_l11 : a2,
            d1_l12 : a1
      } });
      }
    }
  },
  refreshd1a1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d1_a11;
     a2=temp.d1_a12;
     a3=temp.d1_a13;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d1_a11 : a2,
        d1_a12 : a3,
        d1_a13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d1_a11 : a2,
            d1_a12 : a1
      } });
      }
    }
  },
  refreshd1a2: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d1_a21;
     a2=temp.d1_a22;
     a3=temp.d1_a23;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d1_a21 : a2,
        d1_a22 : a3,
        d1_a23 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d1_a21 : a2,
            d1_a22 : a1
      } });
      }
    }
  },
  refreshd1n1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d1_n11;
     a2=temp.d1_n12;
     a3=temp.d1_n13;
     a4=temp.d1_n14;

    if (a4!=0){
      Users.update({Code : code}, {
      $set: {
        d1_n11 : a2,
        d1_n12 : a3,
        d1_n13 : a4,
        d1_n14 : a1
      } });
    } else{

    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d1_n11 : a2,
        d1_n12 : a3,
        d1_n13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d1_n11 : a2,
            d1_n12 : a1
      } });
      }
    }
    }
  },
  refreshd2b1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d2_b11;
     a2=temp.d2_b12;
     a3=temp.d2_b13;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d2_b11 : a2,
        d2_b12 : a3,
        d2_b13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d2_b11 : a2,
            d2_b12 : a1
      } });
      }
    }
  },
  refreshd2m1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d2_m11;
     a2=temp.d2_m12;
     a3=temp.d2_m13;
    //prepei na mpoune if 0!!!!
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d2_m11 : a2,
        d2_m12 : a3,
        d2_m13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d2_m11 : a2,
            d2_m12 : a1
      } });
      }
    }
  },
  refreshd2m2: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d2_m21;
     a2=temp.d2_m22;
     a3=temp.d2_m23;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d2_m21 : a2,
        d2_m22 : a3,
        d2_m23 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d2_m21 : a2,
            d2_m22 : a1
      } });
      }
    }
  },
  refreshd2l1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d2_l11;
     a2=temp.d2_l12;
     a3=temp.d2_l13;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d2_l11 : a2,
        d2_l12 : a3,
        d2_l13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d2_l11 : a2,
            d2_l12 : a1
      } });
      }
    }
  },
  refreshd2a1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d2_a11;
     a2=temp.d2_a12;
     a3=temp.d2_a13;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d2_a11 : a2,
        d2_a12 : a3,
        d2_a13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d2_a11 : a2,
            d2_a12 : a1
      } });
      }
    }
  },
  refreshd2a2: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d2_a21;
     a2=temp.d2_a22;
     a3=temp.d2_a23;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d2_a21 : a2,
        d2_a22 : a3,
        d2_a23 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d2_a21 : a2,
            d2_a22 : a1
      } });
      }
    }
  },
  refreshd2n1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d2_n11;
     a2=temp.d2_n12;
     a3=temp.d2_n13;
     a4=temp.d2_n14;

    if (a4!=0){
      Users.update({Code : code}, {
      $set: {
        d2_n11 : a2,
        d2_n12 : a3,
        d2_n13 : a4,
        d2_n14 : a1
      } });
    } else{

    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d2_n11 : a2,
        d2_n12 : a3,
        d2_n13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d2_n11 : a2,
            d2_n12 : a1
      } });
      }
    }
    }
  },
  refreshd3b1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d3_b11;
     a2=temp.d3_b12;
     a3=temp.d3_b13;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d3_b11 : a2,
        d3_b12 : a3,
        d3_b13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d3_b11 : a2,
            d3_b12 : a1
      } });
      }
    }
  },
  refreshd3m1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d3_m11;
     a2=temp.d3_m12;
     a3=temp.d3_m13;
    //prepei na mpoune if 0!!!!
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d3_m11 : a2,
        d3_m12 : a3,
        d3_m13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d3_m11 : a2,
            d3_m12 : a1
      } });
      }
    }
  },
  refreshd3m2: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d3_m21;
     a2=temp.d3_m22;
     a3=temp.d3_m23;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d3_m21 : a2,
        d3_m22 : a3,
        d3_m23 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d3_m21 : a2,
            d3_m22 : a1
      } });
      }
    }
  },
  refreshd3l1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d3_l11;
     a2=temp.d3_l12;
     a3=temp.d3_l13;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d3_l11 : a2,
        d3_l12 : a3,
        d3_l13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d3_l11 : a2,
            d3_l12 : a1
      } });
      }
    }
  },
  refreshd3a1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d3_a11;
     a2=temp.d3_a12;
     a3=temp.d3_a13;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d3_a11 : a2,
        d3_a12 : a3,
        d3_a13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d3_a11 : a2,
            d3_a12 : a1
      } });
      }
    }
  },
  refreshd3a2: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d3_a21;
     a2=temp.d3_a22;
     a3=temp.d3_a23;
    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d3_a21 : a2,
        d3_a22 : a3,
        d3_a23 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d3_a21 : a2,
            d3_a22 : a1
      } });
      }
    }
  },
  refreshd3n1: function (code) {      //Define method to set tasks to private
     temp = Users.findOne({Code : code});
     a1=temp.d3_n11;
     a2=temp.d3_n12;
     a3=temp.d3_n13;
     a4=temp.d3_n14;

    if (a4!=0){
      Users.update({Code : code}, {
      $set: {
        d3_n11 : a2,
        d3_n12 : a3,
        d3_n13 : a4,
        d3_n14 : a1
      } });
    } else{

    if (a3!=0){
    Users.update({Code : code}, {
      $set: {
        d3_n11 : a2,
        d3_n12 : a3,
        d3_n13 : a1,
      } });
    } else{
      if (a2!=0){
        Users.update({Code : code}, {
          $set: {
            d3_n11 : a2,
            d3_n12 : a1
      } });
      }
    }
    }
  },
//day4

refreshd4b1: function (code) {      //Define method to set tasks to private
  //console.log("arxh");
   temp = Users.findOne({Code : code});
   a1=temp.d4_b11;
   a2=temp.d4_b12;
   a3=temp.d4_b13;
   //alert("server");
 //  console.log("server");
     //   console.log(a1);

//   console.log(a2);

  // console.log(a3);

  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d4_b11 : a2,
      d4_b12 : a3,
      d4_b13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d4_b11 : a2,
          d4_b12 : a3
    } });
    }
  }
},
refreshd4m1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d4_m11;
   a2=temp.d4_m12;
   a3=temp.d4_m13;
  //prepei na mpoune if 0!!!!
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d4_m11 : a2,
      d4_m12 : a3,
      d4_m13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d4_m11 : a2,
          d4_m12 : a1
    } });
    }
  }
},
refreshd4m2: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d4_m21;
   a2=temp.d4_m22;
   a3=temp.d4_m23;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d4_m21 : a2,
      d4_m22 : a3,
      d4_m23 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d4_m21 : a2,
          d4_m22 : a1
    } });
    }
  }
},
refreshd4l1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d4_l11;
   a2=temp.d4_l12;
   a3=temp.d4_l13;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d4_l11 : a2,
      d4_l12 : a3,
      d4_l13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d4_l11 : a2,
          d4_l12 : a1
    } });
    }
  }
},
refreshd4a1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d4_a11;
   a2=temp.d4_a12;
   a3=temp.d4_a13;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d4_a11 : a2,
      d4_a12 : a3,
      d4_a13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d4_a11 : a2,
          d4_a12 : a1
    } });
    }
  }
},
refreshd4a2: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d4_a21;
   a2=temp.d4_a22;
   a3=temp.d4_a23;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d4_a21 : a2,
      d4_a22 : a3,
      d4_a23 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d4_a21 : a2,
          d4_a22 : a1
    } });
    }
  }
},
refreshd4n1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d4_n11;
   a2=temp.d4_n12;
   a3=temp.d4_n13;
   a4=temp.d4_n14;

  if (a4!=0){
    Users.update({Code : code}, {
    $set: {
      d4_n11 : a2,
      d4_n12 : a3,
      d4_n13 : a4,
      d4_n14 : a1
    } });
  } else{

  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d4_n11 : a2,
      d4_n12 : a3,
      d4_n13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d4_n11 : a2,
          d4_n12 : a1
    } });
    }
  }
  }
},
//day 5

refreshd5b1: function (code) {      //Define method to set tasks to private
  //console.log("arxh");
   temp = Users.findOne({Code : code});
   a1=temp.d5_b11;
   a2=temp.d5_b12;
   a3=temp.d5_b13;
   //alert("server");
 //  console.log("server");
     //   console.log(a1);

//   console.log(a2);

  // console.log(a3);

  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d5_b11 : a2,
      d5_b12 : a3,
      d5_b13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d5_b11 : a2,
          d5_b12 : a3
    } });
    }
  }
},
refreshd5m1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d5_m11;
   a2=temp.d5_m12;
   a3=temp.d5_m13;
  //prepei na mpoune if 0!!!!
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d5_m11 : a2,
      d5_m12 : a3,
      d5_m13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d5_m11 : a2,
          d5_m12 : a1
    } });
    }
  }
},
refreshd5m2: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d5_m21;
   a2=temp.d5_m22;
   a3=temp.d5_m23;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d5_m21 : a2,
      d5_m22 : a3,
      d5_m23 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d5_m21 : a2,
          d5_m22 : a1
    } });
    }
  }
},
refreshd5l1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d5_l11;
   a2=temp.d5_l12;
   a3=temp.d5_l13;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d5_l11 : a2,
      d5_l12 : a3,
      d5_l13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d5_l11 : a2,
          d5_l12 : a1
    } });
    }
  }
},
refreshd5a1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d5_a11;
   a2=temp.d5_a12;
   a3=temp.d5_a13;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d5_a11 : a2,
      d5_a12 : a3,
      d5_a13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d5_a11 : a2,
          d5_a12 : a1
    } });
    }
  }
},
refreshd5a2: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d5_a21;
   a2=temp.d5_a22;
   a3=temp.d5_a23;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d5_a21 : a2,
      d5_a22 : a3,
      d5_a23 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d5_a21 : a2,
          d5_a22 : a1
    } });
    }
  }
},
refreshd5n1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d5_n11;
   a2=temp.d5_n12;
   a3=temp.d5_n13;
   a4=temp.d5_n14;

  if (a4!=0){
    Users.update({Code : code}, {
    $set: {
      d5_n11 : a2,
      d5_n12 : a3,
      d5_n13 : a4,
      d5_n14 : a1
    } });
  } else{

  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d5_n11 : a2,
      d5_n12 : a3,
      d5_n13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d5_n11 : a2,
          d5_n12 : a1
    } });
    }
  }
  }
},

//day 6
refreshd6b1: function (code) {      //Define method to set tasks to private
  //console.log("arxh");
   temp = Users.findOne({Code : code});
   a1=temp.d6_b11;
   a2=temp.d6_b12;
   a3=temp.d6_b13;
   //alert("server");
 //  console.log("server");
     //   console.log(a1);

//   console.log(a2);

  // console.log(a3);

  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d6_b11 : a2,
      d6_b12 : a3,
      d6_b13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d6_b11 : a2,
          d6_b12 : a3
    } });
    }
  }
},
refreshd6m1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d6_m11;
   a2=temp.d6_m12;
   a3=temp.d6_m13;
  //prepei na mpoune if 0!!!!
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d6_m11 : a2,
      d6_m12 : a3,
      d6_m13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d6_m11 : a2,
          d6_m12 : a1
    } });
    }
  }
},
refreshd6m2: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d6_m21;
   a2=temp.d6_m22;
   a3=temp.d6_m23;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d6_m21 : a2,
      d6_m22 : a3,
      d6_m23 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d6_m21 : a2,
          d6_m22 : a1
    } });
    }
  }
},
refreshd6l1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d6_l11;
   a2=temp.d6_l12;
   a3=temp.d6_l13;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d6_l11 : a2,
      d6_l12 : a3,
      d6_l13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d6_l11 : a2,
          d6_l12 : a1
    } });
    }
  }
},
refreshd6a1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d6_a11;
   a2=temp.d6_a12;
   a3=temp.d6_a13;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d6_a11 : a2,
      d6_a12 : a3,
      d6_a13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d6_a11 : a2,
          d6_a12 : a1
    } });
    }
  }
},
refreshd6a2: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d6_a21;
   a2=temp.d6_a22;
   a3=temp.d6_a23;
  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d6_a21 : a2,
      d6_a22 : a3,
      d6_a23 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d6_a21 : a2,
          d6_a22 : a1
    } });
    }
  }
},
refreshd6n1: function (code) {      //Define method to set tasks to private
   temp = Users.findOne({Code : code});
   a1=temp.d6_n11;
   a2=temp.d6_n12;
   a3=temp.d6_n13;
   a4=temp.d6_n14;

  if (a4!=0){
    Users.update({Code : code}, {
    $set: {
      d6_n11 : a2,
      d6_n12 : a3,
      d6_n13 : a4,
      d6_n14 : a1
    } });
  } else{

  if (a3!=0){
  Users.update({Code : code}, {
    $set: {
      d6_n11 : a2,
      d6_n12 : a3,
      d6_n13 : a1,
    } });
  } else{
    if (a2!=0){
      Users.update({Code : code}, {
        $set: {
          d6_n11 : a2,
          d6_n12 : a1
    } });
    }
  }
  }
},









});
