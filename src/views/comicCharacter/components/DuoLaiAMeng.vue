<template>
  <div class="cat_body">

    <!--帽子-->
    <div class="cap">
      <!--帽子竹蜻蜓部分-->
      <div class="cap_round"></div>
      <!--竹蜻蜓顶部半圆-->
      <div class="cap_top">
        <!--竹蜻蜓竖着的小木棒-->
        <div class="cap_line"></div>
      </div>
    </div>

    <!--大胖脸 整个大胖脸  就是大头-->
    <div class="face">

      <!--左胡须-->
      <ul class="cat_beard" style="float: left;left: 16px;">
        <li>
          <div style="margin-bottom: 18px; -moz-transform: rotate(25deg); -webkit-transform: rotate(25deg);"></div>
        </li>
        <li>
          <div style="margin-bottom: 10px;"></div>
        </li>
        <li>
          <div style="-moz-transform: rotate(-10deg); -webkit-transform: rotate(-10deg);"></div>
        </li>
      </ul>

      <!--右胡须-->
      <ul class="cat_beard" style="float: right; right: 16px;">
        <li>
          <div style="margin-bottom: 18px; -moz-transform: rotate(-25deg); -webkit-transform: rotate(-25deg);"></div>
        </li>
        <li>
          <div style="margin-bottom: 10px;"></div>
        </li>
        <li>
          <div style="-moz-transform: rotate(10deg); -webkit-transform: rotate(10deg);"></div>
        </li>
      </ul>

      <!--内脸-->
      <div class="inner_face">

        <!-- 两只猫眼-->
        <ul class="cat_eyes">

          <!--左眼-->
          <li class="cat_eye">
            <!--眼珠子-->
            <div class="cat_eye_ball" style="left: 58px;">
              <!--白眼-->
              <div class="cat_eye_ball_inner"></div>
            </div>
          </li>

          <!--右眼-->
          <li class="cat_eye">
            <div class="elemento"
                 style="width: 48px; height: 48px; background-color: #fff; position: relative; overflow: hidden; -webkit-animation-duration: 1s; -moz-animation-duration: 1s;
                         -ms-animation-duration: 1s;
                         -o-animation-duration: 1s;
                         -webkit-animation-iteration-count: 3;
                         -moz-animation-iteration-count: 3;
                         -ms-animation-iteration-count: 3;
                         -o-animation-iteration-count: 3;
                         -webkit-animation-name: pulse;
                         -moz-animation-name: pulse;
                         -ms-animation-name: pulse;
                         -o-animation-name: pulse;
                         animation-name: pulse;
                         animation-duration: 1s;
                         animation-iteration-count: 3;
                         z-index: 100;"></div>
            <div class="cat_eye_ball" style="right: 58px;">
              <div class="cat_eye_ball_inner"></div>
            </div>
          </li>
        </ul>

        <!--大鼻子-->
        <div class="nose">
          <div class="nose_inner"></div>
        </div>

        <!--鼻沟-->
        <div class="nose_river"></div>

        <!--大嘴巴子-->
        <div class="mouth">
          <ul style="position: relative; width: 100px; height: 90px; margin: 0 auto; top: -50px; -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); -o-transform: rotate(180deg); transform: rotate(180deg);"></ul>
        </div>
      </div>
    </div>

    <!--胖身体-->
    <div class="fat_body">
      <!--红脖子-->
      <div class="red_neck"></div>
      <!--主身体-->
      <div class="body_inner">
        <!--小铃铛-->
        <div class="ring"></div>
        <!--铃铛横线-->
        <div class="ring_line"></div>
      </div>
      <!--白色肚皮-->
      <div class="belly">
        <!--万能袋子-->
        <div class="pocket"></div>
      </div>
      <!--小短胳膊-->
      <ul class="short_arms">
        <!--左胳膊-->
        <li>
          <div class="arm" style="height: 85px;-moz-transform: rotate(-45deg); -webkit-transform: rotate(-45deg);left: -46px;">
            <div class="arm_circle"></div>
          </div>
        </li>
        <!--右胳膊-->
        <li>
          <div class="arm" style="height: 77px;-moz-transform: rotate(45deg); -webkit-transform: rotate(45deg);right: -46px;">
            <div class="arm_circle"></div>
          </div>
        </li>
      </ul>
    </div>

    <!--小短腿-->
    <ul class="short_legs">
      <li style="margin: -2px;">
        <div class="leg"></div>
      </li>
      <li style="margin: -2px;">
        <div class="leg"></div>
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none
}

