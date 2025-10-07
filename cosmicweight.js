const planets = [
    { name: "Mercury", gravity: 3.7, image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg"},
    { name: "Venus", gravity: 8.87, image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"},
    { name: "Earth", gravity: 9.81, image: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"},
    { name: "Moon", gravity: 1.62, image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"},
    { name: "Mars", gravity: 3.71, image: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"},
    { name: "Jupiter", gravity: 24.79, image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg"},
    { name: "Saturn", gravity: 10.44, image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg"},
    { name: "Uranus", gravity: 8.69, image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"},
    { name: "Neptune", gravity: 11.15, image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"},
    { name: "Pluto", gravity: 0.62, image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg"}
  ];
  
  function calculateWeight() {
    const weightInput = document.getElementById("weight").value;
    const resultDiv = document.getElementById("result");
  
    if (weightInput === "" || weightInput <= 0) {
      resultDiv.innerHTML = `<p>Please enter a valid weight.</p>`;
      resultDiv.classList.remove("result-show");
      return;
    }
  
    const earthGravity = 9.81;
    const userWeight = parseFloat(weightInput);
  
    let resultHTML = `<h3>Your Weight on Different Celestial Bodies:</h3><ul>`;
  
    planets.forEach(planet => {
      const planetWeight = (userWeight * planet.gravity / earthGravity).toFixed(2);
      resultHTML += `
        <li>
          <img src="${planet.image}" alt="${planet.name}" class="planet-img">
          <strong>${planet.name}:</strong> ${planetWeight} kg
        </li>
      `;
    });
  
    resultHTML += `</ul>`;
    resultDiv.innerHTML = resultHTML;
  
    setTimeout(() => {
      resultDiv.classList.add("result-show");
    }, 50);
  }

  
  