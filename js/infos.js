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

  /* Grande photo en haut de la rubrique, comme dans « Manger sans se ruiner » */
  function banner(s) {
    var b = s.banner;
    return '<div class="banner" role="img" aria-label="' + esc(b.caption) + '" style="background-image:url(' + b.img + ');background-position:' + (b.pos || 'center') + '">' +
      '<a class="banner-credit" href="' + esc(b.url) + '" target="_blank" rel="noopener">' + esc(b.caption) + ' · Photo : ' + esc(b.credit) + '</a>' +
      '<div class="banner-txt"><h2>' + esc(s.title) + '</h2>' + (s.sub ? '<p>' + esc(s.sub) + '</p>' : '') + '</div></div>';
  }

  /* ---------- blocs des nouvelles rubriques (dans l'ordre de « blocks ») ---------- */
  function linkBtns(ls) {
    return ls && ls.length ? '<div class="g-links">' + ls.map(function (l) {
      return '<a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + ' <i class="ti ti-external-link" aria-hidden="true"></i></a>';
    }).join('') + '</div>' : '';
  }
  function head(b) { return b.h ? '<h3 class="g-h">' + esc(b.h) + '</h3>' : ''; }
  var checkId = 0;
  var BLOCK = {
    stats: function (b) { return stats(b.items); },
    list: function (b) { return head(b) + list(b.items); },
    paras: function (b) { return b.items.map(function (p) { return '<p class="g-p">' + esc(p) + '</p>'; }).join(''); },
    tip: function (b) { return '<div class="tip"><b>' + esc(b.label || 'À savoir') + '</b><p>' + esc(b.text) + '</p></div>'; },
    facts: function (b) { return '<dl class="act-facts">' + b.items.map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('') + '</dl>'; },
    bullets: function (b) {
      return '<div class="g-box' + (b.warn ? ' warn-box' : '') + '">' + head(b) + '<ul class="clean">' + b.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        (b.after ? '<p class="g-after">' + esc(b.after) + '</p>' : '') + '</div>';
    },
    linkrow: function (b) { return '<div>' + head(b) + linkBtns(b.links) + '</div>'; },
    links: function (b) {
      return head(b) + '<div class="g-cards">' + b.items.map(function (x) {
        return '<div class="g-card"><div class="g-card-h">' + ic(x.i) + '<b>' + esc(x.t) + '</b></div>' +
          (x.d || []).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + linkBtns(x.links) + '</div>';
      }).join('') + '</div>';
    },
    steps: function (b) {
      return head(b) + '<ol class="g-steps">' + b.items.map(function (x) {
        return '<li><b>' + esc(x.t) + '</b><span>' + esc(x.d) + '</span>' + linkBtns(x.links) + '</li>';
      }).join('') + '</ol>';
    },
    dos: function (b) {
      return head(b) + '<ul class="g-dos">' + b.items.map(function (x) {
        return '<li class="' + (x.ok ? 'do' : 'dont') + '">' + ic(x.i) + '<div><span class="g-badge">' + (x.ok ? 'À faire' : 'À éviter') + '</span>' +
          '<b>' + esc(x.n) + '. ' + esc(x.t) + '</b><span>' + esc(x.d) + '</span></div></li>';
      }).join('') + '</ul>';
    },
    parts: function (b) {
      return '<div class="g-parts">' + b.items.map(function (x, i) {
        return '<article class="g-part"><div class="g-card-h">' + ic(x.i) + '<b>' + (i + 1) + '. ' + esc(x.t) + '</b></div>' +
          '<p>' + esc(x.d) + '</p><ul class="clean">' + x.list.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul>' +
          (x.remember ? '<p class="g-remember"><b>À retenir :</b> ' + esc(x.remember) + '</p>' : '') + '</article>';
      }).join('') + '</div>';
    },
    checklist: function (b) {
      return '<ul class="g-check" data-key="' + esc(b.key) + '">' + b.items.map(function (x, i) {
        var id = 'chk-' + (++checkId);
        return '<li><input type="checkbox" id="' + id + '" data-i="' + i + '"><label for="' + id + '">' + esc(x) + '</label></li>';
      }).join('') + '</ul>';
    }
  };
  function blocks(bs) { return (bs || []).map(function (b) { return BLOCK[b.type] ? BLOCK[b.type](b) : ''; }).join(''); }

  /* Liste à cocher : mémorisée sur cet appareil seulement (si le navigateur le permet) */
  function initChecklists(root) {
    root.querySelectorAll('.g-check').forEach(function (ul) {
      var k = 'petit-annecien-check-' + ul.dataset.key, saved = [];
      try { saved = JSON.parse(localStorage.getItem(k) || '[]'); } catch (e) {}
      ul.querySelectorAll('input').forEach(function (cb) {
        cb.checked = saved.indexOf(+cb.dataset.i) >= 0;
        cb.addEventListener('change', function () {
          var on = [].filter.call(ul.querySelectorAll('input'), function (c) { return c.checked; }).map(function (c) { return +c.dataset.i; });
          try { localStorage.setItem(k, JSON.stringify(on)); } catch (e) {}
        });
      });
    });
  }

  function render(sections) {
    return function (bodies) {
      sections.forEach(function (s) {
        var el = bodies[s.id];
        if (!el) return;
        var h = el.parentNode.querySelector(':scope > h2');
        if (h) { h.textContent = s.title; h.hidden = !!s.banner; }
        if (s.banner) el.parentNode.classList.add('with-banner');
        el.innerHTML = '<div class="guide">' + (s.banner ? banner(s) :
          (s.sub ? '<p class="sub">' + esc(s.sub) + '</p>' : '')) +
          (s.stats ? stats(s.stats) : '') +
          (s.steps ? steps(s.steps) : '') +
          (s.list ? list(s.list) : '') +
          (s.faq ? faq(s.faq) : '') +
          blocks(s.blocks) +
          (s.note ? '<p class="sec-note">' + esc(s.note) + '</p>' : '') +
          (s.sources ? sources(s.sources) : '') + '</div>';
        initChecklists(el);
      });
    };
  }

  window.renderUsmb = render(I.usmb);
  window.renderLogement = render(I.logement);
})();
