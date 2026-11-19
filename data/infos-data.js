/* =====================================================================
   DONNÉES DES THÈMES « USMB · VIE ÉTUDIANTE » ET « LOGEMENT »
   Chaque rubrique : { id, title, sub?, note?, puis des blocs (dans cet ordre) }
     stats    les chiffres clés en grand : [chiffre, légende, icône]
     steps    étapes numérotées : { t: titre, d: texte }
     list     infos à lire d'un coup d'œil : { t: titre court, i: icône, d: texte }
     faq      questions importantes (s'ouvrent au clic) : { q: question, i: icône, a: [paragraphes] }
     icône    nom d'une icône Tabler (liste sur https://tabler.io/icons), par ex. 'train'
     sources  liens en bas de la rubrique : [texte, adresse]
     banner   grande photo en haut (optionnel) : { img, caption, credit, url, pos }
     blocks   (nouvelles rubriques) blocs dans l'ordre voulu : { type: stats | steps | list | paras | tip | facts | bullets | links | linkrow | dos | parts | checklist, ... }
   Règle : les questions (faq) seulement pour ce qui est vraiment important
   (argent, démarches, sécurité). Les faits intéressants vont dans « list ».
   ===================================================================== */

window.INFOS = {

  /* ======================= USMB · VIE ÉTUDIANTE ======================= */
  usmb: [
    { id: 'etudes', title: 'Étudier à l’USMB d’Annecy',
      sub: 'Quelques chiffres et repères pour savoir où tu mets les pieds.',
      stats: [['4 950', 'étudiants sur le campus d’Annecy', 'users'], ['≈ 30', 'formations à l’IUT d’Annecy', 'school'], ['2 695', 'candidats pour 190 places en licence Économie et gestion (2025)', 'chart-bar']],
      list: [
        { t: 'L’alternance', i: 'briefcase', d: 'Dans toute l’université, 1 569 étudiants sont en alternance. L’IUT propose des BUT à temps plein et en alternance.' },
        { t: 'C’est sélectif ?', i: 'chart-bar', d: 'Pour certaines formations, il y a beaucoup plus de candidats que de places. L’annuaire Thotis donne les chiffres de chaque formation sur Parcoursup.' },
        { t: 'L’avis officiel', i: 'certificate', d: 'Le HCERES, l’organisme public qui évalue les universités, a publié un rapport sur les points forts et les points faibles de l’USMB.' }
      ],
      note: 'Les chiffres du campus datent de 2021-2022 : ils ont pu évoluer.',
      sources: [['Chiffres clés de l’USMB (PDF)', 'https://www.univ-smb.fr/wp-content/uploads/2022/06/les_donnees_cles_de_l_universite_savoie_mont_blanc.pdf'],
                ['IUT d’Annecy sur Onisep', 'https://www.onisep.fr/ressources/structures-enseignement/auvergne-rhone-alpes/haute-savoie/iut-d-annecy-universite-savoie-mont-blanc'],
                ['Annuaire Parcoursup (Thotis)', 'https://thotismedia.com/annuaire-parcoursup-formations-postbac-universite-savoie-mont-blanc/'],
                ['Rapport du HCERES (PDF)', 'https://www.hceres.fr/sites/default/files/media/downloads/a2021-ev-0730858l-def-da210021054-032826-rd.pdf']] },

    { id: 'budget', title: 'Budget et aides',
      sub: 'Combien prévoir chaque mois, et qui peut t’aider.',
      stats: [['≈ 700 €', 'par mois en résidence universitaire', 'building'], ['≈ 850 €', 'par mois en studio privé', 'home'], ['1 €', 'le repas au Crous', 'tools-kitchen-2']],
      faq: [
        { q: 'Combien faut-il prévoir par mois ?', i: 'wallet',
          a: ['Selon le guide budget de l’USMB, un étudiant à Chambéry ou à Annecy dépense environ 700 € par mois s’il vit en résidence universitaire, et environ 850 € dans un studio privé. C’est le budget total : logement et vie courante.'] },
        { q: 'Comment manger pour 1 € ?', i: 'tools-kitchen-2',
          a: ['Depuis le 4 mai 2026, tous les étudiants avec une carte étudiante et un compte Izly actif peuvent manger pour 1 € dans les restaurants du Crous, un repas par jour.',
              'Tous les détails sont dans la rubrique « Manger sans se ruiner ».'] },
        { q: 'Qui peut m’aider si j’ai des difficultés ?', i: 'heart-handshake',
          a: ['À Annecy, c’est le Crous Grenoble Alpes qui s’occupe du logement, de la restauration, des bourses et des aides.',
              'Il a aussi un service social : tu peux prendre rendez-vous avec une assistante sociale.'] }
      ],
      sources: [['Guide budget de l’USMB (PDF)', 'https://immersions.univ-smb.fr/dl/accdoc/5'],
                ['Repas à 1 € (Aufutur)', 'https://aufutur.fr/vie-etudiante/repas-a-1-euro-pour-tous-les-etudiants-ce-qui-change-dans-les-restaurants-crous-a-partir-du-4-mai-2026/'],
                ['Crous Grenoble Alpes', 'https://www.crous-grenoble.fr/']] },

    { id: 'integration', title: 'Trouver sa place',
      banner: { img: 'images/banners/vieille-ville.jpg', caption: 'La vieille ville d’Annecy', credit: 'Guilhem Vellut, CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Canal_@_Vieille_Ville_@_Annecy_(51188581845).jpg', pos: 'center 80%' },
      sub: 'Pour rencontrer du monde et ne pas rester seul les premières semaines.',
      list: [
        { t: 'Le Welcome Center', i: 'door-enter', d: 'L’USMB accueille les étudiants internationaux, organise des événements d’intégration et un programme d’accueil géré par des étudiants.' },
        { t: 'Buddy System', i: 'friends', d: 'Un programme national d’ESN France : chaque étudiant international est mis en relation avec un étudiant local qui l’aide à s’installer.' },
        { t: 'Les associations', i: 'users-group', d: 'Les BDE, l’ASCUS et l’Inter BDE organisent soirées, sorties et événements. Suis-les sur les réseaux sociaux.' },
        { t: 'Le guide Campus France', i: 'book', d: 'Un guide en anglais sur l’accueil, le logement et les transports à Chambéry et à Annecy.' }
      ],
      sources: [['Préparer son arrivée (USMB)', 'https://www.univ-smb.fr/en/international/venir-a-luniversite/informations-pratiques-preparer-son-arrivee/'],
                ['Buddy System', 'https://www.etudiant.gouv.fr/fr/buddy-system-parrainez-un-etudiant-international-790'],
                ['Guide Campus France (PDF)', 'https://ressources.campusfrance.org/pratique/villes/en/Chambery_Annecy_en.pdf']] },

    { id: 'savoirvivre', title: 'Vivre en France : à faire et à éviter',
      sub: 'Les règles qu’on ne te dit pas toujours, au quotidien, à table et en Savoie.',
      blocks: [
        { type: 'dos', h: 'La vie de tous les jours', items: [
          { n: 1, ok: true, i: 'hand-move', t: 'Dire « bonjour » en premier', d: 'Dis « bonjour » en entrant dans un magasin, un bureau, une salle de cours, une salle d’attente ou un ascenseur. Le soir, dis « bonsoir ». En partant, dis « au revoir » ou « bonne journée ». Oublier de saluer, c’est l’erreur la plus courante des visiteurs.' },
          { n: 2, ok: true, i: 'language', t: 'Essayer le français d’abord', d: 'Commence la conversation en français, même si tu ne connais que quelques mots. Les Français apprécient l’effort, et beaucoup t’aideront ensuite en anglais.' },
          { n: 3, ok: true, i: 'messages', t: 'Dire « vous » d’abord', d: '« Vous » est la forme polie. Utilise-le avec les enseignants, le personnel, les personnes plus âgées et les inconnus. Passe au « tu » seulement quand l’autre te le propose. Entre étudiants, on se tutoie souvent très vite. Dans le doute, dis « vous ».' },
          { n: 4, ok: true, i: 'heart', t: 'Être prêt pour « la bise »', d: 'Entre amis, on se salue souvent par de légers bisous sur la joue : c’est « la bise ». Le nombre de bises change selon les régions. Dans les situations formelles, on se serre la main. Dans le doute, attends que l’autre commence. Depuis la pandémie, beaucoup de gens sont plus souples sur ce point.' },
          { n: 5, ok: true, i: 'clock', t: 'Être à l’heure en cours, mais pas pile à l’heure pour un dîner', d: 'Pour un dîner, certains trouvent poli d’arriver 10 à 15 minutes en retard, pour laisser à l’hôte le temps de se préparer. Mais les habitudes varient : suis les indications de ton hôte et évite d’arriver très en retard sans prévenir.' },
          { n: 6, ok: false, i: 'volume-2', t: 'Parler fort en public', d: 'En France, on parle en général doucement dans les transports, au restaurant et dans les espaces partagés. Baisse la voix. On engage aussi rarement la conversation avec des inconnus dans une file d’attente ou un ascenseur : un simple « bonjour » suffit.' },
          { n: 7, ok: false, i: 'lock', t: 'Parler d’argent ou de sujets privés trop tôt', d: 'Quand tu rencontres quelqu’un pour la première fois, ne pose pas de questions sur son salaire, l’argent de sa famille ou d’autres sujets privés. Fais attention à la politique et à la religion au début. Les sujets plus sûrs : la cuisine, la musique, l’art, les voyages et la culture.' },
          { n: 8, ok: true, i: 'speakerphone', t: 'S’attendre à des débats animés', d: 'Les Français aiment discuter des idées et ne sont souvent pas d’accord ouvertement. C’est normal : ce n’est ni de la colère ni de l’impolitesse. Tu peux donner ton avis poliment. « Je ne suis pas d’accord » est une phrase normale dans une discussion.' },
          { n: 9, ok: true, i: 'home-heart', t: 'Respecter tes colocataires', d: 'En colocation, nettoie après avoir cuisiné et garde les espaces communs rangés. Respecte les heures calmes, surtout le soir en semaine. Un repas partagé ou un apéro, c’est un bon moyen de créer de bonnes relations avec les personnes avec qui tu vis.' }
        ] },
        { type: 'dos', h: 'À table et en sortie', items: [
          { n: 10, ok: true, i: 'tools-kitchen-2', t: 'Prendre ton temps à table', d: 'Attends que tout le monde soit servi avant de commencer à manger. Au restaurant, les repas prennent souvent du temps : les plats et les serveurs arrivent parfois plus lentement. Quand tu veux partir, c’est à toi de demander l’addition : « L’addition, s’il vous plaît. » Et pendant le repas, range ton téléphone.' },
          { n: 11, ok: false, i: 'coin', t: 'Laisser un gros pourboire', d: 'En France, le service est en général compris dans le prix. On ne s’attend pas à un pourboire, même au restaurant. Si tu es vraiment content du service, tu peux laisser un petit extra. Au café, tu peux arrondir ou laisser ta petite monnaie.' },
          { n: 12, ok: true, i: 'gift', t: 'Apporter un petit cadeau quand tu es invité', d: 'Apporte quelque chose de simple : des chocolats, un dessert, des fleurs ou une bouteille de vin. Propose ton aide avant et après le repas. Attends-toi à un apéritif d’abord : le dîner peut commencer tard.' }
        ] },
        { type: 'dos', h: 'En Savoie : les habitudes locales', items: [
          { n: 13, ok: true, i: 'bus', t: 'Dire bonjour et au revoir au chauffeur de bus', d: 'Dis « bonjour » en montant dans le bus, puis « merci » et « au revoir » en descendant. C’est une petite habitude qui suit la même règle que le conseil 1 : on salue les gens, même au quotidien.' },
          { n: 14, ok: true, i: 'cheese', t: 'Partager la fondue et la raclette', d: 'La fondue et la raclette sont deux des plats les plus connus de Savoie. On les mange traditionnellement en famille ou entre amis. Pour la fondue, chacun trempe son pain dans un caquelon de fromage fondu partagé. Pour la raclette, chacun fait fondre son fromage et le verse sur des pommes de terre. Les fromages locaux comme le Beaufort et le Reblochon sont essentiels dans la cuisine savoyarde. Une tradition amusante : si tu perds ton morceau de pain dans le caquelon, tu dois parfois offrir une bouteille de vin à la table. Les règles dépendent du groupe, alors ne sois pas surpris si chacun a sa version !' },
          { n: 15, ok: true, i: 'glass-full', t: 'Participer à l’apéro', d: 'L’apéro (pour « apéritif ») est une habitude quotidienne en France et en Savoie : on se retrouve pour un verre et quelque chose à grignoter avant le dîner. C’est un bon moyen de rencontrer du monde, alors dis oui quand on t’invite. Tu n’es pas obligé de boire de l’alcool. Beaucoup de Savoyards sont fiers de leur culture et de leur cuisine : montre ton intérêt et pose des questions.' }
        ] }
      ] },

    { id: 'premiere', title: 'Bien commencer ta première année',
      sub: 'Commencer l’université, c’est plus de liberté, de nouvelles responsabilités et beaucoup de nouvelles personnes. Tu n’as pas besoin de tout comprendre ni de te sentir chez toi tout de suite. Laisse-toi du temps, reste curieux et rappelle-toi que les autres étudiants cherchent aussi leur place.',
      blocks: [
        { type: 'parts', items: [
          { i: 'calendar', t: 'Trouver un rythme qui te convient',
            d: 'La vie à l’université est souvent moins encadrée qu’au lycée. Tu as parfois moins de cours, mais on attend de toi que tu organises davantage ton temps. Les cours ne sont qu’une partie de ta semaine : le travail personnel, les trajets, les repas, les courses, le repos et les activités demandent aussi du temps.',
            list: ['Planifie ta semaine : note tes cours, tes dates limites, tes rendez-vous et le temps qu’il te faut pour les tâches du quotidien.',
                   'Garde des moments libres dans ton emploi du temps : les trajets, les imprévus et les devoirs difficiles prennent souvent plus de temps que prévu.',
                   'Travaille régulièrement au lieu de tout laisser pour la dernière minute. De courtes séances bien concentrées rendent les gros travaux plus faciles.',
                   'Découpe tes devoirs en petites étapes : comprendre le sujet, trouver des sources, faire un plan, écrire un premier jet.',
                   'Garde du temps pour dormir, faire du sport, manger, voir tes amis et faire ce que tu aimes. Le repos fait partie d’un bon rythme.',
                   'Fais le point sur ton planning et adapte-le. Le meilleur rythme est celui que tu peux vraiment suivre.',
                   'Un carnet où tu notes tout est aussi très utile. Au début, ça paraît inutile, mais plus tard, ça te servira vraiment !'],
            remember: 'Plus de liberté, c’est aussi être responsable de la façon dont tu utilises ton temps.' },
          { i: 'message-circle', t: 'Parler aux autres',
            d: 'Pas besoin de bien connaître quelqu’un pour commencer à discuter. Beaucoup d’étudiants sont dans la même situation et attendent peut-être aussi que quelqu’un fasse le premier pas.',
            list: ['Dis bonjour aux personnes assises près de toi avant ou après le cours.',
                   'Pose des questions simples sur un cours, un devoir ou une activité. Une petite conversation peut être un bon début.',
                   'Rejoins une association étudiante, une activité sportive, un événement ou un groupe de travail. Les activités partagées aident à rencontrer du monde.',
                   'Participe aux travaux de groupe et aux discussions en classe quand tu peux.',
                   'Garde le contact. Les petites conversations répétées deviennent souvent des amitiés avec le temps.',
                   'Ne t’inquiète pas si tu ne trouves pas ton groupe tout de suite. Les amitiés prennent du temps.'],
            remember: 'Un simple bonjour ou une question peut suffire pour commencer à connaître quelqu’un.' },
          { i: 'heart-handshake', t: 'Être ouvert et patient avec les autres',
            d: 'À l’université, tu vas rencontrer des personnes d’origines, d’habitudes, d’opinions et de façons de travailler différentes. Pas besoin d’être d’accord sur tout pour étudier ou passer du temps ensemble.',
            list: ['Écoute les autres avant de décider ce qu’ils pensent ou pourquoi ils agissent d’une certaine façon.',
                   'Sois patient quand quelqu’un communique, apprend ou travaille différemment de toi.',
                   'Si quelque chose te dérange, pose la question calmement au lieu de tirer des conclusions tout de suite.',
                   'Sois attentif dans les espaces partagés et les travaux de groupe : communique clairement, respecte les dates convenues et préviens si tes plans changent.',
                   'Sois prêt à faire des compromis. Travailler avec les autres, c’est souvent trouver une solution qui convient à tout le monde.',
                   'Laisse aux autres, et à toi-même, le temps de s’adapter.'],
            remember: 'Pas besoin de penser pareil pour se respecter et bien travailler ensemble.' },
          { i: 'help-circle', t: 'Poser des questions, vérifier et apprendre de ses erreurs',
            d: 'À l’université, on attend de toi que tu cherches davantage l’information toi-même. Ça ne veut pas dire que tu dois tout savoir. Si une consigne, une date limite ou une démarche n’est pas claire, demande à la personne ou au service concerné et vérifie l’information officielle.',
            list: ['Demande à ton enseignant ou au responsable de ta formation pour le contenu des cours, les devoirs, les examens et ce qu’on attend de toi.',
                   'Contacte le service étudiant ou administratif concerné pour l’inscription, les documents et les démarches.',
                   'Consulte les plateformes officielles de l’université et ta messagerie universitaire pour les annonces, les changements d’emploi du temps et les dates limites.',
                   'Les messages de tes camarades et des groupes de discussion sont des rappels utiles, mais vérifie les informations importantes auprès d’une source officielle.',
                   'Si une réponse n’est pas claire, pose une autre question. Mieux vaut clarifier tôt que d’agir sur un malentendu.',
                   'Si tu fais une erreur, reconnais-la, corrige-la si possible et apprends-en quelque chose. Tout le monde fait des erreurs en apprenant.'],
            remember: 'Poser une question ne veut pas dire que tu n’es pas capable. Faire semblant de comprendre peut créer de plus gros problèmes.' },
          { i: 'lifebuoy', t: 'Utiliser l’aide autour de toi',
            d: 'Tu n’as pas à régler tous tes problèmes seul. L’université propose des services et des lieux pour t’aider dans tes études et ta vie étudiante. Renseigne-toi sur ce qui existe sur ton campus et sur l’endroit où demander de l’aide.',
            list: ['Le SVEC peut t’orienter vers les bonnes informations et les bons contacts, à l’université ou en ville.',
                   'Les bibliothèques universitaires proposent des espaces de travail et des ressources pour apprendre.',
                   'Les associations étudiantes, le sport et les activités culturelles sont de bons moyens de rencontrer du monde et de faire partie de la vie du campus.',
                   'Le portail étudiant de l’université et ta messagerie universitaire sont essentiels pour trouver les annonces, les services et les infos pratiques.',
                   'Si tu ne sais pas où aller, commence par contacter le département concerné ou le service étudiant, et demande-leur de t’orienter.'] }
        ] },
        { type: 'steps', h: 'Trois choses à retenir', items: [
          { t: 'Laisse-toi du temps', d: 'Tu n’as pas besoin de tout comprendre tout de suite.' },
          { t: 'Ne fais pas tout seul', d: 'Parle aux autres et demande de l’aide quand tu en as besoin.' },
          { t: 'Tu as le droit de te tromper', d: 'Ce qui compte, c’est d’avoir envie d’apprendre.' }
        ] }
      ],
      sources: [['USMB : vie étudiante et campus', 'https://www.univ-smb.fr/en/vie-etudiante-campus/'], ['USMB : espace étudiant', 'https://www.univ-smb.fr/en/vie-etudiante-campus/espace-etudiant-de-lusmb/'],
                ['Discover Uni', 'https://discoveruni.gov.uk/preparing-start-uni/'], ['University of Edinburgh', 'https://www.ed.ac.uk/students/new-students/ready-university/prepare-for-study/prepare-for-your-first-year/time-management'],
                ['University of Melbourne', 'https://students.unimelb.edu.au/academic-skills/get-ready-to-study/succeeding-at-uni/succeeding-at-uni'], ['University of Minnesota', 'https://ote.umn.edu/incoming-first-year-students/advice-new-students'],
                ['Response', 'https://www.response.org.uk/mental-health-resources/resources-for-young-people/starting-uni/'], ['University of St Andrews', 'https://www.st-andrews.ac.uk/guides/time-management-advice-students/']] },

    { id: 'deplacer', title: 'Bouger moins cher',
      banner: { img: 'images/banners/gare.jpg', caption: 'La gare d’Annecy', credit: 'Hugh Llewelyn, CC BY-SA 2.0', url: 'https://commons.wikimedia.org/wiki/File:Annecy_station_(35466633296).jpg', pos: 'center 60%' },
      sub: 'Les cartes de réduction pour le train et les pièges à éviter.',
      stats: [['15 €', 'par an : −50 % sur les TER (moins de 26 ans)', 'train'], ['49 €', 'la Carte Avantage Jeune : −25 à −50 %', 'discount']],
      faq: [
        { q: 'J’ai moins de 26 ans : quelle carte pour le train ?', i: 'train',
          a: ['La carte illico LIBERTÉ JEUNES coûte 15 € par an et donne 50 % de réduction sur les TER dans toute la région Auvergne-Rhône-Alpes, y compris jusqu’à Genève par Bellegarde.'] },
        { q: 'Et pour aller loin, comme Paris ?', i: 'route',
          a: ['La Carte Avantage Jeune (12 à 27 ans) coûte 49 € et donne 25 à 50 % de réduction selon le train. Elle est surtout utile pour les TGV, par exemple Annecy – Paris.'] },
        { q: 'Mon abonnement marche jusqu’à Genève ?', i: 'ticket',
          a: ['Pas toujours. Le Léman Express traverse plusieurs zones tarifaires, et certains abonnements français ne sont pas valables après Annemasse en direction de Genève. Vérifie avant de partir.'] },
        { q: 'Comment prendre le bus en ville ?', i: 'bus',
          a: ['Les bus d’Annecy sont gérés par Sibra. Les lignes et les tarifs seront détaillés dans la rubrique « Transports ».'] }
      ],
      sources: [['Carte illico LIBERTÉ JEUNES (SNCF)', 'https://www.sncf-connect.com/fr-be/catalogue/description/auvergne-rhone-alpes-carte-illico-liberte-26-ans'],
                ['Carte Avantage Jeune (Diplomeo)', 'https://diplomeo.com/actualite-carte_avantage_jeune_sncf'],
                ['Tarifs réduits (Aufutur)', 'https://aufutur.fr/vie-etudiante/transport-tarifs-reduits-jeunes-etudiants-apprentis/'],
                ['FAQ Léman Express (PDF)', 'https://www.ge.ch/document/16326/telecharger'], ['Sibra', 'https://www.sibra.fr/']] },

    { id: 'securite', title: 'Montagne et lac : prudence',
      banner: { img: 'images/banners/lac-montagne.jpg', caption: 'Le lac d’Annecy vu de la montagne', credit: 'Guilhem Vellut, CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Lac_d%27Annecy_@_Panorama_du_Rocher_du_Roux_@_Talloires-Montmin_(51221414233).jpg', pos: 'center 70%' },
      sub: 'Annecy est magnifique, mais la montagne et le lac demandent de la prudence.',
      faq: [
        { q: 'Je pars en randonnée : quelles précautions ?', i: 'mountain',
          a: ['Après plusieurs accidents graves, la préfecture de Haute-Savoie a demandé aux randonneurs, aux cyclistes et aux grimpeurs de prendre moins de risques et de garder plus de marge de sécurité.',
              'Notre conseil : regarde la météo, pars tôt et dis à quelqu’un où tu vas.'] },
        { q: 'Je peux faire du paddle partout sur le lac ?', i: 'kayak',
          a: ['Non. Le lac d’Annecy a ses propres règles : certaines zones sont interdites, protégées ou réservées. Lis la brochure officielle avant de sortir en paddle ou en bateau.'] },
        { q: 'Où se baigner ?', i: 'swimming',
          a: ['De préférence dans les zones de baignade balisées : en dehors, des règles particulières s’appliquent aux nageurs.'] }
      ],
      sources: [['Appel à la prudence en montagne (PDF)', 'https://haute-savoie.gouv.fr/contenu/telechargement/45432/289696/file/20240617-CP+prudence+montagne.pdf'],
                ['Sécurité de l’été (PDF)', 'https://www.haute-savoie.gouv.fr/contenu/telechargement/42557/272536/file/20230620-DP+dispositif+s%C3%A9cu+estivale+V2.pdf'],
                ['Navigation sur le lac (PDF, en anglais)', 'https://www.haute-savoie.gouv.fr/contenu/telechargement/36788/215839/file/plaquette-navigation-lac-annecy-anglais-2021.pdf'],
                ['Contrôles sur le lac (PDF)', 'https://www.haute-savoie.gouv.fr/contenu/telechargement/42698/273362/file/DP-misen-lac-annecy-2022-07-19.pdf']] }
  ],

  /* ============================== LOGEMENT ============================== */
  logement: [
    { id: 'avant', title: 'Trouver un logement à Annecy, étape par étape',
      banner: { img: 'images/banners/residence.jpg', caption: 'Une résidence universitaire à Annecy-le-Vieux', credit: 'Guilhem Vellut, CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:R%C3%A9sidence_universitaire_@_Annecy-le-Vieux_(51040410582).jpg', pos: 'center 55%' },
      sub: 'Trouver un logement en France demande plusieurs étapes. Commence le plus tôt possible.',
      blocks: [
        { type: 'stats', items: [['≈ 700 €', 'par mois au total en résidence universitaire', 'building'], ['≈ 850 €', 'par mois au total en studio privé', 'home']] },
        { type: 'steps', h: 'Les quatre étapes', items: [
          { t: 'Trouver un logement', d: 'Appartement, chambre ou studio : au Crous, en résidence ou dans le privé.' },
          { t: 'Obtenir une garantie de loyer', d: 'Un garant, ou un service comme Visale (gratuit).' },
          { t: 'Souscrire tes assurances', d: 'L’assurance habitation et la responsabilité civile.' },
          { t: 'Demander l’aide au logement', d: 'À la CAF, une fois installé.' }
        ] },
        { type: 'paras', items: ['Certaines étapes dépendent les unes des autres. Beaucoup de propriétaires demandent une garantie quand tu postules pour un logement : les étapes 1 et 2 se font donc souvent en même temps. Tu peux commencer l’étape 2 avant d’avoir trouvé un logement.'] },
        { type: 'tip', label: 'Conseil', text: 'Prévois de payer un dépôt de garantie d’un mois de loyer quand tu signes ton contrat de location.' }
      ],
      sources: [['Guide budget de l’USMB (PDF)', 'https://immersions.univ-smb.fr/dl/accdoc/5']] },

    { id: 'etape1', title: 'Étape 1 : trouver un logement',
      blocks: [
        { type: 'list', h: 'Les types de logement', items: [
          { t: 'Appartement', i: 'building', d: 'Un logement complet avec sa cuisine et sa salle de bain. Tu peux le louer seul ou le partager avec d’autres étudiants : c’est la colocation.' },
          { t: 'Chambre', i: 'bed', d: 'Une chambre seule. La cuisine et la salle de bain sont en général partagées avec d’autres personnes. Elle peut être dans un appartement partagé ou dans une résidence.' },
          { t: 'Studio', i: 'home', d: 'Une seule pièce avec un coin nuit, une petite cuisine et une salle de bain privée. Il est fait pour une personne et coûte en général plus cher qu’une chambre.' }
        ] },
        { type: 'links', h: 'Où chercher', items: [
          { t: 'Le Crous', i: 'building-community',
            d: ['Le Crous (Centre régional des œuvres universitaires et scolaires) est un organisme public qui aide les étudiants en France. Il gère des résidences avec des chambres et des studios à petit prix, et aussi les restaurants universitaires.',
                'Fais ta demande en ligne sur le site du Crous Grenoble Alpes, qui gère les résidences des campus de l’USMB. Tu peux aussi chercher sur le site national Trouver un logement.',
                'Tu n’es pas de l’Union européenne, pas en programme d’échange et sans bourse ? La démarche est différente : lis le guide du Crous pour les étudiants internationaux.'],
            links: [['Crous Grenoble Alpes', 'http://www.crous-grenoble.fr/'], ['Trouver un logement (Crous)', 'https://trouverunlogement.lescrous.fr/'], ['Guide pour les étudiants internationaux', 'https://www.crous-grenoble.fr/etudes-internationales/se-loger-en-france/les-solutions-de-logements-en-france-pour-les-etudiants-internationaux/']] },
          { t: 'Les résidences étudiantes', i: 'building',
            d: ['Des bâtiments faits pour les étudiants. Les chambres et les studios sont souvent meublés.'],
            links: [['Location-Etudiant', 'https://www.location-etudiant.fr/'], ['FJT (Foyer de jeunes travailleurs)', 'https://wheb.ideis.fr/FJT'], ['Résidence Le Chevron', 'https://www.residence-chevron.ideis.fr/en']] },
          { t: 'La location privée', i: 'key',
            d: ['Des appartements à louer seul ou en colocation.'],
            links: [['Le Bon Coin : colocations à Annecy', 'https://www.leboncoin.fr/cl/colocations/cp_annecy_74000'], ['Appartager : Annecy', 'https://www.appartager.com/colocations/haute-savoie/annecy'], ['Roomlala : Annecy', 'https://fr-fr.roomlala.com/chambre-colocation/annecy-145014'], ['HousingAnywhere', 'https://housinganywhere.com/fr/'], ['Formtoit : logements à Annecy', 'https://www.formtoit.org/se-loger/?type=logements&search_location=Annecy,%20Haute-Savoie,%20France&lat=45.89918&lng=6.123801&proximity=25&sort=a-z']] },
          { t: 'L’hébergement temporaire', i: 'tent',
            d: ['Tu auras peut-être besoin d’un endroit pour quelques nuits à ton arrivée en France. L’auberge de jeunesse d’Annecy est une option.'],
            links: [['Auberge de jeunesse d’Annecy', 'https://www.hifrance.org/auberges-de-jeunesse/annecy/']] }
        ] },
        { type: 'tip', label: 'Conseil', text: 'Ne t’inquiète pas si tu n’as pas trouvé de logement au début du semestre. Réserve un hébergement temporaire pour tes premiers jours, puis continue à chercher une fois sur place.' }
      ] },

    { id: 'etape2', title: 'Étape 2 : obtenir une garantie de loyer (Visale)',
      blocks: [
        { type: 'paras', items: ['En France, les propriétaires demandent en général une garantie pour le loyer. Elle montre au propriétaire que le loyer sera payé. Tu as deux possibilités :'] },
        { type: 'list', items: [
          { t: 'Un garant', i: 'users-group', d: 'Une personne qui vit en France et qui accepte de payer ton loyer si tu ne peux pas.' },
          { t: 'Un service de garantie', i: 'shield', d: 'Une entreprise ou un service qui se porte garant pour toi. Deux exemples : Visale (gratuit) et Garant Me (payant).' }
        ] },
        { type: 'facts', items: [['Visale', 'L’option gratuite. La demande se fait en ligne, même si tu n’as pas encore trouvé de logement.'], ['Âge', 'Entre 18 et 30 ans. Visale marche pour le privé et pour les résidences Crous.'], ['Quand', 'Avant de signer ton contrat de location.']] },
        { type: 'tip', label: 'Important', text: 'Étudiants non européens : il faut envoyer une copie de ton visa étudiant pour la demande Visale. Attends d’avoir ton visa avant de commencer.' },
        { type: 'bullets', h: 'Les documents à prévoir', items: [
          'Une pièce d’identité. Si tu viens de l’Union européenne : carte d’identité ou passeport. Sinon : passeport, et visa étudiant ou titre de séjour (un visa long séjour valant titre de séjour, avec la mention « étudiant »).',
          'Une preuve que tu es étudiant : ta lettre d’admission ou ton attestation de pré-inscription. Si tu es déjà inscrit : ton certificat de scolarité.'],
          after: 'La liste exacte s’affiche pendant ta demande en ligne. Envoie des copies claires et complètes.' },
        { type: 'linkrow', h: 'Liens utiles', links: [['Visale : connexion et demande', 'https://fo.visale.fr/#/fr/login/locataire'], ['Visale : site officiel', 'https://visale.fr/'], ['Tutoriel vidéo Visale (sous-titres anglais)', 'https://www.youtube.com/watch?v=RDoqrqSPOKs'], ['Garant Me (payant)', 'https://garantme.fr/fr/']] }
      ] },

    { id: 'etape3', title: 'Étape 3 : souscrire tes assurances',
      sub: 'Il te faut deux assurances en France. Les deux sont obligatoires.',
      blocks: [
        { type: 'links', items: [
          { t: 'L’assurance habitation', i: 'home-shield',
            d: ['Tu dois avoir une assurance habitation française avant d’emménager. Tu donnes l’attestation à ta résidence ou à ton propriétaire.', 'Tu peux t’inscrire en ligne, par exemple chez l’un de ces assureurs, ou chez un autre de ton choix. Chez SMERRA, la formule CONFORT inclut aussi la responsabilité civile.'],
            links: [['Assurances-etudiants.com', 'https://www.assurances-etudiants.com/'], ['SMERRA', 'https://smerra.fr/'], ['LMDE', 'https://www.lmde.fr/']] },
          { t: 'La responsabilité civile', i: 'shield',
            d: ['Elle couvre les dégâts que tu causes à d’autres personnes par accident, par exemple si tu casses les lunettes de quelqu’un.', 'Il te faut l’attestation pour t’inscrire à l’université. Elle est en général comprise dans l’assurance habitation : vérifie que c’est le cas dans la tienne.'] }
        ] }
      ] },

    { id: 'etape4', title: 'Étape 4 : demander l’aide au logement (CAF)',
      blocks: [
        { type: 'paras', items: ['La CAF (Caisse d’allocations familiales) est l’organisme français qui verse les aides au logement. Tu peux faire ta demande une fois arrivé et installé dans ton logement.'] },
        { type: 'bullets', h: 'Important', warn: true, items: ['Le premier mois n’est jamais payé.', 'Si tu y as droit, les versements commencent en général à partir du 3e mois.', 'Ne compte pas sur cette aide dans ton budget.'] },
        { type: 'steps', h: 'Comment faire la demande', items: [
          { t: 'Prépare tes documents', d: 'Il te faudra sans doute un compte bancaire français et ton certificat d’inscription.' },
          { t: 'Vérifie que tu y as droit', d: 'Lis les conditions sur la page de la CAF consacrée aux aides au logement.', links: [['Les aides au logement (CAF)', 'https://caf.fr/allocataires/aides-et-demarches/droits-et-prestations/logement/les-aides-personnelles-au-logement']] },
          { t: 'Crée ton compte CAF', d: 'Sur la page de création de compte de la CAF.', links: [['Créer mon compte CAF', 'https://connect.caf.fr/creationcompteappli/dist/?forceReload=20250610&contexteAppel=caffr&urlredirect=%2Fredirect%2Fs%2FRedirect%3Fpage%3DmonCompteFormulaires%26prestaDemandee%3DDAL&contexteDemandePrestation=true#/introduction'], ['Tutoriel vidéo', 'https://youtu.be/HQWrur-lsLs?si=MRVVOofFa1SOqgZW']] },
          { t: 'Fais ta demande en ligne', d: 'La liste des documents demandés est sur la page de la CAF pour les étudiants étrangers.', links: [['Tutoriel vidéo', 'https://youtu.be/Eta99yM8tnA?si=2wNwswYu2BB2q4jm'], ['Étudiant étranger : la page de la CAF', 'https://caf.fr/allocataires/actualites/actualites-nationales/etudiant-etranger-nous-vous-aidons-']] }
        ] }
      ] },

    { id: 'checklist', title: 'Ma liste à cocher',
      sub: 'Coche au fur et à mesure : tes cases restent cochées sur cet appareil.',
      blocks: [
        { type: 'checklist', key: 'logement', items: [
          'J’ai choisi le type de logement que je veux.',
          'J’ai une garantie (un garant, Visale ou Garant Me).',
          'J’ai une assurance habitation, et je sais que la responsabilité civile est comprise.',
          'Je sais qu’il me faudra sans doute un compte bancaire français.',
          'Je sais que je dois payer un dépôt de garantie d’un mois de loyer.',
          'J’ai prévu un hébergement temporaire si j’en ai besoin.',
          'J’ai fait ma demande à la CAF après avoir emménagé.'] }
      ] }
  ]
};
