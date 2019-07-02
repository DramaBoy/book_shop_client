<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#BF7F5F"
                 text-color="#fff" active-text-color="#8C222C" unique-opened router>
            <!-- 首页侧边栏start-->
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#BF7F5F"
                 text-color="#fff" active-text-color="#8C222C" unique-opened router>
            <template v-for="item in items1">
   <!-- v-if="item.subs"-->
                <template >
                    <el-submenu :index="item.index" :key="item.index" v-if="item.subs">
                        <template slot="title">
                             <img class="small" src="./img/heard.png" alt="" srcset=""> 
                            <!-- <i :class="item.icon"></i> -->
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-menu-item :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </template>
        </el-menu>
            <!--首页侧边栏end-->
            <!--产品列表侧边栏start-->
            <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#BF7F5F"
                     text-color="#fff" active-text-color="#8C222C" unique-opened router>
                <template v-for="item2 in items2">
                    <!--                v-if="item.subs"-->
                    <template >
                        <el-submenu :index="item2.index" :key="item2.index" v-if="item2.subs">
                            <template slot="title">
                                <img class="small" src="./img/pocduct.png" alt="" srcset=""> 
                                <!-- <i :class="item2.icon"></i> -->
                                <span slot="title">{{ item2.title }}</span>
                            </template>
                            <template v-for="subItem in item2.subs">
                                <el-menu-item :index="subItem.index" :key="subItem.index">
                                    {{ subItem.title }}
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </template>
            </el-menu>
            <!--产品列表侧边栏end-->
            <!-- 热门活动侧边栏start-->
            <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#BF7F5F"
                     text-color="#fff" active-text-color="#8C222C" unique-opened router>
                <template v-for="item3 in items3">
                    <!--                v-if="item.subs"-->
                    <template >
                        <el-submenu :index="item3.index" :key="item3.index" v-if="item3.subs">
                            <template slot="title">
                                <img class="small" src="./img/price.png" alt="" srcset=""> 
                                <!-- <i :class="item3.icon"></i> -->
                                <span slot="title">{{ item3.title }}</span>
                            </template>
                            <template v-for="subItem in item3.subs">
                                <el-menu-item :index="subItem.index" :key="subItem.index">
                                    {{ subItem.title }}
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </template>
            </el-menu>
            <!--热门活动侧边栏end-->
            <!-- 价格管理侧边栏start-->
            <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#BF7F5F"
                     text-color="#fff" active-text-color="#8C222C" unique-opened router>
                <template v-for="item4 in items4">
                    <!--                v-if="item.subs"-->
                    <template >
                        <el-submenu :index="item4.index" :key="item4.index" v-if="item4.subs" class="bgc">
                            <template slot="title">
                               <img class="small" src="./img/shezhi.png" alt="" srcset="">                         
                                <!-- <i :class="item4.icon"></i> -->
                                <span slot="title">{{ item4.title }}</span>
                            </template>
                            <template v-for="subItem in item4.subs">
                                <el-menu-item :index="subItem.index" :key="subItem.index">
                                    {{ subItem.title }}
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </template>
            </el-menu>
            <!-- 设置侧边栏end-->
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items1: [
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '首页',
                        subs: [
                            {
                                index: 'top',
                                title: '首页展示'
                            }
                        ]
                    },
                ],
                //楼讯侧边栏数据
                items2: [
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '产品列表',
                        subs: [
                            {
                                index: 'products',
                                title: '产品展示'
                            },
                            {
                                icon: 'el-icon-lx-cascades',
                                index: 'form',
                                title: '产品添加'
                            },
                        ]
                    },
                ],
                // 热门活动侧边栏数据
                items3: [
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '价格管理',
                        subs: [
                            {
                                index: 'form',
                                title: '价格提高'
                            },
                            {
                                icon: 'el-icon-lx-cascades',
                                index: 'table',
                                title: '价格减少'
                            },
                        ]
                    },
                ],
                //
                // 设置
                items4: [
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '设置',
                        subs: [
                            {
                                index: 'form',
                                title: '卖家信息'
                            },
                            {
                                icon: 'el-icon-lx-cascades',
                                index: 'table',
                                title: '修改密码'
                            },
                        ]
                    },
                ],
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
.small{
    display: inline-block;
    width: 20px;
    height: 20px;
    padding-right: 10px;
}
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
