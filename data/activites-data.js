/* =====================================================================
   DONNÉES DU THÈME « IDÉES D'ACTIVITÉS »
   Texte repris du Google Doc de l'équipe (onglet « Idées d'activités »).
   Chaque activité :
     sec      rubrique (festivals, cinemas, sport, table, chateaux, spectacles)
     cover    couverture : { color, ink: "dark"|"light", img?, credit?, url?, pos?, icon? }
              (img = photo dans images/activites/, sinon icon = illustration de js/icons.js)
     desc     description (texte, ou liste de paragraphes)
     facts    lignes courtes [libellé, valeur]
     lists    listes détaillées { titre: [lignes] }
     tip      bon plan / à savoir
     lat, lon position sur la carte (pour « Voir sur la carte »)
     gmaps    recherche Google Maps (pour « Photos sur Google Maps »)
     link     site officiel
   ===================================================================== */

window.ACTIVITES = {
  sections: [
    { id: 'festivals',  title: 'Annecy en fête : les festivals à ne pas rater',
      sub: 'Pour les amoureux de l’animation, de la musique et des traditions. Annecy ne se résume pas à son lac : toute l’année, la ville accueille des événements qui attirent des visiteurs du monde entier. Pour un étudiant, c’est l’occasion de découvrir la ville autrement, de sortir avec ses amis et parfois de profiter d’animations gratuites ou à tarif réduit.',
      note: 'Les affiches présentées sont celles de la dernière édition.' },
    { id: 'cinemas',    title: 'Écran noir, popcorn et petit budget : les cinémas' },
    { id: 'sport',      title: 'Glisse, vol et grand air : le sport à Annecy' },
    { id: 'table',      title: 'Une table avec vue : les restos pour les grandes occasions' },
    { id: 'chateaux',   title: 'Remonter le temps : châteaux et vieille ville' },
    { id: 'spectacles', title: 'Spectacles et expos : la scène culturelle' }
  ],

  items: [
    /* ---------- 1. Festivals ---------- */
    { id: 'high-five', sec: 'festivals', name: 'High Five Festival',
      cover: { color: '#8b5cf6', ink: 'light', img: 'images/activites/high-five.jpg', pos: 'center 30%', credit: 'Affiche de la dernière édition', url: 'https://highfive-festival.com/' },
      desc: 'Le High Five Festival est un rendez-vous incontournable pour les passionnés de ski, de snowboard et de culture montagnarde. Au programme : projections de films, rencontres avec des sportifs, conférences, concerts et animations. C’est une excellente sortie à faire entre amis.',
      facts: [['Période', 'Généralement fin septembre ou début octobre, sur un week-end'], ['Lieu', 'Différents espaces à Annecy, notamment le cinéma Pathé et le village du festival'], ['Tarifs', 'Variables selon les projections, les activités et les pass']],
      lat: 45.90341, lon: 6.12337, mapNote: 'Lieu principal : cinéma Pathé', gmaps: 'Pathé Annecy, 7 avenue de Brogny, Annecy',
      link: 'https://highfive-festival.com/' },

    { id: 'retour-alpages', sec: 'festivals', name: 'Retour des alpages', label: 'La fête des troupeaux',
      cover: { color: '#ff7a1a', ink: 'light', img: 'images/activites/retour-alpages.jpg', pos: 'center 30%' }, free: true,
      desc: 'Cette fête traditionnelle célèbre la descente des troupeaux des montagnes après l’été. Les rues de la vieille ville accueillent des vaches, des moutons, des artisans, des musiciens et des groupes folkloriques. On peut également découvrir les spécialités gastronomiques de la région et les anciens métiers savoyards.',
      facts: [['Période', 'Généralement le deuxième samedi d’octobre'], ['Lieu', 'Vieille ville d’Annecy, notamment les rues piétonnes du centre historique'], ['Tarif', 'Entièrement gratuit']],
      lat: 45.89840, lon: 6.12489, gmaps: 'Rue Sainte-Claire, Annecy',
      link: 'https://en.lac-annecy.com/event/retour-des-alpages-annecy/' },

    { id: 'momiji', sec: 'festivals', name: 'Momiji', label: 'Spectacle à l’Auditorium de Seynod',
      cover: { color: '#ef3b3b', ink: 'light', img: 'images/activites/momiji.jpg', pos: 'center 42%', credit: 'Affiche de la dernière édition', url: 'https://www.auditoriumseynod.com/theme/momiji-28032/?lang=fr' },
      desc: 'Momiji est un événement consacré à la culture et au cinéma d’animation japonais. Pendant un week-end, les visiteurs peuvent découvrir des films d’animation, des classiques japonais, des séances spéciales et participer à différents ateliers : dessin manga, origami, mini-jardins zen et activités culturelles japonaises. C’est une activité originale pour les amateurs de mangas et de culture japonaise.',
      facts: [['Période', 'Généralement en octobre, autour des vacances scolaires d’automne'], ['Lieu', 'Auditorium de Seynod, 1 place de l’Hôtel-de-Ville, 74600 Annecy'], ['Accès', 'Accessible en bus depuis le centre-ville']],
      lists: { 'Tarifs indicatifs': ['Un film : 5 €', 'Junk Night : 8 €', 'Pass journée : 12 €', 'Pass week-end : 20 €'] },
      lat: 45.88871, lon: 6.10201, gmaps: 'Auditorium de Seynod, Annecy',
      link: 'https://www.auditoriumseynod.com/theme/momiji-28032/?lang=fr' },

    { id: 'annecy-festival', sec: 'festivals', name: 'Annecy Festival', label: 'Le festival international du cinéma d’animation',
      cover: { color: '#19b8e0', ink: 'light', img: 'images/activites/annecy-festival-affiche.jpg', pos: 'center 24%', credit: 'Affiche de la dernière édition', url: 'https://www.annecyfestival.com/' },
      desc: 'Le Festival international du film d’animation d’Annecy est l’un des plus grands festivals d’animation au monde. Il accueille des réalisateurs, des étudiants, des studios et des passionnés venus de nombreux pays. Pendant une semaine, la ville propose des projections de films, des avant-premières, des expositions, des rencontres avec des professionnels et des projections en plein air. C’est un événement particulièrement intéressant pour les étudiants passionnés de cinéma, de dessin et de création numérique.',
      facts: [['Période', 'Généralement en juin, pendant environ une semaine'], ['Lieu', 'Plusieurs endroits à Annecy, notamment Bonlieu, le cinéma Pathé, la salle Pierre Lamy et le Pâquier pour certaines projections en plein air']],
      lists: { 'Tarifs indicatifs': ['Accréditations : tarifs variables selon la formule et la période d’achat', 'Billets individuels : prix variables selon les séances', 'Certaines animations et projections en plein air sont gratuites'] },
      tipLabel: 'Bon plan étudiant', tip: 'Renseignez-vous sur les offres étudiantes.',
      lat: 45.90187, lon: 6.12800, mapNote: 'Lieu principal : Bonlieu', gmaps: 'Bonlieu Scène nationale, Annecy',
      link: 'https://www.annecyfestival.com/' },

    /* ---------- 2. Cinémas ---------- */
    { id: 'nemours', sec: 'cinemas', name: 'Cinéma Les Nemours', label: 'Le cinéma d’art et d’essai',
      cover: { color: '#ffe94d', ink: 'dark', icon: 'film' },
      desc: 'Situé en plein centre-ville, le cinéma Les 4 Nemours est un cinéma indépendant et historique d’Annecy. Il propose des films d’auteur, des films internationaux, des versions originales sous-titrées (VOST), des avant-premières et des rencontres avec des réalisateurs. C’est un endroit idéal pour découvrir un cinéma différent et améliorer sa compréhension du français.',
      facts: [['Adresse', '2 place Sainte-Claire, 74000 Annecy'], ['Programmation', 'Films d’auteur, films internationaux, VOST, avant-premières et débats'], ['Séances', 'Toute l’année, généralement en journée et en soirée. Les horaires varient selon les films']],
      lists: { 'Tarifs indicatifs': ['Du lundi au jeudi : 9 €', 'Du vendredi au dimanche et jours fériés : 10 €', 'Moins de 14 ans : 5 €', 'Carte Cinéphile (10 entrées) : 70 € + 1,50 € de frais de gestion'] },
      lat: 45.89845, lon: 6.12351, gmaps: 'Cinéma Les Nemours, Place Sainte-Claire, Annecy',
      link: 'https://www.haute-savoie-tourisme.org/index.php/705223-cinema-4-nemours' },

    { id: 'pathe', sec: 'cinemas', name: 'Pathé Annecy', label: 'Les grosses sorties',
      cover: { color: '#f45fb5', ink: 'light', icon: 'popcorn' },
      desc: 'Le Pathé Annecy est un grand cinéma moderne situé près du centre commercial Courier. Il propose les dernières sorties françaises et internationales, les blockbusters, les films d’animation et certaines séances en 3D. C’est un bon choix pour une sortie entre amis ou pour découvrir les grands films du moment.',
      facts: [['Adresse', '7 avenue de Brogny, 74000 Annecy'], ['Programmation', 'Films récents, blockbusters, comédies, films d’action et animations'], ['Séances', 'Tous les jours, avec des horaires variables, généralement de la fin de matinée jusqu’au soir']],
      lists: { 'Tarifs indicatifs': ['Plein tarif : 15,80 €', 'Étudiants et scolaires : 9,90 €', 'Moins de 14 ans : 6,80 €', 'Séance du matin (avant midi) : 9,50 €'] },
      lat: 45.90341, lon: 6.12337, gmaps: 'Pathé Annecy, 7 avenue de Brogny, Annecy',
      link: 'https://www.pathe.fr/cinemas/cinema-pathe-annecy' },

    /* ---------- 3. Sport ---------- */
    { id: 'patinoire', sec: 'sport', name: 'Patinoire d’Annecy', label: 'Patinoire Jean Régis',
      cover: { color: '#19b8e0', ink: 'light', icon: 'skate' },
      desc: 'La patinoire Jean Régis est une patinoire couverte ouverte toute l’année. Elle propose des séances de patinage public, des soirées à thème pendant les vacances scolaires. C’est une sortie simple et conviviale à faire entre amis, en famille ou même pour découvrir le patinage pour la première fois.',
      facts: [['Adresse', '90 chemin des Fins Nord, 74000 Annecy'], ['Période', 'Ouverte toute l’année, avec des horaires différents pendant les vacances scolaires']],
      lists: {
        'Horaires habituels en période scolaire': ['Mardi : soirée de 20 h 45 à 22 h', 'Mercredi : 14 h à 17 h', 'Vendredi : soirée de 20 h 45 à 22 h 45', 'Samedi : 14 h à 17 h', 'Dimanche : 10 h à 12 h'],
        'Tarifs indicatifs': ['Entrée adulte : 4,90 €', 'Entrée avec location de patins : 8,60 €', 'Tarif réduit (étudiants et jeunes jusqu’à 25 ans) : 3,70 €', 'Tarif réduit avec location de patins : 6,50 €', 'Moins de 3 ans : gratuit']
      },
      tipLabel: 'À savoir', tip: 'Les horaires peuvent changer pendant les vacances scolaires et certaines séances peuvent être annulées en raison de compétitions ou de matchs de hockey.',
      lat: 45.92099, lon: 6.12158, gmaps: 'Patinoire Jean Régis, 90 chemin des Fins Nord, Annecy',
      link: 'https://www.annecy.fr/activites/sport/patinoire' },

    { id: 'parapente', sec: 'sport', name: 'Parapente au-dessus du lac', label: 'Une expérience inoubliable',
      cover: { color: '#f45fb5', ink: 'light', img: 'images/activites/parapente.jpg', credit: 'Guilhem Vellut, CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Parapente_@_Aire_de_d%C3%A9collage_@_Col_de_la_Forclaz_(51223038610).jpg', pos: 'center 35%' },
      desc: ['Le parapente est l’une des expériences les plus impressionnantes à vivre autour d’Annecy. Accompagné d’un moniteur professionnel, vous prenez votre envol en tandem depuis les hauteurs de Talloires ou du col de la Forclaz. Pendant le vol, vous profitez d’une vue exceptionnelle sur le lac turquoise, les montagnes et les villages environnants.',
             'C’est plutôt un « bon plan exceptionnel » qu’une sortie régulière : une activité parfaite pour un anniversaire, un cadeau ou la visite de la famille.'],
      facts: [['Lieu de départ', 'Généralement le col de la Forclaz ou Planfait, à Talloires-Montmin'], ['Période', 'Certains prestataires proposent des vols toute l’année, mais les conditions météorologiques sont déterminantes. La période la plus favorable est généralement du printemps à l’automne'], ['Durée', 'Environ 10 à 50 minutes de vol selon la formule choisie']],
      lat: 45.80846, lon: 6.24475, gmaps: 'Col de la Forclaz, Talloires-Montmin',
      link: 'https://www.getyourguide.com/annecy-l1315/paragliding-flight-over-lake-annecy-talloires-t989989/' },

    /* ---------- 4. Table avec vue ---------- */
    { id: 'balcon-du-lac', sec: 'table', name: 'Le Balcon du Lac', label: 'Col de la Forclaz',
      cover: { color: '#b8f56a', ink: 'dark', img: 'images/activites/balcon-du-lac.jpg', pos: 'center 55%' },
      desc: 'Situé au col de la Forclaz, à environ 1 157 mètres d’altitude, Le Balcon du Lac est un restaurant-brasserie qui offre une vue panoramique sur le lac d’Annecy et les montagnes environnantes. Il propose une cuisine traditionnelle française et des spécialités savoyardes, notamment des plats à base de fromage. Sa grande terrasse permet également d’observer les parapentistes qui décollent à proximité. C’est une belle adresse pour un déjeuner en famille ou un repas entre amis dans un cadre exceptionnel.',
      facts: [['Adresse', '2299 route de Talloires, Col de la Forclaz, 74210 Talloires-Montmin'], ['Budget indicatif', 'Environ 20 à 40 € par personne, selon les plats et les boissons'], ['Téléphone', '04 50 60 70 24']],
      lists: {
        'Période d’ouverture': ['Haute saison (mai à septembre) : tous les jours, midi et soir', 'Basse saison (octobre à avril) : horaires plus limités, à vérifier avant de venir'],
        'Conseils pratiques': ['Réservez une table à l’avance, surtout le week-end et pendant les vacances', 'Demandez une table en terrasse pour profiter pleinement de la vue', 'Prévoyez une voiture : le restaurant se trouve à environ 25 minutes d’Annecy', 'Évitez de compter sur un taxi pour le retour tard le soir ; prévoyez votre transport à l’avance', 'Consultez les horaires avant de partir, car ils changent selon la saison']
      },
      lat: 45.80826, lon: 6.24450, gmaps: 'Le Balcon du Lac, Col de la Forclaz, Talloires-Montmin',
      link: 'https://savoie-mont-blanc.com/en/restaurants/le-balcon-du-lac-122903' },

    /* ---------- 5. Châteaux et vieille ville ---------- */
    { id: 'chateau-annecy', sec: 'chateaux', name: 'Musée-Château d’Annecy',
      cover: { color: '#ffe94d', ink: 'dark', img: 'images/activites/chateau.jpg', credit: 'Kemper Boyd, CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_d%27Annecy.jpg' },
      free: 'Gratuit le 1er dimanche',
      desc: 'Installé dans un ancien château médiéval qui fut notamment la résidence des comtes de Genève aux XIIIe et XIVe siècles, le Musée-Château d’Annecy est l’un des monuments incontournables de la ville. La visite permet de découvrir des collections variées : archéologie du lac, sculptures médiévales, peintures de paysage, patrimoine régional, art contemporain et cinéma d’animation. Comptez environ une heure pour la visite.',
      facts: [['Adresse', 'Place du Château, 74000 Annecy'], ['Période', 'Ouvert toute l’année, sauf certains jours fériés']],
      lists: {
        'Horaires habituels': ['D’octobre à mai : 10 h – 12 h 30 et 14 h – 17 h 30', 'De juin à septembre : 10 h 30 – 18 h', 'Fermé le mardi', 'Dernière entrée : 45 minutes avant la fermeture'],
        'Tarifs indicatifs': ['Plein tarif : 6,50 €', 'Tarif réduit : 3,50 €', 'En juillet et août : 7 € plein tarif et 4 € tarif réduit', 'Gratuit pour les moins de 12 ans']
      },
      tipLabel: 'Bon plan', tip: 'Entrée gratuite le premier dimanche du mois, d’octobre à mai.',
      lat: 45.89755, lon: 6.12619, gmaps: 'Musée-Château d’Annecy',
      link: 'https://hautesavoiemontblanc-tourisme.com/offres/musee-chateau-dannecy-annecy-fr-5867326/' },

    { id: 'menthon', sec: 'chateaux', name: 'Château de Menthon-Saint-Bernard',
      cover: { color: '#ef3b3b', ink: 'light', img: 'images/activites/menthon.jpg', credit: 'Florian Pépellin, CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Menthon-Saint-Bernard_(2013).JPG' },
      desc: 'Perché sur les hauteurs du village de Menthon-Saint-Bernard, ce magnifique château domine le lac d’Annecy et les montagnes environnantes. Habité par la même famille depuis le XIe siècle, il a été construit et transformé au fil des siècles. Son architecture romantique, avec ses hautes tours, ses tourelles et ses toits pointus, lui donne des airs de château de conte de fées. Les visites guidées permettent de découvrir les pièces historiques, les meubles anciens, la bibliothèque et les jardins.',
      facts: [['Adresse', 'Allée du Château, 74290 Menthon-Saint-Bernard'], ['Durée de la visite', 'Environ 45 minutes, avec un guide'], ['Accès', 'Environ 10 km d’Annecy. Accessible en voiture, avec parking à proximité. Des transports en commun desservent également le village']],
      lists: {
        'Période d’ouverture habituelle': ['Avril, mai, juin, septembre, octobre et début novembre : vendredis, samedis, dimanches et jours fériés, de 13 h à 18 h', 'Juillet et août : tous les jours, de 10 h à 19 h', 'Ouvertures supplémentaires pendant certaines vacances scolaires'],
        'Tarifs': ['Adultes (à partir de 15 ans) : 12 €', 'Enfants de 5 à 14 ans : 6 €', 'Jardins et terrasses uniquement : 3 €', 'Gratuit pour les moins de 5 ans', 'Pas de tarif étudiant spécifique annoncé']
      },
      lat: 45.86397, lon: 6.20352, gmaps: 'Château de Menthon-Saint-Bernard',
      link: 'https://www.tourisme-haute-savoie.com/actualites-de-haute-savoie/a-visiter-en-haute-savoie/chateau-de-menthon-saint-bernard-visite-et-histoire/' },

    { id: 'palais-ile', sec: 'chateaux', name: 'Palais de l’Île', label: 'Le monument emblématique d’Annecy',
      cover: { color: '#d99bf0', ink: 'light', img: 'images/activites/palais-ile.jpg', credit: 'Tournasol7, CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Palais_de_l%27Isle_in_Annecy_04.jpg', pos: 'center 45%' },
      desc: 'Situé au cœur de la vieille ville, au milieu du canal du Thiou, le Palais de l’Île est l’un des monuments les plus emblématiques d’Annecy. Construit sur une petite île rocheuse naturelle, ses parties les plus anciennes remontent au XIIe siècle. Il a successivement servi de maison forte, de prison, de palais de justice et de centre administratif. Aujourd’hui, il accueille le Centre d’interprétation de l’architecture et du patrimoine (CIAP), où les visiteurs peuvent découvrir l’histoire de la ville, son architecture et son développement au fil des siècles.',
      facts: [['Adresse', '3 passage de l’Île, 74000 Annecy'], ['Période', 'Ouvert toute l’année, sauf certains jours fériés']],
      lists: {
        'Horaires habituels': ['D’octobre à mai : 10 h – 12 h 30 et 14 h – 17 h 30', 'De juin à septembre : 10 h 30 – 18 h', 'Fermé le mardi', 'Dernière entrée : 45 minutes avant la fermeture'],
        'Tarifs 2026': ['Plein tarif : 4 € (5 € en juillet et août)', 'Tarif réduit : 2 € (2,50 € en juillet et août)', 'Gratuit pour les moins de 12 ans et les détenteurs du Pass’Région'],
        'Billet combiné Palais de l’Île + Musée-Château': ['Plein tarif : 8 € (9 € en juillet et août)', 'Tarif réduit : 5 €']
      },
      lat: 45.89858, lon: 6.12701, gmaps: 'Palais de l’Isle, 3 passage de l’Île, Annecy',
      link: 'https://musees.annecy.fr/les-3-lieux/palais-de-lile' },

    /* ---------- 6. Spectacles et expos ---------- */
    { id: 'bonlieu', sec: 'spectacles', name: 'Bonlieu', label: 'Scène nationale',
      cover: { color: '#b8f56a', ink: 'dark', img: 'images/activites/bonlieu.jpg', credit: 'Guilhem Vellut, CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Bonlieu_@_Annecy_(35501202375).jpg' },
      desc: 'Le grand lieu culturel du centre d’Annecy ! Bonlieu propose une programmation variée tout au long de l’année : théâtre, danse, musique, cirque et spectacles contemporains. Des représentations et des créations sont proposées dans plusieurs salles, avec parfois des événements hors les murs et des installations artistiques dans la ville.',
      facts: [['Adresse', '1 rue Jean-Jaurès, 74000 Annecy']],
      lat: 45.90187, lon: 6.12800, gmaps: 'Bonlieu Scène nationale, 1 rue Jean-Jaurès, Annecy',
      link: 'https://bonlieu-annecy.com/' },

    { id: 'carres', sec: 'spectacles', name: 'Les Carrés', label: 'Centre social et culturel',
      cover: { color: '#8b5cf6', ink: 'light', icon: 'masks' },
      desc: 'Une association socioculturelle située à Annecy-le-Vieux, qui propose une programmation conviviale et accessible à tous. On y retrouve des concerts, des spectacles de théâtre et de danse, des événements familiaux, des ateliers et des festivals, notamment Jazz aux Carrés en novembre et Tout Feu Tout Femme en octobre. C’est aussi un lieu où participer à des activités culturelles et rencontrer d’autres habitants.',
      facts: [['Adresse', '43 avenue des Carrés, 74940 Annecy']],
      lat: 45.91600, lon: 6.14880, gmaps: 'Les Carrés, 43 avenue des Carrés, Annecy',
      link: 'https://lescarres-asso.com/' }
  ],

  tipsIntro: 'Pour profiter d’Annecy sans vider son compte',
  tips: [
    'Vérifiez toujours dates, horaires et tarifs sur le site officiel avant de vous déplacer.',
    'Montrez votre carte étudiante : de nombreux lieux ont un tarif réduit.',
    'Profitez des gratuités, comme le premier dimanche du mois au Musée-Château d’Annecy (octobre à mai).',
    'Réservez à l’avance pour les festivals, les spectacles et le parapente.',
    'Pour rentrer le soir, consultez les horaires du bus.',
    'Au cinéma, comparez le tarif normal, le tarif étudiant et la carte de plusieurs entrées.',
    'Pendant les grands festivals, la ville est très fréquentée. Les bus, les parkings et les logements sont plus chargés que d’habitude. Prévoyez vos trajets et vos billets à l’avance.',
    'L’office de tourisme recense toutes les salles de la région, pratique pour comparer les programmes : <a href="https://www.lac-annecy.com/activites/cinemas/" target="_blank" rel="noopener">lac-annecy.com/activites/cinemas</a>',
    'Demandez toujours le tarif étudiant à la caisse.'
  ]
};
