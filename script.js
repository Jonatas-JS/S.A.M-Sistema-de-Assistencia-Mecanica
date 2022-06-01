function darkMod() {
  let checkbox = document.getElementById('checkbox')
  if (checkbox.checked) {
    document.querySelector('.body').classList.add('darkMod')
  } else {
    document.querySelector('.body.darkMod').classList.remove('darkMod')
  }
}

function btnNewTicketClient() {
  document.querySelector('.new-ticket-screen').classList.add('active')
}

function btnCancelarTicket() {
  document.querySelector('.new-ticket-screen.active').classList.remove('active')

  document.querySelector('#subject-new-ticket').value = ''
  document.querySelector('#description-new-ticket').value = ''
  document.querySelector('#category-new-ticket').value = 'Categoria*'
  document.querySelector('#subcategory-new-ticket').innerHTML = `<option selected disable>Subcategoria*</option>`
}

let cat = document.querySelector('#category-new-ticket')
let subCat = document.querySelector('#subcategory-new-ticket')

let categorias = [
  {
    id: 1,
    cat: 'TI - Operações: Equipamentos',
    subCat: [
      'Computador/Notebook',
      'Periféricos/Mouse/Teclado',
      'Tablet',
      'Telefonia',
      'Webcam'
    ]
  },
  {
    id: 2,
    cat: 'TI - Operações: Infraestrutura',
    subCat: [
      'Cabeamento Estruturado',
      'Cloud Computing',
      'Exchange',
      'Links de Internet',
      'Microsoft 365',
      'Monitoramento de Rede',
      'Rede de Computadores',
      'Rede Wireless',
      'Servidores',
      'Storages',
      'Switchs/VLAN',
      'VPN',
      'Zabbix'
    ]
  },
  {
    id: 3,
    cat: 'TI - Operações: Projetos',
    subCat: [
      'Governança',
      'Infraestrutura',
      'Redes',
      'Segurança',
      'Trasformação Digital',
    ]
  },
  {
    id: 4,
    cat: 'TI - Operações: Segurança',
    subCat: [
      'Antivírus',
      'Bloqueio Internet',
      'Câmeras de Segurança',
      'Controle de Acessos',
      'Incidente de Segurança',
      'Liberação Internet',
      'Spam',
    ]
  },
  {
    id: 5,
    cat: 'TI - Operações: Suporte Técnico',
    subCat: [
      'Backup de Arquivos',
      'E-mail',
      'Hardware',
      'Impressoras/Erro',
      'Impressoras/Tonner',
      'Infraestrutura',
      'Microsoft 365',
      'Office',
      'Softwares e Aplicativos',
      'Wifi',
      'Windows',
      'Zoom'
    ]
  },
  {
    id: 6,
    cat: 'TI - Operações: Telecomunicações',
    subCat: [
      'Claro',
      'Embratel',
      'MPLS',
      'One',
      'PABX',
      'Ramais',
      'VIVO',
    ]
  },
  {
    id: 7,
    cat: 'TI - Operações: Usuário - Criar / Desativar',
    subCat: [
      'Desativar',
      'E-mail',
      'Redes',
      'TS/Rede/E-mail/Milvus/INTRANET',
    ]
  },
  {
    id: 8,
    cat: 'TI - Sistemas: Análise de Processos',
    subCat: [
      'B2B',
      'B2C-MASTER',
      'B2C-SERVER',
      'B2C-TRAY',
      'B2C-VTEX',
      'Desenvolvimento Interno',
      'ERP-SIGER',
      'GMAX',
      'Metadados',
      'PJPlace',
      'VVG',
      'WMS'
    ]
  },
  {
    id: 9,
    cat: 'TI - Sistemas: Configurações / Implementações',
    subCat: [
      'B2B',
      'B2C-MASTER',
      'B2C-SERVER',
      'B2C-TRAY',
      'B2C-VTEX',
      'Business Intelligence - BI',
      'Desenvolvimento Interno',
      'ERP-SIGER',
      'GMAX',
      'Metadados',
      'OKEA',
      'PJPlace',
      'VVG',
      'WMS'
    ]
  },
  {
    id: 10,
    cat: 'TI - Sistemas: Dúvidas',
    subCat: [
      'B2B',
      'B2C-MASTER',
      'B2C-SERVER',
      'B2C-TRAY',
      'B2C-VTEX',
      'Desenvolvimento Interno',
      'ERP-SIGER',
      'GMAX',
      'Metadados',
      'PJPlace',
      'VVG',
      'WMS'
    ]
  },
  {
    id: 11,
    cat: 'TI - Sistemas: Erros',
    subCat: [
      'B2B',
      'B2C-MASTER',
      'B2C-SERVER',
      'B2C-TRAY',
      'B2C-VTEX',
      'Desenvolvimento Interno',
      'ERP-SIGER',
      'GMAX',
      'Metadados',
      'PJPlace',
      'VVG',
      'WMS'
    ]
  },
  {
    id: 12,
    cat: 'TI - Sistemas: GeradorRelatórios / RotinasEspeciais',
    subCat: [
      'B2C-MASTER',
      'B2C-SERVER',
      'Business Intelligence - BI',
      'Desenvolvimento Interno',
      'ERP-SIGER',
      'GMAX',
      'Metadados',
      'WMS',
    ]
  },
  {
    id: 13,
    cat: 'TI - Sistemas: Melhorias',
    subCat: [
      'B2B',
      'B2C-MASTER',
      'B2C-SERVER',
      'B2C-TRAY',
      'B2C-VTEX',
      'Business Intelligence - BI',
      'Desenvolvimento Interno',
      'ERP-SIGER',
      'GMAX',
      'Metadados',
      'PJPlace',
      'VVG',
      'WMS'
    ]
  },
  {
    id: 14,
    cat: 'TI - Sistemas: Permissões',
    subCat: [
      'B2B',
      'B2C-MASTER',
      'B2C-SERVER',
      'B2C-TRAY',
      'B2C-VTEX',
      'Business Intelligence - BI',
      'Desenvolvimento Interno',
      'ERP-SIGER',
      'GMAX',
      'Metadados',
      'PJPlace',
      'VVG',
      'WMS'
    ]
  },
  {
    id: 15,
    cat: 'TI - Sistemas: Projetos',
    subCat: [
      'B2B',
      'B2C-MASTER',
      'B2C-SERVER',
      'B2C-TRAY',
      'B2C-VTEX',
      'Business Intelligence - BI',
      'Desenvolvimento Interno',
      'ERP-SIGER',
      'Metadados',
      'PJPlace',
      'VVG',
      'WMS'
    ]
  },
  {
    id: 16,
    cat: 'TI - Sistemas: Usuários (Criar/Desativar)',
    subCat: [
      'B2B',
      'B2C-MASTER',
      'B2C-SERVER',
      'B2C-TRAY',
      'B2C-VTEX',
      'Desenvolvimento Interno',
      'ERP-SIGER',
      'GMAX',
      'Metadados',
      'PJPlace',
      'VVG',
      'WMS'
    ]
  }
]
for (let cont = 0; cont < categorias.length; cont++) {
  cat.innerHTML += `<option>${categorias[cont].cat}</option>`
}
function selectCat() {
  let optionValue = cat.options[cat.selectedIndex].value
  subCat.innerHTML = `<select id="subcategory-new-ticket">
  <option value="subcategoria" selected disabled>Subcategoria*</option>
</select>`
  switch (optionValue) {
    case 'TI - Operações: Equipamentos':
      for (let cont = 0; cont < categorias[0].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[0].subCat[cont]}</option>`
      }
      break
    case 'TI - Operações: Infraestrutura':
      for (let cont = 0; cont < categorias[1].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[1].subCat[cont]}</option>`
      }
      break
    case 'TI - Operações: Projetos':
      for (let cont = 0; cont < categorias[2].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[2].subCat[cont]}</option>`
      }
      break
    case 'TI - Operações: Segurança':
      for (let cont = 0; cont < categorias[3].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[3].subCat[cont]}</option>`
      }
      break
    case 'TI - Operações: Suporte Técnico':
      for (let cont = 0; cont < categorias[4].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[4].subCat[cont]}</option>`
      }
      break
    case 'TI - Operações: Telecomunicações':
      for (let cont = 0; cont < categorias[5].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[5].subCat[cont]}</option>`
      }
      break
    case 'TI - Operações: Usuário - Criar / Desativar':
      for (let cont = 0; cont < categorias[6].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[6].subCat[cont]}</option>`
      }
      break
    case 'TI - Sistemas: Análise de Processos':
      for (let cont = 0; cont < categorias[7].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[7].subCat[cont]}</option>`
      }
      break
    case 'TI - Sistemas: Configurações / Implementações':
      for (let cont = 0; cont < categorias[8].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[8].subCat[cont]}</option>`
      }
      break
    case 'TI - Sistemas: Dúvidas':
      for (let cont = 0; cont < categorias[9].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[9].subCat[cont]}</option>`
      }
      break
    case 'TI - Sistemas: Erros':
      for (let cont = 0; cont < categorias[10].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[10].subCat[cont]}</option>`
      }
      break
    case 'TI - Sistemas: GeradorRelatórios / RotinasEspeciais':
      for (let cont = 0; cont < categorias[11].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[11].subCat[cont]}</option>`
      }
      break
    case 'TI - Sistemas: Melhorias':
      for (let cont = 0; cont < categorias[12].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[12].subCat[cont]}</option>`
      }
      break
    case 'TI - Sistemas: Permissões':
      for (let cont = 0; cont < categorias[13].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[13].subCat[cont]}</option>`
      }
      break
    case 'TI - Sistemas: Projetos':
      for (let cont = 0; cont < categorias[14].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[14].subCat[cont]}</option>`
      }
      break
    case 'TI - Sistemas: Usuários (Criar/Desativar)':
      for (let cont = 0; cont < categorias[15].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[15].subCat[cont]}</option>`
      }
      break
  }
}

