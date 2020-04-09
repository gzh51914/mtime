<template>
    <div class="search">
        <div class="cityShow"><b>北京</b><i class="iconfont icon-xiajiantou"></i></div>
        <div class="searchInp">
            <i class="iconfont icon-sousuo"></i>
            <span>影片/影院/影人，任你搜</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .search{
        background: #f6f6f6;
        height: .6rem;
        padding: .09rem .17rem .08rem .17rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #d8d8d8;
        .cityShow{
            b{
                font-size: .18rem;
                font-weight: normal;
            }
        }
        .searchInp{
            background: #fff;
            height: .39rem;
            flex: 1;
            display: flex;
            align-items: center;
            border: 1px solid #bbb;
            border-radius: .08rem;
            margin-left: 0.1rem;
            i{
                font-size: .16rem;
                padding: 0 0.05rem;
            }
            span{
                color: #777;
                font-size: .16rem;
            }
        }
    }
</style>