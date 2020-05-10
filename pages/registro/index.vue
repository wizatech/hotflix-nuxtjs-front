<template>
  <div class="sign section--bg" data-bg="/_nuxt/assets/img/section.jpg" style="background: url('/_nuxt/assets/img/section.jpg') center center / cover no-repeat;">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sign__content">
            <!-- registration form -->
            <form  @submit.prevent="register()" class="sign__form">
              <a href="/" class="sign__logo">
                <img src="~assets/img/logo.png" alt="">
                <img src="" alt="">
              </a>

              <div class="sign__group">
                <input type="text" class="sign__input" v-model="fields.username" placeholder="Nome">
              </div>

              <div class="sign__group">
                <input type="text" class="sign__input" v-model="fields.email" placeholder="Email">
              </div>

              <div class="sign__group">
                <input type="password" class="sign__input" v-model="fields.password" placeholder="Senha">
              </div>

              <button class="sign__btn" type="submit">Cadastrar</button>

              <span class="sign__text">Já possui uma conta? <nuxt-link to="/">clique aqui!</nuxt-link></span>
            </form>
            <!-- registration form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register () {
      const fields = (await this.$axios.post('users', this.fields)).data
      if (fields) {
        this.$router.push('/')
      }
    }
  }
}
</script>
