document.addEventListener('DOMContentLoaded', function () {
    fetch('../../components/Footer/footer.html') // Đường dẫn đến file header
        .then(response => response.text()) // Đọc nội dung file
        .then(data => {
            document.getElementById('footer').innerHTML = data; // Chèn vào div#header
        })
        .catch(error => console.error('Error loading header:', error));
});