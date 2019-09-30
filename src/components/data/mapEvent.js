export function mapMouseOver(params) {
    console.log(params,"paramsparams");
    
    var city = params.name;
    if (city == '河南' ||city == '湖北'||city == '湖南' || city == '广东' || city == '广西' || city == '海南'|| city == '香港'|| city == '澳门') {
        this.dispatchAction({
            type: 'highlight',
            name: "河南"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "湖北"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "湖南"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "广东"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "广西"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "香港"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "海南"
        });
         this.dispatchAction({
            type: 'highlight',
            name: "澳门"
        });
        
    }

    if (city == '上海' ||city == '江苏' || city == '浙江' || city == '安徽'|| city == '福建' || city == '江西' || city == '山东' || city == '台湾') {
        this.dispatchAction({
            type: 'highlight',
            name: "上海"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "江苏"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "浙江"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "安徽"
        });
         this.dispatchAction({
            type: 'highlight',
            name: "福建"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "江西"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "山东"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "台湾"
        });
    }
    if (city == '重庆' || city == '四川' || city == '贵州' || city == '云南'|| city == '西藏') {

        this.dispatchAction({
            type: 'highlight',
            name: "重庆"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "四川"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "贵州"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "云南"
        });
         this.dispatchAction({
            type: 'highlight',
            name: "西藏"
        });

    }
    if (city == '华北' || city == '天津' || city == '河北'|| city == '内蒙古'|| city == '山西') {
        this.dispatchAction({
            type: 'highlight',
            name: "华北"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "天津"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "河北"
        });
         this.dispatchAction({
            type: 'highlight',
            name: "内蒙古"
        });
         this.dispatchAction({
            type: 'highlight',
            name: "山西"
        });
    }
    if ( city == '陕西' || city == '甘肃' || city == '青海' || city == '宁夏' || city == '新疆' ) {
        this.dispatchAction({
            type: 'highlight',
            name: "陕西"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "甘肃"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "青海"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "宁夏"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "新疆"
        });

    }
    if (city == '辽宁' || city == '吉林' || city == '黑龙江') {

        this.dispatchAction({
            type: 'highlight',
            name: "辽宁"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "吉林"
        });
        this.dispatchAction({
            type: 'highlight',
            name: "黑龙江"
        });
    }
}

  // value  1:华北:华北   2 :西南:重庆    3:华南: 河南    4:东北 :内蒙：  5:华东:上海    6 西北:新疆   

export function mapMouseOut(params) {
    var city = params.name;
    if (city == '河南' ||city == '湖北'||city == '湖南' || city == '广东' || city == '广西' || city == '海南'|| city == '香港'|| city == '澳门') {
        this.dispatchAction({
            type: 'downplay',
            name: "河南"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "湖北"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "湖南"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "广东"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "广西"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "香港"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "海南"
        });
         this.dispatchAction({
            type: 'downplay',
            name: "澳门"
        });
    }

    if (city == '上海' ||city == '江苏' || city == '浙江' || city == '安徽'|| city == '福建' || city == '江西' || city == '山东' || city == '台湾') {
        this.dispatchAction({
            type: 'downplay',
            name: "上海"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "江苏"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "浙江"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "安徽"
        });
         this.dispatchAction({
            type: 'downplay',
            name: "福建"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "江西"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "山东"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "台湾"
        });
    }
    if (city == '重庆' || city == '四川' || city == '贵州' || city == '云南'|| city == '西藏') {

        this.dispatchAction({
            type: 'downplay',
            name: "重庆"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "四川"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "贵州"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "云南"
        });
         this.dispatchAction({
            type: 'downplay',
            name: "西藏"
        });

    }
    if (city == '华北' || city == '天津' || city == '河北'|| city == '内蒙古'|| city == '山西') {

        this.dispatchAction({
            type: 'downplay',
            name: "华北"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "天津"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "河北"
        });
         this.dispatchAction({
            type: 'downplay',
            name: "内蒙古"
        });
         this.dispatchAction({
            type: 'downplay',
            name: "山西"
        });
    }
    if ( city == '陕西' || city == '甘肃' || city == '青海' || city == '宁夏' || city == '新疆' ) {
        this.dispatchAction({
            type: 'downplay',
            name: "陕西"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "甘肃"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "青海"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "宁夏"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "新疆"
        });

    }
    if (city == '辽宁' || city == '吉林' || city == '黑龙江') {

        this.dispatchAction({
            type: 'downplay',
            name: "辽宁"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "吉林"
        });
        this.dispatchAction({
            type: 'downplay',
            name: "黑龙江"
        });
    }
}; 


export const cancelHigh = ()=>{
    this.dispatchAction({
        type: 'downplay',
        name: "河南"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "湖北"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "湖南"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "广东"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "广西"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "香港"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "海南"
    });
     this.dispatchAction({
        type: 'downplay',
        name: "澳门"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "上海"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "江苏"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "浙江"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "安徽"
    });
     this.dispatchAction({
        type: 'downplay',
        name: "福建"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "江西"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "山东"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "台湾"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "重庆"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "四川"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "贵州"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "云南"
    });
     this.dispatchAction({
        type: 'downplay',
        name: "西藏"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "华北"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "天津"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "河北"
    });
     this.dispatchAction({
        type: 'downplay',
        name: "内蒙古"
    });
     this.dispatchAction({
        type: 'downplay',
        name: "山西"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "陕西"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "甘肃"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "青海"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "宁夏"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "新疆"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "辽宁"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "吉林"
    });
    this.dispatchAction({
        type: 'downplay',
        name: "黑龙江"
    });

}