<template>
    <form class="form">
      <div class="form-input icon">
        <input type="text" v-model="login" :placeholder="i18n.t('login')">
        <i class="iconfont icon-account"></i>
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
        name: 'signinForm',
        data() {
          return {
            login: null,
            password: null
          }
        }
    }
</script>