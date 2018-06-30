var calcular= prompt("que operacion deseas calcular")
var medidas1, medidas2


medidas1=parseInt(prompt("ingresar el radio:") );
medidas2=parseInt(prompt("ingresar la altura:") );
alert("elvolumen del cilindro es: " + (Math.PI *medidas1 *medidas1 *medidas2) );


if(calcular=='convertir onzas a toneladas'){
	var onzas=prompt('onzas');
	var toneladas= onzas *0.0000283495;
	alert(onzas * 'onzas equivalen a ')
}

