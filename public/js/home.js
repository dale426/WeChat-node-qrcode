new Vue({
  el: '#vue_root',
  data: function () {
    return {
      name: 'hoqu',
      bttnjur: false,
      form: {
        appId: '',
        appSecret: '',
        source: '',
        sourceCode: ''
      },
      rules: {
        appId: [
          { required: true, message: '请输入appid', trigger: 'blur' },
          { len:18, message: '长度为 18个字符', trigger: 'blur' }
        ],
        appSecret: [
          { required: true, message: '请输入appSecret', trigger: 'blur' },
          { len:32, message: '长度为 32个字符', trigger: 'blur' }
        ],
        sourceCode: [
          { required: true, message: '请输入来源编码', trigger: 'blur' },
          { pattern: /^[0-9a-zA-Z-]{1,8}$/, message: '仅支持数字、字母和"-"'},
          { min: 2, max: 8, message: '长度为 2-8个字符', trigger: 'blur' }
        ],
        source: [
          { required: true, message: '请输入来源简要描述', trigger: 'blur' },
          { min: 2, max: 10, message: '长度为 2-10个字符', trigger: 'blur' }
        ],
      }

    }
  },
  mounted() {
    this.open3()
  },
  methods: {
    dowmLoadImg() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          var str = '';
          for (var key in this.form) {
            str += key + '=' + this.form[key] + '&'
          }
          location.href = "/qrcode?" + str
          this.form.source = ''
          this.form.sourceCode = ''
        }
      });
    },

    open3() {
      this.$prompt('请输入密码', '提示', {
        confirmButtonText: '确定',
        showClose: false,
        showCancelButton: false,
        closeOnClickModal: false,
        inputPattern: /juban123/,
        inputErrorMessage: '密码不正确'
      }).then(({ value }) => {

      }).catch(() => {
       
      });
    }
  },
})