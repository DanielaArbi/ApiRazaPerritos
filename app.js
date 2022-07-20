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
                html += `<td><a href="${data.message}" target="_blank"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">${perro}
                </button></a> </td>`
                html += `<td><img src="${data.message}" alt="" style="width:100px "></td>`
                html += '</tr>';
        
                $('.table').append(html)
             
            })
            .fail(function () {
                console.log("Fallo!");
            });

     

    }


}


