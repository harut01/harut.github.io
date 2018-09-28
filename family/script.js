window.onload = function(){
    var family = document.getElementById('family');
        family.onchange = function(){
              switch (family.value) {
                case '1':
                    var form = document.getElementById('form');
                    var select = document.createElement("select");
                    select.className = 'select';
                    var arr = ['ընտրել','դպրոց','նախակրթարան','մանկապարտեզ']
                for(var i = 0;i < 4;i++){
                    var option = document.createElement("option");
                    option.innerText = arr[i];
                    select.appendChild(option);
                }
                    var p = document.createElement("p");
                    p.innerText = 'ինչ կրթական հաստատություն էք հաճախում'
                    form.appendChild(p);
                    p.id = 'pIdFor6';
                    p.style.display = 'inline-block';
                    select.style.height = '40px';
                    select.style.width = '100px';
                    select.style.border = '1px solid';
                    document.body.appendChild(form);
                    form.appendChild(select)
                    if(option.innerText == 'մանկապարտեզ'){
                        $(select).one( "change", function( event ) { 
                            var selectFromSchool = document.createElement("select");
                            form.appendChild(selectFromSchool);
                            selectFromSchool.style.height = '40px';
                            selectFromSchool.style.width = '100px';
                            selectFromSchool.style.border = '1px solid';
                            var checkboxFromSchool  = $( "input:checkbox" )
                            form.appendChild(checkboxFromSchool);
                        });
                    }
                    break;  
                case '2':
                    console.log( 's' );
                    break;
                case '3':
                    console.log( 'd' );
                    break;
                case '4':
                    console.log( 'f' );
                    break;
                default:
                    console.log( 'Я таких значений не знаю' );
              }
        }
        // $('#hide').click(function(){
        //     $("#hide").hide();
        // });
        
        // $(h1).click(function(){
        //     $("#hide").show();
        // });
        
}