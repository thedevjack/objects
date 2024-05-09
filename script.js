const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551199999998", "551199999993"],
  enderecos: [
    {
      rua: "Rua Joseph Climber",
      numero: "45",
      complemento: "apto 43",
    },
    {
      rua: "Rua Dona Clotilde",
      numero: "71",
      complemento: null,
    },
  ],
};

// function exibeInfo(objAluno, infoAluno) {
//   return objAluno[infoAluno];
// }

for (chave in estudante) {
  const tipo = typeof estudante[chave];
  if (tipo !== "object" && tipo !== "function") {
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`;
    console.log(texto);
  }
}

//console.log('res ->',exibeInfo(estudante, 'cpf'))

// const array = [
//   {
//     nome: "Jackson",
//     idade: 24,
//     estado: "namorando",
//   },
//   {
//     nome: "Stéphany",
//     idade: 26,
//     estado: "namorando",
//   },
//   {
//     nome: "Mauricio",
//     idade: 28,
//     estado: "solteiro",
//   },
//   {
//     nome: "Neymar",
//     idade: 32,
//     estado: "solteiro",
//   },
// ];

//console.log(condominios);
// condominios.forEach((res) => {
//   console.log(res.value.map((r) => r.bloco));
// });
//console.log(array);
// array.forEach((res, i) => {
//   if (res.idade > 25) {
//     console.log("velho -> ", res.nome + " - " + res.idade + ' - ' + i);
//   }
// });

// array.filter((res) => {
//   console.log(res.idade === 32 || res.idade === 26 ? res.nome : "n encontrado");
// });

// const contaBancaria = {
//   titular: "João",
//   saldo: 1000,
//   depositar: function (valor) {
//     this.saldo += valor;
//   },
//   sacar: function (valor) {
//     if (valor <= this.saldo) {
//       this.saldo -= valor;
//     } else {
//       console.log("Saldo insuficiente para saque.");
//     }
//   },
// };

// const cliente = {
//   nome: "Carlos",
//   conta: contaBancaria,
// };

// function mostrarSaldo(cliente) {
//   console.log(`Nome do cliente: ${cliente.nome}`);
//   console.log(`Saldo da conta: ${cliente.conta.saldo}`);
// }

// // Realize operações de depósito e saque na conta bancária do cliente
// cliente.conta.depositar(500);
// cliente.conta.sacar(12200);

// // Chame a função mostrarSaldo para exibir as informações atualizadas
// mostrarSaldo(cliente);
