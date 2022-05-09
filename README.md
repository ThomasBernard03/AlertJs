# Javascript alert
[![forthebadge](https://img.shields.io/github/languages/code-size/ThomasBernard03/AlertJs)](https://github.com/ThomasBernard03/AlertJs)
![Cirrus CI - Base Branch Build Status](https://img.shields.io/cirrus/github/ThomasBernard03/AlertJs)


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

## Pour commencer

Ce projet à été mis en place afin de créer des composants javascript natifs. Vous pouvez tester des exemples d'alerts en cliquant sur ce lien : https://thomasbernard03.github.io/AlertJs/


## Design

Le principe de ce repository est de proposer une solution personnalisable et réutilisable. Vous pouvez alors très facilement customiser votre popup. Vous pouvez personnaliser :
  - Le titre
  - Le message
  - La couleur de fond
  - Le nombre de boutons
  - Le texte de chaque boutons
  - La couleur de texte de chaque boutons
  - L'action déclenchée par le clic de chaque boutons

### Utilisation

Pour pouvoir créer un composant personnalisable j'ai alors créé 2 classes qui nous permettent de créer notre pop up
```JS
class Alert {
    constructor(title, text, backgroundColor, buttons) {
        this.title = title;
        this.text = text;
        this.buttons = buttons;
        this.backgroundColor = backgroundColor;
    }
}
```

Title est le titre qui sera affiché en haut de la popup, c'est une chaine de charactères. Text est le contenu du message de la popup, il est lui aussi sous chaine de charactère. BackgroundColor est la couleur de la pop up, on saisi alors la couleur sous forme de chaine (ex: "red", "yellow", "green"). Buttons finnalement est un tableau d'objets buttons.

```JS
class Button {
    constructor(name, color, action) {
        this.name = name;
        this.color = color;
        this.action = action
    }
}
```
Pour personnaliser les différents boutons, on utilise la classe Button. On peut alors choisir le texte du bouton, la couleur de ce texte et enfin l'action qu'il va appeler.

![image](https://user-images.githubusercontent.com/67638928/163709577-556b63d7-79ee-4a8a-9a18-029913c1f843.png)

Pour créer cette popup on a juste à appeller la méthode alert comme ceci :

```JS
const cancelButton = new Button("Cancel", "red", enableWindow); // If click close the pop up
const confirmButton = new Button("Confirm", "green", buttonClicked); // If click close the pop up

var text = "This is a native js alert with two buttons";
const alerte = new Alert("Javascript alert", text, "white", [cancelButton, confirmButton]);

new window.alert(alerte);

```
