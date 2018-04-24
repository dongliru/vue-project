<template>
    <div>
        <div class="slide-show" v-on:mouseenter="clearInter" v-on:mouseleave="goto(nowIndex)">
          <ul v-for="(item,index) in slides">
              <li>
                <div class="slide-img">
                    <a :href="slides[nowIndex].href">
                      <transition name="slide-trans">
                        <img :src="slides[nowIndex].src">
                      </transition>
                    </a>
                </div>
                <h2>{{slides[nowIndex].title}}</h2>
                </li> 
          </ul>
            <ul class="slide-pages">
            <li @click="goto(prevIndex)">&lt;</li>
            <li v-for="(item, index) in slides"
            @click="goto(index)"
            >
              <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
            </li>
            <li @click="goto(nextIndex)">&gt;</li>
          </ul>
          
        </div>
    </div>
</template>
<script>
    export default {
        data(){
          return {
            nowIndex: 0,
            intvTime:1000,
            interval:"",
          }
        },
        props: {
          slides: {
            type: Array,
            default: []
        }},
        methods:{
          goto(index){
            // this.nowIndex = index;
            var _this = this;
            this.interval = setInterval(function(){
              if(_this.nowIndex==_this.slides.length-1){
                _this.nowIndex =0;
              }else {
                _this.nowIndex++;
              }
            },1000)
            // console.log(this.slides.length); //???? 在方法里都能获取到slides，但是报错Cannot read property 'length' of undefined
          },
          clearInter(){
            clearInterval(this.interval);
          }
        },
        mounted(){
          this.goto(this.nowIndex);
        },
        computed:{
          prevIndex(){
            console.log(this.slides.length-1);
            if(this.nowIndex===0){
              return this.slides.length-1;
            }else {
              return this.nowIndex-1;
            }
          },
          nextIndex(){
            if(this.nowIndex === this.slides.length-1){
              return  0;
            }else {
              return this.nowIndex+1;
            }
          }
        }
    }
</script>
<style>
.slide-trans-enter-active {
 transition: all 1s ease;
 transform: translateX(0)
}

.slide-trans-leave-active {
 transition: all 1s ease;
 transform: translateX(-100%)
}

.slide-trans-enter {
 transform: translateX(100%)
}

.slide-trans-leave {
 transform: translateX(0)
}


.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>