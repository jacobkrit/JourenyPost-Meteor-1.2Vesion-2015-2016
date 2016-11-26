


Template.date.events({
    'click [next]': function (e) {
      e.preventDefault();
      // Session.set('code',localStorage.getItem("bar"));
var date1 = new Date(document.getElementById("fday").value);
var date2 = new Date(document.getElementById("lday").value);

var difference = date2 - date1;

var days = difference/(24*3600*1000);

  days=parseInt(days);

      localStorage.setItem("days", parseInt(days));
      code=  parseInt(localStorage.getItem("bar"));

//alert(days);


 if (days>= 0) {
   Meteor.call("date",days,code);

   window.location.href = '/personal-details';
     }
        else {

          Materialize.toast('Wrong number of days', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast

          }

      //alert(Session.get('code'));
      //ToDo: edw prepei na mpoun kai elegxoi end>start kai na mh dwsei meres pou exoun perasei

     // Meteor.call("dayUpdate",Start_Month,Start_Day,Start_Period,End_Month,End_Day,End_Period,parseInt(localStorage.getItem("bar")));
       //window.location.href = '/personal-details.html';


    }
   });
