$.getJSON("RouteJSON.json", loadOptions);

function loadOptions(data) {
	console.log(data);
	console.log(data.RouteAndDate);
	console.log(data.Options);

	$.each(data.Options, function(index, value) {		
		var optionlist = $("<li>", {
			"text" : value
		});
		optionlist.appendTo($("#optionlist"));
	});

	$.each(data.RouteAndDate, function(index, value) {		
		var list = $("<option>", {
			"text" : value
		});
		list.appendTo($("#list"));/*select menue*/
		/*list.SELECT($("#list"));*/
	});
}


$(function(){
	$("#datepicker").datepicker();/*Date peicker*/
});

/*build the SELECT control*/
/*jQuery(document).ready(function() {
  $('#list').click(function() {
    
  });
});

var $list   = $(this),
     $select = $('<select />');

$list.children('li').each(function(index) {
  $select.append($('<option />').attr('value', index).html($(this).html()));
});

$list.replaceWith($select);

var $list   = $(this),
    index   = $('#list, select[id^="converted_dropdown_"]').index( this ),
    $select = $('<select />').attr('id', 'converted_dropdown_' + (index + 1));*/
    

 /*$(function() {
    $( "#list" ).selectmenu(); 
});*/
     /* .selectmenu()*/
      	/*.selectmenu( "menuWidget" )
      .addClass( "overflow" );*/

/* $(".box").click(function (index, value) {
		
	$("#list").val();
			
 });*/

 /*$(".box").value("#list");*/
	