const Service = require('egg').Service

class NewsService extends Service{
    async list (page=1){
        const {serverUrl,pageSize}=this.config.news
        const {dataList:idList}=await this.ctx.curl(
            `${serverUrl}/topstories.json`,{
                data:{
                    orderBy: '"$key"',
                    startAt: `"${pageSize * (page - 1)}"`,
                    endAt: `"${pageSize * page - 1}"`,
                },
                dataType:'json',
            },
        )
        const newList=await Promise.all(
            Object.keys.map((key)=>{
                const url=`${serverUrl}/item/${idList[key]}.json`
                return this.ctx.curl(url,{dataType:'json'})
            })
        )

        return newList.map(res=>res.data)
    }
}

module.exports=NewsService