let ticket = [
]

function btnCriarTicket() {
  let ticketId = String(ticket.length).padStart(5, '0')
  let nome = document.querySelector('#name-new-ticket').value
  let eMail = document.querySelector('#email-new-ticket').value
  let ramal = document.querySelector('#ramal-new-ticket').value
  let categoria = document.querySelector('#category-new-ticket').value
  let subcategoria = document.querySelector('#subcategory-new-ticket').value
  let assunto = document.querySelector('#subject-new-ticket').value
  let descricao = document.querySelector('#description-new-ticket').value
  let prioridade = 'baixa'
  let status = 'A fazer'
  let tecnico = '-'

  let relogio = new Date()
  let diaAtual = String(relogio.getDate()).padStart(2, '0')
  let mesAtual = String(relogio.getMonth() + 1).padStart(2, '0')
  let anoAtual = relogio.getFullYear()
  let dataAtual = `${diaAtual}/${mesAtual}/${anoAtual}`
  let horaAtual = String(relogio.getHours()).padStart(2, '0')
  let minutoAtual = String(relogio.getMinutes()).padStart(2, '0')
  let horaCriacao = `${horaAtual}:${minutoAtual}`

  let tableResul = document.querySelector('#tbody')

  let criateTr = ''

  if (nome == '' || eMail == '' || ramal == '' || categoria == 'Categoria*' || subcategoria == 'Subcategoria*' || assunto == '') {
    alert('[ERRO] Preencha todos os campos')
  } else {
  let infNewTicket = ticket.push({ticketId: `${ticketId}`, nome: `${nome}`, eMail: `${eMail}`, ramal: `${ramal}`, categoria: `${categoria}`, subcategoria: `${subcategoria}`, assunto: `${assunto}`, descricao: `${descricao}`, prioridade: `${prioridade}`, status: `${status}`, tecnico: `${tecnico}`, dtCriacao: `${dataAtual}`, horaCriacao: `${horaCriacao}` })

    for (let i = 0; i < ticket.length; i++) {
      let cont = i + 1
      criateTr += `
      <tr>
      <td><a href="#" class="detalhes-chamado">[${ticket[ticket.length - cont].ticketId}]</a></td>
      <td>${ticket[ticket.length - cont].prioridade}</td>
      <td>${ticket[ticket.length - cont].categoria}</td>
      <td>${ticket[ticket.length - cont].subcategoria}</td>
      <td>${ticket[ticket.length - cont].status}</td>
      <td>${ticket[ticket.length - cont].tecnico}</td>
      <td>${ticket[ticket.length - cont].dtCriacao}</td>
      <td><a href="#" class="abrir-detalhes"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" class="svg-icon"></svg></a></td>
      </tr>
      `
    }
    tableResul.innerHTML = `${criateTr}`
    btnCancelarTicket()
  }
  let detalhes = document.querySelectorAll('.abrir-detalhes')
  let chamado = document.querySelectorAll('.detalhes-chamado')
  for (let i = 0; i < detalhes.length; i++) {
    chamado[i].addEventListener("click", function (e) {
      let cont = i + 1
      let item = ticket.length - cont
      document.querySelector('.modal-visualizar-detalhes').classList.add('active')
      document.getElementById('nTicket-detalhes').innerHTML = `Ticket #${ticket[item].ticketId}`
      document.getElementById('tbody-detalhes').innerHTML = `
    <tr>
    <th scope="row">Nome:</th>
    <td>${ticket[item].nome}</td>
    </tr>
    <tr>
    <th scope="row">E-mail:</th>
    <td>${ticket[item].eMail}</td>
    </tr>
    <tr>
    <th scope="row">Ramal:</th>
    <td>${ticket[item].ramal}</td>
    </tr>
    <tr>
    <th scope="row">Categoria:</th>
    <td>${ticket[item].categoria}</td>
    </tr>
    <tr>
    <th scope="row">Subcategoria:</th>
    <td>${ticket[item].subcategoria}</td>
    </tr>
    <tr>
    <th scope="row">Assunto:</th>
    <td>${ticket[item].assunto}</td>
    </tr>
    <tr>
    <th scope="row">Descrição:</th>
    <td>${ticket[item].descricao}</td>
    </tr>
    <tr>
    <th scope="row">Prioridade:</th>
    <td>${ticket[item].prioridade}</td>
    </tr>
    <tr>
    <th scope="row">Status:</th>
    <td>${ticket[item].status}</td>
    </tr>
    <tr>
    <th scope="row">Técnico:</th>
    <td>${ticket[item].tecnico}</td>
    </tr>
    <tr>
    <th scope="row">Data:</th>
    <td>${ticket[item].dtCriacao} ${ticket[ticket.length - cont].horaCriacao}</td>
    </tr>`
    })
    detalhes[i].addEventListener("click", function (e) {
      let cont = i + 1
      let item = ticket.length - cont
      document.querySelector('.modal-visualizar-detalhes').classList.add('active')
      document.getElementById('nTicket-detalhes').innerHTML = `Ticket #${ticket[item].ticketId}`
      document.getElementById('tbody-detalhes').innerHTML = `
    <tr>
    <th scope="row">Nome:</th>
    <td>${ticket[item].nome}</td>
    </tr>
    <tr>
    <th scope="row">E-mail:</th>
    <td>${ticket[item].eMail}</td>
    </tr>
    <tr>
    <th scope="row">Ramal:</th>
    <td>${ticket[item].ramal}</td>
    </tr>
    <tr>
    <th scope="row">Categoria:</th>
    <td>${ticket[item].categoria}</td>
    </tr>
    <tr>
    <th scope="row">Subcategoria:</th>
    <td>${ticket[item].subcategoria}</td>
    </tr>
    <tr>
    <th scope="row">Assunto:</th>
    <td>${ticket[item].assunto}</td>
    </tr>
    <tr>
    <th scope="row">Descrição:</th>
    <td>${ticket[item].descricao}</td>
    </tr>
    <tr>
    <th scope="row">Prioridade:</th>
    <td>${ticket[item].prioridade}</td>
    </tr>
    <tr>
    <th scope="row">Status:</th>
    <td>${ticket[item].status}</td>
    </tr>
    <tr>
    <th scope="row">Técnico:</th>
    <td>${ticket[item].tecnico}</td>
    </tr>
    <tr>
    <th scope="row">Data:</th>
    <td>${ticket[item].dtCriacao} ${ticket[ticket.length - cont].horaCriacao}</td>
    </tr>`
    })
  }
}
function fecharDetalhes() {
  document.querySelector('.modal-visualizar-detalhes.active').classList.remove('active')
}
