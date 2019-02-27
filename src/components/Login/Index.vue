<template>
  <div class='login'>
    <canvas id='mycanvas'>您的浏览器不支持canvas画布</canvas>
    <div class="login_two_part">
      <div :class="statea ? 'login_form':'login_forma addonload'">
        <h1>Login</h1>
        <div class='login_info'>
          <input type='text' placeholder='请输入用户名' v-model='username'>
          <input type='password' placeholder='请输入密码' v-model='userpwd'>
        </div>
        <div class='login_btn' @click='login'>登录</div>
      </div>
      <div class="loading" v-show='!statea'>
        <i class="el-icon-loading"></i>
        <p>正在登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    // 获取mycanvas画布
    var can = document.getElementById('mycanvas')
    var ctx = can.getContext('2d')
    // 画布宽度
    var wid = window.innerWidth
    // 画布高度
    var hei = window.innerHeight
    can.width = wid
    can.height = hei
    // 雪花数目
    var snow = 100
    // 雪花坐标、半径
    var arr = []
    // 保存各圆坐标及半径
    for (var i = 0; i < snow; i++) {
      arr.push({
        x: Math.random() * wid,
        y: Math.random() * hei,
        r: Math.random() * 10 + 1
      })
    }
    // 画雪花
    function DrawSnow () {
      ctx.clearRect(0, 0, wid, hei)
      ctx.fillStyle = 'white'
      ctx.beginPath()
      for (var i = 0; i < snow; i++) {
        var p = arr[i]
        ctx.moveTo(p.x, p.y)
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false)
      }
      ctx.fill()
      SnowFall()
      ctx.closePath()
    }
    // 雪花飘落
    function SnowFall () {
      for (var i = 0; i < snow; i++) {
        var p = arr[i]
        p.y += Math.random() * 2 + 1
        if (p.y > hei) {
          p.y = 0
        }
        p.x += Math.random() * 2 + 1
        if (p.x > wid) {
          p.x = 0
        }
      }
    }
    setInterval(DrawSnow, 50)
  },
  data () {
    return {
      username: '',
      userpwd: '',
      statea: true
    }
  },
  methods: {
    login () {
      this.statea = false
      if (this.username == 'ming' && this.userpwd == '123123') { // eslint-disable-line
        this.$router.push({ path: '/index' })
      } else {
        this.$alert('用户名或密码错误', 'Warning', {
          confirmButtonText: '关闭',
          callback: action => {
            this.statea = true
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.loading{
  background-color: rgba(255,255,255,.6);
  margin-left: 40px;
  border-radius: 5px;
  padding: 15px;
}
.loading p{
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 32px;
}
.login_two_part{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-icon-loading{
  font-size: 120px;
  color: #fff;
}
#mycanvas{
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: url('../../assets/login_bg.jpg') no-repeat bottom left;
  background-size: cover;
}
.login_btn {
  font-size: 16px;
  width: 100%;
  line-height: 40px;
  background-color: #00ff6a;
  border-radius: 20px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.login_info {
  padding: 20px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.login_info input {
  width: 100%;
  line-height: 40px;
  margin: 20px auto;
  border-radius: 3px;
  border: 0;
  text-indent: 15px;
  border-bottom: 1px solid #999999;
  background-color: transparent;
  font-size: 14px;
  color: #333333;
}
.login_form {
  width: 500px;
  height: 600px;
  padding: 40px 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 20px #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.login_forma{
  width: 500px;
  height: 600px;
  padding: 40px 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 20px #ffffff;
  transform: rotateX(60deg);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.login_form h1 {
  font-size: 32px;
  color: #333333;
  text-align: center;
}
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addonload{
  animation: onload .5s;
}
@keyframes onload {
  0%{
    transform: rotateX(0)
  }
  100%{
    transform: rotateX(60deg)
  }
}
</style>
