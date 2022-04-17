# Javascript alert
[![forthebadge](https://img.shields.io/github/languages/code-size/ThomasBernard03/AlertJs)](https://github.com/ThomasBernard03/AlertJs)


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

### Autres

Il y a **deux type de résultats** pour cette méthode, HttpResult et HttpResult<T>. HttpResult est construit de la manière suivante :
  
```C#
    public class HttpResult
    {
        public string ErrorMessage { get; set; }
        public HttpStatusCode Status { get; set; }
        public HttpRequestMessage RequestMessage { get; set; }
    }
```

HttpResult<T> hérite de cette classe et possède uniquement une propriété en plus : Content
  
```C#
    public class HttpResult<T>
    {
        public string ErrorMessage { get; set; }
        public HttpStatusCode Status { get; set; }
        public HttpRequestMessage RequestMessage { get; set; }
        public T Content { get; set; }
    }
```

Dans ErrorMessage, on retrouvera le message de l'erreur qui aura été levée en cas de problème. Status contient le status http (404 NotFound...) et RequestMessage contiendra toutes les informations concerant notre requète. Si nous utilisons HttpResult<T> alors le résultat JSON de la requète sera stocké dans Content.
