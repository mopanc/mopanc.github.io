<template>
  <div class="contacts-page">
    <div>
      <h1>Contact</h1>
      <div class="contact-info">
        <p>Name: {{ contato.nome }}</p>
        <p>Email: {{ contato.email }}</p>
        <p>Phone: {{ contato.telefone }}</p>
        <div class="footer__content social_links-1">
            <h4 class="footer__title"></h4>
            <ul class="footer__social-list">
                <li class="footer__social-item">
                    <a href="https://www.facebook.com/jorgemopanc" class="footer__social-link-1">
                        <i class="ri-facebook-fill"></i>
                    </a>
                </li>
                <li class="footer__social-item">
                    <a href="https://www.instagram.com/jorgemopanc/" class="footer__social-link-1">
                        <i class="ri-instagram-fill"></i>
                    </a>
                </li>
                <li class="footer__social-item">
                    <a href="https://twitter.com/JorgeMo56542670" class="footer__social-link-1">
                        <i class="ri-twitter-fill"></i>
                    </a>
                </li>
                <li class="footer__social-item">
                    <a href="https://github.com/mopanc" class="footer__social-link-1">
                        <i class="ri-github-fill"></i>
                    </a>
                </li>
                <li class="footer__social-item">
                    <a href="https://www.linkedin.com/in/jorge-mopanc/" class="footer__social-link-1">
                        <i class="ri-linkedin-fill"></i>
                    </a>
                </li>
                <li class="footer__social-item">
                    <a href="https://codepen.io/mopanc" class="footer__social-link-1">
                        <i class="ri-codepen-line"></i>
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="contact-form">
      <h2>Let's talk?</h2>
      <form @submit.prevent="enviarFormulario">
        <label for="nome">Name:</label>
        <input type="text" id="nome" v-model="formulario.nome" required>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formulario.email" required>
        <label for="telefone">Message:</label>
        <textarea type="text" id="message" v-model="formulario.message" required></textarea>
        <button class="btn btn--secondary" type="submit">Enviar</button>
      </form>
    </div>
  </div>
  <div>
    <div id="map" v-html="mapHTML"></div>
  </div>
</template>

<script>
import { enviarPedidoContato } from "../../firebase"; // Importe a função

export default {
  data() {
    return {
      contato: {
        nome: "Jorge Morais",
        email: "jorgemopanc@icloud.com",
        telefone: "(+351) 910 559 307"
      },
      formulario: {
        nome: "",
        email: "",
        message: ""
      }
    };
  },
  computed: {
    mapHTML() {
      return '<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=braga&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><a href="https://embedgooglemap.2yu.co/">html embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div>';
    }
  },
methods: {
  enviarFormulario() {
    // Crie um objeto com os dados do formulário
    const pedidoContato = {
      nome: this.formulario.nome,
      email: this.formulario.email,
      message: this.formulario.message
    };
    
    // Chame a função para enviar os dados do formulário para o Firebase
    enviarPedidoContato(pedidoContato)
      .then(() => {
        console.log("Pedido de contato enviado com sucesso!");

        this.$router.push("/success");
      })
      .catch((error) => {
        console.error("Erro ao enviar pedido de contato:", error);
      });
  }
}
};
</script>

<style>
.contacts-page {
  margin: auto;
  padding: 70px 25px;
  max-width: 98rem;
  display: flex;
  justify-content: space-evenly;
}

form {
  margin-top: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
}

input {
  width: 100%;
  padding: 10px 20px 10px 4px;
  margin-bottom: 20px;
}
textarea {
  width: 100%;
  padding: 10px 20px 20px 4px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

#map {
  width: 100%;
  height: 400px;
  margin-top: 20px;
}

.contact-info {
  margin-top: 60px;
  text-align: left;
}

.contact-info p {
  margin-bottom: 20px;
}

.contact-form {
  width: 450px;
}

.footer__social-link-1 {
    color: var(--color-white);
}
.footer__social-link-1:hover {
    color: #42b983;
}
.social_links-1 {
justify-content: left;
}

#message {
  height: 100px;
}

@media screen and (max-width: 764px) {
  .contacts-page {
  display: block;

}

.contact-form {
  margin-top: 4rem;
  max-width: 380px;
}
}
</style>