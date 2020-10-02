		/*lo que hace esta parte de js es agregar el evento onclick y asignarselo a una 
		funcion en especifico 
		window.onload= function(){
			document.getElementById("btn").onclick=presionarBoton;
		}
		*/
		/*const boton =document.getElementById('btn')*/
		
		/*contenido es el padre donde queremos insertar la nueva etiqueta*/


		/*const elementoCrear=document.createElement('div')*/
		 
		/*innerHTML inserta contenido en el DOM*/
			
		
		
	window.onload= function()
	{
		document.getElementById("btn").onclick=actualizar;
		}
	function actualizar()
	{
		var dondeActualiza = document.getElementById('padre');
		var valorIngresar = document.getElementById("parrafo").value;
		
		var newDiv=document.createElement("div");
		var divContenido=document.createTextNode(valorIngresar);
		newDiv.appendChild(divContenido);		
		dondeActualiza.appendChild(newDiv);
		
		

		

  
	}
	
