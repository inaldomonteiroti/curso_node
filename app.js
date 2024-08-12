const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Rotas
app.get('/', (req, res) => {
  res.render('home/index');
});

app.get('/formulario_inclusao_noticia', (req, res) => {
  res.render('admin/form_add_noticia');
});

app.get('/noticias', (req, res) => {
  res.render('noticias/noticias');
});

app.get('/tecnologia', (req, res) => {
  res.render("secao/tecnologia");
});

// Middleware para parsear o corpo das requisições
app.use(express.json());
app.use(express.urlencoded({ extended: false }));





// Status o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});