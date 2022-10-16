$(document).ready(function() {
    $(".citation").each(function() {
        let id = $(this).attr("id");
        $(this).append(`
            [<a class="bib" data-trigger="hover" data-toggle="popover" data-placement="top" href="#bib` + id + `" data-original-title="" title="">` + id + `</a>]`);
    });

// $(".fn").click(function() {
    //     let id = $(this).attr("id");
    //     let fnClass = "." + id;
    //     // highlight and fade fnclass element 
    //     $(fnClass).css({backgroundColor: "#ffde0a"}).animate({backgroundColor: 'transparent'}, 1500);
    //     return false;
    // });

    $(".fn").hover(function() {
        let id = $(this).attr("id");
        let fnClass = "." + id;
        // highlight fnclass element 
        $(fnClass).css({backgroundColor: "#ffde0a"});
    }, function() {
        let id = $(this).attr("id");
        let fnClass = "." + id;
        // resolve fnclass element 
        $(fnClass).css({backgroundColor: 'transparent'});
    });

    // $(".fn-img").click(function() {
    //     let id = $(this).attr("id");
    //     let fnClass = "." + id;
    //     // highlight and fade fnclass element 
    //     $(fnClass).css({backgroundColor: "#ffde0a"}).animate({backgroundColor: 'transparent'}, 1500);
    //     return false;
    // });

    $(".fn-img").hover(function() {
        let id = $(this).attr("id");
        let fnClass = "." + id;
        // highlight fnclass element 
        $(fnClass).css({backgroundColor: "#ffde0a"});
    }, function() {
        let id = $(this).attr("id");
        let fnClass = "." + id;
        // resolve fnclass element 
        $(fnClass).css({backgroundColor: 'transparent'});
    });

    // $("section > h3").append("<hr/>");
    
    // Add lines between graphs and citations
    new LeaderLine(LeaderLine.mouseHoverAnchor(document.getElementById('fn-img1-pointer')), 
                    document.getElementById('figure-group-1'));
    new LeaderLine(LeaderLine.mouseHoverAnchor(document.getElementById('fn-img2-pointer')), 
                    document.getElementById('figure-group-1'));
    new LeaderLine(LeaderLine.mouseHoverAnchor(document.getElementById('fn-img3-pointer')), 
                    document.getElementById('figure-group-1'));
    new LeaderLine(LeaderLine.mouseHoverAnchor(document.getElementById('fn-img4-pointer')),
                    document.getElementById('fn-img4')); 

});
