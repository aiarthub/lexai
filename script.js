function hideElements() {
    let elementsToRemove = [
        "header",
        "footer",
        "[class*=top]",
        "h1",
        'button:has-text("Generate")',
        '[href="/aperture"]',
        'a[href="/"]',
        ".absolute.right-2.bottom-2 > button",
        ".flex.space-x-2.px-2 > button",
        "div:has(button:has-text('Copy URL'))",
        "div:has(button:has-text('Copy prompt'))"
    ];

    elementsToRemove.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });
}

// Try hiding elements every 3 seconds in case they load dynamically
setInterval(hideElements, 3000);
