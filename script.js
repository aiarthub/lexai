document.getElementById("lexicaFrame").onload = function() {
    let frame = document.getElementById("lexicaFrame").contentWindow;
    
    try {
        let script = frame.document.createElement("script");
        script.innerHTML = `
            setTimeout(() => {
                document.querySelector('header')?.remove();
                document.querySelector('footer')?.remove();
                document.querySelector('[class*="top"]')?.remove();
                document.querySelector('[class*="bottom"]')?.remove();
                document.querySelector('button:has-text("Copy URL")')?.remove();
                document.querySelector('button:has-text("Open in editor")')?.remove();
            }, 3000);
        `;
        frame.document.body.appendChild(script);
    } catch (e) {
        console.log("Failed to inject script");
    }
};
