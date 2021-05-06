import { Ingredients } from "./modules/class.js";
import { personne, maison, outil, epicerie, poele, bol  } from "./modules/objet.js";

//-------------------- DEBUT DE L'OMELETTE --------------------//

// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);
personne.seDeplacer(maison.nom);
console.log(`${personne.nom} est actuellement à la ${personne.lieu}`);

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie
// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);
personne.seDeplacer(epicerie.nom);
console.log(`${personne.nom} est actuellement à l'${personne.lieu}`);

// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)
console.log(epicerie.paniers);
personne.mainDroite.push(epicerie.paniers[0]);
console.log(`${personne.nom} a pris un ${epicerie.paniers[0].type}`);

// console.log(`${personnage.nom} a pris un ${type du panier}`);
epicerie.paniers.pop();
console.log(epicerie.paniers);

//-----BOUCLE-----//
epicerie.ingredients.forEach(element => {
    personne.mainDroite[0].contenu.push(element);
    console.log(`Vous avez pris l'ingrédient: ${element.nom} au prix de ${element.prix}€`);
    personne.argent - element.prix
    console.log(personne.mainDroite[0].contenu);
});

// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
personne.mainDroite[0].contenu.forEach(element => {
    personne.payerArticle(element)});

// Afficher un message de ce qu'il reste d'argent sur le personnage.
console.log(`Il reste ${personne.argent}€.`);

// rentrer à la maison (comme ça on pourra cuisiner)
personne.seDeplacer(maison.nom);

// Mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)
personne.mainDroite[0].contenu.forEach(element => {
    bol.contenu.push(element);
});

// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)
personne.mainDroite[0].contenu = [];
console.log(personne.mainDroite[0].contenu);

// Afficher un petit message de chaque ingrédient qu'on met dans le bol.
console.log(bol.contenu);

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
// Afficher un petit message
personne.seDeplacer(epicerie.nom);
epicerie.paniers.push(personne.mainDroite[0]);
personne.mainDroite.pop();
console.log(personne.mainDroite);
console.log(epicerie.paniers);

// Retourner à la maison pour continuer l'omelette
// Afficher un petit message
personne.seDeplacer(maison.nom);

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage
personne.couper(outil);

// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).
// Afficher un message avec le nouveau mélange
bol.melanger("omelette");
console.log(`On melange et on obtient l'${bol.contenu[0].nom}`);

// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.
poele.contenu.push(bol.contenu[0]);
bol.contenu = [];

// Cuire l'omelette avec la méthode de la poele
// Afficher un message final, notre omelette est cuite :)
poele.cuire();