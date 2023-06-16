window.onload = function(){
    var currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = "Copyright &copy; " + currentYear + " MrField. All rights reserved."
};

document.getElementById("t1").addEventListener("click", function() {
    document.getElementById("info").innerHTML ="About me <br/> First name: Jacob <br/> Nationality: 🇵🇱 <br/> Hobbies: 🚲, 🏸";
});

document.getElementById("t2").addEventListener("click", function() {
    document.getElementById("info").innerHTML ="edu";
});

document.getElementById("t3").addEventListener("click", function() {
    document.getElementById("info").innerHTML ="ski";
});

document.getElementById("t4").addEventListener("click", function() {
    document.getElementById("info").innerHTML ="quo";
});