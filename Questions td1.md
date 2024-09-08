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
| Peut être mis en cache |  OUI  |  Seulement si une information de péremption est incluse   |
| Autorisé dans les formulaires HTML | OUI | OUI |


Question 3:

- HTTP est un protocole extensible qui a évolué au cours du temps. À partir de HTTP/1.0, les en-têtes HTTP permettent d'étendre facilement le protocole et de mener des expérimentations avec celui-ci. C'est un protocole de la couche application dont les données transitent via TCP ou à travers une connexion TCP chiffrée avec TLS. En raison de son extensibilité, il n'est pas seulement utilisé pour récupérer des documents, mais aussi pour des images, des vidéos ou bien pour renvoyer des contenus vers des serveurs, comme des résultats de formulaires HTML. HTTP peut aussi être utilisé pour récupérer des parties de documents pour mettre à jour à la demande des pages web.


Question 4:

- HTTP est un protocole sans état , ce qui signifie que le serveur ne conserve aucune donnée (état) entre deux requêtes.

Les protocoles sans état améliorent les propriétés de visibilité, de fiabilité et d'évolutivité. La visibilité est améliorée car un système de surveillance n'a pas besoin de regarder au-delà d'une seule requête pour déterminer sa nature complète. La fiabilité est améliorée car elle facilite la tâche de récupération après des pannes partielles. L'évolutivité est améliorée car le fait de ne pas avoir à stocker l'état de session entre les requêtes permet au serveur de libérer rapidement des ressources et simplifie encore davantage la mise en œuvre.

L’inconvénient des protocoles sans état est qu’ils peuvent diminuer les performances du réseau en augmentant les données répétitives envoyées dans une série de requêtes, car ces données ne peuvent pas être laissées sur le serveur et réutilisées.

Question 5:

- Les URL de données sont composées de quatre parties : un préfixe ( data:), un type MIME indiquant le type de données, un base64jeton facultatif s'il n'est pas textuel et les données elles-mêmes :
      `data:[<mediatype>][;base64],<data>`

Le `mediatype` est d'une chaîne de type MIME , comme `'image/jpeg'` pour un fichier image JPEG. Si elle est omise, la valeur par défaut est `text/plain;charset=US-ASCII`.

Si les données contiennent des caractères définis dans la RFC 3986 comme caractères réservés , ou contiennent des caractères d'espacement, des caractères de nouvelle ligne ou d'autres caractères non imprimables, ces caractères doivent être codés en pourcentage .

Si les données sont textuelles, on peut incorporer le texte (en utilisant les entités ou les échappements appropriés en fonction du type du document englobant). Sinon, on peut  spécifier `base64` d'incorporer des données binaires codées en base64.

Question 6:

Les codes d'état de réponse HTTP indiquent si une requête HTTP spécifique a été exécutée avec succès. Les réponses sont regroupées en cinq classes :

- Réponses informatives ( 100 – 199)
  > exemple: `100` Continue 
  >> Cette réponse intermédiaire indique que le client doit poursuivre la demande ou ignorer la réponse si la demande est déjà terminée.
- Réponses réussies ( 200 – 299)
  > exemple: `201` Created
  >> La requête a réussi et une nouvelle ressource a été créée en conséquence. Il s'agit généralement de la réponse envoyée après `POST` des requêtes ou certaines `PUT` requêtes.
- Messages de redirection ( 300 – 399)
  > exemple: `301` Moved Permanently
  >> L'URL de la ressource demandée a été modifiée de manière permanente. La nouvelle URL est indiquée dans la réponse.
- Réponses d’erreur du client ( 400 – 499)
  > exemple: `404` Not Found
  >> Le serveur ne trouve pas la ressource demandée. Dans le navigateur, cela signifie que l'URL n'est pas reconnue. Dans une API, cela peut également signifier que le point de terminaison est valide mais que la ressource elle-même n'existe pas. Les serveurs peuvent également envoyer cette réponse au lieu de 403 Forbiddenmasquer l'existence d'une ressource à un client non autorisé. Ce code de réponse est probablement le plus connu en raison de son apparition fréquente sur le Web.
- Réponses d'erreur du serveur ( 500 – 599)
  > exemple: `504` Gateway Timeout
  >> Cette réponse d'erreur est donnée lorsque le serveur agit comme une passerelle et ne peut pas obtenir de réponse à temps.

Question 10:

| Champ d'en-tête| Signification | Exemple |
|----|:---:|:---:|
|Accept|Les types de contenu que le client peut traiter ; si le champ est vide, il s’agit de tous les types de contenu.|Accept: text/html, application/xml|
|Accept-Charset|Quels jeux de caractères le client peut afficher.|Accept-Charset: utf-8|
|Accept-Encoding|Les formats compressés pris en charge par le client.|Accept-Encoding: gzip|
|Accept-Language|Version linguistique souhaitée|Accept-Language: fr-FR|
|Authorization|Données d’authentification (par exemple pour un login)|Basic WjbU7D25zTAlV2tZ7==|
|Cache-Control|Options du mécanisme de mise en cache|Cache-Control: no-cache|

