
Template.building.events({

    'click [next]': function (e) {
    e.preventDefault();
    code=  parseInt(localStorage.getItem("bar"));

    registered = Users.findOne({Code:code}).registered;

    if (registered!=0) {
      Materialize.toast('sry you didnt come here normaly', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
      return
    }
    ////alert("path8hka");
    //pairnw tis times tou chechbox..einai toso sun8eto epeidh einai chechbox kai oxi radio button
    code=  parseInt(localStorage.getItem("bar"));
    var values = Users.findOne({Code : code});


    //prosoxh poia 8eloun ParseInt
    var People= values.People ;
    var Relationship= values.Relationship ;
    var Budget= values.Budget ;
    var Age_Min= values.Age_Min ;
    var Age_Max= values.Age_Max ;
    var Reason= values.Reason ;
    var Attractions_Outdoors= values.Attractions_Outdoors ;
    var Attractions_Archaeological= values.Attractions_Archaeological ;
    var Attractions_Cultural= values.Attractions_Cultural ;
    var Restaurants_Fast= values.Restaurants_Fast ;
    var Restaurants_Casual= values.Restaurants_Casual ;
    var Restaurants_Fine= values.Restaurants_Fine ;
    var Restaurants_Cafe= values.Restaurants_Cafe ;
    var Fun_Clubs= values.Fun_Clubs ;
    var Fun_Bars= values.Fun_Bars ;
    var Fun_Traditional= values.Fun_Traditional ;
    var Fun_Cinemas= values.Fun_Cinemas ;

    //edw ekana allagh metavlhths..evala alternative sth 8esh tou adventure..an to alla3oume sth vash na to alla3oume kai edw
    var Fun_Alternative= values.Fun_Adventure ;

    var Relaxation_Chilling= values.Relaxation_Chilling ;
    var Relaxation_Walk= values.Relaxation_Walk ;
    var Shopping_Souvenir= values.Shopping_Souvenir ;
    var Shopping_Casual= values.Shopping_Casual ;
    var Shopping_Luxury= values.Shopping_Luxury ;

    equalrest=localStorage.getItem("same");

    //oi pio stantar kathgories se periptwsh pou de mpei pou8ena->den exw vrei mexri stigmhs
    //kapoia tetoia periptwsh vevaia
    var category1;
    category1="Patseas_Local";
    var catevory2;
    catevory2="Kazakou";


    Meteor.call("setTourism_Categories",category1,catevory2,code);




// edw einai gia single
// an einai single 8a parei to idio programa me  Friends
if (Relationship=="Single") {
  Relationship="Friends";
}


// edw einai gia single na alaxtei

    //prosoxh edw sth vash pernaei me mikro prwto gramma to family
    if (Relationship=="family") {

        category1="Dolianiti";
        category2="Patseas_Local";
        //alert(category1);
        //alert(category2);
        //alert(1);
        //na pernanei antistoixa sta nea pedia ths vashs
        Meteor.call("setTourism_Categories",category1,category2,code);
        window.location.href = '/vuides';
return;

    }

    //oles oi allew periptwseis dhladh
    if (Relationship=="Couple" || Relationship=="Friends" || Relationship=="Solo") {
      if (equalrest){
        category1="Patseas_Local";
        catevory2="Kazakou";
        Meteor.call("setTourism_Categories",category1,catevory2,code);
return

}





        if (Fun_Clubs==1){
            category1="Patseas_Fun";
            category2="Patseas_Local";
            Meteor.call("setTourism_Categories",category1,category2,code);
            //alert(category1);
            //alert(category2);
                    //alert(2);
            window.location.href = '/vuides';
return;
        }

        if (Fun_Alternative==1){
            category1="Kazakou";
            category2="Patseas_Local";
            Meteor.call("setTourism_Categories",category1,category2,code);
            //alert(category1);
            //alert(category2);
                    //alert(3);

            window.location.href = '/vuides';
return;
        }

        if (Fun_Clubs==2){
            category1="Patseas_Fun";
            category2="Patseas_Local";
            Meteor.call("setTourism_Categories",category1,category2,code);
            //alert(category1);
            //alert(category2);
                    //alert(4);

            window.location.href = '/vuides';
return;
        }

        if (Fun_Alternative==2){
            category1="Kazakou";
            category2="Patseas_Local";
            Meteor.call("setTourism_Categories",category1,category2,code);
            //alert(category1);
            //alert(category2);
                    //alert(5);

            window.location.href = '/vuides';
return;
        }

        if (Fun_Bars<=2) {
            category1="Patseas_Local";
            category2="Kazakou";

            if (Restaurants_Fine<=2){
                category2="Dolianiti";
            }
            Meteor.call("setTourism_Categories",category1,category2,code);

            //alert(category1);
            //alert(category2);
            //alert(6);
            window.location.href = '/vuides';
return;
        }

        if (Age_Min<=30 && Relationship=="Couple") {

            category1="Patseas_Local";
            category2="Kazakou";
            if (Restaurants_Fine==1){
                category2="Dolianiti";
            }
            Meteor.call("setTourism_Categories",category1,category2,code);
            //alert(category1);
            //alert(category2);
            //alert(7);
            window.location.href = '/vuides';
return;
        }
        if (Age_Min>30 && Relationship=="Couple") {
            category1="Dolianiti";
            category2="Patseas_Local";
            Meteor.call("setTourism_Categories",category1,category2,code);
            //alert(category1);
            //alert(category2);
            //alert(8);
            window.location.href = '/vuides';
return;
        }

        if (Age_Min<=35 && Relationship=="Friends") {

            category1="Patseas_Local";
            category2="Kazakou";
            if (Restaurants_Fine==1){
                category2="Dolianiti";
            }
            Meteor.call("setTourism_Categories",category1,category2,code);
            //alert(category1);
            //alert(category2);
            //alert(9);
            window.location.href = '/vuides';
return;
        }
        if (Age_Min>35 && Relationship=="Friends") {
            category1="Dolianiti";
            category2="Patseas_Local";
            Meteor.call("setTourism_Categories",category1,category2,code);
            //alert(category1);
            //alert(category2);
            //alert(10);
            window.location.href = '/vuides';
return;
        }

        //alert("de mphka pou8ena..wtf????")

        window.location.href = '/vuides';
return;
    }
    }
   });
