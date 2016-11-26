

  Template.priority_list.events({
    'click [next]': function (e) {
      e.preventDefault();
      //alert("sasd");
      code=  parseInt(localStorage.getItem("bar"));
      rest=[rest1,rest2,rest3,rest4];
      fun=[fun1,fun2,fun3,fun4,fun5];
      rest=rest.sort().reverse();
      fun=fun.sort().reverse();




        registered = Users.findOne({Code:code}).registered;
      if (registered!=0) {
        Materialize.toast('sry you didnt come here normaly', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
        return
      }





//rest1
      if (rest1==rest[0]) {
        rest1=1;
      }
      else if (rest1==rest[1]) {
        rest1=2;
      }
    else  if (rest1==rest[2]) {
        rest1=3;
      }
    else  if (rest1==rest[3]) {
        rest1=4;
      }


//rest2


  if (rest2==rest[0]) {
    rest2=1;
  }
else  if (rest2==rest[1]) {
    rest2=2;
  }
else  if (rest2==rest[2]) {
    rest2=3;
  }
else  if (rest2==rest[3]) {
    rest2=4;
  }



//rest3


  if (rest3==rest[0]) {
    rest3=1;
  }
else  if (rest3==rest[1]) {
    rest3=2;
  }
else  if (rest3==rest[2]) {
    rest3=3;
  }
else  if (rest3==rest[3]) {
    rest3=4;
  }


//rest4


  if (rest4==rest[0]) {
    rest4=1;
  }
else  if (rest4==rest[1]) {
    rest4=2;
  }
else  if (rest4==rest[2]) {
    rest4=3;
  }
else  if (rest4==rest[3]) {
    rest4=4;
  }


  //fun1
        if (fun1==fun[0]) {
          fun1=1;
        }
        else if (fun1==fun[1]) {
          fun1=2;
        }
      else  if (fun1==fun[2]) {
          fun1=3;
        }
      else  if (fun1==fun[3]) {
          fun1=4;
        }
        else if (fun5==fun[4]){
          fun5=5;
        }

        //fun2
              if (fun2==fun[0]) {
                fun2=1;
              }
              else if (fun2==fun[1]) {
                fun2=2;
              }
            else  if (fun2==fun[2]) {
                fun2=3;
              }
            else  if (fun2==fun[3]) {
                fun2=4;
              }
else if (fun5==fun[4]){
  fun5=5;
}
              //fun3
                    if (fun3==fun[0]) {
                      fun3=1;
                    }
                    else if (fun3==fun[1]) {
                      fun3=2;
                    }
                  else  if (fun3==fun[2]) {
                      fun3=3;
                    }
                  else  if (fun3==fun[3]) {
                      fun3=4;
                    }
else if (fun5==fun[4]){
  fun5=5;
}
                    //fun4
                          if (fun4==fun[0]) {
                            fun4=1;
                          }
                          else if (fun4==fun[1]) {
                            fun4=2;
                          }
                        else  if (fun4==fun[2]) {
                            fun4=3;
                          }
                        else  if (fun4==fun[3]) {
                            fun4=4;
                          }
else if (fun5==fun[4]){
  fun5=5;
}
                          //fun5
                                if (fun5==fun[0]) {
                                  fun5=1;
                                }
                                else if (fun5==fun[1]) {
                                  fun5=2;
                                }
                              else  if (fun5==fun[2]) {
                                  fun5=3;
                                }
                              else  if (fun5==fun[3]) {
                                  fun5=4;
                                }
else if (fun5==fun[4]){
  fun5=5;
}

if(rest1==rest2&&rest2==rest3&&rest3==rest4){
}


if (alert1==44||alert2==44||alert3==44||alert4==44||alert5==44||alert6==44||alert7==44||alert8==44||alert9==44) {
  Materialize.toast('please rate all the activities ', 3000, 'rounded') ;// 'rounded' is the class I'm applying to the toast
}
else  {

}{

     Meteor.call("priority",rest1,rest2,rest3,rest4, fun1,fun2,fun3,fun4,fun5,code);
                        window.location.href ='/building';
                        }
}


                  //BUG                            DN 8ELEI NA LEITOURGISI KAI AS VGAZEI OTI VRISKSEI STO CONSOLE


        }
  )
