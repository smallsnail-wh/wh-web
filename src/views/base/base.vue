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
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                    <div class="layout-logo-left">
                        <Input></Input>
                    </div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </template>
                        <MenuItem name="1-1">Option 1</MenuItem>
                        <MenuItem name="1-2">Option 2</MenuItem>
                        <MenuItem name="1-3">Option 3</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </template>
                        <MenuItem name="2-1">Option 1</MenuItem>
                        <MenuItem name="2-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </template>
                        <MenuItem name="3-1">Option 1</MenuItem>
                        <MenuItem name="3-2">Option 2</MenuItem>
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
                    <div class="layout-content-main">Content</div>
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
        
    }
</script>
