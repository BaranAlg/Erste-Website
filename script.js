// JavaScript-Funktionalität
        const button1 = document.getElementById("button1");
        const button2 = document.getElementById("button2");
        const button3 = document.getElementById("button3");
        const output = document.getElementById("output");

        button1.addEventListener("click", () => {
            output.innerHTML = "Du hast Button 1 geklickt. Du wirst zur ersten Website weitergeleitet.";
        });

        button2.addEventListener("click", () => {
            output.innerHTML = "Button 2 wurde geklickt. Du wirst zur zweiten Website weitergeleitet.";
        });

        button3.addEventListener("click", () => {
            output.innerHTML = "Button 3 wurde ausgewählt. Du wirst zur dritten Website weitergeleitet.";
        });
