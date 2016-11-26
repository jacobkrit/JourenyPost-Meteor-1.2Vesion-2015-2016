

  Template.trip_details.events({
    'click [next]': function (e) {
      e.preventDefault();
      //alert("sasd");
      code =  parseInt(localStorage.getItem("bar"));

       number =parseInt(document.getElementById('Number_of_travellers').value);
       travel_type = document.getElementById('travel_type').value;
       budget = 0;
       min_age = parseInt(document.getElementById('min_age').value);
       max_age = parseInt(document.getElementById('max_age').value);

//alert(number);
//alert(travel_type);
//alert(min_age);
//alert(max_age);
registered = Users.findOne({Code:code}).registered;
if (registered==0) {


      Meteor.call("tripUpdate",number,travel_type,budget,min_age, max_age,code);
                        window.location.href ='/priority-list';
                        }
                        else {

                          Materialize.toast('sry you didnt come here legaly', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast

                          }
}


                  //BUG                            DN 8ELEI NA LEITOURGISI KAI AS VGAZEI OTI VRISKSEI STO CONSOLE


        }
  )
