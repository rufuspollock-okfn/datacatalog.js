jQuery(document).ready(function($) {
  if(window.localConfig === undefined) {
    window.localConfig = undefined;
  }
  var workspace = new CKAN.UI.Workspace({
    config: localConfig
  });
  Backbone.history.start()

  workspace.client.getTopGroups(workspace.config.groups, showGroups);

  function showGroups(groups) {
    // ignore the first group as it is what we filtered on!
    if (workspace.config.groups) {
      groups = groups.slice(1);
    }
    var view = new CKAN.View.GroupSummaryList({
      collection: new CKAN.Model.GroupCollection(groups)
    });
    $('#home-page .groups-section').append(view.el);
  }
});

