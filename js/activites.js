/* Affichage du thème « Idées d'activités » à partir de data/activites-data.js
   Couvertures colorées (photo ou illustration), boutons carte et Google Maps. */
(function () {
  var A = window.ACTIVITES;
  if (!A) return;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var BY_ID = {};
  A.items.forEach(function (it) { BY_ID[it.id] = it; });
  /* Photos ajoutées dans data/photos-data.js pour les activités qui avaient une illustration */
  A.items.forEach(function (it) {
    var P = (window.PHOTOS || {})['act:' + it.id], c = it.cover = it.cover || {};
    if (P && !c.img) { c.img = P.img; c.credit = (P.illus ? 'Photo d’illustration : ' : '') + P.credit; c.url = P.url; }
  });

  function cover(it) {
    var c = it.cover || {};
    var art = '';
    if (c.img) {
      art = '<div class="cover-photo" style="background-image:url(' + c.img + ');background-position:' + (c.pos || 'center') + '"></div>' +
        (c.credit ? '<a class="cover-credit" href="' + esc(c.url) + '" target="_blank" rel="noopener">' + (/^(Affiche|Photo)/.test(c.credit) ? '' : 'Photo : ') + esc(c.credit) + '</a>' : '');
    } else if (c.icon && window.ICONS && window.ICONS[c.icon]) {
      art = '<div class="cover-art">' + window.ICONS[c.icon].svg + '</div>';
    }
    var free = it.free ? '<span class="cover-free">' + (it.free === true ? 'Gratuit' : esc(it.free)) + '</span>' : '';
    return '<div class="cover ' + (c.img ? 'with-photo' : 'with-art') + ' ink-' + (c.ink || 'light') + '" style="--c:' + (c.color || '#2f5d50') + '">' +
      '<div class="cover-head"><h3>' + esc(it.name) + '</h3>' + (it.label ? '<p>' + esc(it.label) + '</p>' : '') + (c.img ? free : '') + '</div>' + art + (c.img ? '' : free) + '</div>';
  }

  function card(it) {
    var G = window.GUIDE;
    var facts = (it.facts || []).map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('');
    var lists = Object.keys(it.lists || {}).map(function (k) {
      return '<div class="act-list"><h4>' + esc(k) + '</h4><ul class="clean">' + it.lists[k].map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul></div>';
    }).join('');
    var dist = G ? '<span class="dist">' + G.fmtDist(G.km(G.campus, it)) + ' du campus</span>' : '';
    var photos = G ? '<a class="gphotos" href="' + G.gmapsUrl({ name: it.name, address: '', gmaps: it.gmaps }) + '" target="_blank" rel="noopener">Photos sur Google Maps</a>' : '';
    return '<article class="act" id="act-' + it.id + '">' + cover(it) +
      '<div class="act-body">' +
        [].concat(it.desc || []).map(function (p) { return '<p class="act-desc">' + esc(p) + '</p>'; }).join('') +
        (facts ? '<dl class="act-facts">' + facts + '</dl>' : '') + lists +
        (it.tip ? '<div class="tip"><b>' + esc(it.tipLabel || 'Astuce') + '</b><p>' + esc(it.tip) + '</p></div>' : '') +
        '<div class="act-foot">' + dist + '<div class="actions">' + photos +
          '<button type="button" class="map-btn" data-act="' + it.id + '">Voir sur la carte</button></div></div>' +
        (it.link ? '<a class="act-link" href="' + esc(it.link) + '" target="_blank" rel="noopener">Site officiel →</a>' : '') +
      '</div></article>';
  }

  /* Vignette (titre + photo, comme les vignettes Canva) ; un clic ouvre la fiche complète */
  function tile(it) {
    var c = it.cover || {};
    window.GUIDE.addDetail('act:' + it.id, function () { return card(it); });
    return window.GUIDE.tileHTML({ key: 'act:' + it.id, title: it.name, color: c.color || '#2f5d50', ink: c.ink, img: c.img, pos: c.pos, icon: c.icon, free: it.free });
  }

  window.renderActivites = function (bodies) {
    A.sections.forEach(function (s) {
      var body = bodies[s.id];
      if (!body) return;
      var h = body.parentNode.querySelector(':scope > h2');
      if (h) h.textContent = s.title;
      var items = A.items.filter(function (it) { return it.sec === s.id; });
      body.innerHTML = (s.sub ? '<p class="sub">' + esc(s.sub) + '</p>' : '') +
        (s.note ? '<p class="sec-note">' + esc(s.note) + '</p>' : '') +
        '<div class="tiles">' + items.map(tile).join('') + '</div>';
    });
    if (bodies.conseils) {
      var h = bodies.conseils.parentNode.querySelector(':scope > h2');
      if (h) h.textContent = 'Nos conseils pour les étudiants';
      bodies.conseils.innerHTML = '<p class="sub">' + esc(A.tipsIntro || '') + '</p><div class="note butter tips-note"><ul class="clean">' +
        A.tips.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>'; /* texte de confiance (fichier de données), peut contenir un lien */
    }
    document.addEventListener('click', function (e) {
      var b = e.target.closest('.map-btn[data-act]');
      if (!b || !window.GUIDE) return;
      var it = BY_ID[b.dataset.act];
      if (it) window.GUIDE.openMap({ name: it.name, address: (it.facts || []).filter(function (f) { return /Adresse|Où|Départ/.test(f[0]); }).map(function (f) { return f[1]; })[0] || '', lat: it.lat, lon: it.lon, gmaps: it.gmaps, mapNote: it.mapNote });
    });
  };
})();
