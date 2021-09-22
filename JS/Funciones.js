$(function ModificarTabla() {
    $("#tabla").click( {
        columns: [{
                      text:"Gusto",
                      key:"gto"
                  },
                  {
                      text:"%",
                      key:"por"
                  },
                  {
                      text:"edit",
                      key:"gdr"
                  },
              ],

              buttons: {
                               
                    cancelButton:'<input type="button" value="Cancelar" class="btn" />',                
                    editButton:'<input type="button" value="Editar" class="btn" />',
                    saveButton:'<input type="button" value="aceptar" class="btn" />',
                  },

                  getControl:function (columnKey) {
                    03
                          if (columnKey =="por") {
                    04
                              return '<input type="number" class="form-control" />';
                    05
                          }return '<input type="text" class="form-control" />';
                        },
                 

                
                  showActionColumn:true,

                 
                

    });



});