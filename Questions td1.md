Question 1:

- La méthode HTTP `GET` demande une représentation de la ressource spécifiée. Les requêtes utilisant `GET` ne doivent être utilisées que pour demander des données et ne doivent pas inclure de contenu.

- La méthode HTTP `POST` envoie des données au serveur. Une requête `POST` est généralement envoyée via un formulaire HTML et entraîne une modification sur le serveur.

Question 2:

|                       | `GET` | `POST` |
|----|:---:|:---:|
| La requête a un corps |  NON  |  OUI   |
| Une réponse réussie a du corps | OUI | OUI |
| Sûr |  OUI  |  NON   |
| Idempotent | OUI | NON |
| Peut être mis en cache |  OUI  |  Uniquement si les informations sur la fraîcheur sont incluses   |
| Autorisé dans les formulaires HTML | OUI | OUI |


Question 3:

- HTTP est un protocole extensible qui a évolué au cours du temps. À partir de HTTP/1.0, les en-têtes HTTP permettent d'étendre facilement le protocole et de mener des expérimentations avec celui-ci. C'est un protocole de la couche application dont les données transitent via TCP ou à travers une connexion TCP chiffrée avec TLS. En raison de son extensibilité, il n'est pas seulement utilisé pour récupérer des documents, mais aussi pour des images, des vidéos ou bien pour renvoyer des contenus vers des serveurs, comme des résultats de formulaires HTML. HTTP peut aussi être utilisé pour récupérer des parties de documents pour mettre à jour à la demande des pages web.


Question 4:

- HTTP est un protocole sans état , ce qui signifie que le serveur ne conserve aucune donnée (état) entre deux requêtes.

Les protocoles sans état améliorent les propriétés de visibilité, de fiabilité et d'évolutivité. La visibilité est améliorée car un système de surveillance n'a pas besoin de regarder au-delà d'une seule requête pour déterminer sa nature complète. La fiabilité est améliorée car elle facilite la tâche de récupération après des pannes partielles. L'évolutivité est améliorée car le fait de ne pas avoir à stocker l'état de session entre les requêtes permet au serveur de libérer rapidement des ressources et simplifie encore davantage la mise en œuvre.

L’inconvénient des protocoles sans état est qu’ils peuvent diminuer les performances du réseau en augmentant les données répétitives envoyées dans une série de requêtes, car ces données ne peuvent pas être laissées sur le serveur et réutilisées.

Question 5:

