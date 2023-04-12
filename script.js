
function calcular(){

    var peso = document.getElementById('peso').value;
    var alt = document.getElementById('alt').value;

    var imc = peso / (alt*alt);
    var total = imc.toFixed(2); //deixa com apenas duas casas decimais após virgula

    var res = document.querySelector('.resultado');

    res.innerHTML = `<p>O seu resultado é <b>${total}</b></p> <br> 
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
