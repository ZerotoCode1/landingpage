const dataBattles = [
    {
        title: "BATTLE OF HOA BINH ",
        description: "An important battle prior to Dien Bien Phu, taking place in Hoa Binh Province. The Viet Minh employed various tactics to defeat the French forces.",
        image: '../../assets/l1.png',
        date: '1952',
    },
    {
        title: "BATTLE OF DIEN BIEN PHU",
        description: "A decisive battle in the resistance against the French. The Viet Minh army, led by General Vo Nguyen Giap, besieged and defeated the French forces, leading to the collapse of French colonial rule in Indochina.",
        image: '../../assets/l2.png',

        date: '1954'


    },
    {
        title: "TET OFFENSIVE",
        description: "A massive surprise attack on major cities and military bases of the U.S. and South Vietnamese forces during the Lunar New Year (Tet). This was one of the largest military campaigns of the war.",
        image: '../../assets/l3.png',

        date: '1968'


    },
    {
        title: "BATTLE OF KHE SANH",
        description: "A 77-day battle at the Khe Sanh base, where U.S. forces attempted to defend the base against North Vietnamese troops.",
        image: '../../assets/l4.png',

        date: '1968'

    },
    {
        title: "BATTLE OF TAY NGUYEN",
        description: "Taking place from March to April 1975, this campaign was part of a broader plan to attack the South, focusing on capturing the Central Highlands region.",
        image: '../../assets/l5.png',

        date: '1975'

    },
    {
        title: "HO CHI MINH BATTLE",
        description: "The Ho Chi Minh Campaign, launched in April 1975, was a decisive offensive by North Vietnamese forces to liberate South Vietnam. It involved rapid assaults on major cities, culminating in the fall of Saigon on April 30, 1975. This victory marked the end of the Vietnam War and led to the reunification of Vietnam under communist control.",
        image: '../../assets/l6.png',

        date: '1975'

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
    const template = await fetchComponent('../../components/CardBattles/cardBattles.html');
    console.log(template, 'ửewrưểwr')
    if (!template) return;
    dataBattles.forEach(item => {
        // Tạo một phần tử DOM từ template HTML
        const templateElement = document.createElement('div');
        templateElement.innerHTML = template;  // Chuyển đổi template string thành DOM

        // Thay đổi nội dung trong các thẻ có class 'title-historycal' và 'description-historycal'
        const titleElement = templateElement.getElementsByClassName('title-battless')[0];
        const descriptionElement = templateElement.getElementsByClassName('description-battles')[0];

        const imageElement = templateElement.getElementsByClassName('image-battless')[0];
        const spanElement = document.createElement('span');
        spanElement.textContent = `${item.date} `;

        const linkElement = document.createElement('span');
        // linkElement.href = item.url; // Đặt href bất kỳ
        linkElement.textContent = item.title;
        if (titleElement) {
            titleElement.textContent = ""

            titleElement.appendChild(spanElement);
            // titleElement.appendChild(document.createTextNode(item.title));
            titleElement.appendChild(linkElement);

        }
        if (descriptionElement) descriptionElement.textContent = item.description;
        if (imageElement) imageElement.src = item.image;

        // Thêm phần tử đã chỉnh sửa vào #app
        cardBattles.appendChild(templateElement.firstElementChild);
    });
}
renderComponents()