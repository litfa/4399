// 用于格式化json文件
const fs = require('fs')

const href = [
  'http://4399.com/flash/223243.htm',
  'http://4399.com/flash/222661.htm',
  'http://4399.com/flash/222859.htm',
  'http://4399.com/flash/222735.htm',
  'http://4399.comhttps://news.4399.com/hxjy/',
  'http://4399.com/flash/130396.htm',
  'http://4399.com//www.4399.com/flash/zmhj.htm',
  'http://4399.com/flash/210650.htm',
  'http://4399.comhttp://news.4399.com/xydj/',
  'http://4399.com/flash/221289.htm',
  'http://4399.com/flash/222803.htm',
  'http://4399.com/flash/205551.htm',
  'http://4399.comhttp://news.4399.com/yssy/',
  'http://4399.comhttp://news.4399.com/qiu/',
  'http://4399.com/flash/198637.htm',
  'http://4399.com/flash/203658.htm',
  'http://4399.com/flash/221834.htm',
  'http://4399.com/flash/222850.htm',
  'http://4399.com/flash/202604.htm',
  'http://4399.com/flash/222100.htm',
  'http://4399.com//my.4399.com/yxxxtjd/',
  'http://4399.com/flash/221887.htm',
  'http://4399.com/flash/221143.htm',
  'http://4399.com/flash/219762.htm',
  'http://4399.com/flash/222849.htm',
  'http://4399.comhttp://news.4399.com/300/',
  'http://4399.com//sjsj.4399.com/',
  'http://4399.com/flash/197159.htm',
  'http://4399.com/flash/221205.htm',
  'http://4399.com//my.4399.com/yxsgqyz/',
  'http://4399.com/flash/220929.htm',
  'http://4399.com/flash/218018.htm',
  'http://4399.com/flash/220439.htm',
  'http://4399.com//www.4399.com/flash/yzzrhj.htm',
  'http://4399.comhttp://zuopin.4399.com/tuya/',
  'http://4399.com/flash/211817.htm',
  'http://4399.com/flash/206041.htm',
  'http://4399.com/flash/214699.htm',
  'http://4399.com/flash/222756.htm',
  'http://4399.com/flash/212136.htm',
  'http://4399.comhttps://my.4399.com/yxxtkzw/',
  'http://4399.com/flash/90302.htm',
  'http://4399.com/flash/198660.htm',
  'http://4399.com/flash/209474.htm',
  'http://4399.comhttp://news.4399.com/dftk/',
  'http://4399.com/flash/222468.htm',
  'http://4399.com/flash/133630.htm',
  'http://4399.com/flash/216072.htm',
  'http://4399.com/flash/93551.htm',
  'http://4399.com/flash/220014.htm',
  'http://4399.com/flash/218593.htm',
  'http://4399.com/flash/221592.htm',
  'http://4399.com/flash/222387.htm',
  'http://4399.com/flash/220634.htm',
  'http://4399.com/flash/219950.htm',
  'http://4399.com/flash/201312.htm',
  'http://4399.com/flash/221269.htm',
  'http://4399.com/flash/220950.htm',
  'http://4399.com/flash/217781.htm',
  'http://4399.com/flash/222260.htm',
  'http://4399.com/flash/222221.htm',
  'http://4399.com/flash/222158.htm',
  'http://4399.com/flash/221098.htm',
  'http://4399.com/flash/213691.htm',
  'http://4399.com/flash/91723.htm',
  'http://4399.com/flash/188593.htm',
  'http://4399.com/flash/222591.htm',
  'http://4399.com/flash/215941.htm',
  'http://4399.com//my.4399.com/yxtouch/',
  'http://4399.com/flash/221047.htm',
  'http://4399.com/flash/188739.htm',
  'http://4399.com/flash/220335.htm',
  'http://4399.com/flash/222069.htm',
  'http://4399.com/flash/222842.htm',
  'http://4399.com/flash/222092.htm',
  'http://4399.com/flash/221900.htm',
  'http://4399.com/flash/221929.htm',
  'http://4399.com/flash/43841.htm',
  'http://4399.com/flash/55146.htm',
  'http://4399.com/flash/222089.htm',
  'http://4399.com/flash/222248.htm',
  'http://4399.com/flash/33507.htm',
  'http://4399.com/flash/212227.htm',
  'http://4399.com/flash/73386.htm',
  'http://4399.com/flash/68951.htm',
  'http://4399.com/flash/18173.htm',
  'http://4399.com/flash/218418.htm',
  'http://4399.com/flash/222158.htm',
  'http://4399.com/flash/222065.htm',
  'http://4399.com/flash/218281.htm',
  'http://4399.com/flash/79068.htm',
  'http://4399.com/flash/180977.htm',
  'http://4399.com/flash/215808.htm',
  'http://4399.com/flash/222039.htm',
  'http://4399.com/flash/221820.htm',
  'http://4399.com/flash/201721.htm',
  'http://4399.com/flash/196181.htm',
  'http://4399.com/flash/210711.htm',
  'http://4399.com/flash/109656.htm',
  'http://4399.com/flash/209994.htm',
  'http://4399.com/flash/220716.htm',
  'http://4399.com/flash/221785.htm',
  'http://4399.com/flash/211107.htm',
  'http://4399.com/flash/6232.htm',
  'http://4399.com/flash/20660.htm',
  'http://4399.com/flash/163478.htm',
  'http://4399.com/flash/100942.htm',
  'http://4399.com/flash/187040.htm',
  'http://4399.com/flash/203039.htm',
  'http://4399.com/flash/43689.htm',
  'http://4399.com/flash/117227.htm',
  'http://4399.com/flash/187228.htm',
  'http://4399.com/flash/48504.htm',
  'http://4399.com/flash/47931.htm',
  'http://4399.com/flash/83914.htm',
  'http://4399.com/flash/217629.htm',
  'http://4399.com/flash/100030.htm',
  'http://4399.com/flash/40779.htm',
  'http://4399.com/flash/10305.htm',
  'http://4399.com/flash/3883.htm',
  'http://4399.com/flash/3881.htm',
  'http://4399.com/flash/171900.htm',
  'http://4399.com/flash/212021.htm',
  'http://4399.com/flash/209024.htm',
  'http://4399.com/flash/42760.htm',
  'http://4399.com/flash/96275.htm',
  'http://4399.com/flash/135299.htm',
  'http://4399.com/flash/146595.htm',
  'http://4399.com/flash/87425.htm',
  'http://4399.com/flash/210765.htm',
  'http://4399.com/flash/60369.htm',
  'http://4399.com/flash/151915.htm',
  'http://4399.com/flash/81832.htm'
]

