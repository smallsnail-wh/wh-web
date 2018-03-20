<template>
    
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        mounted(){
        	var code = this.$router.currentRoute.query.code;
        	this.axios({
              method: 'get',
              url: '/authorize/code',
              params: {
                'code': code 
              }
            }).then(function (response) {
                console.log(response.data);
                /*console.log(response.data);*/
                this.$store.commit('users/setUser',{"user_name":"admin","user_token":response.data.access_token,"refresh_token":response.data.refresh_token});
                /*router.push({path:"base"});*/
                this.axios.defaults.headers.common['Authorization'] = 'bearer '+ localStorage.getItem("currentUser_token");
                this.$router.push({ path: 'base/welcome' }) ;
                /*this.$route.router.push({ path: '/base' });*/
            }.bind(this)).catch(function (error) {
              alert(error);
            });
        },
        methods: {
           
        }   
    };
</script>