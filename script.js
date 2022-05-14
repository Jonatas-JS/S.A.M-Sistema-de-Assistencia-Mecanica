function btnNewTicketClient() {
  document.querySelector('.new-ticket-screen').classList.add('active')
}
function btnCancelarTicket() {
  document.querySelector('.new-ticket-screen.active').classList.remove('active')
}
var ticket = [
  {
    ticketId: '3030',
    nome: '',
    eMail: '',
    ramal: '',
    categoria: '',
    subcategoria: '',
    assunto: '',
    descrição: '',
    prioridade: 'baixa',
    assunto: 'Impressora com defeito',
    categoria: 'Impressoras / Erro',
    status: ' fazer',
    tecnico: 'Diherllys Leal',
    dtCriacao: '13/05/2022'
  }
]
function btnCriarTicket() {
  let relogio = new Date()
  // let ticketId = document.querySelector('').value
  let nome = document.querySelector('#name-new-ticket').value
  let eMail = document.querySelector('#email-new-ticket').value
  let ramal = document.querySelector('#ramal-new-ticket').value
  let categoria = document.querySelector('#category-new-ticket').value
  let subcategoria = document.querySelector('#subcategory-new-ticket').value
  let assunto = document.querySelector('#subject-new-ticket').value
  let descricao = document.querySelector('#description-new-ticket').value
  let prioridade = 'baixa'
  let status = 'A fazer'
  let tecnico = ''
  let dtCriacao = relogio.getDate()

  let infNewTicket = ticket.push('3031', `${nome}`, `${eMail}`, `${ramal}`, `${categoria}`, `${subcategoria}`, `${assunto}`, `${descricao}`, `${prioridade}`, `${status}`, `${tecnico}`, `${dtCriacao}`,)
  console.log(ticket)

  let criateTr = document.querySelector('#tbody')
  if (document.querySelector('#name-new-ticket').value == 0) {
    alert('[ERRO] Preencha todos os campos')
  } else {
    for (let cont = 1; cont <= 1; cont++) {
      criateTr.innerHTML +=`
      <tr>
      <td><a href="#">[${ticket[ticket.length].ticketId}]</a></td>
      <td>${ticket[ticket.length].prioridade}</td>
      <td>${ticket[ticket.length].assunto}</td>
      <td>${ticket[ticket.length].categoria}</td>
      <td>${ticket[ticket.length].status}</td>
      <td>${ticket[ticket.length].tecnico}</td>
      <td>${ticket[ticket.length].dtCriacao}</td>
      <td><a href="#"><img src="./images/assets/eye-solid-blue.png" alt="botão visualizar"></a></td>
      </tr>
      `
      btnCancelarTicket()
    }  
  }
}