# Le Petit Annécien

Guide pratique pour les futurs étudiants de l'USMB à Annecy : carte, vie étudiante, transports, vélo, manger sans se ruiner, activités et logement.

## Fichiers

- `index.html` : le site (modèle « Carnet savoyard »). Ouvre-le dans un navigateur.
- `design/style-options.html` : les quatre styles proposés au départ.

## Modifier les thèmes

Dans `index.html`, cherche la liste `TOPICS` en bas du fichier. Chaque thème a :

- `id` : le nom dans l'adresse (`#manger`)
- `title` : le nom dans le menu
- `hl` : le grand titre de la page
- `desc` : la phrase d'introduction
- `subs` : la liste des sous-thèmes

Ajoute, renomme ou supprime un élément : le menu, les cartes et les pages se mettent à jour tout seuls.

## Thème « Manger sans se ruiner »

Le contenu est dans `data/manger-data.js` : lieux du Crous, restaurants (avec catégories et prix), coffee shops et supermarchés. Chaque lieu a une position (`lat`, `lon`) pour la carte et le calcul de distance depuis le campus.

- Ajouter un restaurant : copie un bloc `{ id: ..., name: ... }` dans la liste `restaurants` et change les valeurs.
- Le code d'affichage est dans `js/manger.js`. La carte utilise Leaflet et OpenStreetMap.

Chaque lieu a un bouton « Photos sur Google Maps » qui ouvre sa fiche Google Maps (photos, avis, horaires). Si le bouton tombe sur une liste au lieu du bon lieu, ajoute `gmaps: "Nom exact sur Google Maps"` au lieu dans `data/manger-data.js`.

Photos des bannières et « Le saviez-vous ? » : Wikimedia Commons, licences libres (auteur et licence affichés sur chaque photo). Les illustrations des cartes sont dans `js/icons.js` (une par catégorie).

## Après une modification

Dans `index.html`, change le numéro `?v=...` à la fin de `data/manger-data.js?v=...` et `js/manger.js?v=...` (par exemple la date du jour). Sinon, les navigateurs peuvent garder l'ancienne version quelques minutes.
