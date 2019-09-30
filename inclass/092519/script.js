"using strict"

function toggleNav(){
    console.log("toggling");
    const navItems = document.getElementById("navitems");
    navItems.classList.toggle("hidden");
}

function showExpandInfo(){
    console.log("toggling");
    const moreinfo = document.getElementById("more-info");
    moreinfo.hidden = !moreinfo.hidden;
    return false; //dont do default behavior (in this case, returning to top of page when expand is clicked)
    
}

function validateFirstName(){
    //if the error is showing, remove it
    let errorSpan = document.getElementById("error-first-name");

    if(errorSpan != null){
        errorSpan.remove();
    }

    //show an error when value is blank
    if(this.value.trim() == ""){
        errorSpan = document.createElement("span");
        errorSpan.id = "error-first-name";
        errorSpan.innerHTML = "* Blank";
        errorSpan.classList.add("error");
        this.after(errorSpan);
}
}

window.onload = function(){
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = toggleNav;

    const moreinfo = document.getElementById("more-info"); //hide "more info" paragraph on page load
    moreinfo.hiden = true;

    const expandLink = document.getElementById("expand-link");  // when link is clicked, display the content of "Expand"
    expandLink.onclick = showExpandInfo;

    const firstNameTB = document.getElementById("txt-first-name");
    firstNameTB.addEventListener("keyup", validateFirstName);

}