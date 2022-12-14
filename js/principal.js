function AlertaInicio(){
    alert("Bienvenido a Interesante");
}
function errorInicio(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'debes iniciar sesión para poder acceder a este sitio',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#D4741A'
    });
}
function entrarEv(){
    let usuario1=["wilder","duarte"];
    let info=[];
    info=[$("#campo1").val(),$("#campo2").val()];
    if(usuario1.length==info.length){
    swal.fire({
        icon: 'success',
        title: 'usuario autenticado',
        position: 'top-end',
        showConfirmButton: false,
        timer: '3000',
        timerProgressBar: true,
    })
    setTimeout(function(){
        $(location).attr('href','../html/loggedEv.html')
    },3000);
}else{
    swal.fire({
        icon:'error',
        title:'el usuario no existe intente de nuevo'
    });
}
}

function entrarLec(){
    let usuario2=["jefersson","alvarez"];
    let info=[];
    info=[$("#campo1").val(),$("#campo2").val()];
    if(usuario2.length==info.length){
    swal.fire({
        icon: 'success',
        title: 'usuario autenticado',
        position: 'top-end',
        showConfirmButton: false,
        timer: '3000',
        timerProgressBar: true,
    })
    setTimeout(function(){
        $(location).attr('href','../html/loggedLec.html')
    },3000);
}else{
    swal.fire({
        icon:'error',
        title:'el usuario no existe intente de nuevo'
    });
}
}
function enviar(){
    swal.fire({
        icon: 'success',
        title: 'solicitud completada',
        text:'redireccionando a la pagina principal',
        showConfirmButton: false,
        timer: '3000',
        timerProgressBar: true,
    })
    setTimeout(function(){
        $(location).attr('href','../html/loggedLec.html')
    },3000);
}
function validar(){
    let info1=String;
    let info2=String;
    info1=$("#campo1").val();
    info2=$("#campo2").val();
    if(info1.length==0){
        $("#c1").css("display","block");
        $("#campo1").css("border-color","red");
    }else if(info2.length==0){
        $("#c2").css("display","block");
        $("#campo2").css("border-color","red");
    }else{
        $("#formulario p").css("display","none");
        $("#formulario input").css("border-color","black");
    }
}