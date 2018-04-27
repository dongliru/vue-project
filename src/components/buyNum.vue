<template>
    <div class="buyNum">
        <div class='leftBuyNum' @click="caculate(subtraction)">
        -
        </div>
        <div class='centerBuyNum'>
        {{num}}
        </div>
        <div class='rightBuyNum' @click="calulate(add)">
        +
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                num:1
            }
        },
        computed:{
            subtraction(){
                if(this.num==0){
                    return 0;
                }else {
                    return this.num--;
                }
            },
            add(){
                if(this.num==5){
                    return 5;
                }else {
                    return this.num++;
                }
            }
        },
        methods:{
            calulate(num){
                this.num = num;
            },
            numChange(){
                this.$emit("calulate",this.num)
            }
        }
    }
</script>
<style lang="">
    .leftBuyNum,.centerBuyNum,.rightBuyNum {
        float:left;
         border:1px solid #898989;
        padding:5px;
    }
    .centerBuyNum {
        border-right:none;
        border-left:none;
    }
    
</style>