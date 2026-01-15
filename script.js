// Progress bars animeren wanneer de pagina geladen is
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');

        // Kleine vertraging zodat het mooi aankomt
        setTimeout(() => {
            bar.style.width = targetWidth + '%';
        }, 300);
    });
});