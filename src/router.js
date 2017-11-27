const routers = [
	{
	    path: '/',
	    meta: {
	        title: ''
	    },
	    component: (resolve) => require(['./views/index.vue'], resolve)
	},
	{
	    path: '/test',
	    meta: {
	        title: 'test'
	    },
	    component: (resolve) => require(['./views/test.vue'], resolve)
	},
	{
	    path: '/base',
	    meta: {
	        title: 'base'
	    },
	    component: (resolve) => require(['./views/base/base.vue'], resolve)
	}
];
export default routers;