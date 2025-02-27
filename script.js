document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("lexicaFrame");

    iframe.onload = function () {
        setTimeout(() => {
            try {
                let frameDoc = iframe.contentWindow.document;

                // Create a CSS style block for element hiding
                let css = `
                    header, footer, [class*="top"],
                    h1, button:has-text("Generate"),
                    [href="/aperture"], a[href="/"],
                    .absolute.right-2.bottom-2 > button,
                    .flex.space-x-2.px-2 > button,
                    div:has(button:has-text("Copy URL")),
                    div:has(button:has-text("Copy prompt")) {
                        display: none !important;
                    }
                `;

                let style = frameDoc.createElement("style");
                style.innerHTML = css;
                frameDoc.head.appendChild(style);

                console.log("Branding & unwanted elements hidden successfully.");
            } catch (e) {
                console.log("Could not modify iframe content. Lexica might have security restrictions.");
            }
        }, 3000); // Ensures page fully loads before hiding elements
    };
});