@-webkit-keyframes rotar {
  from {
    -webkit-transform: rotate3D(0, 1, 0, 0deg)
  }
  to {
    -webkit-transform: rotate3D(0, 1, 0, 360deg)
  }
}

@-moz-keyframes rotar {
  from {
    -moz-transform: rotate3D(0, 1, 0, 0deg)
  }
  to {
    -moz-transform: rotate3D(0, 1, 0, 360deg)
  }
}

@-ms-keyframes rotar {
  from {
    -ms-transform: rotate3D(0, 1, 0, 0deg)
  }
  to {
    -ms-transform: rotate3D(0, 1, 0, 360deg)
  }
}

@-o-keyframes rotar {
  from {
    -o-transform: rotate3D(0, 1, 0, 0deg)
  }
  to {
    -o-transform: rotate3D(0, 1, 0, 360deg)
  }
}

@keyframes rotar {
  from {
    transform: rotate3D(0, 1, 0, 0deg)
  }
  to {
    transform: rotate3D(0, 1, 0, 360deg)
  }
}

.elemento:after {
  content: "⌒";
  width: 48px;
  line-height: 2.5;
  font-size: 30px;
  color: #000;
  position: absolute;
  text-align: center;
  font-weight: 700
}

@-webkit-keyframes pulse {
  to {
    bottom: 100px
  }
  from {
    bottom: 0
  }
}

@-ms-keyframes pulse {
  to {
    bottom: 100px
  }
  from {
    bottom: 0
  }
}

@-o-keyframes pulse {
  to {
    bottom: 100px
  }
  from {
    bottom: 0
  }
}

@-moz-keyframes pulse {
  to {
    bottom: 100px
  }
  from {
    bottom: 0
  }
}

@keyframes pulse {
  to {
    bottom: 100px
  }
  from {
    bottom: 0
  }
}

@-webkit-keyframes volar {
  0% {
    bottom: 0;
    left: 0
  }
  25% {
    bottom: 0;
    left: 100px
  }
  50% {
    bottom: 100px;
    left: 100px
  }
  75% {
    bottom: 100px;
    left: 0
  }
  100% {
    bottom: 0;
    left: 0
  }
}

@-moz-keyframes volar {
  0% {
    bottom: 0;
    left: 0
  }
  25% {
    bottom: 0;
    left: 100px
  }
  50% {
    bottom: 100px;
    left: 100px
  }
  75% {
    bottom: 100px;
    left: 0
  }
  100% {
    bottom: 0;
    left: 0
  }
}

@-ms-keyframes volar {
  0% {
    bottom: 0;
    left: 0
  }
  25% {
    bottom: 0;
    left: 100px
  }
  50% {
    bottom: 100px;
    left: 100px
  }
  75% {
    bottom: 100px;
    left: 0
  }
  100% {
    bottom: 0;
    left: 0
  }
}

@-o-keyframes volar {
  0% {
    bottom: 0;
    left: 0
  }
  25% {
    bottom: 0;
    left: 100px
  }
  50% {
    bottom: 100px;
    left: 100px
  }
  75% {
    bottom: 100px;
    left: 0
  }
  100% {
    bottom: 0;
    left: 0
  }
}

@keyframes volar {
  0% {
    bottom: 0
  }
  25% {
    bottom: 0
  }
  50% {
    bottom: 50px
  }
  75% {
    bottom: 50px
  }
  100% {
    bottom: 0
  }
}

