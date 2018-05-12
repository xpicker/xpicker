<template>
    <form class="form">
      <div class="form-input icon">
        <input type="text" v-model="username" :placeholder="i18n.t('username')">
        <i class="iconfont icon-account"></i>
      </div>

      <div class="form-input icon">
        <input type="text" v-model="email" :placeholder="i18n.t('email')">
        <i class="iconfont icon-email"></i>
      </div>

      <div class="form-input icon">
        <input type="password" v-model="password" :placeholder="i18n.t('password')">
        <i class="iconfont icon-lock"></i>
      </div>

      <div class="form-input">
        <input type="submit" :value="i18n.t('signIn')">
      </div>
    </form>
</template>

<script>
    export default {
        name: 'signupForm',
        data() {
          return {
            login: null,
            email: null,
            password: null
          }
        }
    }
</script>