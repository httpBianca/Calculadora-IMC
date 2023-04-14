
function calcular(){

    var peso = document.getElementById('peso').value;
    var alt = document.getElementById('alt').value;

    var imc = peso / (alt*alt); //Formula do calculo do indice de masssa corporal (IMC)
    var total = imc.toFixed(2); //deixa com apenas duas casas decimais após virgula

    var res = document.querySelector('.resultado'); //div onde as informações irão aparecer

	var clas; // Declaração de variavel para a classificação

	if(imc <= 18.4){
		console.log('Magreza');
		clas = 'Magreza';
	}
	else if(imc >= 18.5 && imc <= 24.9){
		console.log('Normal');
		clas = 'Normal';
	}
	else if(imc >= 25.0 && imc <= 29.9){
		console.log('Sobrepeso');
		clas = 'Sobrepeso';
	}
	else if(imc >= 30.0 && imc <= 39,9){
		console.log('Obesidade');
		clas = 'Obesidade';
	}
	else{
		console.log('Obesidade Grave');
		clas = 'Obesidade Grave';
	}

	//Colocando dentro da div as informações com o innerHTML que permite colocar codigos html 
    res.innerHTML = `<p>O seu resultado é <b>${total}</b> e sua classificação é <b>${clas}</b></p> <br> 
                 <table class="table-calc" cellspacing="0">

					<thead>
						<tr>
							<td colspan="3">Veja a interpretação do IMC</td>
						</tr>
					</thead>

					<tbody>						
						<tr class="table-calc-blue">
							<td><b>IMC</b></td>
							<td><b>Classificação</b></td>
							<td style="text-align: center"><b>Obesidade</b><small><b>(grau)</b></small></td>
						</tr>
						
						<tr id="result_calc_0">
							<td>Menor que 18,5</td>
							<td>Magreza</td>
							<td style="text-align: center">0</td>
						</tr>
						
						<tr id="result_calc_1">
							<td>Entre 18,5 e 24,9</td>
							<td>Normal</td>
							<td style="text-align: center">0</td>
						</tr>
						
						<tr id="result_calc_2">
							<td>Entre 25,0 e 29,9</td>
							<td>Sobrepeso</td>
							<td style="text-align: center">I</td>
						</tr>
						
						<tr id="result_calc_3">
							<td>Entre 30,0 e 39,9</td>
							<td>Obesidade</td>
							<td style="text-align: center">II</td>
						</tr>

						<tr id="result_calc_4">
							<td>Maior que 40,0</td>
							<td>Obesidade Grave</td>
							<td style="text-align: center">III</td>
						</tr>
					</tbody>

				</table>

                    `

	console.log(imc);

}
