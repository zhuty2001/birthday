// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "无敌可爱美丽温柔的小blue",  // 同上...
        "今天是你的十八岁生日！",
        "成年啦！",
        "这是一起过的第二个生日咧",
        "当然以后还要一起过",
        "两百个生日咧",
        "今年要好好吃好好睡",
        "养的白白胖胖圆圆滚滚哈哈",
        "（小声）成年了是不是可以嘿嘿嘿",
        "YAMI~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/IMG_6672(20200226-005140).JPG"    
        "无敌可爱美丽温柔的小blue": "./imgs/IMG_6137(20200706-020051).JPG
" 
        "今天是你的十八岁生日！": "./imgs/IMG_3785(20200522-011649).JPG
"
        "这是一起过的第二个生日咧": "./imgs/IMG_1750(20200702-133638).JPG"
        "当然以后还要一起过": "./imgs/IMG_1941(20200626-011333).JPG"
        "两百个生日咧": "./imgs/IMG_6486(20200522-011649).JPG"
        "今年要好好吃好好睡": "./imgs/IMG_4886(20200421-130244).JPG"
        "养的白白胖胖圆圆滚滚哈哈": "./imgs/IMG_6330(20200522-011649).JPG"
        "（小声）成年了是不是可以嘿嘿嘿": "./imgs/IMG_4645(20200708-231834).JPG"
        "YAMI~~"
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }

