$(document).ready(function(){
    $("#tabla").dynamictable({
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
                               
                    cancelButton:'<input type="button" value="Cancelar" class="btn btn-primary" />',                
                    editButton:'<input type="button" value="Editar" class="btn btn-primary" />',
                    saveButton:'<input type="button" value="aceptar" class="btn btn-success" />',
                  },

                  getControl:function (columnKey) {
                    03
                          if (columnKey =="age") {
                    04
                              return '<input type="number" class="form-control" />';
                    05
                          }return '<input type="text" class="form-control" />';
                        },
                 

                
                  showActionColumn:true,

                 


    });



});