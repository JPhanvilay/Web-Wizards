

fetch("https://api.potterdb.com/v1/spells")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
    const spell = data[i].data.attribute.incantation;
    console.log(spell);
  }
});


  