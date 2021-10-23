//------------------------------------ Funciones Category ------------------------------------//

function traerInformacionCategory(){
    $.ajax({
        url:"http://144.22.225.106:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategory(respuesta);
        }
    });
}

function pintarRespuestaCategory(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionCategory("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCategory("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategory(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
        $.ajax({
        url:"http://144.22.225.106:8080/api/Category/save",
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInformacionCategory(idElemento){
    let myData={
        id:idElemento,
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.225.106:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionCategorias();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarCategory(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.225.106:8080/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionCategorias();
            alert("Se ha eliminado correctamente")
        }
    });
}


//------------------------------------ Funciones Category ------------------------------------//


function traerInformacionOrthesis(){
    $.ajax({
        url:"http://144.22.225.106:8080/api/Orthesis/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaOrthesis(respuesta);
        }
    });
}

function pintarRespuestaOrthesis(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionOrthesis("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarOrthesis("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionOrthesis(){
    let var2 = {
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),
        year:$("#Oyear").val(),
        description:$("#Odescription").val(),
        category:$("#OCategory").val()
        };
        $.ajax({
        url:"http://144.22.225.106:8080/api/Orthesis/save",
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInformacionOrthesis(idElemento){
    let myData={
        id:idElemento,
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),
        year:$("#Oyear").val(),
        description:$("#Odescription").val(),
        category:$("#OCategory").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.225.106:8080/api/Orthesis/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Oname").val("");
            $("#Obrand").val("");
            $("#Oyear").val("");
            $("#Odescription").val("");
            traerInformacionOrthesis();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarOrthesis(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.225.106:8080/api/Orthesis/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionOrthesis();
            alert("Se ha eliminado correctamente")
        }
    });
}