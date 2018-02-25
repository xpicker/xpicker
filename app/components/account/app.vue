<template>
    <div class="container">
       <div class="content">
           <div class="header">
               <img src="/images/logo_48.png" alt="XPicker">
           </div>
           <div class="menu">
               <a class="item">{{ i18n.t("signIn") }}</a>
               <a class="item">{{ i18n.t("signUp") }}</a>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'login'
    }
</script>

<style scoped>
    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content > .header {
        text-align: center;
    }

    .content > .menu {
        display: flex;
        padding-top: 1em;
        padding-bottom: 1em;

        & .item {
            margin: 0 .5em;
            font-size: 1.2em;
        }
    }
</style>