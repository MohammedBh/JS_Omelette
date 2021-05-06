import { Ingredients } from "./class.js";

//------------ CREATION INGREDIENTS ------------//
let oignon = new Ingredients("oignon", "coupé", 9);
let oeuf = new Ingredients("oeuf", "entier", 5);
let epice = new Ingredients("epice", "moulu", 2);
let fromage = new Ingredients("fromage", "entier", 7);

//------------ CREATION PERSONNE ------------//
export let personne = {
    nom: "Moha",
    lieu: "Maison",
    argent: 50,
    mainDroite: [],
    mainGauche: [],
    seDeplacer(nom) {
        this.lieu=nom;
        console.log(`${personne.nom} se deplace vers ${nom}`);
    },
    payerArticle(ingredient) {
        personne.argent -= ingredient.prix
    },
    couper (outil){
        bol.contenu.forEach(element => {
            if (element.etat == "entier" ) {
                element.etat = outil.action
            }
        });
    }
}

//------------ CREATION MAISON ------------//
export let maison = {
    nom: "maison",
    personne: []
}

//------------ CREATION OUTIL ------------//
export let outil = {
    nom: "couteau",
    action: "coupé"
}

//------------ CREATION EPICERIE ------------//
export let epicerie = {
    nom: "epicerie",
    personnes: [],
    paniers: [
        {
            type: "panier",
            contenu: []
        },
        {
            type: "panier",
            contenu: []
        }
    ],
        ingredients : [oignon, oeuf, epice, fromage]
    }

//------------ CREATION POELE ------------//
export let poele ={
    contenu: [],
    cuire() {
        setTimeout(()=> {
            this.contenu[0].etat = "cuite";
            console.log(`Notre omelette est ${this.contenu[0].etat}`);
        }, 4000)
    }
}

//------------ CREATION BOL ------------//
export let bol = {
    contenu: [],
    melanger(nomMelange) {
        let newMelange = {
            nom: nomMelange,
            etat: "pas cuit"
        }
        this.contenu.splice(0,4, newMelange)
    }
}