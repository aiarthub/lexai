document.getElementById("lexicaFrame").onload = function() {
    let frame = document.getElementById("lexicaFrame").contentWindow;
    
    try {
        let script = document.createElement("script");
        script.innerHTML = `console.log("Lexica Script Injected Successfully!");`;
        frame.document.body.appendChild(script);
    } catch (e) {
        console.log("Failed to inject script:", e);
    }
};