/*    绘制身体*/
.cat_body {
  --theme-color: #fed430;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 320px;
  height: 320px;
  -webkit-animation: volar 1s linear 2s infinite alternate;
  animation: volar 1s linear 2s infinite alternate;
}
.cap {
  width: 100px;
  height: 5px;
  background: 0 0;
  margin: 0 auto 10px;
  position: relative;
}
.cap_round {
  width: 100px;
  height: 5px;
  margin: 0 auto;
  background-color: gray;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 2px solid gray;
  z-index: 100;
  opacity: .6;
  position: absolute;
  top: 5px;
  -webkit-animation-name: rotar;
  -webkit-animation-duration: .1s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: rotar;
  -moz-animation-duration: .1s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: rotar;
  -ms-animation-duration: .1s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  -o-animation-name: rotar;
  -o-animation-duration: .1s;
  -o-animation-iteration-count: infinite;
  -o-animation-timing-function: linear;
  animation-name: rotar;
  animation-duration: .1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.cap_top {
  width: 20px;
  height: 10px;
  display: block;
  border: 2px solid #555;
  background: #bd8d22;
  -moz-border-radius: 100px 100px 0 0;
  -webkit-border-radius: 100px 100px 0 0;
  border-radius: 100px 100px 0 0;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
}
.cap_line {
  width: 7px;
  height: 30px;
  z-index: 1;
  background: #fcc136;
  position: relative;
  top: 7px;
  border: 2px solid #000;
  margin: 0 auto;
}

.face {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #000;
  margin: 0 auto;
  position: relative;
  background: var(--theme-color,#35a1c9);
  z-index: 100;
  overflow: hidden;
}
.cat_beard {
  z-index: 9999;
  position: relative;
  display: inline-block;
  top: 59px;
}
.cat_beard div {
  width: 60px;
  height: 2px;
  background-color: #000;
  margin: 0 auto;
}

.inner_face {
  width: 170px;
  height: 170px;
  border-radius: 100%;
  background: #fff;
  border: 2px solid #000;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
}
ul.cat_eyes {
  margin: 0 auto;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
li.cat_eye {
  margin: 0 0;
  background: #fff;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: 1px solid #000;
  overflow: hidden;
}
.cat_eye_ball {
  width: 23px;
  height: 15px;
  background: #000;
  border-radius: 100%;
  -moz-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  position: absolute;
  top: 20px;
}
.cat_eye_ball_inner {
  width: 6px;
  height: 3px;
  background: #fff;
  border-radius: 100%;
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
}
.nose {
  background: #b11735;
  width: 34px;
  height: 34px;
  border-radius: 100%;
  border: 1px solid #000;
  margin: 0 auto;
  position: relative;
  top: -8px;
}
.nose_inner {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 1px solid #fff;
  position: absolute;
  background: #fff;
  top: 6px;
  left: 8px;
}
.nose_river {
  width: 2px;
  height: 20px;
  margin: 0 auto;
  background-color: #000;
  position: relative;
  top: -8px;
}
.mouth {
  width: 140px;
  height: 70px;
  -moz-border-radius: 140px 140px 0 0;
  -webkit-border-radius: 140px 140px 0 0;
  border-radius: 140px 140px 0 0;
  background: #b11635;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  top: -13px;
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.fat_body {
  width: 142px;
  height: 172px;
  background: var(--theme-color,#35a1c9);
  border: 2px solid #000;
  -webkit-border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  -moz-border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  -ms-border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  -o-border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  margin: 0 auto;
  position: relative;
  top: -100px;
  z-index: 2;
}
.red_neck {
  width: 100px;
  height: 50px;
  margin: 0 auto;
  background: #a1172e;
  -moz-border-radius: 100px/50px;
  -webkit-border-radius: 100px/50px;
  border-radius: 100px/50px;
  position: relative;
  top: 55px;
  z-index: 2;
}
.body_inner {
  width: 35px;
  height: 35px;
  border: 2px solid #000;
  border-radius: 100%;
  background-color: #f19629;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: -60px;
  margin: auto;
  z-index: 3;
}
.ring {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #000;
  position: absolute;
  right: 0;
  top: 8px;
  left: 0;
  bottom: 0;
  margin: auto;
}
.ring_line {
  width: 2px;
  height: 15px;
  background-color: #000;
  margin: 0 auto;
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(90deg);
  position: relative;
  top: 18px;
}
.belly {
  width: 100px;
  height: 60px;
  margin: 0 auto;
  background: #fff;
  -moz-border-radius: 100px/60px;
  -webkit-border-radius: 100px/60px;
  border-radius: 100px/60px;
  position: relative;
  top: 40px;
}
.pocket {
  width: 60px;
  height: 30px;
  -moz-border-radius: 60px 60px 0 0;
  -webkit-border-radius: 60px 60px 0 0;
  border-radius: 60px 60px 0 0;
  background: #fff;
  border: 2px solid #000;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: -20px;
  margin: auto;
  z-index: 2;
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.short_arms {
  margin: 0 auto;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.arm {
  width: 55px;
  margin: 0 auto;
  background: var(--theme-color,#35a1c9);
  -moz-border-radius: 55px/85px;
  -webkit-border-radius: 55px/85px;
  border-radius: 55px/85px;
  border: 2px solid #000;
  position: relative;
  top: -90px;
}
.arm_circle {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #fff;
  border: 2px solid #000;
  position: absolute;
  right: -3px;
  top: -34px;
}
.short_legs {
  margin: 0 auto;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  bottom: 150px;
}
.leg {
  width: 55px;
  height: 77px;
  margin: 0 auto;
  background: #fff;
  -moz-border-radius: 55px/77px;
  -webkit-border-radius: 55px/77px;
  border-radius: 55px/77px;
  border: 2px solid #000;
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
</style>
