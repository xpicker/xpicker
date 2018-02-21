// 登录注册弹窗
export default {
    id: null,

    url: chrome.extension.getURL('views/account.html'),

    visible: false,

    window: null,

    // 显示弹窗
    show() {
        if (this.visible) {
            this.focuse()
        } else {
            this.create()
        }
    },

    // 创建弹窗
    create() {
        const height = 500,
              width = 400

        chrome.windows.create({
            url: this.url,
            height: height,
            width: width,
            top: Math.round((screen.height - height) / 2),
            left: Math.round((screen.width - width) / 2),
            type: 'popup'
        }, (w) => {
            this.window = w
            this.id = w.id
            this.visible = true
        })
    },

    // 聚焦弹窗
    focuse() {
        if (this.id) {
            chrome.windows.update(this.id, {
                focused: true
            }, (w) => {
                this.window = w
                this.id = w.id
                this.visible = true
            })
        }
    },

    // 清除绑定的数据
    clear() {
        this.window = null
        this.id = null
        this.visible = false
    },

    // 销毁弹窗
    destroy() {
        if (this.id) {
            chrome.windows.remove(this.id, (w) => {
                this.clear()
            })
        }
    }
}