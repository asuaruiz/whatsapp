//papa de los chat es #chat
//#mensajes en #chat

function addMsj(){
	//rescatar contenedor de los mensajes
	var agregar =  document.getElementById('conversacion');
	//rescatar el input del mensaje
	var textoInput = document.getElementById("mensajes").value;
	//creamos un p para insertar el valor del input
	var textoMsj = document.createElement("p");
	//transformar el input a nodo de texto
	var nodoInput = document.createTextNode(textoInput);
		textoMsj.appendChild(nodoInput);
	var contPadreMsj = document.createElement("div");
	contPadreMsj.classList.add("w-message", "w-message-out");
	var contMsj = document.createElement("div");
	contMsj.classList.add("w-message-text");
	var hora = document.createElement("div");
		hora.classList.add("time");
	var tiempo = document.createTextNode("14:35");
	hora.appendChild(tiempo);

	
		contMsj.appendChild(textoMsj);
		contMsj.appendChild(hora);
		contPadreMsj.appendChild(contMsj);
		agregar.appendChild(contPadreMsj);
	/*var hora = document.createElement("div");
		hora.setAtributte("id", "time");
		hora.getHours();
		contPadreMsj.appendChild(hora);*/
}
function cambiarConver(){
	//var eliminar = document.getElementById("remove");
	//eliminar.parentNode.removeChild(eliminar);
	var eliminar=document.getElementById("remove").innerHTML = "";
	var seccion = document.createElement("section");
		seccion.classList.add("col-md-8","w-contacts", "w-messages");
	var cabezera = document.createElement("header");
		cabezera.classList.add("w-chat-messages","clearfix");
		seccion.appendChild(cabezera);
	var conAvatar = document.createElement("div");
		conAvatar.classList.add("avatar","col-xs-9","w-chat-profile");
		cabezera.appendChild(conAvatar);
	
	var nombreContacto = document.createElement("h4");
		nombreContacto.classList.add("w-contact-name");
	var textoNombre = document.createTextNode("Raymi Saldomando");
		nombreContacto.appendChild(textoNombre);
		conAvatar.appendChild(nombreContacto);

//segundo elemento del header
	var controles = document.createElement("div");
		controles.classList.add("w-chat-controls","col-xs-2");
		cabezera.appendChild(controles);	
}
