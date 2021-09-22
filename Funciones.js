$(document).ready(function(){
    $("#table").dynamictable({
        columns: [{
                      text:"Name",
                      key:"name"
                  },
                  {
                      text:"Age",
                      key:"age"
                  },
                  {
                      text:"Gender",
                      key:"gender"
                  },
              ],
            
              showActionColumn:true




    });



});