function Open() {
    var navbar = window.document.getElementById("navbar")
    navbar.classList.toggle("open")
}
function Switch() {
    var ball = window.document.getElementById("ball")
    ball.classList.toggle("darktheme")
    var html = document.documentElement
    html.classList.toggle("darktheme")
}
window.document.addEventListener('keydown', function(event) {
    if(event.key == "Enter") {
        Open()
    }
})