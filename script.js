function toggleDropdown() {
    var dropdownMenu = document.getElementById("Dropdown");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
        dropdownMenu.onmouseleave = function() {
            dropdownMenu.style.display = "none";
        };
        dropdownMenu.onmouseenter = function() {
            dropdownMenu.style.display = "block";
        };
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var link = document.getElementById("glow-link");
    var circle = document.getElementById("glow-circle");
    
    link.addEventListener("mousemove", function(event) {
        var x = event.clientX - 50; // Adjust the offset of the circle
        var y = event.clientY - 50; // Adjust the offset of the circle
        circle.style.display = "block";
        circle.style.left = x + "px";
        circle.style.top = y + "px";
    });
    
    link.addEventListener("mouseleave", function() {
        circle.style.display = "none";
    });
});


