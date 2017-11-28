<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #bbbec4;
        /*position: relative;*/
        position:absolute;left:0;top:0;width:100%;height:100%
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        height: 80%;
        margin: 15px;
        overflow: hidden;
        background: #f8f8f9;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        height: 4%;
        text-align: center;
        padding: 10px 0 20px;
        color: #009688;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #464c5b;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        text-align: right;
    }
    .layout-header img{
        width: 40px;
        height: 40px;
        line-height: 40px; 
        border-radius: 20px;
        margin-top: 10px;
        margin-right: 50px;
    }
    .layout-header strong{
        color: #ff5722;
        font-size:20px;
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
</style>
<template>
    <div class="layout">
        <Row type="flex" style="position:absolute;left:0;top:0;width:100%;height:100%">
            <Col span="4" class="layout-menu-left">
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="m=>{select(m)}">
                    <div class="layout-logo-left">
                        <Input></Input>
                    </div>
                    <Submenu v-for="pmenu in menuList" :name="pmenu.id" :key="pmenu.id">
                        <template slot="title">
                            <Icon :type="pmenu.icon"></Icon>
                            {{pmenu.name}}
                        </template>
                        <MenuItem v-for="cmenu in pmenu.children" :name="cmenu.id" :key="cmenu.id">
                            <Icon :type="cmenu.icon"></Icon>
                            {{cmenu.name}}
                        </MenuItem>
                    </Submenu>
                </Menu>
            </Col>
            <Col span="20">
                <div class="layout-header">
                    <strong>smallsnail-wh</strong>
                    <img src="../../images/user.jpg"></img>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">Home</BreadcrumbItem>
                        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
                        <BreadcrumbItem>iView</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <router-view></router-view>
                </div>
                <div class="layout-copy">
                    2017-2018 &copy; smallsnail-wh
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                menuList: [],
                menuSub: []
            }
        },
        mounted(){
            this.axios({
                method: 'get',
                url: '/menu/2',
                data: {}
            }).then(function(response){
                this.menuList = response.data;
                for(var i in this.menuList){
                    for(var j in this.menuList[i].children){
                        this.menuSub.push(this.menuList[i].children[j]);
                    }
                }
                console.log(this.menuSub);
            }.bind(this)).catch(function(error){
                console.log(error);
            });
        },
        methods:{
            select(e){
                var filterMenus = this.menuSub.filter(function(menu){return (menu.url!=null && menu.url!='' && menu.id==e)});
                this.$router.push(filterMenus[0].url);
            }
        }
    }
</script>
