<template>
    <div>
        <div class="header">
            {{ i18n.t("oauthSignIn") }}
        </div>
        <div class="content">
            <a href="javascript: void(0);" class="item">
                <i class="iconfont icon-github github"></i>
            </a>
            <a href="javascript: void(0);" class="item">
                <i class="iconfont icon-gitee gitee"></i>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'oauth'
    }
</script>

<style lang="postcss" scoped>
    @import "~styles/variables";

    .header {
        padding-bottom: 1em;
        color: var(--text-muted-color);
    }

    .content {
        display: flex;
        justify-content: space-around;
        
        & .item {
            flex: 1;
            font-size: 1.6em;
            text-align: center;
        }

        & .item .github {
            color: #0a0203;
        }

        & .item .gitee {
            color: #c52327;
        }
    }
</style>
