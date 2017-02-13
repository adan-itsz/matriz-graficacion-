
function detectarPosiciones(filaActual,columnaActual,altura,anchura,matriz){
		cell=document.getElementById(filaActual+ ":"+columnaActual);
		cell.style.border= 'solid';
	for (var x = filaActual-1 ; x<= filaActual+1; x++){
		for(var y = columnaActual-1; y<= columnaActual+1 ; y++){

	 	if (x<0 && y<0){
			//matriz[altura][anchura];
			pintar(altura,anchura,false);
	 	}

		else if (x<0 && y>anchura){
			pintar(altura,0,false);
				//matriz[altura][0];
		}

		else if (x>altura && y<0){
			pintar(0,anchura,false);
				//matriz[0][anchura];
	 	}
		else if (x>altura && y>anchura){
			pintar(0,0,false);
				//matriz[0][0]);
	 }

		else if (y<0){
			pintar(x,anchura,false);
			//	matriz[x][anchura]);
		}
		else if (y>anchura){
		pintar(x,0,false);
			//matriz[x][0]);
		}
		else if (x<0){
		pintar(altura,y,false);
			//matriz[altura][y]);
		}
		else if (x>altura){
		pintar(0,y,false);
			//matriz[0][y]);
		}
		else{
		pintar(x,y,false);
			//matriz[x][y]);
		}
	}
}
}

function pintar(columna,fila,estado){
cell=document.getElementById(columna+ ":"+fila);
  cell.style.backgroundColor='red';


}
