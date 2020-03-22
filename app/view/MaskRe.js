Ext.define('Cassiopea.view.MaskRe', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.maskre',
  bodyPadding: 10,
  padding: 5,
  width: 300,
  title: 'MaskRe',
  defaultType: 'textfield',
  items:[
    {
      xtype: 'textarea',
      height: 100,
      fieldLabel: 'MaskRe',
      id: 'maskre',
      enableKeyEvents: true,
      listeners : {
        paste: {
          element: 'inputEl',
          fn: function(event, inputEl) {
            var caretThis = Ext.getDom(this);
            var caretPosition = caretThis.selectionStart;
            var buffertxt = event.browserEvent.clipboardData.getData('text/plain');
            var pos = caretPosition + buffertxt.length;
            setTimeout(() => {
              var originText = this.getValue();
              var repText = originText.replace(/"/g,"'");
              Ext.getCmp('maskre').setValue(repText);
              caretThis.setSelectionRange(pos, pos);
            }, 100);
            return;
          }
        },
        input: {
          element: 'inputEl',
          fn: function(event, inputEl) {
            var caretThisI = Ext.getDom(this);
            var caretPositionI = caretThisI.selectionStart;
            var tt = Ext.getCmp('maskre').getValue();
            var find = '[\"\«\»]';
            var re = new RegExp(find, 'g');
            var txt = tt.replace( re , '\'' );
            Ext.getCmp('maskre').setValue(txt);
            caretThisI.setSelectionRange(caretPositionI, caretPositionI);
          }
        }
      }
    }, {
      xtype: 'container',
      html: '* запрет на ввод « " »',
      style: {
        color: '#828080',
        paddingLeft: '107px',
        fontSize: '11px'
      }
    }
  ]
});