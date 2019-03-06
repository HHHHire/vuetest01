<template>
    <div class="left-nav">
        <ul>
            <li>
                
                <div>
                    <router-link to="/" class="link-style" ><span class="iconfont">user</span></router-link>
                </div>
            </li>
            <li>
                
                <div>
                    <router-link to='/echarts' class="link-style"><span class="iconfont">echarts</span></router-link>
                </div>
            </li>
            <li>
                
                <div>
                    <router-link to="/user" class="link-style"><span class="iconfont">form</span></router-link>
                </div>
            </li>
            <li>
                
                <div>
                    <router-link to="*" class="link-style"><span class="iconfont">error</span></router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.left-nav{
    color: #fff;
    font-size: 10px;
    
    background-color: #1D8CE0;
    float:left;
    width: 5%;
    height:100%;
}
.iconfont{
    font-size: 16px;
    font-family: fantasy;

}
.left-nav ul{
    padding:0px;
    margin: 0px;
}
.left-nav li{
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
}
.link-style{
    text-decoration: none;
    color:white;

}

</style>
