const data = [
    {
        title: "Ho Chi Minh  ",
        description: "The great leader of the Vietnamese nation",
        image: './assets/hcm.png',
        date: '(1890 - 1969)'
    },
    {
        title: "General Vo Nguyen Giap  ", description: "Commander-in-Chief of the Vietnam People's Army",
        image: './assets/VNG.png',
        date: '(1911 - 2013)'


    },
    {
        title: "General Le Trong Tan  ", description: "One of the senior commanders of the Vietnam People's Army.",
        image: './assets/NTT.png',
        date: '(1914 - 2007)'


    },
    {
        title: "Nguyen Thi Dinh ", description: "The first female general of the Vietnam People's Army",
        image: './assets/NTD.png',
        date: '(1927 - 1997) '

    },

];

const app = document.getElementById("card-container");

// Hàm fetch component HTML
async function fetchComponent(url) {
    const response = await fetch(url);
    return response.ok ? response.text() : '';
}

// Render components
async function renderComponents() {
    const template = await fetchComponent('./components/HistoryFigures/historyFiguresCard.html');
    if (!template) return;

    data.forEach(item => {
        // Tạo một phần tử DOM từ template HTML
        const templateElement = document.createElement('div');
        templateElement.innerHTML = template;  // Chuyển đổi template string thành DOM

        // Thay đổi nội dung trong các thẻ có class 'title-historycal' và 'description-historycal'
        const titleElement = templateElement.getElementsByClassName('title-historycal')[0];
        const descriptionElement = templateElement.getElementsByClassName('description-historycal')[0];
        const dateHuman = templateElement.getElementsByClassName('date-human')[0];

        const imageElement = templateElement.getElementsByClassName('image-historycal')[0];

        if (titleElement) titleElement.textContent = item.title;
        if (descriptionElement) descriptionElement.textContent = item.description;
        if (dateHuman) dateHuman.textContent = item.date
        if (imageElement) imageElement.src = item.image;

        // Thêm phần tử đã chỉnh sửa vào #app
        app.appendChild(templateElement.firstElementChild);
    });
}

// Gọi hàm render
renderComponents();