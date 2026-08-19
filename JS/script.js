// ==========================================
// MENU MOBILE
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Fechar o menu ao clicar em um link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ==========================================
// FILTRO DO CATÁLOGO
// ==========================================

const categoryButtons =
    document.querySelectorAll(".category-btn");

const productCards =
    document.querySelectorAll(".product-card");


categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active dos outros botões

        categoryButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        // Ativa o botão escolhido

        button.classList.add("active");


        // Categoria selecionada

        const selectedCategory =
            button.dataset.category;


        // Mostrar/esconder produtos

        productCards.forEach((product) => {

            const productCategory =
                product.dataset.category;


            if (
                selectedCategory === "todos" ||
                productCategory === selectedCategory
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});