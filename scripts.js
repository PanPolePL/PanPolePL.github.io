window.onload = function(){
    var currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = "Copyright &copy; " + currentYear + " MrField. All rights reserved."
};

document.getElementById("t1").addEventListener("click", function() {
    document.getElementById("inhd").innerHTML ="About me"
    document.getElementById("info").innerHTML ="First name: Jacob <br/> Nationality: 🇵🇱 <br/> Hobbies: 🚲, 🏸";
});

document.getElementById("t2").addEventListener("click", function() {
    document.getElementById("inhd").innerHTML ="Education"
    document.getElementById("info").innerHTML ="edu";
});

document.getElementById("t3").addEventListener("click", function() {
    document.getElementById("inhd").innerHTML ="Skills"
    document.getElementById("info").innerHTML ="C++ <br/> Python <br/> Java <br/> HTML <br/> CSS <br/> JavaScript";
});

document.getElementById("t4").addEventListener("click", function() {
    document.getElementById("inhd").innerHTML ="Quotes"
    document.getElementById("info").innerHTML ="quo";
});