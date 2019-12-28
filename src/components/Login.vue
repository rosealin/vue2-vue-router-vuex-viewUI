<template>
  <div class="login" :style="bg">
    <div class="container">
      <div style="margin:0px 0px 20px;">
        <Row type="flex" justify="space-between">
          <Col span="12">
            <p class="sign-text">
              Sign In
            </p>
          </Col>
          <Col span="12" align="right">
            <p class="register-text">
              <span> Register<Icon type="md-arrow-dropright" /> </span>
            </p>
          </Col>
        </Row>
      </div>
      <Form ref="formLogin" :model="formLogin" :rules="ruleLogin">
        <FormItem prop="email">
          <Input
            type="email"
            clearable
            v-model="formLogin.email"
            placeholder="email"
            prefix="ios-contact"
          >
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            clearable
            v-model="formLogin.password"
            placeholder="password"
            prefix="md-lock"
          >
          </Input>
        </FormItem>
        <FormItem>
          <Row type="flex" justify="space-between">
            <Col span="12">
              <Checkbox class="keep-sign-in" v-model="single"
                ><span>Keep me signed in</span></Checkbox
              >
            </Col>
            <Col span="12" align="right">
              <p class="forget-pwd">
                <span>forgot password</span>
              </p>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button
            class="login-btn"
            type="primary"
            :loading="isShowLoading"
            @click="handleSubmit('formLogin')"
            >SignIn</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import store from "../store";
export default {
  name: "login",
  data() {
    return {
      bg: {},
      formLogin: {
        email: "admin@126.com",
        password: "123456"
      },
      isShowLoading: false,
      ruleLogin: {
        email: [
          {
            required: true,
            message: "Please fill in the email",
            trigger: "blur"
          },
          {
            type: "email"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: ""
          }
        ]
      }
    };
  },
  created() {
    this.bg.background = "url(" + require("../assets/bg.jpg") + ")";
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.submit();
        }
      });
    },
    submit() {
      let email = this.formLogin.email;
      let pwd = this.formLogin.password;
      if (email === "admin@126.com" && pwd === "123456") {
        // this.isShowLoading = true;
        store.commit("login", {
          email,
          pwd,
          role: "admin"
        });
        this.$router.push("./");
      } else if (email === "user@126.com" && pwd === "123456") {
        store.commit("login", {
          email,
          pwd,
          role: "user"
        });
        this.$router.push("./404");
      }else{
        this.$Message.error('邮箱或者密码错误')
      }
    }
  }
};
</script>
<style lang="less" scoped>
@tcolor: #2d8cf0;
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; //container绝对居中
  .container {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 0px 1px 0px #ddd;
    width: 360px;
    // text-align: center;
    border-radius: 10px;
    padding: 30px;
    .sign-text {
      font-size: 24px;
      height: 30px;
      line-height: 30px;
      color: @tcolor;
    }
    .register-text {
      height: 30px;
      line-height: 30px;
      span {
        cursor: pointer;
      }
    }
    .login-btn {
      width: 100%;
    }
    .forget-pwd {
      font-size: 12px;
      color: @tcolor;
    }
    .keep-sign-in {
      font-size: 12px;
    }
    .forget-pwd,
    .keep-sign-in {
      cursor: pointer;
    }
  }
}
</style>
