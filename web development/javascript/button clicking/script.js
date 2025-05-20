function view(){
    const buttonvalue = document.getElementsByTagName("button")[0].innerHTML
    console.log(buttonvalue)
    // document.getElementsByTagName("p")[0].style.display = "block";
    // document.getElementsByTagName("button")[0].innerHTML = "hide text"


    if(buttonvalue == "show text"){
        document.getElementsByTagName("p")[0].style.display = "block";
        document.getElementsByTagName("button")[0].innerHTML = "hide text"
    }

    else if(buttonvalue == "hide text"){
        document.getElementsByTagName("p")[0].style.display = "none";
        document.getElementsByTagName("button")[0].innerHTML = "show text"
    }


}