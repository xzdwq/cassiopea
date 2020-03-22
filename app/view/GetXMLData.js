Ext.define('Cassiopea.view.GetXMLData', {
  extend: 'Ext.form.Panel',
  alias: 'widget.getxmldata',
  id: 'frmxml',
  bodyPadding: 10,
  padding: 5,
  width: 450,
  defaults: { selectOnFocus: true, msgTarget: 'side' },
  title: 'GetXMLData',
  items: [{
    xtype: 'textfield',
    fieldLabel: 'Логин',
    maskRe: /[a-zA-Z.]/u,
    name: 'u',
    id: 'u',
    allowBlank: false,
    value: 'v.zhi',
    afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Обязательное для заполнения">*</span>',
    inputAttrTpl: 'data-qtip="Ваш логин"'
  },
  {
    xtype: 'textfield',
    name: 'pw',
    id: 'pw',
    fieldLabel: 'Пароль',
    inputType: 'password',
    allowBlank: false,
    value: 'vzhiv',
    afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Обязательное для заполнения">*</span>',
    inputAttrTpl: 'data-qtip="Ваш пароль"'
  },
  {
    xtype: 'button',
    text: 'Оправить',
    handler: function() {
      var frm = this.up('form').getForm();
      if(frm.isValid()) {
        Ext.getCmp('frmxml').getEl().mask();
        Ext.Ajax.request({
          method: 'GET',
          url: './login.xml',
          cors: true,
          useDefaultXhrHeader: false,
          withCredentials: true,
          params: {
            u: Ext.getCmp('u').getValue(),
            pw: Ext.getCmp('pw').getValue()
          },
          success: function(response) {
            var result = response.responseXML;
            var tokken = Ext.DomQuery.select('ticket', result);
            tokken = tokken[0].innerHTML;
            Ext.getCmp('tkn').setValue(tokken);
            if(tokken) {
              var filter = '[{"glossare":"1"}]';
              Ext.Ajax.request({
                method: 'GET',
                url: './toticket.json?' + filter + '&alf_ticket=' + tokken,
                cors: true,
                useDefaultXhrHeader: false,
                withCredentials: true,
                success: function(response) {
                  var result = response.responseText;
                  Ext.getCmp('frmxml').getEl().unmask();
                  if(result) {
                    Ext.getCmp('jsonres').setValue(result);
                  } else {
                    Ext.getCmp('jsonres').setValue('Данные не найдены');
                  }
                },
                failure: function(response) {
                  var res = response.responseText;
                  Ext.getCmp('jsonres').setValue(res);
                  Ext.getCmp('frmxml').getEl().unmask();
                }
              });
            } else {
              Ext.getCmp('jsonres').setValue('Error. Токкен не найден');
              Ext.getCmp('frmxml').getEl().unmask();
            }
          },
          failure: function(response) {
            var res = response.responseText;
            Ext.getCmp('jsonres').setValue(res);
            Ext.getCmp('frmxml').getEl().unmask();
          }
        });
      }
    }
  },
  {
    xtype: 'textfield',
    fieldLabel: 'Ваш токкен',
    id: 'tkn',
    readOnly: true,
    width: 400
  },
  {
    xtype: 'textarea',
    fieldLabel: 'Result',
    id: 'jsonres',
    readOnly: true,
    width: 400,
    height: 300
  }]
});