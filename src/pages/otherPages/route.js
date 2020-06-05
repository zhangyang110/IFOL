const route = [
    {
        path: 'echartsPage',
        name: 'echartsPage',
        title:"图表",
        meta:{
            layout:'menuLayout'
        },
        component:()=>import("./echartsPage"),
    },
    {
        path: 'd3Page',
        name: 'd3Page',
        title:"d3",
        meta:{
            layout:'menuLayout'
        },
        component:()=>import("./d3Page"),
    },
    {
        path: 'threeJS',
        name: 'threeJS',
        title:"threeJS",
        meta:{
            layout:'menuLayout'
        },
        component:()=>import("./threeJS"),
    },
];
export default route;