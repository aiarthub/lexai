document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("lexicaFrame");

    iframe.onload = function () {
        setTimeout(() => {
            try {
                let frameDoc = iframe.contentWindow.document;

                // Inject JavaScript to remove unwanted elements
                let script = frameDoc.createElement("script");
                script.innerHTML = `
                    setTimeout(() => {
                        document.querySelector('header')?.remove();
                        document.querySelector('footer')?.remove();
                        document.querySelector('[class*="top"]')?.remove();
                        document.querySelector('h1')?.remove();
                        document.querySelector('button:has-text("Generate")')?.remove();
                        document.querySelector('[href="/aperture"]')?.remove();
                        document.querySelector('a[href="/"]')?.remove();
                        document.querySelector('.absolute.right-2.bottom-2 > button')?.remove();
                        document.querySelector('.flex.space-x-2.px-2 > button')?.remove();
                        document.querySelector('div:has(button:has-text("Copy URL"))')?.remove();
                        document.querySelector('div:has(button:has-text("Copy prompt"))')?.remove();
                    }, 2000);
                `;

                frameDoc.body.appendChild(script);
            } catch (e) {
                console.log("Lexica blocked the script injection.");
            }
        }, 2000);
    };
});
