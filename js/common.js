const btnInicio = document.getElementById("btnInicio")
const btnArchivo = document.getElementById("btnArchivo")
const btnInformes = document.getElementById("btnInformes")
const btnContacto = document.getElementById("btnContacto")


btnInicio.addEventListener("click", function(){
        const idIframe = document.querySelector("iframe").src="html/pizarra.html"
    }
);

btnArchivo.addEventListener("click", function()
    {
        const idIframe = document.querySelector("iframe").src="html/miarchivo.html"
    }
)

btnInformes.addEventListener("click", function()
    {
        const idIframe = document.querySelector("iframe").src="html/informes.html"
    }
)

btnContacto.addEventListener("click", function()
    {
        const idIframe = document.querySelector("iframe").src="html/contacto.html"
    }
)
