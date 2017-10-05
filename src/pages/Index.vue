<template>
    <div>
        <top-header></top-header>
        <top>
            <top-item id='tab1'>
                <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
                <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 首页
            </top-item>
            <top-item id='tab2'>
                <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
                <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 书影音
            </top-item>
            <top-item id='tab3'>
                <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
                <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 广播
            </top-item>
            <top-item id='tab4'>
                <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal">
                <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 小组
            </top-item>
            <top-item id='tab5'>
                <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
                <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 我的
            </top-item>
        </top>
    </div>
</template>

<script>
import Top from '../components/top'
import TopItem from '../components/top-item'
import TopHeader from '../components/top-header'
export default {
    name: 'index',
    components: {
        Top,
        TopItem,
        TopHeader
    },
    data() {
        return {
            select: "tab1"
        }
    }
}
</script>
