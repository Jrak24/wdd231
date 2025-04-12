// JS/menu.js
document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");
    const modal = document.getElementById("menu-modal");
    const modalContent = document.getElementById("modal-content");
    const closeModalBtn = document.getElementById("close-modal");
  
    fetch("data/menu.json")
      .then((response) => response.json())
      .then((menuItems) => {
        menuItems.forEach((item) => {
          const card = document.createElement("section");
          card.classList.add("menu-card");
  
          // Update card layout
          card.innerHTML = `
            <div class="card-image">
              <img src="${item.image}" alt="${item.name}" loading="lazy" />
            </div>
            <div class="card-details">
              <h3 class="card-title">${item.name}</h3>
              <p class="card-description">${item.description}</p>
              <p class="card-price">$${item.price}</p>
              <button class="open-modal"
                data-name="${item.name}"
                data-description="${item.description}"
                data-price="${item.price}"
                data-image="${item.image}">
                View Details
              </button>
            </div>
          `;
  
          menuContainer.appendChild(card);
        });
  
        // Add modal functionality to each button
        document.querySelectorAll(".open-modal").forEach((button) => {
          button.addEventListener("click", (e) => {
            const name = e.target.getAttribute("data-name");
            const description = e.target.getAttribute("data-description");
            const price = e.target.getAttribute("data-price");
            const image = e.target.getAttribute("data-image");
  
            // Update modal content
            modalContent.innerHTML = `
              <div class="modal-inner">
                <img src="${image}" alt="${name}" class="modal-img" />
                <div class="modal-info">
                  <h2>${name}</h2>
                  <p class="modal-description">${description}</p>
                  <p class="modal-price">Price: $${price}</p>
                </div>
              </div>
            `;
  
            modal.showModal();
          });
        });
      })
      .catch((error) => {
        console.error("Error loading menu:", error);
        menuContainer.innerHTML = `<p>Sorry, the menu couldn't be loaded.</p>`;
      });
  
    // Close modal
    closeModalBtn.addEventListener("click", () => {
      modal.close();
    });
  });
  