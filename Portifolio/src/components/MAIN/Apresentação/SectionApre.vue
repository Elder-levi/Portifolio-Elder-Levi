<template>
  <section>
    <div class="Apre">
      <h1>Olá, eu sou o Levi</h1>
      <p class="cargo">
        <span class="texto">{{ textoAtual }}</span>
        <span class="cursor">|</span>
      </p>
      <div class="actions">
        <router-link class="btn btn-contact" to="/about">Contato</router-link>
        <router-link class="btn btn-projects" to="/projetos">Ver Projetos</router-link>
      </div>
    </div>
    <div class="Perfil">
      <div class="terminal-card">
      <!-- Barra do topo com os dots -->
       <div class="terminal-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
     </div>

     <pre class="terminal-body">
<code>
<span class="k">const</span> <span class="v">dev</span> = {
  nome: <span class="s">'Levi'</span>,
  cargo: <span class="s">'Full Stack Developer'</span>,
  stack: [<span class="s">'Vue'</span>,  <span class="s">'Java'</span>, 
            <span class="s">'MYsql'</span>],
  disponivel: <span class="k">true</span>,
}
</code>
</pre>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cargos = [
  'Desenvolvedor Full Stack',
]

const textoAtual = ref('')

let indiceCargo = 0
let indiceLetra = 0
let apagando = false

function digitar() {
  const cargoAtual = cargos[indiceCargo]

  if (!apagando) {
    // Digitando...
    textoAtual.value = cargoAtual.slice(0, indiceLetra + 1)
    indiceLetra++

    if (indiceLetra === cargoAtual.length) {
      // Terminou de digitar, pausa antes de apagar
      setTimeout(() => { apagando = true; digitar() }, 1800)
      return
    }
    setTimeout(digitar, 100)

  } else {
    // Apagando...
    textoAtual.value = cargoAtual.slice(0, indiceLetra - 1)
    indiceLetra--

    if (indiceLetra === 0) {
      // Terminou de apagar, vai pro próximo cargo
      apagando = false
      indiceCargo = (indiceCargo + 1) % cargos.length
    }
    setTimeout(digitar, 60)
  }
}

onMounted(() => {
  digitar()
})
</script>


<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 6rem 4rem;
  gap: 2rem;
  color: white;
}

.Apre {
  max-width: 540px;
  text-align: left;
}

.Perfil {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.terminal-card {
  width: 100%;
  max-width: 540px;
}

@media (max-width: 1024px) {
  section {
    flex-direction: column;
    margin: 4rem 2rem;
  }

  .Apre {
    width: 100%;
    text-align: center;
  }

  .Perfil {
    width: 100%;
  }
}

@media (max-width: 640px) {
  section {
    margin: 2rem 1rem;
  }

  h1 {
    font-size: 2.4rem;
  }

  .terminal-body {
    font-size: 0.85rem;
  }

  .actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: min(100%, 260px);
  }
}

.cursor {
  display: inline-block;
  font-weight: 100;
  animation: piscar 0.7s infinite;
}
h1{
font-family: 'courier new', courier, monospace; 
font-size: 3rem;

}


@keyframes piscar {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.terminal-card {
  background: #0D1A0D;
  border: 1px solid #00FF41;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0,255,65,0.15); /* glow verde */
}


.terminal-body {
  padding: 16px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.7;
}

/* Syntax highlight */

.k { color: #00FF41; } /* keyword */
.v { color: #ffffff; } /* variável */
.s { color: #a8ff78; } /* string */
.dot.red    { background: #ff5f57; }
.dot.yellow { background: #ffbd2e; }
.dot.green  { background: #28c840; }

.terminal-header {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #1A2E1A;
}
.actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  padding: 0.9rem 1.6rem;
  border-radius: 999px;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s ease;
}
.btn-contact {
  background:#00FF41;
  color: #111;
}
.btn-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(44, 255, 5, 0.18);
}
.btn-projects {
  background: transparent;
  border-color: #00FF41;
}
.btn-projects:hover {
  transform: translateY(-2px);
  background: rgba(44, 255, 5, 0.08);
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

</style>
