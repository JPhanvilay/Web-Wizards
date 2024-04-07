function potion1(){
    fetch("https://api.potterdb.com/v1/potions/felix-felicis")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        } 
        return response.json();
    })
    .then(function (response){
        let data = response.data;
        const potionNameEl = document.getElementById("potionName1");
        potionNameEl.textContent = data.attributes.name;
        const imgEl = document.getElementById("imagePotion1");
        imgEl.setAttribute("src", data.attributes.image);
        const descriptionEl = document.getElementById("description1");
        descriptionEl.textContent = `Effect: ${data.attributes.effect}`;
        const linkEl = document.getElementById("link1");
        linkEl.setAttribute("href", data.attributes.wiki);
    });
}

function potion2(){
    fetch("https://api.potterdb.com/v1/potions/wound-cleaning-potion")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        } 
        return response.json();
    })
    .then(function (response){
        let data = response.data;
        const potionNameEl = document.getElementById("potionName2");
        potionNameEl.textContent = data.attributes.name;
        const imgEl = document.getElementById("imagePotion2");
        imgEl.setAttribute("src", data.attributes.image);
        const descriptionEl = document.getElementById("description2")
        descriptionEl.textContent = `Effect: ${data.attributes.effect}`;
        const linkEl = document.getElementById("link2");
        linkEl.setAttribute("href", data.attributes.wiki);
    });
}

function potion3(){
    fetch("https://api.potterdb.com/v1/potions/polyjuice-potion")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        } 
        return response.json();
    })
    .then(function (response){
        let data = response.data;
        const potionNameEl = document.getElementById("potionName3");
        potionNameEl.textContent = data.attributes.name;
        const imgEl = document.getElementById("imagePotion3");
        imgEl.setAttribute("src", data.attributes.image);
        const descriptionEl = document.getElementById("description3")
        descriptionEl.textContent = `Effect: ${data.attributes.effect}`;
        const linkEl = document.getElementById("link3");
        linkEl.setAttribute("href", data.attributes.wiki);
    });
}

function potion4(){
    fetch("https://api.potterdb.com/v1/potions/amortentia")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        } 
        return response.json();
    })
    .then(function (response){
        let data = response.data;
        const potionNameEl = document.getElementById("potionName4");
        potionNameEl.textContent = data.attributes.name;
        const imgEl = document.getElementById("imagePotion4");
        imgEl.setAttribute("src", data.attributes.image);
        const descriptionEl = document.getElementById("description4")
        descriptionEl.textContent = `Effect: ${data.attributes.effect}`;
        const linkEl = document.getElementById("link4");
        linkEl.setAttribute("href", data.attributes.wiki);
    });
}

function potion5(){
    fetch("https://api.potterdb.com/v1/potions/veritaserum")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        } 
        return response.json();
    })
    .then(function (response){
        let data = response.data;
        const potionNameEl = document.getElementById("potionName5");
        potionNameEl.textContent = data.attributes.name;
        const imgEl = document.getElementById("imagePotion5");
        imgEl.setAttribute("src", data.attributes.image);
        const descriptionEl = document.getElementById("description5")
        descriptionEl.textContent = `Effect: ${data.attributes.effect}`;
        const linkEl = document.getElementById("link5");
        linkEl.setAttribute("href", data.attributes.wiki);
    });
}

function potion6(){
    fetch("https://api.potterdb.com/v1/potions/draught-of-living-death")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        } 
        return response.json();
    })
    .then(function (response){
        let data = response.data;
        const potionNameEl = document.getElementById("potionName6");
        potionNameEl.textContent = data.attributes.name;
        const imgEl = document.getElementById("imagePotion6");
        imgEl.setAttribute("src", data.attributes.image);
        const descriptionEl = document.getElementById("description6")
        descriptionEl.textContent = `Effect: ${data.attributes.effect}`;
        const linkEl = document.getElementById("link6");
        linkEl.setAttribute("href", data.attributes.wiki);
    });
}

potion1();
potion2();
potion3();
potion4();
potion5();
potion6();

