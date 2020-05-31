function openPageTest(pageName, elmnt) {
    var i, testimonials_tab, tablinks;
    testimonials_tab = document.getElementsByClassName("testimonials_tab");
    for (i = 0; i < testimonials_tab.length; i++) {
        testimonials_tab[i].style.display = "none";
    }


    document.getElementById(pageName).style.display = "block";
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.borderColor = "";
    }


    elmnt.style.borderColor = "#fc5f45";
    elmnt.style.outline = "none";

}


elem.onclick = function(event) {

    elem.style.opacity = "0";
    var videobanner = document.getElementById("videobanner");

    if (!(videobanner.paused)) {
        videobanner.pause();
        elem.style.opacity = "1";
    } else{ videobanner.play(); }
}