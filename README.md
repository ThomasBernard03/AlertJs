# Javascript alert
[![forthebadge](https://img.shields.io/github/languages/code-size/ThomasBernard03/AlertJs)](https://github.com/ThomasBernard03/AlertJs)


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge]([![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com))](https://forthebadge.com)

## Pour commencer

Ce projet à été mis en place afin de créer des composants javascript natifs. Vous pouvez tester des exemples d'alerts en cliquant sur ce lien : https://thomasbernard03.github.io/AlertJs/


## Design

Dans la plupart de nos projets nous avons besoin de réaliser différents call Http, généralement pour communiquer avec des API. Ce service permet de réaliser facilement cette tâche. HttpService ne contient qu'une seule méthode SendHttpRequest. Cette méthode prend plusieurs paramètres :
  - T (classe) => classe avec laquelle nous allons déserialiser le contenu de la réponse de la requète.
  - url (string) => Une chaîne de charactères sur laquelle nous allons réaliser notre call Http.
  - httpMethod (HttpMethod) => Un HttpMethod (Verbe Http (Get, Post, Delete, Put, Patch)), c'est le verbe Http que nous allons utiliser pour notre requète.
  - body (object) => body est un object que nous allons serialiser puis ajouter dans le corps de notre méthode.
  - bearer (string) => Une chaine de charactères contenant notre bearer token.

Cette méthode nous retourne donc un objet HttpResult contenant plusieurs propriétés. Si lors de l'exécution de la méthode, celle ci à crash, on pourra retrouver le message d'erreur dans ErrorMessage. On retrouve le HttpStatusCode dans Status et toutes les informations de notre requète dans RequestMessage. Finalement nous pourront lire la réponse de notre requète dans Content.

Vous pouvez utiliser la propriété BaseUrl pour définir un url qui sera appelé avant chaque call Http
```C#
IHttpService httpService = new HttpService();
httpService.BaseUrl = "https://myApiLink/";
```

### Utilisation
```C#
IHttpService httpService = new HttpService(); // New instance of HttpService
// Send post method without body recuperation
HttpResult result = await httpService.SendHttpRequest(url, HttpMethod.Post, body); 

// Send get method and get the content of the request
HttpResult<ColorDTODown> result = await httpService.SendHttpRequest<ColorDTODown>(url, HttpMethod.Get); 
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
