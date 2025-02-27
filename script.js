document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("lexicaFrame");

    iframe.onload = function () {
        setTimeout(() => {
            try {
                let frameDoc = iframe.contentWindow.document;

                // Remove unwanted elements
                let css = `
                    header, footer, [class*="top"], [class*="bottom"], 
                    button:has-text("Copy URL"), button:has-text("Open in editor") {
                        display: none !important;
                    }
                `;

                let style = frameDoc.createElement("style");
                style.innerHTML = css;
                frameDoc.head.appendChild(style);

                console.log("Elements hidden successfully.");
            } catch (e) {
                console.log("Could not access iframe content. Lexica may have restrictions.");
            }
        }, 3000); // Wait 3 seconds to ensure everything loads first
    };
});
