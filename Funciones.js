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
                
                    addButton:'<input type="button" value="Add" class="btn btn-primary" />',
                
                    cancelButton:'<input type="button" value="Cancel" class="btn btn-primary" />',
                
                    deleteButton:'<input type="button" value="Delete" class="btn btn-danger" />',
                
                    editButton:'<input type="button" value="Edit" class="btn btn-primary" />',
                    saveButton:'<input type="button" value="Save" class="btn btn-success" />',
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