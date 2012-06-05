jQuery(document).ready(function($) {
  if(window.localConfig === undefined) {
    window.localConfig = undefined;
  }
  CKAN.UI.initialize({
    config: localConfig
  });

  var workspace = CKAN.UI.workspace;
  workspace.client.getTopGroups('openspending', showGroups);

  function showGroups(groups) {
    var template = ' \
        <div class="row"> \
          {{#groups}} \
          <div class="span4"> \
            <div class="well group"> \
              <h3>{{title}} </h3> \
              {{snippet}} \
            </div> \
          </div> \
          {{/groups}} \
        </div> \
    ';
    function render() {
      var data = {groups: _.map(groups, function(x) { return x.toTemplateJSON()})};
      var html = Mustache.render(template, data);
      $('#home-page .groups').html(html);
    }
    _.each(groups, function(group) {
      group.bind('change', render);
      group.fetch();
    });
  }
});

