//% color=#1E90FF icon="\uf1ec" block="Calculadora"
namespace calculadora {
    let valor1 = ""
    let valor2 = ""
    let operacao = ""
    let mestre_estado = 0 // 0: digitando valor1, 1: digitando valor2

    //% block="processar tecla %tecla"
    export function processar(tecla: string): void {
        if (tecla == "#") {
            valor1 = ""
            valor2 = ""
            operacao = ""
            mestre_estado = 0
            lcd16x02.clear()
        }
        else if (tecla == "A" || tecla == "B" || tecla == "C") {
            if (valor1 != "") {
                if (tecla == "A") operacao = "+"
                if (tecla == "B") operacao = "-"
                if (tecla == "C") operacao = "*"
                mestre_estado = 1
                lcd16x02.showString(operacao, 1, 15)
            }
        }
        else if (tecla == "D") {
            let n1 = parseFloat(valor1)
            let n2 = parseFloat(valor2)
            let res = 0
            if (operacao == "+") res = n1 + n2
            if (operacao == "-") res = n1 - n2
            if (operacao == "*") res = n1 * n2

            lcd16x02.clear()
            lcd16x02.showString("=" + res, 2, 0)
            valor1 = "" + res
            valor2 = ""
            mestre_estado = 0
        }
    }
}
