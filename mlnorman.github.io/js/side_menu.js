
    var openOrClosed = 0;
    function openNav() {
    if (openOrClosed === 0) {
        openOrClosed = 1;
        document.getElementById("mySidenav").style.width = "15rem";
        document.getElementById("main").style.marginLeft = "15rem";
    }else {
        openOrClosed = 0;
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }

    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }   
