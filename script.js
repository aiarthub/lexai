document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("lexicaFrame");

    iframe.onload = function () {
        try {
            let frameDoc = iframe.contentWindow.document;

            let hideElements = () => {
                let elementsToHide = [
                    "header", "footer",
                    '[class*="top"]', '[class*="bottom"]',
                    'button:has-text("Copy URL")',
                    'button:has-text("Open in editor")'
                ];
                
                elementsToHide.forEach(selector => {
                    let elements = frameDoc.querySelectorAll(selector);
                    elements.forEach(el => el.remove());
                });
            };

            setTimeout(hideElements, 3000);
        } catch (e) {
            console.log("Failed to access iframe content. Trying alternative methods...");
        }
    };
});
