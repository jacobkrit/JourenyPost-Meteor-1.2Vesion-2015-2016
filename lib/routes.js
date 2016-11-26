 FlowRouter.route('/',{
	    action(){
	    	BlazeLayout.render('home')
	  	  }
 });
 FlowRouter.route('/login',{
     action(){
       BlazeLayout.render('login')
       }
 });
 FlowRouter.route('/signup',{
	    action(){

	    	BlazeLayout.render('signup');

	  	  }
 });

 FlowRouter.route('/date',{
   
	    action(){
	    	BlazeLayout.render('date')
	  	  }
 });


 FlowRouter.route('/building',{
     action(){
       BlazeLayout.render('building')
       }
 });

 FlowRouter.route('/personal-details',{
	    action(){
	    	BlazeLayout.render('personal_details')
	  	  }
 });
 FlowRouter.route('/trip-details',{
	    action(){
	    	BlazeLayout.render('trip_details')
	  	  }
 });
 FlowRouter.route('/priority-list',{
     action(){
       BlazeLayout.render('priority_list')
       }
 });

 FlowRouter.route('/program',{
     action(){
       BlazeLayout.render('program')
       }
 });
 FlowRouter.route('/vuides',{
     action(){
       BlazeLayout.render('vuides')
       }
 });
