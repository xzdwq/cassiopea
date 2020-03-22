Ext.define('Cassiopea.view.KeyCode', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.main',
  bodyPadding: 10,
  padding: 5,
  width: 300,
  title: 'KeyCode',
  defaultType: 'textfield',
  items:[
    {
      fieldLabel: 'KeyApp',
      id: 'keyapp',
      enableKeyEvents: true
    }, {
      fieldLabel: 'KeyCode',
      id: 'keycode',
      readOnly: true
    }
  ]
});