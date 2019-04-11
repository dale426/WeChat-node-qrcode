new Vue({
  el: '#vue_root',
  data: function () {
    return {
      name: 'hoqu',
      form: {
        appId: 'wx76c6493364c7f082',
        appSecret: 'a10fae555e3fc83314d39f2dab8b8fbc',
        source: '',
        sourceCode: ''
      },
      rules: {
        appId: [
          { required: true, message: '请输入appid', trigger: 'blur' },
          { min: 18, max: 18, message: '长度为 18个字符', trigger: 'blur' }
        ],
        appSecret: [
          { required: true, message: '请输入appSecret', trigger: 'blur' },
          { min: 32, max: 32, message: '长度为 32个字符', trigger: 'blur' }
        ],
        sourceCode: [
          { required: true, message: '请输入sourceCode', trigger: 'blur' },
        ],
        source: [
          { required: true, message: '请输入source', trigger: 'blur' },
        ],
      }

    }
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
    }
  },
})