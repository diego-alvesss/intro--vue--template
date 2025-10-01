
<template>
  <div class="portfolio-container">
    <header class="portfolio-header">
      <img :src="profileImage" alt="Foto de Perfil" class="profile-img" />
      <h1>{{ nome_do_desenvolvedor }}</h1>
      <p class="portfolio-description">{{ descricao }}</p>
    </header>

    <section class="portfolio-section">
      <h2>Projetos</h2>
      <div class="projects-list">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <h3>{{ project.title }}</h3>
          <p>{{ project.shortDescription }}</p>
          <a :href="project.link" target="_blank" rel="Projetos DIego">Ver Projeto</a>
        </div>
      </div>
    </section>

    <section class="portfolio-section">
      <h2>Contato</h2>
      <p>
        Instagram: <a href="https://instagram.com/dieginzx" target="_blank">@Dieginzx</a><br />
        Linkedin: <a href="https://www.linkedin.com/in/diego-alves-302369381/" target="_blank">Diego Alves</a><br />
      </p>
    </section>
  </div>
</template>

<script setup>
// Nome do desenvolvedor
const nome_do_desenvolvedor = 'Diego Alves';

// Imagem de perfil
import profileImage from '../../../public/profile.jpg';

// Descrição curta
const descricao = 'Estudante de Desenvolvimento de Sistemas, apaixonado por esporte, video games , tecnologia e comunicação.';

// Lista de projetos
const projects = [
  {
    title: 'WhilePlay',
    shortDescription: 'Site para encorajar roteiristas e desenhistas no mundo do cinema online.',
    link: 'https://github.com/geovana-clemente/whileplay'
  },
  {
    title: 'Opium Site',
    shortDescription: 'Site all black focado na conscientização sobre carbonização.',
    link: 'https://github.com/miguel-zacharias/OPIUM-PROJECT'
  }
];
</script>

<style scoped>
.portfolio-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 24px;
  background: #000000;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  font-family: Arial, Helvetica, sans-serif;
}
.portfolio-header {
  text-align: center;
  margin-bottom: 32px;
}
.profile-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #4f8cff;
  margin-bottom: 16px;
}
.portfolio-description {
  font-size: 1.1rem;
  color: #ffffff;
}
.projects-list {
  display: flex;
  gap: 20px;
}
.project-card {
  background: #000000;
  border: 2px solid #4f8cff;
  padding: 18px;
  width: 260px;
  margin-bottom: 16px;
}
.project-card h3 {

  color: #0055f3;
}
.project-card a {
  color: #4f8cff;
  font-weight: bold;
}
</style>