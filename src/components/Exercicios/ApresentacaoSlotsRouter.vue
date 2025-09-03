<template>
  <div class="presentation">
    <h1>Vue.js: Slots e Vue Router</h1>
    <section>
      <h2>Parte 1 – Slots</h2>
      <h3>O que são slots e slots nomeados?</h3>
      <p>
        <strong>Slots</strong> em Vue.js são "espaços" dentro de um componente filho onde o componente pai pode inserir conteúdo personalizado. Eles permitem que o componente pai personalize o layout e o conteúdo do componente filho.
      </p>
      <p>
        <strong>Slots nomeados</strong> permitem criar múltiplos espaços de conteúdo, cada um com um nome único. O componente pai pode direcionar o conteúdo para um slot específico usando <code>v-slot</code> ou o atalho <code>#</code>.
      </p>
      <h3>Para que servem e quando são úteis?</h3>
      <ul>
        <li>Permitem criar componentes mais flexíveis e reutilizáveis.</li>
        <li>O layout e o conteúdo podem ser personalizados pelo componente pai.</li>
        <li>Oferecem mais controle sobre onde o conteúdo é posicionado dentro do componente filho.</li>
      </ul>
      <h3>Como funcionam?</h3>
      <p>
        O componente filho define um ou mais <code>&lt;slot&gt;</code> em seu template. O componente pai insere conteúdo entre as tags do componente filho, e esse conteúdo é "injetado" nos slots.
      </p>
      <h3>Exemplo simples de slot:</h3>
      <div class="example">
        <slot-exemplo>
          <template v-slot:default>
            <p>Este conteúdo foi passado do componente pai para o slot padrão!</p>
          </template>
          <template v-slot:footer>
            <p>Este é o slot nomeado 'footer'.</p>
          </template>
        </slot-exemplo>
      </div>
      <pre><code>&lt;!-- Componente Filho --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;slot&gt;Conteúdo padrão&lt;/slot&gt;
    &lt;slot name="footer"&gt;Rodapé padrão&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- Componente Pai --&gt;
&lt;slot-exemplo&gt;
  &lt;template v-slot:default&gt;
    &lt;p&gt;Este conteúdo foi passado do componente pai para o slot padrão!&lt;/p&gt;
  &lt;/template&gt;
  &lt;template v-slot:footer&gt;
    &lt;p&gt;Este é o slot nomeado 'footer'.&lt;/p&gt;
  &lt;/template&gt;
&lt;/slot-exemplo&gt;
</code></pre>
    </section>
    <section>
      <h2>Parte 2 – Vue Router</h2>
      <h3>O que é o Vue Router?</h3>
      <p>
        O <strong>Vue Router</strong> é a biblioteca oficial de roteamento para aplicações Vue.js. Ele permite criar navegação entre diferentes páginas ou componentes, sem recarregar a página inteira (SPA - Single Page Application).
      </p>
      <h3>Conceitos básicos:</h3>
      <ul>
        <li><strong>RouterView</strong>: Um componente especial que renderiza o componente correspondente à rota atual.</li>
        <li><strong>RouterLink</strong>: Um componente para criar links de navegação entre rotas, substituindo a tag <code>&lt;a&gt;</code>.</li>
      </ul>
      <h3>Como funciona e implementação simples:</h3>
      <ol>
        <li>Instale o Vue Router: <code>npm install vue-router</code></li>
        <li>Defina as rotas e componentes.</li>
        <li>Adicione <code>&lt;router-view&gt;</code> no App.vue para renderizar as rotas.</li>
        <li>Use <code>&lt;router-link&gt;</code> para navegar.</li>
      </ol>
      <pre><code>// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// App.vue
<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>
</code></pre>
    </section>
  </div>
</template>

<script>
import SlotExemplo from './SlotExemplo.vue'
export default {
  components: {
    SlotExemplo
  }
}
</script>

<style scoped>
.presentation {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.example {
  border: 1px solid #eee;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f9f9f9;
}
pre {
  background: #222;
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
}
</style>
