Ext.define('Cassiopea.view.NoTagsHTML', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.notagshtml',
  bodyPadding: 10,
  padding: 5,
  width: 300,
  title: 'NoTagsHTML',
  defaultType: 'textfield',
  items:[
    {
      xtype: 'textarea',
      height: 100,
      fieldLabel: 'TagsHTML',
      id: 'tagshtml',
      value: '<div>\n' +
                '  <a href="#" />Link\n' +
                '   <ul>\n' +
                '    <p>Text</p>\n' +
                '   <ul>\n' +
              '</div>'
    }, {
      xtype: 'button',
      text: 'Replace',
      id: 'btnnotagshtml'
    }, {
      fieldLabel: 'NoTagsHTML',
      id: 'notagshtml'
    }
  ]
});