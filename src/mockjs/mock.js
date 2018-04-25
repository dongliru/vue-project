import Mock from 'mockjs'
export default Mock.mock(/getNewsList/,{
    'list|5':[
        {
            url:'@url',//随机生成url字符串
            title:'@ctitle(5,20)'//随机生成中文字符，指定长度为5-20个字符
        },
    ]
    
})