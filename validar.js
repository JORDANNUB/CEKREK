function validar()
{
    var usuarioingresado=document.getElementById("textusuario").value;
    var passwordingresada=document.getElementById("textclave").value;

    if (usuarioingresado=="Jordan" && passwordingresada=="123") 
    { alert("Datos correctos, Bienvenido")
     window.open("https://www.youtube.com/")
    }

    else { alert("Datos incorrectos, verifique su usuario y contraseña")}
        window.open("index.html")


}