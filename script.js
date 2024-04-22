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