const data = [
  {
    src: '//imga4.5054399.com/upload_pic/2021/10/21/4399_19475500041.jpg',
    name: '勇士征程'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/9/17/4399_16530018295.jpg',
    name: '时之心'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/9/29/4399_15302487271.jpg',
    name: '最强大乱斗'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/9/23/4399_16215646155.jpg',
    name: '人生重开模拟器'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/4/11/4399_22454085514.jpg',
    name: '4399火线精英'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/10/26/4399_15115142099.jpg',
    name: '爆枪突击'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/5/31/4399_20182326706.jpg',
    name: '造梦西游online'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/10/28/4399_09060516602.jpg',
    name: '造梦无双(寒冰阵)'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/2/2/4399_09001129372.jpg',
    name: '4399星耀对决'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/7/15/4399_16295100281.jpg',
    name: '开灯贼六'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2021/9/27/4399_17450199785.jpg',
    name: '黑金小队'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2019/4/23/4399_09595943507.jpg',
    name: '死神VS火影3.3'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2021/10/12/4399_19114079011.jpg',
    name: '原神'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2021/2/8/4399_10375681866.jpg',
    name: '玩个球'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2021/7/15/4399_09065846749.jpg',
    name: '皇帝成长计划2H5(专家模式)'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2019/s/203658.jpg',
    name: '冰娃与火娃5'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/8/10/4399_16022385003.jpg',
    name: '跑酷小子游伦敦'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/9/29/4399_14160541100.jpg',
    name: '西游大作战'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2019/s/202604.jpg',
    name: '我的世界吃鸡'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/8/23/4399_16193098948.jpg',
    name: '石器猎手'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/4/25/4399_17311350541.jpg',
    name: '4399小小突击队'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2021/8/12/4399_15231781143.jpg',
    name: '火柴人瞅你咋地'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2021/7/9/4399_11302961853.jpg',
    name: '火柴人枪神9'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2021/6/11/4399_11053658504.jpg',
    name: '太空大逃生'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/9/29/4399_13555648752.jpg',
    name: '最牛火柴人'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2021/10/18/4399_16425595697.jpg',
    name: '300英雄'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2020/11/10/4399_16215250394.jpg',
    name: '神将世界'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/4/28/4399_19471618732.jpg',
    name: '以太之光'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/7/12/4399_17330291306.jpg',
    name: '贪吃蛇多人大对决'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2020/8/19/4399_16512106091.jpg',
    name: '4399三国群英传'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/7/1/4399_11400215565.jpg',
    name: '火柴人战争遗产2'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2021/1/26/4399_14544422661.jpg',
    name: '宇宙小子旅行记'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/6/23/4399_10492286997.jpg',
    name: '我吃鸡特牛'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/8/13/4399_18311603330.jpg',
    name: '勇者之刃'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2016/2/29/4399_17484422351.jpg',
    name: '4399涂鸦画板'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2020/4/13/4399_10042555919.jpg',
    name: '谁是首富'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/7/1/4399_09482411700.jpg',
    name: '超级精灵球'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/9/27/4399_15382967949.jpg',
    name: '豪杰成长计划(神秘名录)'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/9/24/4399_16185545948.jpg',
    name: '暗黑战争王'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2020/3/27/4399_10184820221.jpg',
    name: '我就要吃鸡'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2020/12/7/4399_17142207650.jpg',
    name: '4399天空之舞'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2016/2/25/4399_09272483064.jpg',
    name: '火柴人打羽毛球2'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2018/6/21/4399_15211408152.jpg',
    name: '妖尾VS海贼王2.0'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/10/1/4399_09292918749.jpg',
    name: '傲笑江湖'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2020/10/13/4399_17491839567.jpg',
    name: '4399巅峰坦克'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2021/9/9/4399_14144609262.jpg',
    name: '剑刃重生'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2016/2/25/4399_09351876854.jpg',
    name: 'Q版泡泡堂7'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2020/12/23/4399_17432246193.jpg',
    name: '糖豆大作战'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2017/1/24/4399_10181217218.jpg',
    name: '小鳄鱼爱洗澡中文版'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/7/8/4399_14140212587.jpg',
    name: '火柴人逃亡日记'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2021/3/1/4399_16333856353.jpg',
    name: '趣味淘汰赛'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2021/7/29/4399_15455520563.jpg',
    name: '妈妈把我锁在家里了2'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2021/9/6/4399_13580386105.jpg',
    name: '山村遗宅'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/6/16/4399_17313266730.jpg',
    name: '熊出没狂野竞技'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/5/11/4399_18584125721.jpg',
    name: '荣耀之王'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2019/s/201312.jpg',
    name: '荒岛枪训复活战'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/7/14/4399_17432101219.jpg',
    name: '昆虫大世界'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/6/30/4399_16584990984.jpg',
    name: '高情商聊天'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/1/13/4399_15494413895.jpg',
    name: '舞动音乐块'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/8/30/4399_17371172075.jpg',
    name: '乱斗小姐姐'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/8/28/4399_13382687876.jpg',
    name: '浮生物语'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2021/8/26/4399_14382178717.jpg',
    name: '妖怪别追我'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2021/7/7/4399_17362586627.jpg',
    name: '糖豆派对'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/7/15/4399_15383284416.jpg',
    name: '冒险王3OL'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2019/3/22/4399_15314390967.jpg',
    name: '猫里奥'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2021/10/27/4399_14092507707.jpg',
    name: '惊天神将'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/9/15/4399_15345912053.jpg',
    name: '荒岛求生日记'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/7/19/4399_17275006884.jpg',
    name: '超级精灵手表'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/4/8/4399_17034656631.jpg',
    name: '4399Touch热舞'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2021/7/5/4399_19444143693.jpg',
    name: '我坦克特牛'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2017/6/13/4399_15192770466.jpg',
    name: '急速变色龙'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/6/2/4399_16001149680.jpg',
    name: '叶罗丽彩妆公主'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/8/20/4399_17260996013.jpg',
    name: '人类进化'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2021/10/19/4399_09065982596.jpg',
    name: '全能机甲'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2021/8/23/4399_15202896921.jpg',
    name: '怪物工厂3'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/8/13/4399_15375978054.jpg',
    name: '双人英雄枪战'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/8/16/4399_14321445821.jpg',
    name: '木岛生存'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2019/3/26/4399_16554656111.jpg',
    name: '勇者之路'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2019/2/12/4399_14282141322.jpg',
    name: '生老病死'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/8/23/4399_15041360559.jpg',
    name: '火柴人冲突'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2021/8/30/4399_15510123646.jpg',
    name: '变身躲猫猫'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2019/2/22/4399_14394973804.jpg',
    name: '前线防御战中文版'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2020/3/31/4399_15112251926.jpg',
    name: '天空之城冒险H5'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2016/2/25/4399_09264656496.jpg',
    name: '快刀切水果3'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2018/10/15/4399_11185732507.jpg',
    name: '海绵宝宝超级功夫2'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2016/2/17/4399_17362951286.jpg',
    name: '海盗军团抢宝藏'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2021/2/26/4399_10193871766.jpg',
    name: '炫彩音跃'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2021/8/26/4399_14382178717.jpg',
    name: '妖怪别追我'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/8/20/4399_17000370913.jpg',
    name: '龙兽争霸'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/2/7/4399_17034504461.jpg',
    name: '火柴人影vs神死斗'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2016/2/25/4399_09265948256.jpg',
    name: '高楼爆破3无敌版'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2016/10/12/4399_16360751958.jpg',
    name: '双人坦克世界3D'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2020/9/23/4399_17304218418.jpg',
    name: '迷你摩托车挑战赛'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/8/19/4399_16211060630.jpg',
    name: '火柴人神器之战2H5'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/8/10/4399_14252967227.jpg',
    name: '情侣求生欲'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2019/s/201721.jpg',
    name: '圆球情侣'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2019/s/196181.jpg',
    name: '世界射箭锦标赛'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2020/1/10/4399_15342250960.jpg',
    name: '披萨小王子2'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2020/12/1/4399_17492817031.jpg',
    name: '中国象棋残局'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2019/12/4/4399_17372187246.jpg',
    name: '乐动球球'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2021/6/19/4399_14244238004.jpg',
    name: '反恐突袭'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2021/8/9/4399_13433805210.jpg',
    name: '聊天的诱惑'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2020/2/11/4399_13521105759.jpg',
    name: '末世英雄'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2016/2/25/4399_09230286165.jpg',
    name: '疯狂小人战斗'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2016/2/22/4399_17341879193.jpg',
    name: '森林冰火人中文版'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2016/2/25/4399_09402752826.jpg',
    name: '变形金刚战记'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2016/2/23/4399_16570994733.jpg',
    name: '机器人攻城战无敌版'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2017/6/8/4399_17302352700.jpg',
    name: '老爹寿司店中文版'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2019/s/203039.jpg',
    name: '狙击战场'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2016/2/25/4399_09244586314.jpg',
    name: '逃命的火鸡'
  },
  {
    src: '//imga3.5054399.com/upload_pic/2016/2/20/4399_16021693663.jpg',
    name: '粘液实验室2'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2017/4/14/4399_10470406368.jpg',
    name: '双人碰碰车3D1.2'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2016/2/25/4399_09251835750.jpg',
    name: '植物大战僵尸无敌版'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2016/2/25/4399_09250759645.jpg',
    name: '勇者之路精灵物语速升版'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2016/2/25/4399_09271352707.jpg',
    name: '二战前线3无敌选关版'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2021/1/5/4399_16430401229.jpg',
    name: '老爹饼干圣代店'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2016/2/25/4399_09283901137.jpg',
    name: '炫酷旋转忍者2'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2016/2/19/4399_14125286462.jpg',
    name: '3D极速飙车'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2016/2/23/4399_16424729120.jpg',
    name: '双人旋转赛车'
  },
  {
    src: '//imga4.5054399.com/upload_pic/2016/2/25/4399_09224740641.jpg',
    name: '黄金矿工双人版'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2016/2/25/4399_09220465358.jpg',
    name: 'Q版泡泡堂'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2016/4/5/4399_16315011176.jpg',
    name: '装载卡车5'
  },
  {
    src: '//imga2.5054399.com/upload_pic/2020/3/23/4399_13561847731.jpg',
    name: '逃离医院不容易'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2019/10/8/4399_15291685960.jpg',
    name: '狂野飙客6'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2016/2/25/4399_09243481100.jpg',
    name: '突击对决无敌版'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2016/2/25/4399_09273734355.jpg',
    name: '快乐美发师3'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2018/9/12/4399_09423413452.jpg',
    name: '铁甲骑士'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2016/2/25/4399_09361950090.jpg',
    name: '愤怒的老奶奶玩酷跑1.8'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2016/2/23/4399_16580765716.jpg',
    name: '钢铁蜘蛛侠'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2020/1/14/4399_14181208208.jpg',
    name: '萝卜保卫战3'
  },
  {
    src: '//imga5.5054399.com/upload_pic/2016/2/20/4399_16034287109.jpg',
    name: '王子公主回家记'
  },
  {
    src: '//imga1.5054399.com/upload_pic/2017/6/9/4399_08402136521.jpg',
    name: '混乱大枪战新版中文版'
  },

  {
    name: '倒霉熊逃离房间',
    src: '//imga3.5054399.com/upload_pic/2016/2/23/4399_20294453756.jpg'
  }
]

for (const i in data) {
  data[i].href = href[i]
}
console.dir(data)

fs.writeFile('./test.json', JSON.stringify(data), 'utf8', () => { })
