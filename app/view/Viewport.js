Ext.define('Cassiopea.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'hbox',
  requires: [
    'Cassiopea.view.KeyCode',
    'Cassiopea.view.NoTagsHTML',
    'Cassiopea.view.MaskRe',
    'Cassiopea.view.GetXMLData'
  ],
  padding: 5,
  items: [
    { xtype: 'main' },
    { xtype: 'notagshtml'},
    { xtype: 'maskre' },
    { xtype: 'getxmldata' }
  ]
});