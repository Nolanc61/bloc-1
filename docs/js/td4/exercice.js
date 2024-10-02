// change le background color en vert
 const btgreen = document.getElementById('btgreen');
 btgreen.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'green';
 });

// change le background color en bleu
 const btblue = document.getElementById('btblue');
 btblue.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'blue';
 });

// change le background color en jaune
 const btyellow = document.getElementById('btyellow');
 btyellow.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'yellow';
 });

// change le background color en rouge
 const btred = document.getElementById('btred');
 btred.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'red';
 });

 // reset le background color
 const btreset = document.getElementById('btreset');
 btreset.addEventListener('click', ()=>{
    document.body.style.backgroundColor = '';
 });

 // ajouter un élément avec un bouton sous forme de liste
const btajout = document.getElementById('btajout');
btajout.addEventListener('click', ()=>{
    const texte = document.getElementById('text').value;
    if (texte !== ''){
        const li = document.createElement('li');
        li.innerText = texte;
        list.appendChild(li);
    }
})

// addition de deux nombres
const addition = document.getElementById('addition')
addition.addEventListener('click', ()=>{
    const nb1 = document.getElementById('nb1').value;
    const nb2 = document.getElementById('nb2').value;
    const somme = document.getElementById('somme');
    if (nb1 !== '' && nb2 !== ''){
        somme.value = parseInt(nb1) + parseInt(nb2);
    };
})

// afficher une image en fonction de la sélection
const menuDeroulant = document.getElementById('menu_deroulant');
const carImage = document.getElementById('car-image');
menuDeroulant.addEventListener('change', function() {
   const selectedValue = this.value;
      if (selectedValue === "f40") {
            carImage.src = "../../assets/images/td4/f40.avif";
            carImage.style.display = "block";
      } else if (selectedValue === "gt3rs") {
            carImage.src = "../../assets/images/td4/gt3rs.avif";
            carImage.style.display = "block";
      } else if (selectedValue === "jesko") {
            carImage.src = "../../assets/images/td4/jesko.webp";
            carImage.style.display = "block";
      } else {
            carImage.style.display = "none";
      }
});