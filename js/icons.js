/* Illustrations « наліпки » dessinées pour le guide (SVG, 64 × 64).
   bg = couleur de fond de la pastille. */
(function () {
  var S = 'stroke="#262019" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  function svg(inner) { return '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">' + inner + '</svg>'; }

  window.ICONS = {
    savoyard: { bg: '#f6e2b3', svg: svg(
      '<path d="M40 6 L30 30" ' + S + ' fill="none"/><rect x="36" y="3" width="10" height="9" rx="2" fill="#e8a33d" ' + S + ' transform="rotate(20 41 7)"/>' +
      '<path d="M8 28h48l-4 16c-1.5 6-6 9-12 9H24c-6 0-10.5-3-12-9z" fill="#c8102e" ' + S + '/>' +
      '<ellipse cx="32" cy="28" rx="24" ry="5" fill="#f3d36b" ' + S + '/>' +
      '<path d="M20 27c2 3 5 3 6 0M34 28c2 3 5 3 6 0" fill="none" stroke="#e8a33d" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M2 34h8" ' + S + '/><path d="M18 53l-4 7M46 53l4 7" ' + S + '/>') },

    burger: { bg: '#f3d36b', svg: svg(
      '<path d="M10 28c0-11 10-18 22-18s22 7 22 18z" fill="#e8a33d" ' + S + '/>' +
      '<path d="M24 17l2 1M34 15l2 1M42 20l2 1M18 22l2 1" stroke="#fff6dc" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M8 32c4-4 8 4 12 0s8 4 12 0 8 4 12 0 8 4 12 0" fill="none" stroke="#2f5d50" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M10 36h44l-4 6H40l-4-4-4 4H14z" fill="#f3d36b" ' + S + '/>' +
      '<rect x="9" y="41" width="46" height="8" rx="4" fill="#6b3b22" ' + S + '/>' +
      '<path d="M10 49h44c0 5-4 7-8 7H18c-4 0-8-2-8-7z" fill="#e8a33d" ' + S + '/>') },

    pizza: { bg: '#fbd3c4', svg: svg(
      '<path d="M8 14 Q32 6 56 14 L33 58 Z" fill="#f3d36b" ' + S + '/>' +
      '<path d="M8 14 Q32 6 56 14 L53 20 Q32 13 11 20 Z" fill="#e8a33d" ' + S + '/>' +
      '<circle cx="26" cy="27" r="4.5" fill="#c8102e" ' + S + '/><circle cx="39" cy="30" r="4.5" fill="#c8102e" ' + S + '/><circle cx="32" cy="42" r="4" fill="#c8102e" ' + S + '/>' +
      '<path d="M20 33l3 2M42 40l2-3" stroke="#2f5d50" stroke-width="3" stroke-linecap="round"/>') },

    asiat: { bg: '#bfe0ea', svg: svg(
      '<path d="M44 6 L30 30" ' + S + ' fill="none"/><path d="M52 9 L34 31" ' + S + ' fill="none"/>' +
      '<path d="M14 28c4-5 8 5 12 0s8 5 12 0 8 5 12 0" ' + S + ' fill="none"/>' +
      '<circle cx="40" cy="27" r="6" fill="#fff" ' + S + '/><circle cx="40" cy="27" r="2.6" fill="#f3d36b"/>' +
      '<path d="M7 31h50c0 12-10.5 21-25 21S7 43 7 31z" fill="#c8102e" ' + S + '/>' +
      '<path d="M14 38h36" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="3 5"/>' +
      '<path d="M22 52h20l-2 5H24z" fill="#262019"/>') },

    poisson: { bg: '#cfe6f3', svg: svg(
      '<path d="M6 32c8-14 30-16 42 0-12 16-34 14-42 0z" fill="#5f9fb8" ' + S + '/>' +
      '<path d="M46 32l12-10v20z" fill="#5f9fb8" ' + S + '/>' +
      '<circle cx="16" cy="29" r="2.6" fill="#262019"/>' +
      '<path d="M26 26c3 3 3 9 0 12M33 25c3 4 3 10 0 14" fill="none" stroke="#262019" stroke-width="2.2" stroke-linecap="round"/>' +
      '<path d="M8 50c5-3 9 3 14 0s9 3 14 0 9 3 14 0" fill="none" stroke="#5f9fb8" stroke-width="3" stroke-linecap="round"/>') },

    street: { bg: '#f9d9a8', svg: svg(
      '<path d="M40 22c6-6 15-2 16 6 1 7-5 12-11 10L30 48c-3 3-8 3-10 0l-4 4c-2 2-6 1-6-2-3 0-4-4-2-6l4-4c-3-2-3-7 0-10z" fill="#e8a33d" ' + S + '/>' +
      '<path d="M36 26l4-2M44 30l3 2M38 36l2 3" stroke="#fff6dc" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M18 46l-6 6" stroke="#fff" stroke-width="3" stroke-linecap="round"/>') },

    mexicain: { bg: '#d7ecc8', svg: svg(
      '<path d="M6 46a26 26 0 0 1 52 0z" fill="#f3d36b" ' + S + '/>' +
      '<path d="M12 40c3-4 6 2 9-2s6 2 9-2 6 2 9-2 6 2 9-2 4 1 5 0" fill="none" stroke="#2f5d50" stroke-width="5" stroke-linecap="round"/>' +
      '<circle cx="20" cy="36" r="2.5" fill="#c8102e"/><circle cx="32" cy="33" r="2.5" fill="#c8102e"/><circle cx="44" cy="36" r="2.5" fill="#c8102e"/>' +
      '<path d="M6 46h52" ' + S + '/><path d="M16 26l2 2M30 22l2 1M44 25l1 2" stroke="#e8a33d" stroke-width="2.5" stroke-linecap="round"/>') },

    healthy: { bg: '#d9ebe0', svg: svg(
      '<path d="M20 26c-2-10 6-16 12-18 0 8-4 14-12 18z" fill="#5f9e57" ' + S + '/>' +
      '<path d="M34 24c2-9 11-12 18-10-3 7-9 11-18 10z" fill="#7cb86c" ' + S + '/>' +
      '<ellipse cx="42" cy="27" rx="7" ry="5" fill="#cfe39a" ' + S + '/><circle cx="42" cy="27" r="2.4" fill="#8a5a3c"/>' +
      '<path d="M6 30h52c0 13-11 22-26 22S6 43 6 30z" fill="#2f5d50" ' + S + '/>' +
      '<circle cx="20" cy="29" r="3" fill="#c8102e" ' + S + '/>') },

    crepes: { bg: '#f8dfe6', svg: svg(
      '<ellipse cx="32" cy="50" rx="27" ry="7" fill="#fff" ' + S + '/>' +
      '<path d="M10 46 L32 14 L54 46 Q32 54 10 46z" fill="#f0c27a" ' + S + '/>' +
      '<path d="M32 14 L36 46" ' + S + ' fill="none"/>' +
      '<path d="M18 34c4 2 6-2 10 0s6-2 10 0 6-2 8 0" fill="none" stroke="#6b3b22" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M22 26l2 1M40 28l2-1" stroke="#fff6dc" stroke-width="2.5" stroke-linecap="round"/>') },

    indien: { bg: '#fbd9b0', svg: svg(
      '<path d="M22 8c-3 4 3 6 0 10M32 6c-3 4 3 6 0 10M42 8c-3 4 3 6 0 10" fill="none" stroke="#262019" stroke-width="2.5" stroke-linecap="round"/>' +
      '<ellipse cx="32" cy="30" rx="24" ry="6" fill="#e8762d" ' + S + '/>' +
      '<path d="M8 30c0 13 10 22 24 22s24-9 24-22" fill="#c8102e" ' + S + '/>' +
      '<path d="M18 29l3 1M30 31l3-1M42 29l2 2" stroke="#fff3c4" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M26 30c2-3 5-3 6 0" fill="none" stroke="#2f5d50" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M20 52h24" ' + S + '/>') },

    oriental: { bg: '#f1d1c9', svg: svg(
      '<circle cx="32" cy="9" r="3.5" fill="#c8102e" ' + S + '/>' +
      '<path d="M32 12 C34 22 44 34 52 42 H12 C20 34 30 22 32 12z" fill="#c8102e" ' + S + '/>' +
      '<path d="M22 34c6 2 14 2 20 0" fill="none" stroke="#f3d36b" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M4 44h56c-2 7-12 10-28 10S6 51 4 44z" fill="#e8a33d" ' + S + '/>') },

    bistrot: { bg: '#e7e0f3', svg: svg(
      '<circle cx="32" cy="34" r="20" fill="#fff" ' + S + '/><circle cx="32" cy="34" r="12" fill="#f3d36b" ' + S + '/>' +
      '<path d="M5 14v14c0 3 2 5 4 5v22" ' + S + ' fill="none"/><path d="M9 14v12M13 14v14c0 3-2 5-4 5" ' + S + ' fill="none"/>' +
      '<path d="M57 55V14c-5 4-7 12-6 22h6" fill="#e4dccd" ' + S + '/>' +
      '<path d="M28 32c2-3 6-3 8 0" fill="none" stroke="#2f5d50" stroke-width="3" stroke-linecap="round"/>') },

    coffee: { bg: '#ecd9bf', svg: svg(
      '<path d="M24 6c-3 4 3 6 0 10M33 6c-3 4 3 6 0 10M42 6c-3 4 3 6 0 10" fill="none" stroke="#262019" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M46 28h4a7 7 0 0 1 0 14h-5" fill="none" ' + S + '/>' +
      '<path d="M12 22h36v14c0 10-8 16-18 16S12 46 12 36z" fill="#2f5d50" ' + S + '/>' +
      '<ellipse cx="30" cy="22" rx="18" ry="4" fill="#8a5a3c" ' + S + '/>' +
      '<path d="M24 21.5c2-2 4 0 6-1.5 2 1.5 4-.5 6 1.5" fill="none" stroke="#f6e6cf" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M6 54h48" ' + S + '/><path d="M10 54c2 4 38 4 40 0" fill="#fff" ' + S + '/>') },

    market: { bg: '#d9ebe0', svg: svg(
      '<path d="M40 4 L50 30" stroke="#262019" stroke-width="9" stroke-linecap="round"/><path d="M40 4 L50 30" stroke="#e8a33d" stroke-width="5" stroke-linecap="round"/>' +
      '<circle cx="22" cy="24" r="8" fill="#c8102e" ' + S + '/><path d="M22 16c0-3 2-5 4-5" ' + S + ' fill="none"/>' +
      '<path d="M14 28 C14 14 50 14 50 28" fill="none" ' + S + '/>' +
      '<path d="M6 28h52l-6 26H12z" fill="#e8a33d" ' + S + '/>' +
      '<path d="M18 34v14M26 34v14M34 34v14M42 34v14M10 41h44" stroke="#6b3b22" stroke-width="2.5" stroke-linecap="round"/>') }
  };
})();
