document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
    const menuContent = document.getElementById("menu-content");
  
    const loadSectionContent = (section) => {
      menuContent.innerHTML = "";
      fetch(`${section}.html`)
        .then((response) => response.text())
        .then((data) => {
          menuContent.innerHTML = data;
        })
        .catch((error) => {
          menuContent.innerHTML = "<p>Error loading content.</p>";
          console.error("Error loading content:", error);
        });
    };
  
    menuItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        const section = item.getAttribute("data-section");
        menuItems.forEach((i) => {
          i.classList.remove("bg-[#D4AF37]");
          i.classList.add("bg-[#555555]");
          i.querySelector("a").classList.remove("text-[#555]");
          i.querySelector("a").classList.add("text-[#F5F5F5]");
        });
        item.classList.remove("bg-[#555555]");
        item.classList.add("bg-[#D4AF37]");
        item.querySelector("a").classList.remove("text-[#F5F5F5]");
        item.querySelector("a").classList.add("text-[#555]");
        
        // Change URL without reloading the page
        window.history.pushState({section: section}, '', `?section=${section}`);
        
        loadSectionContent(section);
      });
    });
  
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section') || 'appetizer';
    loadSectionContent(section);
  
    menuItems.forEach((item) => {
      const itemSection = item.getAttribute("data-section");
      if (itemSection === section) {
        item.classList.remove("bg-[#555555]");
        item.classList.add("bg-[#D4AF37]");
        item.querySelector("a").classList.remove("text-[#F5F5F5]");
        item.querySelector("a").classList.add("text-[#555]");
      } else {
        item.classList.remove("bg-[#D4AF37]");
        item.classList.add("bg-[#555555]");
        item.querySelector("a").classList.remove("text-[#555]");
        item.querySelector("a").classList.add("text-[#F5F5F5]");
      }
    });
  });
  