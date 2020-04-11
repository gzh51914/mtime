<template>
    <div class="header">
        <a @click="toHome" class="btn_back iconfont icon-jt-left"></a>
        <ul class="table">
            <router-link v-for='nav in navdata'
            :key='nav.id'
            :to='nav.path'
            tag='li'
            active-class='curr'
            ><span>{{nav.title}}</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navdata: [
                { id: 1, title: '正在热映', path: '/home/hot' },
                { id: 2, title: '即将上映', path: '/home/coming' },
            ]
        }
    },
    methods: {
        toHome:function () {
            this.$router.push('/home')
            // this.$router.back()
        }
    }
}
</script>
<style lang="scss" scoped>
    *{
        font-size: .17rem;
    }
    .header{
        height: 0.51rem;
        background: #1C2635;
        box-sizing: border-box;
        padding: 0 .17rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .btn_back{
            position: absolute;
            z-index: 2;
            left: .1rem;
            top: .1rem;
            width: .31rem;
            height: .31rem;
            font-size: .31rem;
            color: #A6AAB0;
            overflow: hidden;
            text-decoration: none;
        }
        ul,li{
            list-style: none;
        }
        .table{
            background: #0d121a;
            margin: 0 auto;
            width: 2.55rem;
            height: .31rem;
            padding: 1px;
            border-radius: 4rem;
            display: flex;
            li{
                width: 50%;
                text-align: center;
                line-height: .31rem;
                span{
                    color: #999;
                }
            }
            .curr{
                background: #1C2635;
                border-radius: 4rem;
                span{
                    color: white;
                }
            }
        }
    }
</style>