fetch('https://api.potterdb.com/v1/potions/felix-felicis')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const images = document.createElement("img")
    images.src=data.data.attributes.image
    document.body.appendChild(images)
    const potions = document.createElement("p")
    potions.textContent=data.data.attributes.ingredients
    document.body.appendChild(potions)
    const characteristics = document.createElement("characteristics")
    characteristics.textContent=data.data.attributes.characteristics
    document.body.appendChild(characteristics)
    const inventors = document.createElement("inventors")
    inventors.textContent=data.data.attributes.inventors
    document.body.appendChild(inventors)
    console.log(data.data.attributes.image);
    console.log(data.data.attributes.ingredients)
    console.log(data.data.attributes.characteristics)
    console.log(data.data.attributes.inventors)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  fetch('https://api.potterdb.com/v1/potions/beautification-potion')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const images = document.createElement("img")
    images.src=data.data.attributes.image
    document.body.appendChild(images)
    const potions = document.createElement("p")
    potions.textContent=data.data.attributes.ingredients
    document.body.appendChild(potions)
    const characteristics = document.createElement("characteristics")
    characteristics.textContent=data.data.attributes.characteristics
    document.body.appendChild(characteristics)
    const inventors = document.createElement("inventors")
    inventors.textContent=data.data.attributes.inventors
    document.body.appendChild(inventors)
    console.log(data.data.attributes.image);
    console.log(data.data.attributes.ingredients)
    console.log(data.data.attributes.characteristics)
    console.log(data.data.attributes.inventors)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  fetch('https://api.potterdb.com/v1/potions/veritaserum')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const images = document.createElement("img")
    images.src=data.data.attributes.image
    document.body.appendChild(images)
    const potions = document.createElement("p")
    potions.textContent=data.data.attributes.ingredients
    document.body.appendChild(potions)
    const characteristics = document.createElement("characteristics")
    characteristics.textContent=data.data.attributes.characteristics
    document.body.appendChild(characteristics)
    const inventors = document.createElement("inventors")
    inventors.textContent=data.data.attributes.inventors
    document.body.appendChild(inventors)
    console.log(data.data.attributes.image);
    console.log(data.data.attributes.ingredients)
    console.log(data.data.attributes.characteristics)
    console.log(data.data.attributes.inventors)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  fetch('https://api.potterdb.com/v1/potions/skele-gro')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const images = document.createElement("img")
    images.src=data.data.attributes.image
    document.body.appendChild(images)
    const potions = document.createElement("p")
    potions.textContent=data.data.attributes.ingredients
    document.body.appendChild(potions)
    const characteristics = document.createElement("characteristics")
    characteristics.textContent=data.data.attributes.characteristics
    document.body.appendChild(characteristics)
    const inventors = document.createElement("inventors")
    inventors.textContent=data.data.attributes.inventors
    document.body.appendChild(inventors)
    console.log(data.data.attributes.image);
    console.log(data.data.attributes.ingredients)
    console.log(data.data.attributes.characteristics)
    console.log(data.data.attributes.inventors)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  fetch('https://api.potterdb.com/v1/potions/polyjuice-potion')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const images = document.createElement("img")
    images.src=data.data.attributes.image
    document.body.appendChild(images)
    const potions = document.createElement("p")
    potions.textContent=data.data.attributes.ingredients
    document.body.appendChild(potions)
    const characteristics = document.createElement("characteristics")
    characteristics.textContent=data.data.attributes.characteristics
    document.body.appendChild(characteristics)
    const inventors = document.createElement("inventors")
    inventors.textContent=data.data.attributes.inventors
    document.body.appendChild(inventors)
    console.log(data.data.attributes.image);
    console.log(data.data.attributes.ingredients)
    console.log(data.data.attributes.characteristics)
    console.log(data.data.attributes.inventors)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
