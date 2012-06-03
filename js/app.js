jQuery(document).ready(function($) {
  if(window.localConfig === undefined) {
    window.localConfig = undefined;
  }
  CKAN.UI.initialize({
    config: localConfig
  });

  var workspace = CKAN.UI.workspace;
  workspace.client.getTopGroups('openspending', showGroups);

  function showGroups(data) {
    var groups = _.map(data.result.facets.groups, function(count, key) {
      return {
        id: key,
        count: count
      };
    });
    groups = _.sortBy(groups, function(item) {
      return -item.count;
    });
    var template = ' \
      <div class="groups"> \
        <div class="row"> \
          {{#groups}} \
          <div class="span4"> \
            <div class="well"> \
              <h3>{{id}} {{count}} </h3> \
            </div> \
          </div> \
          {{/groups}} \
        </div> \
      </div> \
    ';
    var html = Mustache.render(template, {groups: groups});
    $('#search-page').append(html);
    $('#search-page').show();
  }
});

