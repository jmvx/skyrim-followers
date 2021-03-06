// searchable list courtesy of Rob Sawyer
http://www.robsawyer.me/blog/2013/07/10/lightweight-jquery-searchfilter-tutorial/

$(document).ready(function() {

  //we want this function to fire whenever the user types in the search-box
  $("#search").keyup(function () {
  
    //first we create a variable for the value from the search-box
    var searchTerm = $("#search").val();

    //then a variable for the list-items (to keep things clean)
    var listItem = $('#search_list').children('li');
    
    //extends the default :contains functionality to be case insensitive
    //if you want case sensitive search, just remove this next chunk
    $.extend($.expr[':'], {
      'containsi': function(elem, i, match, array)
      {
        return (elem.textContent || elem.innerText || '').toLowerCase()
        .indexOf((match[3] || "").toLowerCase()) >= 0;
      }
    });//end of case insensitive chunk


    //this part is optional
    //here we are replacing the spaces with another :contains
    //what this does is to make the search less exact by searching all words and not full strings
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
    //here is the meat. We are searching the list based on the search terms
    $("ul#search_list li").not(":containsi('" + searchSplit + "')").each(function(e)   {

          //add a "hidden" class that will remove the item from the list
          $(this).addClass('hidden');
    });
    
    //this does the opposite -- brings items back into view
    $("ul#search_list li:containsi('" + searchSplit + "')").each(function(e) {

          //remove the hidden class (reintroduce the item to the list)
          $(this).removeClass('hidden');

    });
  });
});