const route = [
    {
        path: 'echartsPage',
        name: 'echartsPage',
        desc:{
            title:'echarts',
            iconClassname:'el-icon-s-data',
        },
        meta:{
            layout:'menuLayout'
        },
        component:()=>import("./echartsPage"),
    },
    {
        path: 'd3Page',
        name: 'd3Page',
        desc:{
            title:'d3.js',
            iconClassname:'el-icon-share',
        },
        meta:{
            layout:'menuLayout'
        },
        component:()=>import("./d3Page"),
    },
    {
        path: 'threeJS',
        name: 'threeJS',
        desc:{
            title:'three.js',
            iconClassname:'el-icon-position',
        },
        meta:{
            layout:'menuLayout'
        },
        component:()=>import("./threeJS"),
    },
];
export default route;