$(document).ready(function() {
    $(".citation").each(function() {
        let id = $(this).attr("id");
        $(this).append(`
            [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#bib` + id + `" data-original-title="" title="">` + id + `</a>]`);
    });

    $(".fn").click(function() {
        let id = $(this).attr("id");
        let fnClass = "." + id;
        // highlight and fade fnclass element 
        $(fnClass).css({backgroundColor: "#ffde0a"}).animate({backgroundColor: 'transparent'}, 1500);
        return false;
    });

    $(".fn-img").click(function() {
        let id = $(this).attr("id");
        let fnClass = "." + id;
        // highlight and fade fnclass element 
        $(fnClass).css({backgroundColor: "#ffde0a"}).animate({backgroundColor: 'transparent'}, 1500);
        return false;
    });

    // $("section > h3").append("<hr/>");
});
