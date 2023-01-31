/* script para enviar formulario x mail */

const botonEnviar = document.getElementById('enviarCorreo');
	botonEnviar.addEventListener('click', function(e){
   	e.preventDefault();
   	const nombre = document.getElementById('nombre').value;
   	const email = document.getElementById('email').value;
   	const mensaje = document.getElementById('mensaje').value;
   	window.location.href='mailto:correolopeze@gmail.com?subjet=Envio%20desde%20formulario&body=Nombre%3A%20´{nombre}%0AEmail%3A%20{email}%0AMensaje%3A%20{mensaje}'
   	}
);
/****************************** ********************** ****************************************************

/* script para utilizar los datos de una persona random */

const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');

fetch('https://randomuser.me/api/')
      	.then(response => response.json())
      	.then(data => {
      		traerPersona(data);}
      		)

		function traerPersona(data){
			const personaCv = data.results[0];
      	/* renderizamos en el html */ 	
      		foto.src = personaCv.picture.large;
      		nombre.textContent = personaCv.name.first + ' ' + personaCv.name.last ;
      		document.title = 'CV - ' + personaCv.name.first + ' ' + personaCv.name.last ;
		}