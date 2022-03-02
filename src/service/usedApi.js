/**
* @author MasterYi 2022-03-02
* @description   这个文件是ifol 真实使用的 api接口文档
*/

import apiClient from "@/common/apiclient/perfectApiclient/perfectApiclient"; 


export function getHomeCarousel(params) {
    return apiClient.request({
        url: '/ifo/getHomeCarousel',
        type: 'post',
        data: params,
    })
}
