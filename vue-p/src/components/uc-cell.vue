<template>
  <div class="cell" >
    <div @click="getDetail">
      <h2><span v-show="index!=null">{{index + 1}} . </span>{{data.title}}</h2>
      <p>{{data.des}}</p>
    </div>
    <a v-if="isAdd" href="javascript:;" @click="$emit('add-item')">加入购物车</a>
  </div>
</template>

<script>
  export default {
    name:'Cell',
    props:{
      data:{
        type:Object,
        required:true,
        default:function(){ //props类型是个对象，默认值要是一个函数，最后需要返回对象
          //...
          return {}
        }
      },
      index:{
        type:Number,
        default:null
      },
      apiName:{
        type:String,
        default:null
      },
	  isAdd:{
	    type:Boolean,
	    default:false
	  }
    },
 
    components:{},
    mounted(){},
    updated(){},
    methods:{
      getDetail(){
        if(this.apiName){
          // '路由跳转':'/detail/23423423443?apiname=column'
          this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`)
        }
      }
    }
  }
</script>

<style>
  .cell { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
  .cell h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .cell p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
  .cell{clear: both;/* margin-bottom:1rem; */}
</style>
