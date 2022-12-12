const btnEntrar = document.getElementById('btnEntrar');
const input = document.querySelector('#agreement');
const button = document.querySelector('#submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const limiteTextArea = 500;

btnEntrar.addEventListener('click', (e) => {
  // const { email, password } = trybewartsLogin;
  // Tirei a linha a cima porque o ESLint está dando erro de variável não definida.
  const emailLogin = document.getElementById('email');
  const password = document.getElementById('password');

  if (emailLogin.value && password.value) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }

  e.preventDefault();
});

button.disabled = true;

button.addEventListener('click', (e) => {
  e.preventDefault();
});

function alterarBotao() {
  button.disabled = !button.disabled; // Ajuda do Fabiano
}

input.addEventListener('change', alterarBotao);
textarea.addEventListener('keyup', () => {
  counter.innerText = limiteTextArea > 0 ? limiteTextArea - textarea.value.length : 0;
});

function getCheckboxValues() {
  const skills = document.querySelectorAll('[name=skills]:checked');
  const values = [];
  for (let i = 0; i < skills.length; i += 1) {
    values.push(skills[i].value);
  }
  return values.toString().replace(/,/g, ', ');
}

function setFormResult() {
  const evaluationForm = document.getElementById('evaluation-form');
  const family = document.querySelector('input[name="family"]:checked').value;
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const checkboxValues = getCheckboxValues();

  evaluationForm.innerHTML = `
    <p>Nome: ${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Casa: ${house}</p>
    <p>Família: ${family}</p>
    <p>Matérias: ${checkboxValues}</p>
    <p>Avaliação: ${rate}</p>
    <p>Observações: ${textarea.value}</p>
  `;
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  setFormResult();
});
