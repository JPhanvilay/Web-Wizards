const felixPotion = "https://api.potterdb.com/v1/potions/{8a142b68-bee6-47a5-8e9e-fc4ca5ff01e8}"
const wolfsbanePotion = "https://api.potterdb.com/v1/potions/{7a880071-2c7a-4e51-929f-dafcb1574445}"
const polyjuicePotion = "https://api.potterdb.com/v1/potions/{0b05a35e-fa4b-4112-b1ae-5eec1c7e286b}"
const amortentiaPotion = "https://api.potterdb.com/v1/potions/{3f030145-5573-4ee6-a1ce-911bdc5c458d}"
const veritaserumPotion = "https://api.potterdb.com/v1/potions/{a3c0891b-f1b1-44c4-bbb3-83648c3f075d}"

function potion(){
    fetch(felixPotion)
        .then(function(response){
            return response.json();
        })
        .then(function(potionsObj){
            console.log(potionsObj);
        })
}

potion();


// felix id: 8a142b68-bee6-47a5-8e9e-fc4ca5ff01e8 
// "id":"7a880071-2c7a-4e51-929f-dafcb1574445" wolfsbane potion
//  "id": "0b05a35e-fa4b-4112-b1ae-5eec1c7e286b", polyjuice potion
// "id": "3f030145-5573-4ee6-a1ce-911bdc5c458d" amortentia
// "id": "a3c0891b-f1b1-44c4-bbb3-83648c3f075d", Veritaserum
