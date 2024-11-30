const dataBattles = [
    {
        title: "Battle of Hoa Binh (1952) ",
        description: "An important battle prior to Dien Bien Phu, taking place in Hoa Binh Province. The Viet Minh employed various tactics to defeat the French forces.",
        image: './assets/battleshoabinh.png',
        date: '(1890 - 1969)'
    },
    {
        title: "Battle of Dien Bien Phu (1954) ",
        description: "A decisive battle in the resistance against the French. The Viet Minh army, led by General Vo Nguyen Giap, besieged and defeated the French forces, leading to the collapse of French colonial rule in Indochina.",
        image: './assets/battlesdbp.png',
        date: '(1911 - 2013)'


    },
    {
        title: "Tet Offensive (1968)",
        description: "A massive surprise attack on major cities and military bases of the U.S. and South Vietnamese forces during the Lunar New Year (Tet). This was one of the largest military campaigns of the war.",
        image: './assets/tesofensive.png',
        date: '(1914 - 2007)'


    },
    {
        title: "Battle of Khe Sanh (1968)",
        description: "A 77-day battle at the Khe Sanh base, where U.S. forces attempted to defend the base against North Vietnamese troops.y",
        image: './assets/battleskhesanh.png',
        date: '(1927 - 1997) '

    },

];

const cardBattles = document.getElementById("card-battles");

// Hàm fetch component HTML
async function fetchComponent(url) {
    const response = await fetch(url);
    return response.ok ? response.text() : '';
}

// Render components
async function renderComponents() {
    const template = await fetchComponent('./components/CardBattles/cardBattles.html');
    if (!template) return;

    dataBattles.forEach(item => {
        // Tạo một phần tử DOM từ template HTML
        const templateElement = document.createElement('div');
        templateElement.innerHTML = template;  // Chuyển đổi template string thành DOM

        // Thay đổi nội dung trong các thẻ có class 'title-historycal' và 'description-historycal'
        const titleElement = templateElement.getElementsByClassName('title-battless')[0];
        const descriptionElement = templateElement.getElementsByClassName('description-battles')[0];

        const imageElement = templateElement.getElementsByClassName('image-battless')[0];

        if (titleElement) titleElement.textContent = item.title;
        if (descriptionElement) descriptionElement.textContent = item.description;
        if (imageElement) imageElement.src = item.image;

        // Thêm phần tử đã chỉnh sửa vào #app
        cardBattles.appendChild(templateElement.firstElementChild);
    });
}
const overviewWarFrench = document.getElementById("overview-war-width-french");

const dataBattlesFrench = [
    {
        title: "Battle of Hoa Binh (1952) ",
        description: "An important battle prior to Dien Bien Phu, taking place in Hoa Binh Province. The Viet Minh employed various tactics to defeat the French forces.",
        image: './assets/decrationwar.png',
        date: '(1890 - 1969)'
    },
    {
        title: "Battle of Dien Bien Phu (1954) ",
        description: "A decisive battle in the resistance against the French. The Viet Minh army, led by General Vo Nguyen Giap, besieged and defeated the French forces, leading to the collapse of French colonial rule in Indochina.",
        image: './assets/keybattles.png',
        date: '(1911 - 2013)'


    },
    {
        title: "Tet Offensive (1968)",
        description: "A massive surprise attack on major cities and military bases of the U.S. and South Vietnamese forces during the Lunar New Year (Tet). This was one of the largest military campaigns of the war.",
        image: './assets/peace.png',
        date: '(1914 - 2007)'


    },
]
async function renderComponentsCardFrench() {
    const template = await fetchComponent('./components/CardBattles/cardBattles.html');
    if (!template) return;

    dataBattlesFrench.forEach(item => {
        // Tạo một phần tử DOM từ template HTML
        const templateElement = document.createElement('div');
        templateElement.innerHTML = template;  // Chuyển đổi template string thành DOM

        // Thay đổi nội dung trong các thẻ có class 'title-historycal' và 'description-historycal'
        const titleElement = templateElement.getElementsByClassName('title-battless')[0];
        const descriptionElement = templateElement.getElementsByClassName('description-battles')[0];

        const imageElement = templateElement.getElementsByClassName('image-battless')[0];

        if (titleElement) titleElement.textContent = item.title;
        if (descriptionElement) descriptionElement.textContent = item.description;
        if (imageElement) imageElement.src = item.image;

        // Thêm phần tử đã chỉnh sửa vào #app
        overviewWarFrench.appendChild(templateElement.firstElementChild);
    });
    const newDiv = document.createElement("div");
    newDiv.className = "div-see-more"; // Thêm class cho thẻ div

    // Tạo thẻ <p>
    const newP = document.createElement("p");

    // Thêm nội dung vào thẻ <p>
    newP.textContent = "...";

    // Thêm thẻ <p> vào thẻ <div>
    newDiv.appendChild(newP);
    overviewWarFrench.appendChild(newDiv);
}

// Gọi hàm render
renderComponentsCardFrench();
renderComponents();