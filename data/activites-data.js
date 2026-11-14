/* =====================================================================
   DONNÉES DU THÈME « IDÉES D'ACTIVITÉS »
   Chaque activité :
     sec      rubrique (festivals, cinemas, sport, table, chateaux, spectacles)
     cover    couverture : { color, ink: "dark"|"light", img?, credit?, url?, icon? }
              (img = photo dans images/activites/, sinon icon = illustration de js/icons.js)
     desc     description
     facts    lignes courtes [libellé, valeur]
     lists    listes détaillées { titre: [lignes] }
     tip      conseil
     lat, lon position sur la carte (pour « Voir sur la carte »)
     gmaps    recherche Google Maps (pour « Photos sur Google Maps »)
     link     site officiel
   ===================================================================== */

window.ACTIVITES = {
  sections: [
    { id: 'festivals',  title: 'Annecy en fête : les festivals à ne pas rater', sub: 'Pour les amoureux de l’animation, de la musique et des traditions. Toute l’année, la ville accueille des événements qui attirent des visiteurs du monde entier : l’occasion de découvrir Annecy autrement, entre amis, parfois gratuitement ou à tarif réduit.' },
    { id: 'cinemas',    title: 'Écran noir, popcorn et petit budget : les cinémas' },
    { id: 'sport',      title: 'Glisse, vol et grand air : le sport à Annecy', sub: 'Pour ceux qui ne tiennent pas en place.' },
    { id: 'table',      title: 'Une table avec vue : les restos pour les grandes occasions', sub: 'Pour fêter les partiels, un anniversaire ou la visite des parents.' },
    { id: 'chateaux',   title: 'Remonter le temps : châteaux et vieille ville' },
    { id: 'spectacles', title: 'Spectacles et expos : la scène culturelle' }
  ],

  items: [
    /* ---------- Festivals ---------- */
    { id: 'high-five', sec: 'festivals', name: 'High Five Festival',
      cover: { color: '#8b5cf6', ink: 'light', img: 'images/activites/high-five.jpg', pos: 'center 30%', credit: 'Affiche officielle', url: 'https://highfive-festival.com/' },
      desc: 'Le rendez-vous incontournable des passionnés de ski, de snowboard et de culture montagnarde. Au programme : projections de films, rencontres avec des sportifs, conférences, concerts et animations. Une excellente sortie entre amis.',
      facts: [['Quand', 'Généralement fin septembre ou début octobre, sur un week-end'], ['Où', 'Différents espaces à Annecy, notamment le cinéma Pathé et le village du festival'], ['Prix', 'Variables selon les projections, les activités et les pass']],
      lat: 45.90341, lon: 6.12337, mapNote: 'Lieu principal : cinéma Pathé', gmaps: 'Pathé Annecy, 7 avenue de Brogny, Annecy',
      link: 'https://highfive-festival.com/' },

    { id: 'retour-alpages', sec: 'festivals', name: 'Retour des alpages', label: 'La fête des troupeaux',
      cover: { color: '#ff7a1a', ink: 'light', img: 'images/activites/retour-alpages.jpg', pos: 'center 30%' }, free: true,
      desc: 'Cette fête traditionnelle célèbre la descente des troupeaux des montagnes après l’été. Les rues de la vieille ville accueillent des vaches, des moutons, des artisans, des musiciens et des groupes folkloriques. On y découvre aussi les spécialités de la région et les anciens métiers savoyards.',
      facts: [['Quand', 'Généralement le deuxième samedi d’octobre'], ['Où', 'Vieille ville d’Annecy, dans les rues piétonnes du centre historique'], ['Prix', 'Entièrement gratuit']],
      lat: 45.89840, lon: 6.12489, gmaps: 'Rue Sainte-Claire, Annecy',
      link: 'https://en.lac-annecy.com/event/retour-des-alpages-annecy/' },

    { id: 'momiji', sec: 'festivals', name: 'Momiji', label: 'Animation japonaise',
      cover: { color: '#ef3b3b', ink: 'light', img: 'images/activites/momiji.jpg', pos: 'center 42%', credit: 'Affiche officielle', url: 'https://www.auditoriumseynod.com/theme/momiji-28032/?lang=fr' },
      desc: 'Un week-end consacré à la culture et au cinéma d’animation japonais : films d’animation, classiques japonais, séances spéciales et ateliers (dessin manga, origami, mini-jardins zen). Une sortie originale pour les amateurs de mangas.',
      facts: [['Quand', 'Généralement en octobre, autour des vacances d’automne'], ['Où', 'Auditorium de Seynod, 1 place de l’Hôtel-de-Ville, 74600 Annecy'], ['Accès', 'En bus depuis le centre-ville']],
      lists: { 'Tarifs indicatifs': ['Un film : 5 €', 'Junk Night : 8 €', 'Pass journée : 12 €', 'Pass week-end : 20 €'] },
      lat: 45.88871, lon: 6.10201, gmaps: 'Auditorium de Seynod, Annecy',
      link: 'https://www.auditoriumseynod.com/theme/momiji-28032/?lang=fr' },

    { id: 'annecy-festival', sec: 'festivals', name: 'Annecy Festival', label: 'Le festival du film d’animation',
      cover: { color: '#19b8e0', ink: 'light', img: 'images/activites/annecy-festival-affiche.jpg', pos: 'center 24%', credit: 'Affiche officielle 2026', url: 'https://www.annecyfestival.com/' },
      desc: 'L’un des plus grands festivals d’animation au monde. Pendant une semaine : projections, avant-premières, expositions, rencontres avec des professionnels et séances en plein air. Idéal pour les passionnés de cinéma, de dessin et de création numérique.',
      facts: [['Quand', 'Généralement en juin, pendant environ une semaine'], ['Où', 'Bonlieu, le cinéma Pathé, la salle Pierre Lamy et le Pâquier (plein air)']],
      lists: { 'Tarifs indicatifs': ['Accréditations : selon la formule et la date d’achat', 'Billets individuels : selon les séances', 'Certaines animations et projections en plein air sont gratuites'] },
      tip: 'Renseigne-toi sur les offres étudiantes.',
      lat: 45.90187, lon: 6.12800, mapNote: 'Lieu principal : Bonlieu', gmaps: 'Bonlieu Scène nationale, Annecy',
      link: 'https://www.annecyfestival.com/' },

    /* ---------- Cinémas ---------- */
    { id: 'nemours', sec: 'cinemas', name: 'Les Nemours', label: 'Le cinéma d’art et d’essai',
      cover: { color: '#ffe94d', ink: 'dark', icon: 'film' },
      desc: 'Cinéma indépendant et historique en plein centre-ville : films d’auteur, films internationaux, versions originales sous-titrées (VOST), avant-premières et rencontres avec des réalisateurs. Idéal pour découvrir un autre cinéma et progresser en français.',
      facts: [['Adresse', '2 place Sainte-Claire, 74000 Annecy'], ['Séances', 'Toute l’année, en journée et en soirée (horaires selon les films)']],
      lists: { 'Tarifs indicatifs': ['Du lundi au jeudi : 9 €', 'Du vendredi au dimanche et jours fériés : 10 €', 'Moins de 14 ans : 5 €', 'Carte Cinéphile (10 entrées) : 70 € + 1,50 € de frais'] },
      lat: 45.89845, lon: 6.12351, gmaps: 'Cinéma Les Nemours, Place Sainte-Claire, Annecy',
      link: 'https://www.haute-savoie-tourisme.org/index.php/705223-cinema-4-nemours' },

    { id: 'pathe', sec: 'cinemas', name: 'Pathé Annecy', label: 'Les grosses sorties',
      cover: { color: '#f45fb5', ink: 'light', icon: 'popcorn' },
      desc: 'Grand cinéma moderne près du centre commercial Courier : dernières sorties françaises et internationales, blockbusters, films d’animation et séances en 3D. Un bon choix pour une sortie entre amis.',
      facts: [['Adresse', '7 avenue de Brogny, 74000 Annecy'], ['Séances', 'Tous les jours, de la fin de matinée jusqu’au soir']],
      lists: { 'Tarifs indicatifs': ['Plein tarif : 15,80 €', 'Étudiants et scolaires : 9,90 €', 'Moins de 14 ans : 6,80 €', 'Séance du matin (avant midi) : 9,50 €'] },
      lat: 45.90341, lon: 6.12337, gmaps: 'Pathé Annecy, 7 avenue de Brogny, Annecy',
      link: 'https://www.pathe.fr/cinemas/cinema-pathe-annecy' },

    /* ---------- Sport ---------- */
    { id: 'patinoire', sec: 'sport', name: 'Patinoire d’Annecy', label: 'Patinoire Jean Régis',
      cover: { color: '#19b8e0', ink: 'light', icon: 'skate' },
      desc: 'Patinoire couverte ouverte toute l’année, avec des séances de patinage public et des soirées à thème pendant les vacances. Une sortie simple et conviviale, même pour essayer le patin pour la première fois.',
      facts: [['Adresse', '90 chemin des Fins Nord, 74000 Annecy'], ['Période', 'Toute l’année, horaires différents pendant les vacances']],
      lists: {
        'Horaires en période scolaire': ['Mardi : 20 h 45 – 22 h', 'Mercredi : 14 h – 17 h', 'Vendredi : 20 h 45 – 22 h 45', 'Samedi : 14 h – 17 h', 'Dimanche : 10 h – 12 h'],
        'Tarifs indicatifs': ['Étudiants et moins de 26 ans : 3,70 €', 'Avec location de patins : 6,50 €', 'Adulte : 4,90 € · avec patins : 8,60 €', 'Moins de 3 ans : gratuit']
      },
      tip: 'Les horaires changent pendant les vacances, et certaines séances sont annulées pour des compétitions ou des matchs de hockey.',
      lat: 45.92099, lon: 6.12158, gmaps: 'Patinoire Jean Régis, 90 chemin des Fins Nord, Annecy',
      link: 'https://www.annecy.fr/activites/sport/patinoire' },

    { id: 'parapente', sec: 'sport', name: 'Parapente', label: 'Au-dessus du lac d’Annecy',
      cover: { color: '#f45fb5', ink: 'light', img: 'images/activites/parapente.jpg', credit: 'Guilhem Vellut, CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Parapente_@_Aire_de_d%C3%A9collage_@_Col_de_la_Forclaz_(51223038610).jpg', pos: 'center 35%' },
      desc: 'L’une des expériences les plus impressionnantes autour d’Annecy. En tandem avec un moniteur professionnel, tu décolles des hauteurs de Talloires et profites d’une vue exceptionnelle sur le lac turquoise et les montagnes. Plutôt un bon plan exceptionnel qu’une sortie régulière : parfait pour un anniversaire, un cadeau ou la visite de la famille.',
      facts: [['Départ', 'Généralement le col de la Forclaz ou Planfait, à Talloires-Montmin'], ['Période', 'Toute l’année chez certains prestataires, selon la météo. Le mieux : du printemps à l’automne'], ['Durée', 'Environ 10 à 50 minutes de vol selon la formule']],
      lat: 45.80846, lon: 6.24475, gmaps: 'Col de la Forclaz, Talloires-Montmin',
      link: 'https://www.getyourguide.com/annecy-l1315/paragliding-flight-over-lake-annecy-talloires-t989989/' },

    /* ---------- Table avec vue ---------- */
    { id: 'balcon-du-lac', sec: 'table', name: 'Le Balcon du Lac', label: 'Col de la Forclaz',
      cover: { color: '#b8f56a', ink: 'dark', img: 'images/activites/balcon-du-lac.jpg', pos: 'center 55%' },
      desc: 'Au col de la Forclaz, à environ 1 157 m d’altitude, ce restaurant-brasserie offre une vue panoramique sur le lac et les montagnes. Cuisine française traditionnelle et spécialités savoyardes au fromage. Depuis la grande terrasse, on regarde décoller les parapentes.',
      facts: [['Adresse', '2299 route de Talloires, Col de la Forclaz, 74210 Talloires-Montmin'], ['Budget', 'Environ 20 à 40 € par personne'], ['Téléphone', '04 50 60 70 24']],
      lists: {
        'Ouverture': ['Haute saison (mai à septembre) : tous les jours, midi et soir', 'Basse saison (octobre à avril) : horaires limités, à vérifier'],
        'Conseils pratiques': ['Réserve à l’avance, surtout le week-end et pendant les vacances', 'Demande une table en terrasse pour la vue', 'Prévois une voiture : environ 25 minutes d’Annecy', 'Pas de taxi tard le soir : organise ton retour à l’avance']
      },
      lat: 45.80826, lon: 6.24450, gmaps: 'Le Balcon du Lac, Col de la Forclaz, Talloires-Montmin',
      link: 'https://savoie-mont-blanc.com/en/restaurants/le-balcon-du-lac-122903' },

    /* ---------- Châteaux ---------- */
    { id: 'chateau-annecy', sec: 'chateaux', name: 'Château d’Annecy', label: 'Musée-Château',
      cover: { color: '#ffe94d', ink: 'dark', img: 'images/activites/chateau.jpg', credit: 'Kemper Boyd, CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_d%27Annecy.jpg' },
      desc: 'Ancienne résidence des comtes de Genève aux XIIIe et XIVe siècles. Environ 1 heure de visite sur 14 salles : patrimoine régional, archéologie du lac, sculpture médiévale, peinture de paysage, art contemporain et cinéma d’animation.',
      facts: [['Horaires', 'Ouvert tous les jours en 2026. Dernière entrée 45 minutes avant la fermeture']],
      lists: { 'Tarifs 2026': ['1er juillet – 31 août : 7 € · réduit 4 €', '1er septembre – 31 décembre : 6,50 € · réduit 3,50 €'] },
      tip: 'Entrée gratuite le premier dimanche du mois, d’octobre à mai.', free: 'Gratuit le 1er dimanche',
      lat: 45.89755, lon: 6.12619, gmaps: 'Musée-Château d’Annecy',
      link: 'https://hautesavoiemontblanc-tourisme.com/offres/musee-chateau-dannecy-annecy-fr-5867326/' },

    { id: 'menthon', sec: 'chateaux', name: 'Château de Menthon-Saint-Bernard',
      cover: { color: '#ef3b3b', ink: 'light', img: 'images/activites/menthon.jpg', credit: 'Florian Pépellin, CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Menthon-Saint-Bernard_(2013).JPG' },
      desc: 'Un château au-dessus du village de Menthon-Saint-Bernard, au bord du lac. Construit pour surveiller le lac, il a été remanié au XIXe siècle dans un style romantique, avec tourelles et toits de conte de fées. La famille de Menthon en est toujours propriétaire et en habite une partie.',
      facts: [['Accès', 'Facile en voiture, plusieurs parkings à proximité. En bus ou à vélo : voir la page Transports']],
      lists: {
        'Ouverture': ['Avril à juin et septembre à novembre : vendredi, samedi, dimanche et jours fériés, 14 h – 18 h', 'Juillet et août : tous les jours, 12 h – 19 h'],
        'Tarifs': ['Adultes : 9,50 €', '6 à 16 ans : 5 €', 'Moins de 6 ans : gratuit', 'Jardin seul : 2 €', 'Pas de tarif étudiant indiqué']
      },
      lat: 45.86397, lon: 6.20352, gmaps: 'Château de Menthon-Saint-Bernard',
      link: 'https://www.tourisme-haute-savoie.com/actualites-de-haute-savoie/a-visiter-en-haute-savoie/chateau-de-menthon-saint-bernard-visite-et-histoire/' },

    /* ---------- Spectacles ---------- */
    { id: 'bonlieu', sec: 'spectacles', name: 'Bonlieu', label: 'Scène nationale',
      cover: { color: '#b8f56a', ink: 'dark', img: 'images/activites/bonlieu.jpg', credit: 'Guilhem Vellut, CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Bonlieu_@_Annecy_(35501202375).jpg' },
      desc: 'Le grand lieu culturel du centre d’Annecy : théâtre, danse, musique, cirque et expositions. La programmation change chaque saison, avec des abonnements et des tarifs réduits pour les jeunes.',
      lat: 45.90187, lon: 6.12800, gmaps: 'Bonlieu Scène nationale, Annecy',
      link: 'https://bonlieu-annecy.com/' },

    { id: 'carres', sec: 'spectacles', name: 'Les Carrés', label: 'Centre social et culturel',
      cover: { color: '#8b5cf6', ink: 'light', icon: 'masks' },
      desc: 'Une association culturelle d’Annecy-le-Vieux, avec sa propre programmation d’événements, de spectacles et d’activités.',
      facts: [['Adresse', '43 avenue des Carrés, 74940 Annecy-le-Vieux']],
      lat: 45.91600, lon: 6.14880, gmaps: 'Les Carrés, 43 avenue des Carrés, Annecy',
      link: 'https://lescarres-asso.com/' }
  ],

  tips: [
    'Vérifie toujours dates, horaires et tarifs sur le site officiel avant de te déplacer.',
    'Montre ta carte étudiante et demande toujours le tarif étudiant à la caisse.',
    'Profite des gratuités, comme le premier dimanche du mois au Musée-Château d’Annecy (octobre à mai).',
    'Réserve à l’avance pour les festivals, les spectacles et le parapente.',
    'Pendant les grands festivals, la ville est très fréquentée : bus, parkings et logements sont plus chargés. Prévois tes trajets et tes billets.',
    'Pour rentrer le soir, consulte les horaires du bus.',
    'Au cinéma, compare le tarif normal, le tarif étudiant et la carte de plusieurs entrées.'
  ],
  cinemasLink: 'https://www.lac-annecy.com/activites/cinemas/'
};
