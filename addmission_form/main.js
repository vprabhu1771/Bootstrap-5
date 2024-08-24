var currentTab = 0;

document.addEventListener('DOMContentLoaded', function(){

    showTab(currentTab);


    var NextBtn = document.getElementById("NextBtn");

    NextBtn.addEventListener('click', function(){
        
        var data = document.getElementById('admission_form');

        console.log(data);
    });

});

function showTab(n)
{
    var tabs = document.getElementsByClassName("tab-pane");

    // Display list of all tabs
    // console.log(tabs);

    if (n == 0) 
    {
        document.getElementById('PreviousBtn').style.display = "none";
    }
    else
    {
        document.getElementById("PreviousBtn").style.display = "inline";
    }

    if (n == (tabs.length - 1)) 
    {
        document.getElementById("NextBtn").innerHTML = "Submit";
    } 
    else 
    {
        document.getElementById("NextBtn").innerHTML = "Next";
    }

    fixStepIndicator(n)
}

function nextStep(n)
{
    var tabs = document.getElementsByClassName("tab-pane");

    tabs[currentTab].style.display = "none";

    currentTab += n
    
    if (currentTab >= tabs.length) 
    {

        // Show success
        console.log("Success");

    }


    showTab(currentTab);
}




function fixStepIndicator(n)
{
    var nav_tabs = document.getElementsByClassName('nav-link');

    var tabs = document.getElementsByClassName("tab-pane");

    // Display list of all tabs
    // console.log(nav_tabs);

    for (let index = 0; index < nav_tabs.length; index++) 
    {
        // Display list of all tabs class name
        // console.log(nav_tabs[index].className);

        nav_tabs[index].className = nav_tabs[index].className.replace(" active", "");
        // console.log(nav_tabs[index].className);

        // Display list of all tabs class name
        // console.log(tabs[index].className);

        tabs[index].className = tabs[index].className.replace(" active", "");
        // console.log(nav_tabs[index].className);
    }

    nav_tabs[n].className += " active";

    // console.log(nav_tabs[n].className);

    tabs[n].className += " show active";

    // console.log(tabs[n].className);
}