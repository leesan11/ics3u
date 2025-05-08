//gurl math-ers - Hypatia

var hyp = document.getElementById('h-dropdown')
var i;
var facts = document.getElementsById('h-dropdown')

hyp.addEventListener('click', function () {
    alert('yay!')
    facts.open
})

for (i = 0; i < facts.length; i++) {
    facts[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
