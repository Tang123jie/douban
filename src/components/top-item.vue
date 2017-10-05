<template>
    <a class="top_item" :class="{'is-active':isActive}" @click="$parent.$emit('input',id)">
        <span class="top_icon" v-show="!isActive">
            <slot name="icon-normal"></slot>
        </span>
        <span class="top_icon" v-show="isActive">
            <slot name="icon-active"></slot>
        </span>
        <span class="top_text">
            <slot></slot>
        </span>
    </a>
</template>
<<script>
export default{
        props: ['id'],
        computed: {
           isActive(){
               if(this.$parent.value===this.id){
                   return true;
               }
           }
        }
    }
</script>


<style lang="less">
.top_item {
    flex: 1;
    text-align: center;
    .top_icon {
        display: block;
        padding-top: 2px;
        img {
            width: 28px;
            height: 28px;
        }
    }
    .top_text {
        display: block;
        font-size: 10px;
        color: #949494;
    }
    &.is-active {
        .top_text {
            color: #42bd56;
        }
    }
}
</style>