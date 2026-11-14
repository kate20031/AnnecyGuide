/* =====================================================================
   DONNÉES DES THÈMES « USMB · VIE ÉTUDIANTE » ET « LOGEMENT »
   Même présentation que « Idées d'activités » : des vignettes, et un clic
   ouvre la fiche complète.
   Chaque rubrique : { id, title, sub?, note?, items: [...] }
   Chaque fiche :
     title    titre (sur la vignette et dans la fiche)
     label    petite ligne sous le titre (optionnel)
     big      mot ou chiffre en grand sur la vignette (court !)
     paras    paragraphes
     facts    lignes courtes [libellé, valeur]
     list     liste à puces
     tip      encadré « À savoir » (tipLabel pour changer le mot)
     sources  liens [texte, adresse]
   ===================================================================== */

window.INFOS = {

  /* ======================= USMB · VIE ÉTUDIANTE ======================= */
  usmb: [
    { id: 'etudes', title: 'Étudier à l’USMB d’Annecy',
      sub: 'Quelques chiffres et repères pour savoir où tu mets les pieds.',
      items: [
        { id: 'chiffres', title: 'Le campus en chiffres', label: 'étudiants à Annecy', big: '4 950',
          paras: ['Le campus d’Annecy accueille environ 4 950 étudiants. Dans toute l’université Savoie Mont Blanc, 1 569 étudiants sont en alternance.'],
          tip: 'Ces chiffres datent de l’année 2021-2022 : ils ont pu évoluer depuis.',
          sources: [['Chiffres clés de l’USMB (PDF)', 'https://www.univ-smb.fr/wp-content/uploads/2022/06/les_donnees_cles_de_l_universite_savoie_mont_blanc.pdf']] },
        { id: 'iut', title: 'L’IUT d’Annecy', label: 'formations', big: '≈ 30',
          paras: ['L’IUT d’Annecy propose une trentaine de formations, dont des BUT en formation initiale (à temps plein) et en alternance.'],
          sources: [['Fiche de l’IUT d’Annecy sur Onisep', 'https://www.onisep.fr/ressources/structures-enseignement/auvergne-rhone-alpes/haute-savoie/iut-d-annecy-universite-savoie-mont-blanc']] },
        { id: 'parcoursup', title: 'Parcoursup : c’est sélectif ?', label: 'candidats pour 190 places', big: '2 695',
          paras: ['Pour certaines formations, il y a beaucoup plus de candidats que de places. Par exemple, en 2025, la licence Économie et gestion comptait 190 places pour 2 695 candidats.',
                  'L’annuaire Thotis donne le nombre de places et de candidats pour chaque formation de l’USMB.'],
          sources: [['Annuaire Parcoursup de l’USMB (Thotis)', 'https://thotismedia.com/annuaire-parcoursup-formations-postbac-universite-savoie-mont-blanc/']] },
        { id: 'hceres', title: 'L’avis officiel sur l’université', label: 'évaluation externe', big: 'HCERES',
          paras: ['Le HCERES, l’organisme public qui évalue les universités, a publié un rapport sur les points forts et les points faibles de l’USMB.'],
          sources: [['Rapport d’évaluation du HCERES (PDF)', 'https://www.hceres.fr/sites/default/files/media/downloads/a2021-ev-0730858l-def-da210021054-032826-rd.pdf']] }
      ] },

    { id: 'budget', title: 'Budget et aides',
      sub: 'Combien prévoir chaque mois, et qui peut t’aider.',
      items: [
        { id: 'mois', title: 'Le budget d’un mois', label: 'en résidence universitaire', big: '700 €',
          paras: ['Selon le guide budget de l’USMB, un étudiant à Chambéry ou à Annecy dépense environ 700 € par mois s’il vit en résidence universitaire, et environ 850 € s’il vit dans un studio privé.'],
          facts: [['En résidence universitaire', 'environ 700 € par mois'], ['En studio privé', 'environ 850 € par mois']],
          sources: [['Guide budget de l’USMB (PDF)', 'https://immersions.univ-smb.fr/dl/accdoc/5']] },
        { id: 'repas', title: 'Le repas à 1 €', label: 'au Crous', big: '1 €',
          paras: ['Depuis le 4 mai 2026, tous les étudiants avec une carte étudiante et un compte Izly actif peuvent manger pour 1 € dans les restaurants du Crous.',
                  'Tous les détails sont dans la rubrique « Manger sans se ruiner ».'],
          sources: [['Repas à 1 € pour tous les étudiants (Aufutur)', 'https://aufutur.fr/vie-etudiante/repas-a-1-euro-pour-tous-les-etudiants-ce-qui-change-dans-les-restaurants-crous-a-partir-du-4-mai-2026/']] },
        { id: 'crous', title: 'Le Crous Grenoble Alpes', label: 'aides et service social', big: 'Crous',
          paras: ['C’est le Crous Grenoble Alpes qui s’occupe d’Annecy : logement, restauration, bourses et aides.',
                  'Il a aussi un service social : tu peux prendre rendez-vous avec une assistante sociale si tu as des difficultés.'],
          sources: [['Crous Grenoble Alpes', 'https://www.crous-grenoble.fr/']] }
      ] },

    { id: 'integration', title: 'Trouver sa place',
      sub: 'Pour rencontrer du monde et ne pas rester seul les premières semaines.',
      items: [
        { id: 'welcome', title: 'Le Welcome Center', label: 'pour bien arriver', big: 'Welcome',
          paras: ['L’USMB a un Welcome Center pour accueillir les étudiants internationaux. Elle organise aussi des événements d’intégration et un programme d’accueil géré par des étudiants.'],
          sources: [['Préparer son arrivée (USMB)', 'https://www.univ-smb.fr/en/international/venir-a-luniversite/informations-pratiques-preparer-son-arrivee/']] },
        { id: 'buddy', title: 'Buddy System', label: 'un parrain étudiant', big: 'Buddy',
          paras: ['Un programme national d’ESN France : chaque étudiant international est mis en relation avec un étudiant local, qui l’aide à s’installer et à découvrir la ville.'],
          sources: [['Buddy System (etudiant.gouv.fr)', 'https://www.etudiant.gouv.fr/fr/buddy-system-parrainez-un-etudiant-international-790']] },
        { id: 'assos', title: 'Les associations étudiantes', label: 'BDE, ASCUS, Inter BDE', big: 'BDE',
          paras: ['Les BDE, l’ASCUS et l’Inter BDE organisent des soirées, des sorties et des événements. C’est le moyen le plus simple de rencontrer d’autres étudiants.',
                  'Suis-les sur les réseaux sociaux pour ne rien rater.'] },
        { id: 'campusfrance', title: 'Le guide Campus France', label: 'Chambéry et Annecy', big: 'Guide',
          paras: ['Un guide en anglais pour les étudiants internationaux : accueil, logement et transports à Chambéry et à Annecy.'],
          sources: [['Guide Campus France (PDF, en anglais)', 'https://ressources.campusfrance.org/pratique/villes/en/Chambery_Annecy_en.pdf']] }
      ] },

    { id: 'savoirvivre', title: 'Le savoir-vivre à la française',
      sub: 'Les petites règles qui font une grande différence au quotidien.',
      note: 'Conseils tirés de guides pour étudiants internationaux.',
      items: [
        { id: 'bonjour', title: 'Toujours dire bonjour', big: 'Bonjour !',
          paras: ['En France, on dit « bonjour » (ou « bonsoir » le soir) en entrant dans un magasin, un bureau ou une salle, avant de demander quoi que ce soit.',
                  'Commencer directement par sa question, ou parler anglais tout de suite, paraît impoli.'],
          sources: [['LaFrance.com', 'https://lafrance.com/french-cultural-etiquette/'], ['On Call International', 'https://blog.oncallinternational.com/?p=6104']] },
        { id: 'vous', title: 'Tu ou vous ?', big: 'Vous',
          paras: ['Avec un inconnu, un professeur ou un commerçant, on dit « vous », jusqu’à ce qu’on te propose le « tu ».',
                  'Entre étudiants, on passe au « tu » très vite.'],
          sources: [['LaFrance.com', 'https://lafrance.com/french-cultural-etiquette/'], ['Transitions Abroad', 'https://mail.transitionsabroad.com/publications/magazine/0505/working_and_living_do_and_donts_in_france.shtml']] },
        { id: 'bise', title: 'Faire la bise', big: 'La bise',
          paras: ['Entre amis, on se salue souvent en se faisant la bise.',
                  'Si tu n’es pas à l’aise, une poignée de main ou un simple « salut » suffit.'],
          sources: [['On Call International', 'https://blog.oncallinternational.com/?p=6104']] },
        { id: 'table', title: 'À table', big: 'À table',
          paras: ['Le repas est un moment à partager : on attend que tout le monde soit servi avant de commencer.',
                  'L’apéritif avant le dîner est une vraie tradition.',
                  'Invité chez quelqu’un ? On n’arrive pas pile à l’heure : quelques minutes de retard, c’est normal.'],
          sources: [['Excelia', 'https://www.excelia-group.com/node/1497927'], ['Bonjour Paris', 'https://bonjourparis.com/food-and-drink/french-etiquette-the-dos-and-the-donts-from-an-insiders-perspective']] },
        { id: 'pourboire', title: 'Le pourboire', big: '5–10 %',
          paras: ['Le pourboire reste modeste : environ 5 à 10 %, c’est très bien.'],
          sources: [['Excelia', 'https://www.excelia-group.com/node/1497927']] },
        { id: 'voix', title: 'Parler doucement', big: 'Chut',
          paras: ['Dans les lieux publics (bus, restaurant, bibliothèque), on parle à voix basse.',
                  'Les Français aiment débattre : un désaccord n’est pas une dispute.'],
          sources: [['LaFrance.com', 'https://lafrance.com/french-cultural-etiquette/'], ['Bonjour Paris', 'https://bonjourparis.com/food-and-drink/french-etiquette-the-dos-and-the-donts-from-an-insiders-perspective']] },
        { id: 'midi', title: 'La pause de midi', big: '12 h',
          paras: ['Beaucoup de bureaux et de petits commerces ferment à l’heure du déjeuner : fais tes démarches le matin ou l’après-midi.'],
          sources: [['Transitions Abroad', 'https://mail.transitionsabroad.com/publications/magazine/0505/working_and_living_do_and_donts_in_france.shtml']] },
        { id: 'colocs', title: 'En colocation', big: 'Colocs',
          paras: ['Respecte tes colocataires : le calme, les espaces partagés, la vaisselle et le ménage. Ça évite beaucoup de tensions.'],
          sources: [['Excelia', 'https://www.excelia-group.com/node/1497927']] }
      ] },

    { id: 'savoie', title: 'La culture savoyarde',
      sub: 'Fromage, apéro et fierté régionale : bienvenue en Savoie.',
      items: [
        { id: 'fondue', title: 'Fondue et raclette', big: 'Fondue',
          paras: ['En Savoie, la fondue et la raclette se partagent : on mange ensemble et on s’attend.',
                  'Elles sont faites avec des fromages locaux comme l’Abondance, le Beaufort ou le Reblochon.'],
          sources: [['Tourisme Haute-Savoie', 'https://www.tourisme-haute-savoie.com/actualites-de-haute-savoie/ou-deguster-fondue-et-raclette-des-les-premiers-froids/'], ['Haute-Savoie (Wikivoyage)', 'https://guides.travel.sygic.com/production/en/Haute-Savoie']] },
        { id: 'pain', title: 'Attention au pain !', big: 'Le pain',
          paras: ['Une vieille tradition dit que celui qui fait tomber son pain dans la fondue doit offrir une bouteille de vin à la table.',
                  'Cette coutume est racontée à Chamonix : à toi de voir si tes amis la respectent !'],
          sources: [['Chamonix.net', 'https://www.chamonix.net/english/chamonix/traditional-dishes']] },
        { id: 'apero', title: 'L’apéro', big: 'Apéro',
          paras: ['L’apéro du soir est un vrai rituel : un verre et quelque chose à grignoter entre amis, avant le dîner.'],
          sources: [['Chamonix.net', 'https://www.chamonix.net/english/chamonix/traditional-dishes']] },
        { id: 'fierte', title: 'Une région fière de son histoire', big: 'Savoie',
          paras: ['Beaucoup d’habitants sont fiers d’une culture et d’un mode de vie « typiquement savoyards ».',
                  'La Savoie a longtemps été un duché indépendant, avec ses fêtes et sa vie de montagne.'],
          sources: [['Haute-Savoie (Wikivoyage)', 'https://guides.travel.sygic.com/production/en/Haute-Savoie'], ['French Library : la Savoie', 'https://frenchlibrary.org/?p=71832']] }
      ] },

    { id: 'deplacer', title: 'Bouger moins cher',
      sub: 'Les cartes de réduction pour le train et les pièges à éviter.',
      items: [
        { id: 'illico', title: 'Carte illico LIBERTÉ JEUNES', label: '−50 % sur les TER', big: '15 €',
          paras: ['Pour les moins de 26 ans : 15 € par an, et 50 % de réduction sur les trains TER dans toute la région Auvergne-Rhône-Alpes, y compris jusqu’à Genève par Bellegarde.'],
          sources: [['SNCF Connect', 'https://www.sncf-connect.com/fr-be/catalogue/description/auvergne-rhone-alpes-carte-illico-liberte-26-ans']] },
        { id: 'avantage', title: 'Carte Avantage Jeune', label: 'pour les 12–27 ans', big: '49 €',
          paras: ['49 €, et 25 à 50 % de réduction selon le train.',
                  'Elle est surtout utile pour les TGV, par exemple Annecy – Paris.'],
          sources: [['Diplomeo', 'https://diplomeo.com/actualite-carte_avantage_jeune_sncf'], ['Comparatif des tarifs réduits (Aufutur)', 'https://aufutur.fr/vie-etudiante/transport-tarifs-reduits-jeunes-etudiants-apprentis/']] },
        { id: 'geneve', title: 'Aller à Genève', label: 'Léman Express', big: 'Genève',
          paras: ['Le Léman Express passe la frontière et traverse plusieurs zones tarifaires. La zone d’Annecy-Pringy-Groisy est à part.'],
          tip: 'Certains abonnements français ne sont pas valables après Annemasse en direction de Genève. Vérifie avant de partir.',
          sources: [['FAQ Léman Express, canton de Genève (PDF)', 'https://www.ge.ch/document/16326/telecharger']] },
        { id: 'bus', title: 'Les bus d’Annecy', label: 'réseau Sibra', big: 'Sibra',
          paras: ['En ville, les bus sont gérés par Sibra. Les lignes et les tarifs seront détaillés dans la rubrique « Transports ».'],
          sources: [['Sibra', 'https://www.sibra.fr/']] }
      ] },

    { id: 'securite', title: 'Montagne et lac : prudence',
      sub: 'Annecy est magnifique, mais la montagne et le lac demandent de la prudence.',
      items: [
        { id: 'montagne', title: 'En montagne', big: 'Prudence',
          paras: ['Après plusieurs accidents graves, la préfecture de Haute-Savoie a demandé aux randonneurs, aux cyclistes et aux grimpeurs de prendre moins de risques et de garder plus de marge de sécurité.'],
          tip: 'Regarde la météo, pars tôt et dis à quelqu’un où tu vas.', tipLabel: 'Notre conseil',
          sources: [['Appel à la prudence en montagne, 2024 (PDF)', 'https://haute-savoie.gouv.fr/contenu/telechargement/45432/289696/file/20240617-CP+prudence+montagne.pdf'], ['Dispositif de sécurité de l’été (PDF)', 'https://www.haute-savoie.gouv.fr/contenu/telechargement/42557/272536/file/20230620-DP+dispositif+s%C3%A9cu+estivale+V2.pdf']] },
        { id: 'lac', title: 'Paddle et bateau sur le lac', big: 'Le lac',
          paras: ['Le lac d’Annecy a ses propres règles : certaines zones sont interdites, protégées ou réservées.',
                  'Lis la brochure officielle avant de sortir en paddle ou en bateau.'],
          sources: [['Règles de navigation du lac (PDF, en anglais)', 'https://www.haute-savoie.gouv.fr/contenu/telechargement/36788/215839/file/plaquette-navigation-lac-annecy-anglais-2021.pdf']] },
        { id: 'baignade', title: 'Se baigner', big: 'Baignade',
          paras: ['Baigne-toi de préférence dans les zones de baignade balisées : en dehors, des règles particulières s’appliquent aux nageurs.'],
          sources: [['Contrôles sur le lac, préfecture (PDF)', 'https://www.haute-savoie.gouv.fr/contenu/telechargement/42698/273362/file/DP-misen-lac-annecy-2022-07-19.pdf']] }
      ] }
  ],

  /* ============================== LOGEMENT ============================== */
  logement: [
    { id: 'budget', title: 'Combien ça coûte ?',
      sub: 'Le budget total d’un mois (logement et vie courante), selon le guide de l’USMB.',
      items: [
        { id: 'residence', title: 'En résidence universitaire', label: 'budget total par mois', big: '≈ 700 €',
          paras: ['En résidence universitaire, un étudiant à Chambéry ou à Annecy dépense environ 700 € par mois au total.'],
          tip: 'Les résidences du Crous sont les moins chères, mais les places partent vite : fais ta demande tôt.', tipLabel: 'Notre conseil',
          sources: [['Guide budget de l’USMB (PDF)', 'https://immersions.univ-smb.fr/dl/accdoc/5']] },
        { id: 'studio', title: 'En studio privé', label: 'budget total par mois', big: '≈ 850 €',
          paras: ['Dans un studio privé, il faut compter environ 850 € par mois au total.'],
          sources: [['Guide budget de l’USMB (PDF)', 'https://immersions.univ-smb.fr/dl/accdoc/5']] }
      ] },

    { id: 'aides', title: 'Les aides pour se loger',
      sub: 'Trois démarches à connaître avant de chercher.',
      items: [
        { id: 'dse', title: 'Demander un logement Crous', label: 'Dossier social étudiant', big: 'DSE',
          paras: ['Pour avoir une chambre en résidence Crous (et une bourse), il faut remplir le Dossier social étudiant (DSE) sur le site messervices.etudiant.gouv.fr, au printemps avant la rentrée.',
                  'À Annecy, c’est le Crous Grenoble Alpes qui gère les résidences.'],
          sources: [['messervices.etudiant.gouv.fr', 'https://www.messervices.etudiant.gouv.fr/'], ['Crous Grenoble Alpes', 'https://www.crous-grenoble.fr/']] },
        { id: 'apl', title: 'L’aide au logement de la CAF', big: 'APL',
          paras: ['La CAF peut payer une partie de ton loyer (l’APL), en résidence comme dans le privé, selon tes revenus.',
                  'Fais la demande sur caf.fr dès que tu as ton contrat de location.'],
          sources: [['caf.fr', 'https://www.caf.fr/']] },
        { id: 'visale', title: 'Un garant gratuit', big: 'Visale',
          paras: ['Pas de garant en France ? Visale, d’Action Logement, peut se porter garant gratuitement pour la plupart des étudiants.',
                  'Le propriétaire est rassuré, et tu n’as rien à payer.'],
          sources: [['visale.fr', 'https://www.visale.fr/']] }
      ] },

    { id: 'seul', title: 'Conseils pour vivre seul',
      sub: 'Premier appartement ? Voici ce qu’on aurait aimé savoir.',
      note: 'Conseils de l’équipe.',
      items: [
        { id: 'etat', title: 'L’état des lieux', big: 'Photos',
          paras: ['À l’arrivée, note et prends en photo chaque défaut : taches, trous, appareils abîmés.',
                  'Sinon, on pourra te les reprocher à ton départ et garder une partie de ta caution.'] },
        { id: 'assurance', title: 'L’assurance habitation', big: 'Assurance',
          paras: ['Elle est obligatoire quand on loue un logement.',
                  'Compare les offres : il existe des formules pour étudiants peu chères.'] },
        { id: 'comptes', title: 'Faire ses comptes', big: 'Budget',
          paras: ['Note tes dépenses fixes (loyer, électricité, internet, téléphone, transport) et garde un peu d’argent pour les imprévus.',
                  'Demande si les charges sont comprises dans le loyer.'] },
        { id: 'courses', title: 'Les courses', big: 'Courses',
          paras: ['Fais une liste et cuisine en plus grande quantité pour plusieurs repas.',
                  'Les bons plans sont dans la rubrique « Manger sans se ruiner ».'] }
      ] },

    { id: 'ici', title: 'Conseils pour vivre à Annecy',
      sub: 'Ce qui change quand on s’installe ici.',
      note: 'Conseils de l’équipe.',
      items: [
        { id: 'tot', title: 'Chercher tôt', big: 'Tôt !',
          paras: ['Annecy est une ville chère et très demandée : les logements partent vite avant la rentrée.',
                  'Commence à chercher plusieurs mois à l’avance.'] },
        { id: 'bus', title: 'Près d’un bus', big: 'Bus',
          paras: ['Vérifie qu’un arrêt de bus pratique mène au campus d’Annecy-le-Vieux, surtout pour l’hiver.'] },
        { id: 'hiver', title: 'Penser à l’hiver', big: 'Hiver',
          paras: ['Les hivers sont froids : avant de signer, demande le type de chauffage et le montant des charges.'] },
        { id: 'international', title: 'Étudiant international ?', big: 'Guide',
          paras: ['Le guide Campus France de Chambéry et Annecy (en anglais) explique le logement, l’accueil et les transports.'],
          sources: [['Guide Campus France (PDF, en anglais)', 'https://ressources.campusfrance.org/pratique/villes/en/Chambery_Annecy_en.pdf']] }
      ] }
  ]
};
