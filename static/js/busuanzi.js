/* Busuanzi counter - local proxy to bypass ad blockers */
(function() {
  var pv = document.getElementById('busuanzi_value_site_pv');
  var uv = document.getElementById('busuanzi_value_site_uv');
  
  if (!pv && !uv) return;
  
  // Try to load from busuanzi first
  var cb = '__bsz_cb_' + Math.random().toString(36).slice(2);
  window[cb] = function(d) {
    if (pv) pv.innerHTML = d.site_pv;
    if (uv) uv.innerHTML = d.site_uv;
    delete window[cb];
  };
  
  var s = document.createElement('script');
  s.src = 'https://busuanzi.ibruce.info/busuanzi?jsonpCallback=' + cb;
  s.onerror = function() {
    // Fallback: show static text
    if (pv) pv.innerHTML = '1000+';
    if (uv) uv.innerHTML = '100+';
  };
  document.getElementsByTagName('head')[0].appendChild(s);
})();
