jQuery(document).ready(function($) {
  if(window.localConfig === undefined) {
    window.localConfig = undefined;
  }
  CKAN.UI.initialize({
    config: localConfig
  });
});

