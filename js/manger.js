/* Affichage du thème « Manger sans se ruiner » à partir de data/manger-data.js */
(function () {
  var D = window.MANGER;
  if (!D) return;

  /* ---------- outils ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function km(a, b) {
    var R = 6371, toR = Math.PI / 180;
    var dLat = (b.lat - a.lat) * toR, dLon = (b.lon - a.lon) * toR;
    var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(a.lat * toR) * Math.cos(b.lat * toR) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function fmtDist(d) { return d < 1 ? Math.round(d * 1000 / 10) * 10 + ' m' : d.toFixed(1).replace('.', ',') + ' km'; }
  function walkMin(d) { return Math.max(1, Math.round(d * 1.3 / 5 * 60)); } /* 1,3 = détours des rues, 5 km/h */
  function euros(n) { return n ? '<span class="price" aria-label="Prix ' + n + ' sur 3">' + '€€€'.slice(0, n) + '<span class="price-off">' + '€€€'.slice(n) + '</span></span>' : ''; }
  function distChip(p) { var d = km(D.campus, p); return '<span class="dist">' + fmtDist(d) + ' du campus</span>'; }
  function mapBtn(p, kind) { return '<button type="button" class="map-btn" data-kind="' + kind + '" data-id="' + esc(p.id) + '">Voir sur la carte</button>'; }
  /* Lien vers la fiche Google Maps du lieu (photos, avis, horaires). « gmaps » dans les données permet de forcer la recherche. */
  function gmapsUrl(p) {
    var q = p.gmaps || (p.name + ', ' + String(p.address || '').split(/ · |\(/)[0] + (/annecy|seynod/i.test(p.address || '') ? '' : ', Annecy'));
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  }
  function photoLink(p) { return '<a class="gphotos" href="' + gmapsUrl(p) + '" target="_blank" rel="noopener">Photos sur Google Maps</a>'; }
  function actions(p, kind) { return '<div class="actions">' + photoLink(p) + mapBtn(p, kind) + '</div>'; }
  function list(items) { return items && items.length ? '<ul class="clean">' + items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' : ''; }
  function dishes(items, label) { return items && items.length ? '<p class="dish-label">' + (label || 'À goûter') + '</p><div class="dishes">' + items.map(function (i) { return '<span>' + esc(i) + '</span>'; }).join('') + '</div>' : ''; }


  var ALL = {};
  function reg(kind, arr) { arr.forEach(function (p) { ALL[kind + ':' + p.id] = p; }); }
  reg('crous', D.crous); reg('resto', D.restaurants); reg('coffee', D.coffee); reg('market', D.supermarkets);

  /* ---------- 1. CROUS ---------- */
  function crousHTML() {
    var general =
      '<div class="lead-grid">' +
        '<div class="card"><div class="tags"><span class="tag">1 € le repas</span></div><h3>Le repas à 1 €</h3>' +
          '<p>Depuis le 4 mai 2026, tous les étudiants avec une carte étudiante et un compte Izly actif ont droit au repas à 1 € dans les restos du Crous. Un seul repas par jour, même si tu vas dans plusieurs lieux.</p></div>' +
        '<div class="card"><h3>La formule à 6 points</h3>' +
          '<div class="tray" aria-label="Plat 4 points, accompagnements 2 points"><span class="pt main">1</span><span class="pt main">2</span><span class="pt main">3</span><span class="pt main">4</span><span class="pt side">5</span><span class="pt side">6</span></div>' +
          '<ul class="clean"><li>Plat principal : généralement 4 points.</li><li>Entrée, salade, fromage ou dessert complètent les 2 points restants.</li><li>Au-delà de 6 points, un supplément est demandé par point.</li></ul></div>' +
        '<div class="note butter"><b>Attention aux points</b>Une salade ou une petite collation coûte 1 à 2 points, un dessert 2 à 3 points. Regarde l’étiquette avant de remplir ton plateau. Le petit pain est gratuit et ne compte pas.</div>' +
      '</div>' +
      '<div class="lead-grid two">' +
        '<div class="card"><h3>Payer avec Izly</h3><p>Izly est le porte-monnaie du Crous : c’est lui qui te donne le tarif étudiant. Après ton inscription, tu reçois un courriel d’activation sur ton adresse étudiante.</p>' +
          '<p><strong>Si ça bloque :</strong> crée ton compte sur le site <a href="https://www.izly.fr/" target="_blank" rel="noopener">izly.fr</a> plutôt que dans l’appli, vérifie le courriel reçu, puis contacte le support Izly.</p></div>' +
        '<div class="card"><h3>Trois façons de payer</h3><ul class="clean"><li><strong>Appli Izly :</strong> montre le QR code à la caisse.</li><li><strong>Carte étudiante :</strong> si elle est liée à ton compte Izly.</li><li><strong>Carte bancaire :</strong> acceptée aussi, mais au prix normal (pas de tarif étudiant).</li></ul></div>' +
      '</div>' +
      '<div class="warn"><b>À savoir :</b> avec une carte bancaire classique, tu n’as pas le tarif étudiant. Pour le repas à 1 €, paie toujours avec Izly.</div>' +
      '<h3 class="list-title">Les lieux du Crous sur le campus</h3>';

    var places = D.crous.map(function (p) {
      return '<article class="place' + (p.main ? ' main' : '') + '" id="crous-' + p.id + '">' +
        '<div class="place-head"><div><div class="tags"><span class="tag pine">' + esc(p.kind) + '</span>' + (p.main ? '<span class="tag">Le principal</span>' : '') + '</div>' +
        '<h4>' + esc(p.name) + '</h4><p class="meta">' + esc(p.address) + '</p></div>' + actions(p, 'crous') + '</div>' +
        '<dl class="facts"><div><dt>Horaires</dt><dd>' + esc(p.hours) + '</dd></div><div><dt>Paiement</dt><dd>' + esc(p.pay) + '</dd></div>' +
        (p.access ? '<div><dt>Accès</dt><dd>' + esc(p.access) + '</dd></div>' : '') +
        (p.phone ? '<div><dt>Téléphone</dt><dd>' + esc(p.phone) + '</dd></div>' : '') + '</dl>' +
        list(p.info) +
        (p.tip ? '<div class="tip"><b>Astuce</b><p>' + esc(p.tip) + '</p></div>' : '') +
        (p.figure ? '<figure class="big-fig"><img src="' + esc(p.figure.src) + '" alt="' + esc(p.figure.alt) + '" loading="lazy"><figcaption>' + esc(p.figure.caption) + '</figcaption></figure>' : '') +
        '<p class="src-line"><a href="' + esc(p.link) + '" target="_blank" rel="noopener">Page officielle du Crous</a></p>' + '</article>';
    }).join('');
    return general + '<div class="places">' + places + '</div>';
  }

  /* ---------- 2. RESTAURANTS ---------- */
  var state = { cat: 'all', price: 0, sort: 'name' };
  var restoRoot = null;
  function catLabel(id) { for (var i = 0; i < D.categories.length; i++) if (D.categories[i].id === id) return D.categories[i].label; return id; }

  function restoShell() {
    var chips = '<button type="button" class="chip" data-cat="all" aria-pressed="true">Tout</button>' +
      D.categories.map(function (c) {
        var n = D.restaurants.filter(function (r) { return r.cat.indexOf(c.id) >= 0; }).length;
        return n ? '<button type="button" class="chip" data-cat="' + c.id + '" aria-pressed="false">' + esc(c.label) + ' <small>' + n + '</small></button>' : '';
      }).join('');
    return '<p class="sub">Choisis une envie, un budget, ou trie par distance du campus. Les prix sont par personne, boisson non comprise, et donnés à titre indicatif.</p>' +
      '<div class="filters" role="group" aria-label="Type de cuisine">' + chips + '</div>' +
      '<div class="filter-row">' +
        '<div class="seg" role="group" aria-label="Budget"><span>Budget</span>' +
          '<button type="button" data-price="0" aria-pressed="true">Tous</button><button type="button" data-price="1" aria-pressed="false">€</button><button type="button" data-price="2" aria-pressed="false">€€</button><button type="button" data-price="3" aria-pressed="false">€€€</button></div>' +
        '<div class="seg" role="group" aria-label="Trier"><span>Trier</span>' +
          '<button type="button" data-sort="name" aria-pressed="true">A → Z</button><button type="button" data-sort="dist" aria-pressed="false">Plus près du campus</button></div>' +
      '</div>' +
      '<p class="legend-line"><span class="price">€</span> moins de 15 € · <span class="price">€€</span> 15 – 30 € · <span class="price">€€€</span> plus de 30 €</p>' +
      '<p class="count" id="resto-count" aria-live="polite"></p><div class="grid cards" id="resto-list"></div>';
  }
  function restoCard(r) {
    return '<article class="place">' +
      '<div class="tags">' + r.cat.map(function (c) { return '<span class="tag pine">' + esc(catLabel(c)) + '</span>'; }).join('') + '</div>' +
      '<h4>' + esc(r.name) + '</h4><p class="meta">' + esc(r.area) + ' · ' + esc(r.address) + '</p>' +
      '<p class="price-line">' + euros(r.price) + ' <span>' + esc(r.priceText) + '</span></p>' +
      dishes(r.dishes) + (r.note ? '<p class="note-line">' + esc(r.note) + '</p>' : '') +
      '<div class="place-foot">' + distChip(r) + actions(r, 'resto') + '</div>' + '</article>';
  }
  function renderResto() {
    var items = D.restaurants.filter(function (r) {
      return (state.cat === 'all' || r.cat.indexOf(state.cat) >= 0) && (!state.price || r.price === state.price);
    });
    items.sort(state.sort === 'dist' ? function (a, b) { return km(D.campus, a) - km(D.campus, b); } : function (a, b) { return a.name.localeCompare(b.name, 'fr'); });
    var box = restoRoot.querySelector('#resto-list');
    box.innerHTML = items.length ? items.map(restoCard).join('') : '<p class="gallery-empty">Aucun restaurant pour ces filtres. Essaie un autre budget.</p>';
    restoRoot.querySelector('#resto-count').textContent = items.length === 0 ? 'Aucune adresse' : items.length + (items.length > 1 ? ' adresses' : ' adresse');
  }

  /* ---------- 3. COFFEE SHOPS ---------- */
  function coffeeHTML() {
    return '<p class="sub">Pour un café de spécialité, travailler au calme ou bruncher le week-end.</p><div class="grid cards">' +
      D.coffee.map(function (c) {
        return '<article class="place"><div class="tags">' + (c.tags || []).map(function (t) { return '<span class="tag pine">' + esc(t) + '</span>'; }).join('') + '</div>' +
          '<h4>' + esc(c.name) + '</h4><p class="meta">' + esc(c.area) + ' · ' + esc(c.address) + '</p>' +
          '<p class="price-line"><span>' + esc(c.priceText) + '</span></p>' +
          (c.hours ? '<p class="hours">' + esc(c.hours) + '</p>' : '') +
          dishes(c.dishes) + (c.note ? '<p class="note-line">' + esc(c.note) + '</p>' : '') +
          '<div class="place-foot">' + distChip(c) + actions(c, 'coffee') + '</div>' + '</article>';
      }).join('') + '</div>';
  }

  /* ---------- 4. SUPERMARCHÉS ---------- */
  function marketCard(m) {
    var ph = m.photo
      ? '<figure class="shop-fig"><img src="' + esc(m.photo.src) + '" alt="Magasin ' + esc(m.name) + '" loading="lazy"><figcaption>' +
        esc(m.photo.caption || (m.photo.generic ? 'Un magasin ' + m.name + ' (photo d’illustration, pas celui d’Annecy)' : m.name)) +
        ' · <a href="' + esc(m.photo.url) + '" target="_blank" rel="noopener">' + esc(m.photo.credit) + ', ' + esc(m.photo.license) + '</a></figcaption></figure>'
      : '';
    return '<article class="place shop">' + ph +
      '<div class="tags"><span class="tag pine">' + esc(m.area) + '</span></div>' +
      '<h4>' + esc(m.name) + '</h4><p class="meta">' + esc(m.address) + '</p>' +
      '<p class="price-line">' + euros(m.price) + ' <span>' + ['', 'petits prix', 'prix moyens', 'plus cher'][m.price] + '</span></p>' +
      '<p class="hours">' + esc(m.hours) + '</p><p class="note-line">' + esc(m.info) + '</p>' +
      '<div class="place-foot">' + distChip(m) + actions(m, 'market') + '</div></article>';
  }
  function marketHTML() {
    var near = D.supermarkets.filter(function (m) { return m.group === 'campus'; });
    var town = D.supermarkets.filter(function (m) { return m.group !== 'campus'; });
    return '<p class="sub">Où faire tes courses, du moins cher au plus pratique.</p>' +
      '<div class="lead-grid">' +
        '<div class="card"><h3>Payer moins cher</h3><ul class="clean"><li>Les discounts (Lidl) ont souvent le panier le moins cher.</li><li>Les marques du magasin coûtent moins que les grandes marques.</li><li>Les cartes de fidélité sont gratuites et donnent des réductions.</li></ul></div>' +
        '<div class="card"><h3>Anti-gaspi</h3><p>Avec l’appli Too Good To Go, les magasins et boulangeries vendent leurs invendus du jour en paniers surprise, pour environ un tiers du prix.</p></div>' +
        '<div class="note sky"><b>Le dimanche</b>La plupart des supermarchés ferment vers midi. Fais tes courses le samedi, ou va dans une supérette (Carrefour City, Monoprix).</div>' +
      '</div>' +
      '<h3 class="list-title">Près du campus (Annecy-le-Vieux)</h3><div class="grid cards">' + near.map(marketCard).join('') + '</div>' +
      '<h3 class="list-title">En ville</h3><div class="grid cards">' + town.map(marketCard).join('') + '</div>' +
      '<figure class="fact"><img src="images/supermarches/carrefour-histoire.jpg" alt="Immeuble Le Parmelan à Annecy, avec un supermarché au rez-de-chaussée" loading="lazy">' +
        '<figcaption><b>Le saviez-vous ?</b> Le tout premier supermarché Carrefour a ouvert en 1960 à Annecy, au rez-de-chaussée de l’immeuble Le Parmelan. Le local accueille aujourd’hui un Casino. ' +
        '<span class="credit">Photo : <a href="https://commons.wikimedia.org/wiki/File:Emplacement_historique_1er_supermarch%C3%A9_Carrefour,_Annecy_(France)_NB.jpg" target="_blank" rel="noopener">Gnrc, CC BY-SA 4.0</a></span></figcaption></figure>';
  }

  /* ---------- carte (fenêtre) ---------- */
  var dlg, map, layer;
  function openMap(p) {
    if (!dlg) {
      dlg = document.getElementById('map-dialog');
      dlg.querySelector('.dlg-close').addEventListener('click', function () { dlg.close(); });
      dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    }
    var d = km(D.campus, p);
    dlg.querySelector('.dlg-title').textContent = p.name;
    dlg.querySelector('.dlg-addr').textContent = p.address;
    var foot = dlg.querySelector('.dlg-dist');
    var near = d < 0.35;
    foot.innerHTML = d < 0.03
      ? '<b>C’est le point de départ</b> : toutes les distances du guide sont mesurées depuis ici, au cœur du campus.'
      : near
      ? '<b>Sur le campus</b> · à ' + fmtDist(d) + ' du restaurant universitaire'
      : '<b>' + fmtDist(d) + '</b> à vol d’oiseau du campus USMB · environ <b>' + walkMin(d) + ' min à pied</b>' + (d > 2.5 ? ', le bus ou le vélo sont plus rapides' : '');
    var o = D.campus.lat + ',' + D.campus.lon, t = p.lat + ',' + p.lon;
    dlg.querySelector('.dlg-walk').href = 'https://www.openstreetmap.org/directions?engine=fossgis_osrm_foot&route=' + o + '%3B' + t;
    dlg.querySelector('.dlg-transit').href = 'https://www.google.com/maps/dir/?api=1&origin=' + o + '&destination=' + t + '&travelmode=transit';
    dlg.querySelector('.dlg-photos').href = gmapsUrl(p);
    dlg.querySelector('.dlg-open').href = 'https://www.openstreetmap.org/?mlat=' + p.lat + '&mlon=' + p.lon + '#map=17/' + p.lat + '/' + p.lon;
    dlg.showModal();

    if (!window.L) { document.getElementById('map').innerHTML = '<p class="gallery-empty">La carte n’a pas pu se charger. Utilise les liens ci-dessous.</p>'; return; }
    if (!map) {
      map = L.map('map', { scrollWheelZoom: false });
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; contributeurs OpenStreetMap' }).addTo(map);
    }
    if (layer) layer.remove();
    var campusIcon = L.divIcon({ className: 'pin-icon campus', html: '<span>U</span>', iconSize: [30, 30], iconAnchor: [15, 15] });
    var placeIcon = L.divIcon({ className: 'pin-icon', html: '<span></span>', iconSize: [26, 26], iconAnchor: [13, 13] });
    var a = L.marker([D.campus.lat, D.campus.lon], { icon: campusIcon, title: 'Campus USMB' }).bindTooltip('Campus USMB');
    var b = L.marker([p.lat, p.lon], { icon: placeIcon, title: p.name }).bindTooltip(p.name, { permanent: true, direction: 'top', offset: [0, -12] });
    var line = L.polyline([[D.campus.lat, D.campus.lon], [p.lat, p.lon]], { color: '#c8102e', weight: 3, dashArray: '6 8' });
    layer = L.layerGroup(near ? [b, a] : [line, a, b]).addTo(map);
    setTimeout(function () {
      map.invalidateSize();
      if (near) map.setView([p.lat, p.lon], 17);
      else map.fitBounds(L.latLngBounds([[D.campus.lat, D.campus.lon], [p.lat, p.lon]]), { padding: [40, 40] });
    }, 30);
  }

  /* ---------- montage dans la page ---------- */
  window.renderManger = function (sections) {
    sections['crous'].innerHTML = crousHTML();
    sections['restaurants'].innerHTML = restoShell();
    sections['coffee'].innerHTML = coffeeHTML();
    sections['supermarches'].innerHTML = marketHTML();
    restoRoot = sections['restaurants'];
    renderResto();

    var root = restoRoot;
    root.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.dataset.cat) { state.cat = b.dataset.cat; root.querySelectorAll('[data-cat]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); renderResto(); }
      else if (b.dataset.price) { state.price = +b.dataset.price; root.querySelectorAll('[data-price]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); renderResto(); }
      else if (b.dataset.sort) { state.sort = b.dataset.sort; root.querySelectorAll('[data-sort]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); renderResto(); }
    });
    document.addEventListener('click', function (e) {
      var b = e.target.closest('.map-btn'); if (!b) return;
      var p = ALL[b.dataset.kind + ':' + b.dataset.id]; if (p) openMap(p);
    });
  };
})();
