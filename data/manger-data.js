/* =====================================================================
   DONNÉES DU THÈME « MANGER SANS SE RUINER »
   Modifie ce fichier pour ajouter, corriger ou retirer un lieu.

   Chaque lieu :
     name     nom affiché
     address  adresse affichée
     lat, lon position sur la carte (clic droit sur openstreetmap.org > « Afficher l'adresse »)
     area     quartier (« Annecy-le-Vieux », « Vieille ville », « Centre »…)
     price    1 = €, 2 = €€, 3 = €€€
     priceText fourchette indicative, ex. « ≈ 12–18 € »

   Les prix sont des ordres de grandeur relevés en novembre 2026
   (offices de tourisme, guides, avis). Ils changent : vérifie sur place.
   ===================================================================== */

window.MANGER = {

  /* Point de départ pour les distances : le RU d'Annecy, au cœur du campus */
  campus: { name: "Campus USMB d'Annecy (RU)", lat: 45.91937, lon: 6.15708 },

  /* ---------------- CROUS ---------------- */
  crous: [
    {
      id: "ru-annecy",
      name: "Restaurant universitaire d'Annecy",
      kind: "Restaurant (repas chaud)",
      address: "3 chemin de Bellevue, 74940 Annecy-le-Vieux",
      lat: 45.91937, lon: 6.15708,
      hours: "Lundi au vendredi, 11 h 30 – 13 h 30 · fermé le week-end",
      pay: "Izly ou carte bancaire",
      access: "Bus 2 et 4",
      main: true,
      info: [
        "Le repas chaud et complet du campus : un plat principal avec entrée, fromage ou dessert, selon le système de points.",
        "Il peut servir jusqu'à 1 100 repas par service, mais à midi la file peut être longue.",
        "Deux files : celle de gauche mène aux pâtes, elle est souvent plus courte. La deuxième sert les plats classiques. Desserts et salades sont les mêmes des deux côtés."
      ],
      tip: "Envie de pâtes ? Prends la file de gauche et prévois quand même un peu d'attente aux heures de pointe.",
      figure: { src: "images/crous/repas-1-euro.jpg", alt: "Trois exemples de plateaux au restaurant universitaire avec leur nombre de points", caption: "À quoi ressemble un repas à 1 € ? Trois plateaux du Restaurant universitaire d'Annecy (Crous Grenoble Alpes), avec leurs points." },
      link: "https://www.crous-grenoble.fr/restaurant/ru-dannecy/"
    },
    {
      id: "polytech",
      name: "Cafétéria Polytech Annecy-Chambéry",
      kind: "Cafétéria",
      address: "2 allée Louis de Broglie, 74940 Annecy-le-Vieux",
      lat: 45.91967, lon: 6.15787,
      hours: "Lundi au vendredi, 8 h – 10 h 45 et 11 h 30 – 14 h",
      pay: "Izly ou carte bancaire",
      info: [
        "Dans l'école d'ingénieurs de l'USMB, à 50 m du restaurant universitaire.",
        "Pratique si tu as cours à côté ou si la file du RU est trop longue."
      ],
      link: "https://www.crous-grenoble.fr/restaurant/cafeteria-polytech-annecy/"
    },
    {
      id: "tom-morel",
      name: "Cafétéria / RU Tom Morel",
      gmaps: "Restaurant Universitaire Tom Morel, Annecy-le-Vieux",
      kind: "Libre-service",
      address: "Domaine universitaire, 74940 Annecy-le-Vieux",
      lat: 45.91940, lon: 6.15985,
      hours: "Lundi au vendredi, 11 h 30 – 13 h 30",
      pay: "Izly ou carte bancaire",
      phone: "04 50 09 53 08",
      info: [
        "Un libre-service à côté de la résidence Crous Tom Morel, à environ 230 m du RU.",
        "Bonne solution pour manger vite à midi quand on habite la résidence."
      ],
      link: "https://www.crous-grenoble.fr/restaurant/ru-tom-morel/"
    },
    {
      id: "iut",
      name: "Cafétéria de l'IUT d'Annecy",
      kind: "Cafétéria",
      address: "9 rue de l'Arc-en-Ciel, 74940 Annecy-le-Vieux",
      lat: 45.92048, lon: 6.15325,
      hours: "8 h – 10 h 45 et 11 h 30 – 14 h",
      pay: "Izly ou carte bancaire",
      info: [
        "En plein cœur de l'IUT, avec une grande salle et une terrasse.",
        "Sandwichs, pasta box et snacks.",
        "La formule : un sandwich, deux snacks (yaourt, barre de céréales…) et un café. Tous les sandwichs ne sont pas inclus : demande à la caisse."
      ],
      link: "https://www.crous-grenoble.fr/restaurant/cafeteria-iut-dannecy/"
    }
  ],

  /* ---------------- CATÉGORIES (filtres) ---------------- */
  categories: [
    { id: "savoyard", label: "Savoyard" },
    { id: "burger",   label: "Burgers & américain" },
    { id: "pizza",    label: "Pizza & italien" },
    { id: "asiat",    label: "Japonais & asiatique" },
    { id: "poisson",  label: "Poisson & fruits de mer" },
    { id: "street",   label: "Street food" },
    { id: "mexicain", label: "Mexicain" },
    { id: "healthy",  label: "Healthy & végé" },
    { id: "vegan",    label: "Végé & vegan" },
    { id: "crepes",   label: "Crêpes" },
    { id: "indien",   label: "Indien" },
    { id: "oriental", label: "Oriental" },
    { id: "bistrot",  label: "Bistrot français" }
  ],

  /* ---------------- RESTAURANTS ET CAFÉS ---------------- */
  restaurants: [
    { id: "freti", name: "Le Fréti", cat: ["savoyard"], area: "Vieille ville",
      address: "12 rue Sainte-Claire, Annecy", lat: 45.89854, lon: 6.12492,
      price: 2, priceText: "≈ 22–30 € · plat du jour 11–15 €",
      dishes: ["Raclette", "Fondue", "Tartiflette", "Brisgotte"],
      note: "L'adresse fromage la plus citée de la vieille ville. Réserve le soir." },

    { id: "lilas", name: "Le Lilas Rose", cat: ["savoyard", "pizza"], area: "Vieille ville",
      address: "1 passage de l'Évêché, Annecy", lat: 45.89871, lon: 6.12483,
      price: 2, priceText: "≈ 20–30 €",
      dishes: ["Spécialités savoyardes", "Pizzas"],
      note: "Bon rapport qualité-prix d'après les avis, en plein centre historique." },

    { id: "heure-tourne", name: "L'Heure Tourne", cat: ["burger"], area: "Centre",
      address: "21 rue du Président Favre, Annecy", lat: 45.90337, lon: 6.12577,
      price: 2, priceText: "≈ 15–22 €",
      dishes: ["Burgers maison", "Frites"],
      note: "Souvent cité comme le meilleur burger d'Annecy." },

    { id: "roster", name: "The Roster", cat: ["burger"], area: "Annecy-le-Vieux",
      address: "Annecy-le-Vieux · aussi au 2 rue Joseph Blanc, Annecy", lat: 45.91597, lon: 6.14720,
      price: 2, priceText: "≈ 15–20 €",
      dishes: ["Burger Lunatic", "Burger Patriot", "Frites maison"],
      note: "Viande fraîche et frites maison. L'adresse d'Annecy-le-Vieux est proche du campus." },

    { id: "bora-bora", name: "Bora Bora", cat: ["burger"], area: "Annecy-le-Vieux",
      address: "13 avenue de Chavoires, Annecy-le-Vieux", lat: 45.90453, lon: 6.15989,
      price: 2, priceText: "≈ 15–25 €",
      dishes: ["Burgers", "Frites"],
      note: "Ouvert en 2021, avec une terrasse. Près du lac côté Annecy-le-Vieux." },

    { id: "sapaudia", name: "Sapaudia Express", cat: ["pizza"], area: "Annecy-le-Vieux",
      address: "17 avenue de Chavoires, Annecy-le-Vieux · aussi 10 rue Vaugelas (Trattoria)", lat: 45.90407, lon: 6.15994,
      price: 1, priceText: "≈ 12–18 €",
      dishes: ["Pizzas", "Pâtes"],
      note: "Le nom le plus cité pour la pizza à Annecy. La Trattoria est en centre-ville." },

    { id: "select-pizza", name: "Select'Pizza", cat: ["pizza"], area: "Novel",
      address: "Place de l'Annapurna, Annecy", lat: 45.91706, lon: 6.13370,
      price: 1, priceText: "≈ 10–15 €",
      dishes: ["Pizzas à emporter"],
      note: "Apprécié surtout pour ses prix." },

    { id: "yatta", name: "Yatta ! Ramen", cat: ["asiat"], area: "Annecy-le-Vieux",
      address: "11 rue des Écoles, Annecy-le-Vieux", lat: 45.91217, lon: 6.14367,
      price: 2, priceText: "≈ 14–20 €",
      dishes: ["Ramen", "Gyozas"],
      note: "Le ramen le plus cité d'Annecy, à 1 km du campus. Petite salle, tables serrées." },

    { id: "minami", name: "Minami", cat: ["asiat"], area: "Vieille ville",
      address: "Faubourg Sainte-Claire, Annecy", lat: 45.89731, lon: 6.12297,
      price: 2, priceText: "≈ 20–30 €",
      dishes: ["Plats mijotés", "Bouillons", "Tempuras"],
      note: "Cuisine japonaise traditionnelle, sans sushis. Recommandé par le guide Michelin (Bib Gourmand). Petite salle : réserve." },

    { id: "lyonnais", name: "Auberge du Lyonnais", cat: ["poisson"], area: "Vieille ville",
      address: "Rue Jean-Jacques Rousseau, Annecy", lat: 45.89903, lon: 6.12407,
      price: 3, priceText: "≈ 30–50 €",
      dishes: ["Poissons", "Fruits de mer"],
      note: "Au bord du canal. Plutôt pour une grande occasion. Cherche la féra ou l'omble chevalier, les poissons du lac." },

    { id: "tasty-crousty", name: "Tasty Crousty", cat: ["street"], area: "Centre",
      address: "Rue de l'Industrie, Annecy", lat: 45.90122, lon: 6.11998,
      price: 1, priceText: "≈ 9–13 €",
      dishes: ["Bowl riz + poulet croustillant", "Sauces au choix"],
      note: "Rapide et copieux, près de la gare." },

    { id: "otacos", name: "O'Tacos", cat: ["street"], area: "Centre",
      address: "22 avenue de Chambéry, Annecy", lat: 45.89891, lon: 6.11848,
      price: 1, priceText: "≈ 8–12 €",
      dishes: ["French tacos", "Frites"],
      note: "Des « French tacos », un concept différent du taco mexicain." },

    { id: "los-primos", name: "Los Primos", cat: ["mexicain"], area: "Centre",
      address: "2 rue Aimé Levet, Annecy", lat: 45.89766, lon: 6.13039,
      price: 2, priceText: "≈ 12–20 €",
      dishes: ["Tacos", "Burritos", "Quesadillas", "Margaritas"],
      note: "Street food mexicaine faite maison. Horaires variables : vérifie avant." },

    { id: "lac-casa", name: "Lac Casa", cat: ["mexicain"], area: "Centre",
      address: "12 avenue de Chambéry, Annecy", lat: 45.89924, lon: 6.11971,
      price: 2, priceText: "≈ 15–22 €",
      dishes: ["Tacos", "Mousse de mangue"],
      note: "Fermé le samedi midi et le dimanche. Réservation conseillée." },

    { id: "pura-vida", name: "Pura Vida", cat: ["healthy", "vegan"], area: "Centre",
      address: "2 avenue de Chambéry, Annecy", lat: 45.89966, lon: 6.12133,
      price: 2, priceText: "≈ 12–18 €",
      dishes: ["Bowls", "Poke bowls", "Avocado toast", "Salades"],
      note: "Végétarien, vegan et healthy. Ouvert depuis 2022." },

    { id: "kia-ora", name: "Kia Ora", cat: ["vegan", "healthy"], area: "Centre",
      address: "13 rue de la Gare, Annecy", lat: 45.89977, lon: 6.12150,
      price: 2, priceText: "≈ 12–18 €",
      dishes: ["Plats végétariens et vegan"],
      note: "100 % végétarien, à deux pas de la gare." },

    { id: "bichette", name: "Café Bichette", cat: ["healthy", "vegan"], area: "Vieille ville",
      address: "9 rue Perrière, Annecy", lat: 45.89814, lon: 6.12744,
      price: 2, priceText: "≈ 14–20 €",
      dishes: ["Poke bowl à composer", "Brunch"],
      note: "Bio et végétarien, brunch tous les jours." },

    { id: "pokawa", name: "Pokawa", cat: ["healthy"], area: "Centre (Courier)",
      address: "Centre commercial Courier, Annecy", lat: 45.90420, lon: 6.12426,
      price: 1, priceText: "≈ 11–15 €",
      dishes: ["Poke bowls", "Bowls végétariens"],
      note: "Rapide, sur place ou à emporter." },

    { id: "granny-smith", name: "Granny Smith", cat: ["vegan", "healthy"], area: "Centre",
      address: "4 rue Louis Revon, Annecy", lat: 45.90409, lon: 6.13039,
      price: 2, priceText: "prix moyens, à vérifier sur place",
      dishes: ["Salades", "Jus et smoothies", "Desserts crus"],
      note: "100 % végétalien et bio, cuisine crue faite maison avec des produits locaux. Le menu change chaque jour. Fermé le dimanche." },

    { id: "la-cabane", name: "La Cabane", cat: ["savoyard", "vegan"], area: "Vieille ville",
      address: "27 rue Sainte-Claire, Annecy", lat: 45.89813, lon: 6.12420,
      price: 2, priceText: "≈ 20 € le burger",
      dishes: ["Burger vegan", "Risotto", "Menu savoyard"],
      note: "Restaurant savoyard avec un vrai menu vegan, dans un joli cadre en bois. Souvent complet : pense à réserver. Attention, le cheesecake contient de la gélatine." },

    { id: "bolee", name: "La Bolée", cat: ["crepes"], area: "Vieille ville",
      address: "Rue de l'Île, Annecy", lat: 45.89820, lon: 6.12641,
      price: 1, priceText: "≈ 12–20 €",
      dishes: ["Galettes de sarrasin", "Crêpes sucrées", "Cidre"],
      note: "La crêperie la plus citée, notée 4,8 sur plus de 2 300 avis." },

    { id: "new-delhi", name: "New Delhi", cat: ["indien"], area: "Centre",
      address: "5 rue de Frontenex, Annecy", lat: 45.91499, lon: 6.12469,
      price: 2, priceText: "≈ 15–25 €",
      dishes: ["Plats au tandoor", "Currys", "Naans"],
      note: "Le restaurant indien le plus cité, avec plus de 1 000 avis." },

    { id: "bakhchich", name: "Bakhchich Baba", cat: ["oriental"], area: "Centre",
      address: "11 bis avenue de la Mandallaz, Annecy", lat: 45.89892, lon: 6.11542,
      price: 2, priceText: "≈ 15–25 €",
      dishes: ["Couscous", "Méchoui"],
      note: "Soirées couscous et méchoui le jeudi et le vendredi. Accepte les titres-restaurant." },

    { id: "cisele", name: "Le Ciselé", cat: ["bistrot"], area: "Centre",
      address: "13 rue Royale, Annecy", lat: 45.89987, lon: 6.12287,
      price: 1, priceText: "menu 10–20 € · plat du jour 13–17 €",
      dishes: ["Plat du jour", "Cuisine de bistrot"],
      note: "Un des menus les moins chers du centre." }
  ],

  /* ---------------- COFFEE SHOPS ---------------- */
  coffee: [
    { id: "drip", name: "Drip – Coffee Shop & Coworking", area: "Centre (place des Romains)",
      address: "6 chemin des Fins Sud, 74000 Annecy", lat: 45.90864, lon: 6.12259,
      priceText: "≈ 3–6 € la boisson", hours: "Mardi au samedi, 8 h 30 – 18 h (à vérifier)",
      tags: ["Pour travailler", "Café de spécialité", "Ateliers barista"],
      dishes: ["Espresso", "Flat white", "Café filtre"],
      note: "Un club de café de spécialité calme et orienté créativité, idéal pour travailler ou échanger avec des baristas passionnés. Il y a un espace coworking et des salles pour les appels." },

    { id: "adrenaline", name: "Adrenaline Coffee Roasters", area: "Vieille ville",
      address: "Place Georges Volland, 74000 Annecy", lat: 45.89805, lon: 6.12257,
      priceText: "≈ 3–5 € la boisson", hours: "Mardi au vendredi 8 h 30 – 17 h · samedi 9 h 30 – 16 h",
      tags: ["Torréfacteur", "Café de spécialité"],
      dishes: ["Espresso", "Café filtre", "Grains à emporter"],
      note: "Un torréfacteur haut-savoyard (né à Cluses) qui torréfie ses propres cafés de spécialité." },

    { id: "starbucks", name: "Starbucks Courier", area: "Centre (Courier)",
      address: "Centre commercial Courier, 65 rue Carnot, 74000 Annecy", lat: 45.90364, lon: 6.12374,
      priceText: "≈ 4–7 € la boisson", hours: "Lundi au samedi, 8 h 30 – 19 h 30 · fermé le dimanche",
      tags: ["Chaîne", "Commande sur l'appli"],
      dishes: ["Frappuccino", "Caffè latte", "Cookies"],
      note: "Le Starbucks d'Annecy, au cœur de la ville dans le centre commercial Courier." },

    { id: "baigneurs", name: "Les Baigneurs Café", area: "Vieille ville",
      address: "Passage des Bains, 74000 Annecy", lat: 45.89948, lon: 6.12342,
      priceText: "≈ 3–6 € la boisson", hours: "Mercredi au vendredi 8 h 30 – 17 h 30 · week-end 9 h – 18 h",
      tags: ["Café de spécialité", "Primé"],
      dishes: ["Espresso", "Flat white", "Pâtisseries"],
      note: "Classé parmi les « World's 100 Best Coffee Shops » en 2025." },

    { id: "slake", name: "Slake Coffee", area: "Centre",
      address: "29 rue Sommeiller, 74000 Annecy", lat: 45.90244, lon: 6.12618,
      priceText: "≈ 3–6 € la boisson · brunch ≈ 15–20 €", hours: "Lundi au samedi 8 h 30 – 18 h · dimanche 8 h 30 – 17 h",
      tags: ["Torréfacteur", "Brunch", "Ouvert le dimanche"],
      dishes: ["Café maison", "Brunch"],
      note: "Torréfie ses propres grains, près du lac." },

    { id: "bunna", name: "Café Bunna", area: "Vieille ville",
      address: "17 rue Jean-Jacques Rousseau, 74000 Annecy", lat: 45.89900, lon: 6.12510,
      priceText: "≈ 3–6 € la boisson", hours: "Mercredi au vendredi 8 h – 15 h · samedi 8 h – 17 h · dimanche 8 h – 12 h 30",
      tags: ["Service à table", "Douceurs maison"],
      dishes: ["Café", "Gâteaux maison"],
      note: "On s'assoit et on est servi à table, plus calme qu'un coffee shop classique." },

    { id: "haven", name: "Haven", area: "Vieille ville",
      address: "5 rue Filaterie, 74000 Annecy", lat: 45.89970, lon: 6.12629,
      priceText: "≈ 4–6 € la boisson · brunch ≈ 15–22 €",
      tags: ["Brunch", "Inspiration australienne"],
      dishes: ["Flat white", "Brunch"],
      note: "Coffee shop d'inspiration australienne avec une cuisine généreuse." }
  ],

  /* ---------------- PRODUITS DE LA FERME ---------------- */
  farm: {
    id: "douceurs-ferme",
    name: "Aux Douceurs de la Ferme",
    kind: "Distributeurs de la ferme",
    address: "Route de Thônes, 74940 Annecy-le-Vieux",
    lat: 45.9213789, lon: 6.1685995,
    gmaps: "GAEC Aux Douceurs De La Ferme, Annecy-le-Vieux",
    intro: "Des produits laitiers frais, directement de la ferme, à environ 1 km du campus.",
    desc: [
      "Un distributeur automatique de produits laitiers de la ferme, installé à quelques mètres de l’exploitation. On y trouve du lait frais, des desserts lactés, des yaourts et des œufs.",
      "Juste à côté, un autre distributeur vend des glaces fermières en grands bacs en plastique, dans plusieurs parfums. La préférée des clients, c’est la vanille : elle a même été récompensée il y a quelques années lors d’un concours à Lyon."
    ],
    facts: [["Horaires", "Ouvert 24 h/24, 7 j/7"], ["Paiement", "Carte bancaire ou espèces"], ["Distance", "Environ 1 km du campus"]],
    products: ["Lait frais", "Yaourts", "Desserts lactés", "Œufs", "Glaces en grands bacs"],
    photo: { src: "images/ferme/casiers.jpg", alt: "Les casiers en libre-service de la ferme Aux Douceurs de la Ferme, avec yaourts et desserts", caption: "Les casiers en libre-service : lait, yaourts, desserts lactés et œufs.",
      credit: "Photo : un contributeur Google Maps", creditUrl: "https://maps.google.com/maps/contrib/102321726406498466362" },
    video: { src: "videos/ferme.mp4", caption: "Quand il fait beau, on peut parfois voir les chèvres paître à côté de la ferme. Et la vue sur les montagnes vaut aussi le détour !" }
  },

  /* ---------------- SUPERMARCHÉS ---------------- */
  supermarkets: [
    { id: "intermarche", name: "Intermarché Super", group: "campus", area: "Annecy-le-Vieux",
      address: "7 place du 18 Juin 1940, 74940 Annecy-le-Vieux", lat: 45.91520, lon: 6.14523,
      price: 2, hours: "Lun–sam 8 h – 20 h · dim 9 h – 12 h 30",
      info: "Le grand supermarché le plus proche du campus. Pratique pour les courses de la semaine en rentrant de cours." },

    { id: "carrefour-market", name: "Carrefour Market", group: "campus", area: "Annecy-le-Vieux", gmaps: "Carrefour Market Annecy le vieux",
      address: "33 rue des Mouettes, 74940 Annecy-le-Vieux", lat: 45.91054, lon: 6.14928,
      price: 2, hours: "Lun–sam 8 h – 20 h · dim 8 h 30 – 12 h 30",
      info: "Supermarché de quartier à Annecy-le-Vieux, côté lac. Bon choix de produits de marque Carrefour, moins chers." },

    { id: "petit-casino", name: "Le Petit Casino", group: "campus", area: "Annecy-le-Vieux",
      address: "11 rue de Lachat, 74940 Annecy-le-Vieux", lat: 45.92183, lon: 6.14537,
      price: 3, hours: "Lun–sam 8 h 30 – 20 h 30 · dim 8 h 30 – 13 h et 16 h – 19 h 30",
      info: "Petite épicerie de dépannage, ouverte aussi le dimanche après-midi. Plus cher : pour un oubli, pas pour les grosses courses." },

    { id: "lidl", name: "Lidl", group: "ville", area: "Annecy sud",
      address: "2 rue de Sansy, 74000 Annecy", lat: 45.88870, lon: 6.11475,
      price: 1, hours: "Lun–sam 8 h 30 – 19 h 30 · dim 8 h 30 – 12 h 15",
      info: "Le discount : souvent le panier le moins cher. Bonne boulangerie en libre-service et promos chaque semaine." },

    { id: "carrefour", name: "Carrefour (hypermarché)", group: "ville", area: "Annecy nord", gmaps: "Carrefour Annecy, 134 avenue de Genève, 74000 Annecy",
      address: "134 avenue de Genève, 74000 Annecy", lat: 45.92484, lon: 6.12462,
      price: 2, hours: "Lun–ven 8 h 30 – 21 h 30 · sam 8 h 30 – 21 h · dim 8 h 30 – 12 h 15",
      info: "Le plus grand choix de la ville : alimentation, maison, électronique. Ouvert tard en semaine." },

    { id: "grand-frais", name: "Grand Frais", group: "ville", area: "Seynod",
      address: "Avenue Henri Zanaroli, 74600 Seynod", lat: 45.89044, lon: 6.11363,
      price: 2, hours: "Lun–sam 8 h 30 – 20 h · dim 9 h – 12 h 30",
      info: "Spécialiste des produits frais : fruits et légumes, boucherie, fromagerie, poissonnerie et une grande épicerie du monde. Idéal pour cuisiner les plats de chez toi." },

    { id: "monoprix", name: "Monoprix", group: "ville", area: "Vieille ville",
      address: "15 rue Notre-Dame, 74000 Annecy", lat: 45.90021, lon: 6.12637,
      price: 3, hours: "Lun–sam 8 h 30 – 20 h 30 · dim 9 h – 20 h",
      info: "En plein centre et ouvert le dimanche toute la journée. Plus cher, mais très pratique." },

    { id: "carrefour-city", name: "Carrefour City", group: "ville", area: "Plusieurs adresses",
      address: "5 place des Rhododendrons, Annecy (et 14 av. de Chambéry, 27 av. du Parc des Sports…)", lat: 45.91877, lon: 6.12890,
      price: 3, hours: "Lun–sam 7 h – 21 h · dim matin",
      info: "Supérettes ouvertes tôt et tard, un peu partout en ville. Plus cher que les grandes surfaces." },

    { id: "biocoop", name: "Biocoop", group: "ville", area: "Centre",
      address: "10 rue de la Paix, 74000 Annecy", lat: 45.90341, lon: 6.12685,
      price: 3, hours: "Lun–sam 9 h – 19 h 30",
      info: "100 % bio, avec un grand rayon vrac : tu peux venir avec tes bocaux et acheter juste la quantité dont tu as besoin." }
  ]
};
