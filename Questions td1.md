Question 1 :

- La méthode HTTP `GET` demande une représentation de la ressource spécifiée. Les requêtes utilisant `GET` ne doivent être utilisées que pour demander des données et ne doivent pas inclure de contenu.

- La méthode HTTP `POST` envoie des données au serveur. Une requête `POST` est généralement envoyée via un formulaire HTML et entraîne une modification sur le serveur.

Question 2 :

|                       | `GET` | `POST` |
|----|:---:|:---:|
| La requête a un corps |  NON  |  OUI   |
| Une réponse réussie a du corps | OUI | OUI |
| Sûr |  OUI  |  NON   |
| Idempotent | OUI | NON |
| Peut être mis en cache |  OUI  |  Uniquement si les informations sur la fraîcheur sont incluses   |
| Autorisé dans les formulaires HTML | OUI | OUI |
