document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // DESAFIO 1: Alternância de tema (Dark Mode)
    // ==========================================
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const bodyElement = document.body;

    themeToggleBtn.addEventListener("click", () => {
        bodyElement.classList.toggle("dark-mode");
        
        // Altera o texto do botão consoante o estado atual
        if (bodyElement.classList.contains("dark-mode")) {
            themeToggleBtn.textContent = "Modo Claro";
        } else {
            themeToggleBtn.textContent = "Modo Escuro";
        }
    });

    // ==========================================
    // DESAFIO 2: Carrinho de compras interativo
    // ==========================================
    const buyButtons = document.querySelectorAll(".buy-btn");
    const cartCounter = document.getElementById("cart-counter");
    let itemCount = 0;

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            itemCount++;
            cartCounter.textContent = `Carrinho: ${itemCount}`;
        });
    });

    // ==========================================
    // DESAFIO 3: Validação do formulário de newsletter
    // ==========================================
    const newsletterForm = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("newsletter-email");
    const formMessage = document.getElementById("form-message");

    newsletterForm.addEventListener("submit", (event) => {
        // Impede o recarregamento da página
        event.preventDefault();

        const emailValue = emailInput.value.trim();

        // Limpa mensagens e classes anteriores
        formMessage.textContent = "";
        formMessage.className = "";

        if (emailValue === "") {
            // Se estiver vazio, injeta mensagem de erro a vermelho
            formMessage.textContent = "Por favor, insira um email válido.";
            formMessage.classList.add("error-msg");
        } else {
            // Se preenchido, limpa o campo e apresenta mensagem de sucesso a verde
            formMessage.textContent = "Subscrição efetuada com sucesso!";
            formMessage.classList.add("success-msg");
            emailInput.value = "";
        }
    });
});