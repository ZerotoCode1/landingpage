document.addEventListener('DOMContentLoaded', function () {
    fetch('./components/Footer/footer.html') // Đường dẫn đến file header
        .then(response => response.text()) // Đọc nội dung file
        .then(data => {
            document.getElementById('footer').innerHTML = data; // Chèn vào div#header
        })
        .catch(error => console.error('Error loading header:', error));
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('./components/FeedBack/FeedBack.html') // Đường dẫn đến file header
        .then(response => response.text()) // Đọc nội dung file
        .then(data => {
            document.getElementById('feedback-link').innerHTML = data; // Chèn vào div#header
        })
        .catch(error => console.error('Error loading header:', error));
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('./components/OverviewWarwithAmerican/overviewWarwithAmerican.html') // Đường dẫn đến file header
        .then(response => response.text()) // Đọc nội dung file
        .then(data => {
            document.getElementById('overview-war-width-american').innerHTML = data; // Chèn vào div#header
        })
        .catch(error => console.error('Error loading header:', error));
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('./components/Header/header.html') // Đường dẫn đến file header
        .then(response => response.text()) // Đọc nội dung file
        .then(data => {
            document.getElementById('header').innerHTML = data; // Chèn vào div#header
        })
        .catch(error => console.error('Error loading header:', error));
});

