window.onload = function(){
    var currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = "Copyright &copy; " + currentYear + " Jakub Świniarski. All rights reserved."
};

document.getElementById("about_me").addEventListener("click", function() {
    document.getElementById("info-header").innerHTML ="About me"
    document.getElementById("info").innerHTML ="Nationality: 🇵🇱 <br/> Hobbies: 💻 🚲 🏸";
});

document.getElementById("education").addEventListener("click", function() {
    document.getElementById("info-header").innerHTML ="Education"
    document.getElementById("info").innerHTML ="High school: II LO Sieradz <br/> I study math and physics at the extended level and English at the bilingual level.";
});

document.getElementById("skills").addEventListener("click", function() {
    document.getElementById("info-header").innerHTML ="Skills"
    document.getElementById("info").innerHTML ="C/C++ <br/> Python <br/> Java <br/> HTML <br/> CSS <br/> JavaScript";
});

document.getElementById("quotes").addEventListener("click", function() {
    document.getElementById("info-header").innerHTML ="Quotes"
    document.getElementById("info").innerHTML ="<q>Any program is only as good as it is useful.</q> <br/> —Linus Torvalds <br/> <br/> <q>An idiot admires complexity, a genius admires simplicity.</q> <br/> —Terry A. Davis";
});
