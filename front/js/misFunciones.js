//------------------------------------ Funciones Category ------------------------------------//


function autoInicioCategory(){
    console.log("se esta ejecutando category")
    $.ajax({
        url:"http://144.22.225.106:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategory(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    })
}

function pintarRespuestaCategory(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='actualizarInfoCategory("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCategory("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInfoCategory(){
    let data = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
    };
    $.ajax({
        url:"http://144.22.225.106:8080/api/Category/save",
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(data),
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

function actualizarInfoCategory(idElemento){
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
            autoInicioCategory();
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
            autoInicioCategory();
            alert("Se ha eliminado correctamente")
        }
    });
}


//------------------------------------ Funciones Ortopedic ------------------------------------//


function autoInicioOrtopedic(){
    console.log("se esta ejecutando ortopedic")
    $.ajax({
        url:"http://144.22.225.106:8080/api/Ortopedic/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaOrtopedic(respuesta);
            let $select = $("#select-ortopedic");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    })
}

function pintarRespuestaOrtopedic(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td>"+respuesta[i].category.name+"</td>";
        myTable+="<td> <button onclick='actualizarInfoOrtopedic("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarOrtopedic("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInfoOrtopedic(){
    let data = {
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),
        year:$("#Oyear").val(),
        description:$("#Odescription").val(),
        category: {id:+$("#select-category").val()}
    };
    $.ajax({
        url:"http://144.22.225.106:8080/api/Ortopedic/save",
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(data),
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

function actualizarInfoOrtopedic(idElemento){
    let myData={
        id:idElemento,
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),
        year:$("#Oyear").val(),
        description:$("#Odescription").val(),
        category: {id:+$("#select-category").val()}
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.225.106:8080/api/Ortopedic/update",
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
            $("#select-category").val("");
            autoInicioOrtopedic();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarOrtopedic(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.225.106:8080/api/Ortopedic/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioOrtopedic();
            alert("Se ha eliminado correctamente")
        }
    });
}


//------------------------------------ Funciones Ortopedic ------------------------------------//


function autoInicioClient(){
    console.log("se esta ejecutando client")
    $.ajax({
        url:"http://144.22.225.106:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClient(respuesta);
            let $select = $("#select-client");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    })
}

function pintarRespuestaClient(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button onclick='actualizarInfoClient("+respuesta[i].idClient+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarClient("+respuesta[i].idClient+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInfoClient(){
    let data = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
    };
    $.ajax({
        url:"http://144.22.225.106:8080/api/Client/save",
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(data),
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

function actualizarInfoClient(idElemento){
    let myData={
        idClient:idElemento,
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.225.106:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idClient").val("");
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            autoInicioClient();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarClient(idElemento){
    let myData={
        idClient:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.225.106:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioClient();
            alert("Se ha eliminado correctamente")
        }
    });
}