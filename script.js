document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".link");
    const submenuItems = document.querySelectorAll(".sublink");
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");
    let autoScrollTimeout;
    let dropdownMenuCount = 0;

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseenter", function () {
            dropdownMenus.forEach(function (dropdownMenu) {
                dropdownMenu.style.display = "block";
                dropdownMenu.style.opacity = "1";
                dropdownMenu.style.maxHeight = "200px";
            });
        });
        
        dropdownMenus.forEach(function (dropdownMenu) {
            dropdownMenu.addEventListener("mouseenter", function () {
                dropdownMenu.style.display = "block";
                dropdownMenuCount++;
            });

            dropdownMenu.addEventListener("mouseleave", function () {
                autoScrollTimeout = setTimeout(function () {
                    dropdownMenuCount--;
                    if (dropdownMenuCount == 0) {
                        dropdownMenus.forEach(function (dropdownMenu) {
                            dropdownMenu.style.display = "none";
                        });
                    }
                }, 1000);
            });
        });

        submenuItems.forEach(function (submenuItem) {
            submenuItem.addEventListener("click", function (event) {
                event.preventDefault();

                const targetId = this.getAttribute("data-target");
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Open the details tag if it's not already open
                    console.log("enter");
                    const detailsTag = targetSection.closest("details");
                    if (detailsTag && !detailsTag.open) {
                        detailsTag.open = true;
                    }
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }

                const children = targetSection.children;

                for (let i = 0; i < children.length; i++) {
                    if (children[i].tagName.toLowerCase() === 'details') {
                        children[i].open = true;
                        break;
                    }
                }

                const sibiling = targetSection.nextElementSibling;
                if (sibiling.tagName.toLowerCase() === 'details') {
                    sibiling.open = true;
                }

            });
        });
    });

    let myLink = document.getElementById("MyName");
    myLink.addEventListener("mouseenter", function() {
        const textColor = "#64ffda";
        const textContent = "Oh! You find my Linkedin!!";
        myLink.innerHTML = `<strong style="color: ${textColor};">${textContent}</strong>`;
    });

    myLink.addEventListener("mouseleave", function () {
        const textColor = "#CCD6F6";
        const textContent = "Mingyong Ma";
        myLink.innerHTML = `<strong style="color: ${textColor};">${textContent}</strong>`;
    });
});