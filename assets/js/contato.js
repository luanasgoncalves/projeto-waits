    document.addEventListener("DOMContentLoaded", () => {

        const input = document.querySelector("#telefone");

        const iti = window.intlTelInput(input, {
            initialCountry: "br",
            preferredCountries: ["br", "pt", "us"],
            separateDialCode: true
        });
        
        input.addEventListener("keydown", function (e) {

            const teclasPermitidas = [
                "Backspace",
                "Delete",
                "ArrowLeft",
                "ArrowRight",
                "Tab",
                "Home",
                "End"
            ];

            if (
                teclasPermitidas.includes(e.key) ||
                /^\d$/.test(e.key)
            ) {
                return;
            }

            e.preventDefault();
        });
        input.addEventListener("input", function () {
            this.value = this.value.replace(/\D/g, "");
        });

        document.getElementById("formulario")
            .addEventListener("submit", function (e) {
                /*
                if (!iti.isValidNumber()) {
                    e.preventDefault();
                    alert("Digite um telefone válido.");
                    return;
                }
                */
                alert("Formulário enviado com sucesso!");
            });

    });
