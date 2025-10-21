document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoPage = this.getAttribute('data-video');
            window.location.href = videoPage;
        });
    });
});