window.onload = function() {
  marcarVermelhoInputs();
  
  const form = document.getElementById('form-fale-conosco');
  if (form  !== null) {
    form.addEventListener('submit', function(event) {
      if (!validarForm()) {
        event.preventDefault();
      } else {
        form.submit();
        mensagemSucesso();
        limparForm();
      }
    });
  }
};

function marcarVermelhoInputs(){
  const inputs = document.querySelectorAll('#nome, #email, #tel, #idade, #mensagem');

  for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function() {
      if(this.value === '') {
        this.classList.add('required-input');
      } else {
        this.classList.remove('required-input');
      }
    })

    inputs[i].addEventListener('input', function() {
      if(this.value !== '') {
        this.classList.remove('required-input');
      }else {
        this.classList.add('required-input');
      }
    })
  }
}

function validarForm(){
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const telInput = document.getElementById('tel');
  const idadeInput = document.getElementById('idade');
  const mensagemInput = document.getElementById('mensagem');

  let isValid = []

  if (nomeInput.value === '') {
    inputInvalido(nomeInput);
    isValid.push(false);
  } else {
    inputValido(nomeInput);
  }

  if (emailInput.value === '') {
    inputInvalido(emailInput);
    isValid.push(false);
  } else {
    inputValido(emailInput);
  }

  if (telInput.value === '') {
    inputInvalido(telInput);
    isValid.push(false);
  } else {
    inputValido(telInput);
  }

  if (idadeInput.value === '' || isNaN(parseInt(idadeInput.value))) {
    inputInvalido(idadeInput);
    isValid.push(false);
  } else {
    inputValido(idadeInput);
  }

  if (mensagemInput.value === '') {
    inputInvalido(mensagemInput);
    isValid.push(false);
  } else {
    inputValido(mensagemInput);
  }
  return isValid.length === 0;
}

function inputInvalido(input){
  const id = input.id;
  input.classList.add('required-input');
  document.querySelector('p#'+id).classList.remove('hide');
}

function inputValido(input){
  const id = input.id;
  document.querySelector('p#'+id).classList.add('hide');
  input.classList.remove('required-input');
}

function mensagemSucesso(){
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const msg = nomeInput.value + '(' + emailInput.value + '): ';
  alert(msg + 'Agradecemos o contato!');
}

function limparForm(){
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const telInput = document.getElementById('tel');
  const idadeInput = document.getElementById('idade');
  const mensagemInput = document.getElementById('mensagem');

  nomeInput.value = '';
  emailInput.value = '';
  telInput.value = '';
  idadeInput.value = '';
  mensagemInput.value = '';
}
