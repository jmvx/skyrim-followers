$(document).ready(function(){
    count = 0;
    $('#compare').addClass("sortable");
    $(".sortable").sortable({
        items: "li:not(.row-title)",
        axis: "x",
        revert: true,
        scroll: false,
        placeholder: "sortable-placeholder",
    });
    $("li.followers").click(function(){
        if ( !$(this).hasClass("selected") ) {
            $(this).addClass(count.toString());
            $('#compare').append( $(this).clone() );
            $(this).addClass("selected");
            count = count + 1;
        }
        else {
            id = $(this).attr("class").split(' ');
            $(this).removeClass("selected");
            $(this).removeClass(id[1]);
            if ($('#compare > li').hasClass(id[1])) {
                classid = "." + id[1];
                $(classid).remove();
            }
        }
    });
    $("button").click(function(){
        $('#compare > li.followers').remove();
        $('li.followers').removeClass();
        $('#masterlist ul > li:not(.region_title)').addClass('followers');

        count = 0;
    });
    
});