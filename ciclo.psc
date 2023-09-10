Algoritmo CalculoInteresFijo
	definir base, valorFinal Como Real
	definir interes Como Real
	definir mes, meses Como Entero
	base = 1000.0
	interes = 10.5
	mes = 1
	meses = 12
	valorFinal = base
	Mientras valorFinal < 1300 Hacer
		Escribir mes, " ", valorFinal
		valorFinal = valorFinal + interes
		mes = mes + 1
	Fin Mientras
	Escribir mes - 1, " ", valorFinal
FinAlgoritmo

// 1300 - base + (intereses * mes)) < 0
// base + (intereses * mes) = 1300
// 1000 + (10.5 * mes) = 1300
// 10.5 * mes = 300
// mes = 300 / 10.5 = roundup(28.57) = 29
// (1300 - base) / intereses = mes