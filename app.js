//cuando se carga la pagina se ejecuta el ajax
(function () {


    /* ----ajax nombre de las razas---- */
    $.ajax({
        type: 'GET',
        url: 'https://dog.ceo/api/breeds/list',
        dataType: 'json',
    })
        .done(function (data) {
            //llamo a la funcion y le paso el dato
            traerPerritos(data)
          
        })
        .fail(function () {
            console.log("Fallo!");
        });

 
})();

/**
 * se encarga de recorrer el array que recibe como parametro
 * y lo agrega a la tabla, tambien recorriendo las imagenes aignadoles el 
 * nombre correspondiente en la url
 * @param {*} data 
 */
let traerPerritos = (data) => {

    let perros = data;
    for (let i = 0; i < perros.message.length; i++) {
        let perro = perros.message[i];

        $.ajax({
            type: 'GET',
            url: `https://dog.ceo/api/breed/${perro}/images/random`,
            dataType: 'json',
        })
            .done(function (data) {
    
                console.log("Correcto!");
                console.log(data); // Se imprime en consola la api
               
                let html = '';
                html += '<tr>';
                html += `<td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="modal('${perro}','${data.message}')" >${perro}
                </button> </td>`
                html += `<td><img src="${data.message}" alt="" style="width:100px "></td>`
                html += '</tr>';
        
             
                $('.table').append(html)
                
            })
            .fail(function () {
                console.log("Fallo!");
            });

     

    }
             

}

//le paso al modal los valores recibidos en la funcion
let modal = (raza,imagen)=>{
    $('#tituloPerrito').html(raza)
    $('#imagePerro').attr('src',imagen)
}