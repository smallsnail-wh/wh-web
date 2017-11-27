<style type="text/css">
    .test{
        margin: 20px 20px 20px 20px;     
    }
    .test Button{
        margin-bottom: 10px;
    }
</style>
<template>
    <div class="test">
        <Button type="warning" @click="click()">test</Button>
        <Input v-model="value" type="textarea" :rows="4" placeholder="Enter something..."></Input>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value: null
            }
        },
        methods: {
            click(){
                this.axios({
                    method: 'post',
                    url: '/test',
                    data: {
                        "test": "123456"
                    }
                }).then(function(response){
                    console.log(response);
                    this.value = response.data;
                }.bind(this)).catch(function(error){
                    console.log(error);
                });
            }
        }   
    };
</script>