/** Created  By ZY on 2020/6/7
*@params  api
*/
import Fns from "@/common/apiclient";
export const getAllCard=function () {
    let response;
    Fns.get("/api/site/his/getAllCard","",(res)=>{
         response=res
    });
    return response
}