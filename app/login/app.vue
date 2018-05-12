<template>
    <div class="container">
        <div class="box">
            <div class="header">
                <img src="/images/logo_48.png" alt="XPicker">
            </div>

            <div class="content">
                <div class="menu">
                    <a class="item" :class="{active: isSigninTab}" @click="setTab('sign_in')">{{ i18n.t("signIn") }}</a>
                    <a class="item" :class="{active: !isSigninTab}" @click="setTab('sign_up')">{{ i18n.t("signUp") }}</a>
                </div>
                <signin-form v-if="isSigninTab"></signin-form>
                <signup-form v-else></signup-form>
            </div>

            <div class="footer">
                <oauth></oauth>
            </div>
        </div>
    </div>
</template>

<script>
    import signinForm from './components/signinForm'
    import signupForm from './components/signupForm'
    import oauth from './components/oauth'

    export default {
        name: 'account',
        data() {
            return {
                tab: 'sign_in'
            }
        },
        components: {
            signinForm, signupForm, oauth
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

<style lang="postcss" scoped>
    @import "~styles/variables";

    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .box {
        height: 80%;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box > .header {
        text-align: center;
    }

    .box > .content {
        padding: 1.6em 0;
        text-align: center;
    }

    .box > .content .menu {
        padding-bottom: 1.6em;
        margin-bottom: .4em;

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