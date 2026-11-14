/* Affichage des thèmes « USMB · Vie étudiante » et « Logement » à partir de data/infos-data.js.
   Tout est visible d'un coup d'œil : chiffres clés, étapes numérotées, listes,
   et des questions qui s'ouvrent au clic seulement pour ce qui est important. */
(function () {
  var I = window.INFOS;
  if (!I) return;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function ic(n) { return n ? '<i class="ti ti-' + esc(n) + ' g-ic" aria-hidden="true"></i>' : ''; }
  function stats(s) {
    return '<div class="g-stats">' + s.map(function (x) {
      return '<div class="g-stat">' + ic(x[2]) + '<b>' + esc(x[0]) + '</b><span>' + esc(x[1]) + '</span></div>';
    }).join('') + '</div>';
  }
  function steps(s) {
    return '<ol class="g-steps">' + s.map(function (x) {
      return '<li><b>' + esc(x.t) + '</b><span>' + esc(x.d) + '</span></li>';
    }).join('') + '</ol>';
  }
  function list(s) {
    return '<ul class="g-list">' + s.map(function (x) {
      return '<li>' + ic(x.i) + '<div><b>' + esc(x.t) + '</b><span>' + esc(x.d) + '</span></div></li>';
    }).join('') + '</ul>';
  }
  function faq(s) {
    return '<div class="g-faq">' + s.map(function (x) {
      return '<details><summary>' + ic(x.i) + esc(x.q) + '</summary><div class="g-ans">' +
        x.a.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div></details>';
    }).join('') + '</div>';
  }
  function sources(s) {
    return '<p class="info-src"><span>Sources :</span> ' + s.map(function (x) {
      return '<a href="' + esc(x[1]) + '" target="_blank" rel="noopener">' + esc(x[0]) + '</a>';
    }).join(' · ') + '</p>';
  }

  function render(sections) {
    return function (bodies) {
      sections.forEach(function (s) {
        var el = bodies[s.id];
        if (!el) return;
        var h = el.parentNode.querySelector(':scope > h2');
        if (h) h.textContent = s.title;
        el.innerHTML = '<div class="guide">' +
          (s.sub ? '<p class="sub">' + esc(s.sub) + '</p>' : '') +
          (s.stats ? stats(s.stats) : '') +
          (s.steps ? steps(s.steps) : '') +
          (s.list ? list(s.list) : '') +
          (s.faq ? faq(s.faq) : '') +
          (s.note ? '<p class="sec-note">' + esc(s.note) + '</p>' : '') +
          (s.sources ? sources(s.sources) : '') + '</div>';
      });
    };
  }

  window.renderUsmb = render(I.usmb);
  window.renderLogement = render(I.logement);
})();
