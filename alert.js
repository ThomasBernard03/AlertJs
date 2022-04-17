window.alert = function (alert) { // On remplace la fonction alert par notre propre fonction
    // Création de l'arrière plan
    const fond = document.createElement('div');
    with (fond.style) {
        display = "block"; /* De base n'apparait pas */
        position = "fixed";
        backgroundColor = "rgba(0,0,0,.35)";
        width = "100vw";
        height = "100vh";

    }
    fond.id = "dialogoverlay";
    document.body.prepend(fond);

    // Création de l'alert
    var div = document.createElement('div'); // On créé une div
    with (div.style) {
        display = "flex",
            justifyContent = "center",
            flexDirection = "column",
            position = "absolute",
            top = "50%",
            left = "50%",
            transform = "translate(-50%, -50%)",
            borderRadius = "13px",

            width = "270px",
            backgroundColor = alert.backgroundColor,
            fontFamily = "-apple-system, SF UI Text, Helvetica Neue, Helvetica, Arial, sans-serif";
    }

    // Création de la div pour le texte
    var divTxt = document.createElement('div');
    divTxt.style.textAlign = "center";
    divTxt.style.padding = "20px";

    // Création du titre
    const label = document.createElement('label');
    label.style.fontWeight = 500;
    label.style.fontSize = "18px";
    label.innerText = alert.title;

    // Création du texte
    const paragraphe = document.createElement('p');
    paragraphe.innerText = alert.text;
    divTxt.appendChild(label);
    divTxt.appendChild(paragraphe);
    div.appendChild(divTxt) // On ajoute les div dans notre alert


    // Création des boutons
    var divBtn = document.createElement('div');
    alert.buttons.forEach(option => {
        const btn = document.createElement('button');

        with (btn.style) { // On ajoute les différents styles aux boutons
            borderTop = "1px solid #E5E5E5",
                color = option.color,
                height = "44px",
                cursor = "pointer";

            if (alert.buttons.length == 2) // Si il y a 2 btn
            {
                width = "50%"; // Un bouton fera 50%
            }
            else { // Sinon
                width = "100%", // Les boutons feront 100%
                    height = "38px"
            }
        }

        btn.innerText = option.name;
        btn.addEventListener('click', option.action);
        divBtn.appendChild(btn);
    });

    // On gère le hover
    const classe = 'div div:last-child button:hover{background-color: #E5E5E5;}'; // On créé le style
    const style = document.createElement('style'); // On créé la balise style
    style.appendChild(document.createTextNode(classe)); // On ajoute notre style à la balise
    document.querySelector('style').appendChild(style);

    if (divBtn.childNodes.length == 2) {
        with (divBtn) {
            childNodes[0].style.borderBottomLeftRadius = "13px";
            childNodes[1].style.borderBottomRightRadius = "13px";
            childNodes[1].style.borderBottomLeftRadius = "0";
            childNodes[1].style.borderLeft = "1px solid #E5E5E5";
        }

    } else {
        with (divBtn.childNodes[divBtn.childNodes.length - 1].style) {
            borderBottomLeftRadius = "13px";
            borderBottomRightRadius = "13px";
        }
    }

    div.appendChild(divBtn) // On ajoute les div dans notre alert 
    fond.appendChild(div); // On ajoute l'alert dans le fond
};

function enableWindow() {
    var fond = document.querySelector('#dialogoverlay'); // On récupère notre div
    fond.style.display = "none"; // On affiche notre div
}

class Alert {
    constructor(title, text, backgroundColor, buttons) {
        this.title = title;
        this.text = text;
        this.buttons = buttons;
        this.backgroundColor = backgroundColor;
    }
}

class Button {
    constructor(name, color, action) {
        this.name = name;
        this.color = color;
        this.action = action
    }
}
