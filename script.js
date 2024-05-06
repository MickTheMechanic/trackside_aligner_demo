// Get the burger button
const burger = document.getElementById("burger-btn");
// Get the dropdown box
const dropdown = document.getElementById("dropdown-box");
// Get the overlay
const overlay = document.getElementById("overlay");
// Add event listener to burger button to toggle dropdown box when clicked
burger.addEventListener("click", function () {
  dropdown.classList.toggle("show");
  overlay.classList.toggle("show");
});
// Add event listener to the overlay to close the dropdown box when clicked
overlay.addEventListener("click", function () {
  dropdown.classList.remove("show");
  overlay.classList.remove("show");
});
var scrollTop = 0;
setInterval(function () {
  document.body.scrollTop = scrollTop;
  scrollTop++;
}, 100);
window.addEventListener("load", function () {
  const dropdown = document.getElementById("dropdown-box");
  const overlay = document.getElementById("overlay");
  dropdown.classList.add("show");
  overlay.classList.add("show");
});
document.addEventListener('DOMContentLoaded', function() {
    var submenuTriggers = document.querySelectorAll('.submenu-parent');

    submenuTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            // Toggle the corresponding submenu
            var submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('sub-menu')) {
                submenu.classList.toggle('show');
            }

            // Optional: close other submenus when one is opened
            submenuTriggers.forEach(function(otherTrigger) {
                if (otherTrigger !== trigger) {
                    var otherSubmenu = otherTrigger.nextElementSibling;
                    if (otherSubmenu && otherSubmenu.classList.contains('sub-menu')) {
                        otherSubmenu.classList.remove('show');
                    }
                }
            });
        });
    });
});