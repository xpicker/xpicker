<template>
    <div class="container">
       <div class="content">
           <div class="header">
               <img src="/images/logo_48.png" alt="XPicker">
           </div>
           <div class="menu">
               <a class="item" :class="{active: isSigninTab}" @click="setTab('sign_in')">{{ i18n.t("signIn") }}</a>
               <a class="item" :class="{active: !isSigninTab}" @click="setTab('sign_up')">{{ i18n.t("signUp") }}</a>
           </div>
           <signin-form v-if="isSigninTab"></signin-form>
           <signup-form v-else></signup-form>
       </div>
    </div>
</template>

<script>
    import SigninForm from './components/signinForm'
    import SignupForm from './components/signupForm'

    export default {
        name: 'account',
        data() {
            return {
                tab: 'sign_in'
            }
        },
        components: {
            SigninForm, SignupForm
        },
        computed: {
            isSigninTab() {
                return this.tab == 'sign_in'
            }
        },
        methods: {
            setTab(value) {
                this.tab = value
            }
        }
    }
</script>

<style scoped>
    @import "~styles/variables";

    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        height: 80%;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content > .header {
        text-align: center;
    }

    .content > .menu {
        padding: 1.6em 0;

        & .item {
            position: relative;
            margin: 0 .5em;
            padding-bottom: .6em;
            font-size: 1.2em;
        }

        & .item.active:after {
            content: ' ';
            position: absolute;
            left: 10%;
            bottom: 0;
            width: 80%;
            border-bottom: 1px solid var(--main-color);
        }
    }
</style>