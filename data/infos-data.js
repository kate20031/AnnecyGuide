/* =====================================================================
   DONNÉES DES THÈMES « USMB · VIE ÉTUDIANTE » ET « LOGEMENT »
   Chaque rubrique : { id, title, sub?, note?, puis des blocs (dans cet ordre) }
     stats    les chiffres clés en grand : [chiffre, légende]
     steps    étapes numérotées : { t: titre, d: texte }
     list     infos à lire d'un coup d'œil : { t: titre court, d: texte }
     faq      questions importantes (s'ouvrent au clic) : { q: question, a: [paragraphes] }
     sources  liens en bas de la rubrique : [texte, adresse]
   Règle : les questions (faq) seulement pour ce qui est vraiment important
   (argent, démarches, sécurité). Les faits intéressants vont dans « list ».
   ===================================================================== */

window.INFOS = {

  /* ======================= USMB · VIE ÉTUDIANTE ======================= */
  usmb: [
    { id: 'etudes', title: 'Étudier à l’USMB d’Annecy',
      sub: 'Quelques chiffres et repères pour savoir où tu mets les pieds.',
      stats: [['4 950', 'étudiants sur le campus d’Annecy'], ['≈ 30', 'formations à l’IUT d’Annecy'], ['2 695', 'candidats pour 190 places en licence Économie et gestion (2025)']],
      list: [
        { t: 'L’alternance', d: 'Dans toute l’université, 1 569 étudiants sont en alternance. L’IUT propose des BUT à temps plein et en alternance.' },
        { t: 'C’est sélectif ?', d: 'Pour certaines formations, il y a beaucoup plus de candidats que de places. L’annuaire Thotis donne les chiffres de chaque formation sur Parcoursup.' },
        { t: 'L’avis officiel', d: 'Le HCERES, l’organisme public qui évalue les universités, a publié un rapport sur les points forts et les points faibles de l’USMB.' }
      ],
      note: 'Les chiffres du campus datent de 2021-2022 : ils ont pu évoluer.',
      sources: [['Chiffres clés de l’USMB (PDF)', 'https://www.univ-smb.fr/wp-content/uploads/2022/06/les_donnees_cles_de_l_universite_savoie_mont_blanc.pdf'],
                ['IUT d’Annecy sur Onisep', 'https://www.onisep.fr/ressources/structures-enseignement/auvergne-rhone-alpes/haute-savoie/iut-d-annecy-universite-savoie-mont-blanc'],
                ['Annuaire Parcoursup (Thotis)', 'https://thotismedia.com/annuaire-parcoursup-formations-postbac-universite-savoie-mont-blanc/'],
                ['Rapport du HCERES (PDF)', 'https://www.hceres.fr/sites/default/files/media/downloads/a2021-ev-0730858l-def-da210021054-032826-rd.pdf']] },

    { id: 'budget', title: 'Budget et aides',
      sub: 'Combien prévoir chaque mois, et qui peut t’aider.',
      stats: [['≈ 700 €', 'par mois en résidence universitaire'], ['≈ 850 €', 'par mois en studio privé'], ['1 €', 'le repas au Crous']],
      faq: [
        { q: 'Combien faut-il prévoir par mois ?',
          a: ['Selon le guide budget de l’USMB, un étudiant à Chambéry ou à Annecy dépense environ 700 € par mois s’il vit en résidence universitaire, et environ 850 € dans un studio privé. C’est le budget total : logement et vie courante.'] },
        { q: 'Comment manger pour 1 € ?',
          a: ['Depuis le 4 mai 2026, tous les étudiants avec une carte étudiante et un compte Izly actif peuvent manger pour 1 € dans les restaurants du Crous, un repas par jour.',
              'Tous les détails sont dans la rubrique « Manger sans se ruiner ».'] },
        { q: 'Qui peut m’aider si j’ai des difficultés ?',
          a: ['À Annecy, c’est le Crous Grenoble Alpes qui s’occupe du logement, de la restauration, des bourses et des aides.',
              'Il a aussi un service social : tu peux prendre rendez-vous avec une assistante sociale.'] }
      ],
      sources: [['Guide budget de l’USMB (PDF)', 'https://immersions.univ-smb.fr/dl/accdoc/5'],
                ['Repas à 1 € (Aufutur)', 'https://aufutur.fr/vie-etudiante/repas-a-1-euro-pour-tous-les-etudiants-ce-qui-change-dans-les-restaurants-crous-a-partir-du-4-mai-2026/'],
                ['Crous Grenoble Alpes', 'https://www.crous-grenoble.fr/']] },

    { id: 'integration', title: 'Trouver sa place',
      sub: 'Pour rencontrer du monde et ne pas rester seul les premières semaines.',
      list: [
        { t: 'Le Welcome Center', d: 'L’USMB accueille les étudiants internationaux, organise des événements d’intégration et un programme d’accueil géré par des étudiants.' },
        { t: 'Buddy System', d: 'Un programme national d’ESN France : chaque étudiant international est mis en relation avec un étudiant local qui l’aide à s’installer.' },
        { t: 'Les associations', d: 'Les BDE, l’ASCUS et l’Inter BDE organisent soirées, sorties et événements. Suis-les sur les réseaux sociaux.' },
        { t: 'Le guide Campus France', d: 'Un guide en anglais sur l’accueil, le logement et les transports à Chambéry et à Annecy.' }
      ],
      sources: [['Préparer son arrivée (USMB)', 'https://www.univ-smb.fr/en/international/venir-a-luniversite/informations-pratiques-preparer-son-arrivee/'],
                ['Buddy System', 'https://www.etudiant.gouv.fr/fr/buddy-system-parrainez-un-etudiant-international-790'],
                ['Guide Campus France (PDF)', 'https://ressources.campusfrance.org/pratique/villes/en/Chambery_Annecy_en.pdf']] },

    { id: 'savoirvivre', title: 'Le savoir-vivre à la française',
      sub: 'Les petites règles qui font une grande différence au quotidien.',
      list: [
        { t: 'Bonjour !', d: 'On dit « bonjour » (ou « bonsoir ») en entrant dans un magasin, un bureau ou une salle, avant de demander quoi que ce soit.' },
        { t: 'Tu ou vous ?', d: '« Vous » avec un inconnu, un professeur ou un commerçant, jusqu’à ce qu’on te propose le « tu ». Entre étudiants, on passe au « tu » très vite.' },
        { t: 'La bise', d: 'Entre amis, on se salue souvent en se faisant la bise. Une poignée de main ou un « salut » suffit si tu n’es pas à l’aise.' },
        { t: 'À table', d: 'On attend que tout le monde soit servi avant de commencer. L’apéritif avant le dîner est une vraie tradition.' },
        { t: 'Invité chez quelqu’un', d: 'On n’arrive pas pile à l’heure : quelques minutes de retard, c’est normal.' },
        { t: 'Le pourboire', d: 'Il reste modeste : environ 5 à 10 %, c’est très bien.' },
        { t: 'Parler doucement', d: 'Dans les lieux publics, on parle à voix basse. Et les Français aiment débattre : un désaccord n’est pas une dispute.' },
        { t: 'La pause de midi', d: 'Beaucoup de bureaux et de petits commerces ferment à l’heure du déjeuner.' },
        { t: 'En colocation', d: 'Respecte le calme, les espaces partagés, la vaisselle et le ménage.' }
      ],
      note: 'Conseils tirés de guides pour étudiants internationaux.',
      sources: [['Excelia', 'https://www.excelia-group.com/node/1497927'], ['Bonjour Paris', 'https://bonjourparis.com/food-and-drink/french-etiquette-the-dos-and-the-donts-from-an-insiders-perspective'],
                ['LaFrance.com', 'https://lafrance.com/french-cultural-etiquette/'], ['On Call International', 'https://blog.oncallinternational.com/?p=6104'],
                ['Transitions Abroad', 'https://mail.transitionsabroad.com/publications/magazine/0505/working_and_living_do_and_donts_in_france.shtml']] },

    { id: 'savoie', title: 'La culture savoyarde',
      sub: 'Fromage, apéro et fierté régionale : bienvenue en Savoie.',
      list: [
        { t: 'Fondue et raclette', d: 'Elles se partagent : on mange ensemble et on s’attend. Elles sont faites avec des fromages locaux comme l’Abondance, le Beaufort ou le Reblochon.' },
        { t: 'Attention au pain !', d: 'Une vieille tradition, racontée à Chamonix, dit que celui qui fait tomber son pain dans la fondue offre une bouteille de vin à la table.' },
        { t: 'L’apéro', d: 'Le soir, un verre et quelque chose à grignoter entre amis avant le dîner : c’est un vrai rituel.' },
        { t: 'Une région fière', d: 'Beaucoup d’habitants sont fiers d’une culture « typiquement savoyarde ». La Savoie a longtemps été un duché indépendant.' }
      ],
      sources: [['Tourisme Haute-Savoie', 'https://www.tourisme-haute-savoie.com/actualites-de-haute-savoie/ou-deguster-fondue-et-raclette-des-les-premiers-froids/'],
                ['Chamonix.net', 'https://www.chamonix.net/english/chamonix/traditional-dishes'],
                ['Haute-Savoie (Wikivoyage)', 'https://guides.travel.sygic.com/production/en/Haute-Savoie'], ['French Library', 'https://frenchlibrary.org/?p=71832']] },

    { id: 'deplacer', title: 'Bouger moins cher',
      sub: 'Les cartes de réduction pour le train et les pièges à éviter.',
      stats: [['15 €', 'par an : −50 % sur les TER (moins de 26 ans)'], ['49 €', 'la Carte Avantage Jeune : −25 à −50 %']],
      faq: [
        { q: 'J’ai moins de 26 ans : quelle carte pour le train ?',
          a: ['La carte illico LIBERTÉ JEUNES coûte 15 € par an et donne 50 % de réduction sur les TER dans toute la région Auvergne-Rhône-Alpes, y compris jusqu’à Genève par Bellegarde.'] },
        { q: 'Et pour aller loin, comme Paris ?',
          a: ['La Carte Avantage Jeune (12 à 27 ans) coûte 49 € et donne 25 à 50 % de réduction selon le train. Elle est surtout utile pour les TGV, par exemple Annecy – Paris.'] },
        { q: 'Mon abonnement marche jusqu’à Genève ?',
          a: ['Pas toujours. Le Léman Express traverse plusieurs zones tarifaires, et certains abonnements français ne sont pas valables après Annemasse en direction de Genève. Vérifie avant de partir.'] },
        { q: 'Comment prendre le bus en ville ?',
          a: ['Les bus d’Annecy sont gérés par Sibra. Les lignes et les tarifs seront détaillés dans la rubrique « Transports ».'] }
      ],
      sources: [['Carte illico LIBERTÉ JEUNES (SNCF)', 'https://www.sncf-connect.com/fr-be/catalogue/description/auvergne-rhone-alpes-carte-illico-liberte-26-ans'],
                ['Carte Avantage Jeune (Diplomeo)', 'https://diplomeo.com/actualite-carte_avantage_jeune_sncf'],
                ['Tarifs réduits (Aufutur)', 'https://aufutur.fr/vie-etudiante/transport-tarifs-reduits-jeunes-etudiants-apprentis/'],
                ['FAQ Léman Express (PDF)', 'https://www.ge.ch/document/16326/telecharger'], ['Sibra', 'https://www.sibra.fr/']] },

    { id: 'securite', title: 'Montagne et lac : prudence',
      sub: 'Annecy est magnifique, mais la montagne et le lac demandent de la prudence.',
      faq: [
        { q: 'Je pars en randonnée : quelles précautions ?',
          a: ['Après plusieurs accidents graves, la préfecture de Haute-Savoie a demandé aux randonneurs, aux cyclistes et aux grimpeurs de prendre moins de risques et de garder plus de marge de sécurité.',
              'Notre conseil : regarde la météo, pars tôt et dis à quelqu’un où tu vas.'] },
        { q: 'Je peux faire du paddle partout sur le lac ?',
          a: ['Non. Le lac d’Annecy a ses propres règles : certaines zones sont interdites, protégées ou réservées. Lis la brochure officielle avant de sortir en paddle ou en bateau.'] },
        { q: 'Où se baigner ?',
          a: ['De préférence dans les zones de baignade balisées : en dehors, des règles particulières s’appliquent aux nageurs.'] }
      ],
      sources: [['Appel à la prudence en montagne (PDF)', 'https://haute-savoie.gouv.fr/contenu/telechargement/45432/289696/file/20240617-CP+prudence+montagne.pdf'],
                ['Sécurité de l’été (PDF)', 'https://www.haute-savoie.gouv.fr/contenu/telechargement/42557/272536/file/20230620-DP+dispositif+s%C3%A9cu+estivale+V2.pdf'],
                ['Navigation sur le lac (PDF, en anglais)', 'https://www.haute-savoie.gouv.fr/contenu/telechargement/36788/215839/file/plaquette-navigation-lac-annecy-anglais-2021.pdf'],
                ['Contrôles sur le lac (PDF)', 'https://www.haute-savoie.gouv.fr/contenu/telechargement/42698/273362/file/DP-misen-lac-annecy-2022-07-19.pdf']] }
  ],

  /* ============================== LOGEMENT ============================== */
  logement: [
    { id: 'etapes', title: 'Trouver un logement, étape par étape',
      sub: 'Le budget total d’un mois, puis les démarches dans le bon ordre.',
      stats: [['≈ 700 €', 'par mois en résidence universitaire'], ['≈ 850 €', 'par mois en studio privé']],
      steps: [
        { t: 'Prévoir son budget', d: 'Compte environ 700 à 850 € par mois au total, logement compris.' },
        { t: 'Demander un logement Crous', d: 'Remplis le Dossier social étudiant au printemps avant la rentrée : c’est le moins cher, mais les places partent vite.' },
        { t: 'Chercher tôt dans le privé', d: 'À Annecy, les logements partent vite : commence plusieurs mois à l’avance.' },
        { t: 'Trouver un garant', d: 'Pas de garant en France ? Visale peut se porter garant gratuitement.' },
        { t: 'Signer et faire l’état des lieux', d: 'Prends des photos de chaque défaut et souscris une assurance habitation.' },
        { t: 'Demander l’APL', d: 'Dès que le contrat est signé, fais ta demande d’aide au logement sur caf.fr.' }
      ],
      sources: [['Guide budget de l’USMB (PDF)', 'https://immersions.univ-smb.fr/dl/accdoc/5']] },

    { id: 'questions', title: 'Les questions importantes',
      sub: 'Les démarches qui font économiser de l’argent.',
      faq: [
        { q: 'Comment avoir une chambre en résidence Crous ?',
          a: ['Il faut remplir le Dossier social étudiant (DSE) sur messervices.etudiant.gouv.fr, au printemps avant la rentrée. Le même dossier sert aussi pour la bourse.',
              'À Annecy, c’est le Crous Grenoble Alpes qui gère les résidences.'] },
        { q: 'Je n’ai pas de garant, je fais comment ?',
          a: ['Visale, d’Action Logement, peut se porter garant gratuitement pour la plupart des étudiants. Le propriétaire est rassuré, et tu n’as rien à payer.'] },
        { q: 'Est-ce que je peux recevoir une aide pour le loyer ?',
          a: ['Oui, la CAF peut payer une partie de ton loyer (l’APL), en résidence comme dans le privé, selon tes revenus. Fais la demande sur caf.fr dès que tu as ton contrat de location.'] },
        { q: 'L’assurance habitation est obligatoire ?',
          a: ['Oui, quand on loue un logement. Compare les offres : il existe des formules pour étudiants peu chères.'] }
      ],
      sources: [['messervices.etudiant.gouv.fr', 'https://www.messervices.etudiant.gouv.fr/'], ['Crous Grenoble Alpes', 'https://www.crous-grenoble.fr/'],
                ['visale.fr', 'https://www.visale.fr/'], ['caf.fr', 'https://www.caf.fr/']] },

    { id: 'seul', title: 'Conseils pour vivre seul',
      sub: 'Premier appartement ? Voici ce qu’on aurait aimé savoir.',
      note: 'Conseils de l’équipe.',
      list: [
        { t: 'L’état des lieux', d: 'À l’arrivée, note et prends en photo chaque défaut. Sinon, on pourra te les reprocher à ton départ et garder une partie de ta caution.' },
        { t: 'Faire ses comptes', d: 'Note tes dépenses fixes (loyer, électricité, internet, téléphone, transport) et garde un peu d’argent pour les imprévus. Demande si les charges sont comprises.' },
        { t: 'Les courses', d: 'Fais une liste et cuisine en plus grande quantité pour plusieurs repas. Les bons plans sont dans « Manger sans se ruiner ».' }
      ] },

    { id: 'ici', title: 'Conseils pour vivre à Annecy',
      sub: 'Ce qui change quand on s’installe ici.',
      note: 'Conseils de l’équipe.',
      list: [
        { t: 'Près d’un bus', d: 'Vérifie qu’un arrêt de bus pratique mène au campus d’Annecy-le-Vieux, surtout pour l’hiver.' },
        { t: 'Penser à l’hiver', d: 'Les hivers sont froids : avant de signer, demande le type de chauffage et le montant des charges.' },
        { t: 'Étudiant international ?', d: 'Le guide Campus France de Chambéry et Annecy (en anglais) explique le logement, l’accueil et les transports.' }
      ],
      sources: [['Guide Campus France (PDF)', 'https://ressources.campusfrance.org/pratique/villes/en/Chambery_Annecy_en.pdf']] }
  ]
};
