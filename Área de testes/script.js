let categorias = [
  {
    id: 1,
    cat: 'TI - Sistemas: Usuários (Criar/Desativar)',
    subCat:  [
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
    id: 2,
    cat: 'TI - Sistemas: Projetos',
    subCat:  [
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
    id: 3,
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
  }
]

let cat = document.querySelector('#categorias')
let subCat = document.querySelector('#subcategorias')
let Grupsubcat = 0

for (let cont = 0; cont < categorias.length; cont++) {
  cat.innerHTML += `<option>${categorias[cont].cat}</option>`
}

function selectCat() {
  let optionValue = cat.options[cat.selectedIndex].value
  subCat.innerHTML = `<select name="subcategoria" id="subcategorias">
  <option value="subcategoria" selected disabled>Subcategoria</option>
</select>`
  switch(optionValue) {
    case 'TI - Sistemas: Usuários (Criar/Desativar)':
      for (let cont = 0; cont < categorias[0].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[0].subCat[cont]}</option>`
      }
      break
    case 'TI - Sistemas: Projetos':
      for (let cont = 0; cont < categorias[1].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[1].subCat[cont]}</option>`
      }
      break
    case 'TI - Sistemas: Permissões':
      for (let cont = 0; cont < categorias[2].subCat.length; cont++) {
        subCat.innerHTML += `<option>${categorias[2].subCat[cont]}</option>`
      }
      break
  }
}
