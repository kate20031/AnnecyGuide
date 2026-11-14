/* Affichage des thèmes « USMB · Vie étudiante » et « Logement » à partir de data/infos-data.js.
   Même principe que « Idées d'activités » : une vignette par fiche, un clic ouvre la fiche complète. */
(function () {
  var I = window.INFOS;
  if (!I) return;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* Couleurs vives des vignettes, comme ailleurs sur le site */
  var POP = [['#8b5cf6', 'light'], ['#19b8e0', 'light'], ['#ffe94d', 'dark'], ['#f45fb5', 'light'], ['#b8f56a', 'dark'], ['#ff7a1a', 'light'], ['#ef3b3b', 'light'], ['#d99bf0', 'light']];

  function body(it) {
    var facts = (it.facts || []).map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('');
    var src = (it.sources || []).map(function (s) { return '<a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[0]) + '</a>'; }).join(' · ');
    return '<div class="act-body">' +
      (it.paras || []).map(function (p) { return '<p class="act-desc">' + esc(p) + '</p>'; }).join('') +
      (facts ? '<dl class="act-facts">' + facts + '</dl>' : '') +
      (it.list ? '<ul class="clean">' + it.list.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul>' : '') +
      (it.tip ? '<div class="tip"><b>' + esc(it.tipLabel || 'À savoir') + '</b><p>' + esc(it.tip) + '</p></div>' : '') +
      (src ? '<p class="info-src"><span>Sources :</span> ' + src + '</p>' : '') +
      '</div>';
  }

  function render(topic, sections) {
    return function (bodies) {
      var G = window.GUIDE;
      sections.forEach(function (s, si) {
        var el = bodies[s.id];
        if (!el || !G) return;
        var h = el.parentNode.querySelector(':scope > h2');
        if (h) h.textContent = s.title;
        var tiles = s.items.map(function (it, i) {
          var c = POP[(si * 3 + i) % POP.length];
          var o = { key: topic + ':' + s.id + ':' + it.id, title: it.title, label: it.label, big: it.big, color: it.color || c[0], ink: it.ink || c[1] };
          G.addDetail(o.key, function () { return '<article class="act">' + G.coverHTML(o) + body(it) + '</article>'; });
          return G.tileHTML(o);
        }).join('');
        el.innerHTML = (s.sub ? '<p class="sub">' + esc(s.sub) + '</p>' : '') +
          (s.note ? '<p class="sec-note">' + esc(s.note) + '</p>' : '') +
          '<div class="tiles">' + tiles + '</div>';
      });
    };
  }

  window.renderUsmb = render('usmb', I.usmb);
  window.renderLogement = render('logement', I.logement);
})();
