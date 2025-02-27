document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("lexicaFrame");

    iframe.onload = function () {
        setTimeout(() => {
            try {
                let frameDoc = iframe.contentWindow.document;

                // Remove elements using JavaScript
                [
                    "header",
                    "footer",
                    "[class*=top]",
                    "h1",
                    'button:has-text("Generate")',
                    '[href="/aperture"]',
                    'a[href="/"]',
                    ".absolute.right-2.bottom-2 > button",
                    ".flex.space-x-2.px-2 > button",
                    'div:has(button:has-text("Copy URL"))',
                    'div:has(button:has-text("Copy prompt"))'
                ].forEach(selector => {
                    let elements = frameDoc.querySelectorAll(selector);
                    elements.forEach(el => el.remove());
                });

                console.log("Elements removed successfully!");
            } catch (e) {
                console.log("Failed to remove elements. Lexica might be blocking access.");
            }
        }, 3000); // Give time for page to fully load
    };
});
