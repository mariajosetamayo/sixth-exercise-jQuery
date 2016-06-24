var template = function(text) {

	//this function takes list item text as input and returns HTML for list as output.

  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

    //this is when a user types an item into the text box and submits the form, the code inside the submit handler will run

var main = function() {
  $('form').submit(function() {
      var text = $('#todo').val();
      var html = template(text);
      $('.list').append(html);
      $("#todo").val('');
      


    
    return false;  
   });
  
  $('.list').on("click", '.glyphicon-star', function(){
  	$(this).toggleClass("active");
  });

  $('.list').on("click", '.glyphicon-remove', function(){
  	$(this).parent().remove();
  });


};

$(document).ready(main);