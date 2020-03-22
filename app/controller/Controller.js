Ext.define('Cassiopea.controller.Controller', {
  extend: 'Ext.app.Controller',
  //views: ['KeyCode'],
  init: function () {
    this.control({
      '#keyapp': {
        keypress: this.onKeyApp
      },
      '#btnnotagshtml': {
        click: this.onNoTagsHTML
      }
    });
  },
  onKeyApp: function(KeyApp, e, eOpts) {
    Ext.getCmp('keyapp').setValue();
    Ext.getCmp('keycode').setValue(e.getKey());
  },
  onNoTagsHTML: function(btnnotagshtml, e, eOpts) {
    var tagshtml = Ext.getCmp('tagshtml').getValue();
    var nrep = tagshtml.replace(/<\/?[^>]+>/g,'');
    var rep = nrep.replace(/\s+/g, ' ').trim();
    Ext.getCmp('notagshtml').setValue(rep);
  },
  onLaunch: function(application) { }
});