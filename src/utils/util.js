import mapData from "./../components/data/mapData"
            
            var BJData = [],SHData = [],GZData = [],QHData = [],CDData = [],CCData = [];
            var i = 0, m= 0,n=0,j=0,k=0,p=0;
            var sissionData = function(arr){
                arr.forEach((formitem,index)=>{
                    var fromCoord  = formitem.split('-')[0];
                    var toCoord = formitem.split('-')[1]
                    if (fromCoord=="华北") {
                        i++;
                        BJData.push(
                            [{name:fromCoord},{name:toCoord,value:(i+1)*10}]
                        )
                    }else if(fromCoord=="华东"){
                        m++
                        SHData.push(
                            [{name:fromCoord},{name:toCoord,value:(m+1)*10}]
                        )
                    }else if(fromCoord=="华南"){
                        n++
                        GZData.push(
                            [{name:fromCoord},{name:toCoord,value:(index+1)*10}]
                        )
                    }else if(fromCoord=="西北"){
                        j++
                        QHData.push(
                            [{name:fromCoord},{name:toCoord,value:(index+1)*10}]
                        )
                    }else if(fromCoord=="西南"){
                        k++
                        CDData.push(
                            [{name:fromCoord},{name:toCoord,value:(index+1)*10}]
                        )
                    }else if(fromCoord=="东北"){
                        p++
                        CCData.push(
                            [{name:fromCoord},{name:toCoord,value:(index+1)*10}]
                        )
                    }
                })
            }

            sissionData(mapData.repData.legendData);

            // console.log(BJData);


            var result = [];
            var timeLine = mapData.repData.xAxisData;
            var toolValue = mapData.repData.seriesData;
            
            var everyDayData = function(){
                for (let i = 0; i < timeLine.length; i++) {
                    var newBJData = JSON.parse(JSON.stringify(BJData))
                    var newSHData = JSON.parse(JSON.stringify(SHData))
                    var newGZData = JSON.parse(JSON.stringify(GZData))
                    var newQHData = JSON.parse(JSON.stringify(QHData))
                    var newCDData = JSON.parse(JSON.stringify(CDData))
                    var newCCData = JSON.parse(JSON.stringify(CCData))
                    result[i] = {};
                    toolValue.forEach((formitem,index)=>{
                        var fromCoord  = formitem.name.split('-')[0];
                        var toCoord = formitem.name.split('-')[1]
                        if (fromCoord=="华北") {
                            newBJData.forEach((val,k)=>{
                                if (toCoord == val[1].name ) {
                                    val[2] = {toolValue :formitem.data[i]}
                                }
                            })
                        }else if(fromCoord=="华东"){
                            newSHData.forEach((val,k)=>{
                                if (toCoord == val[1].name ) {
                                    val[2] = {toolValue :formitem.data[i]}
                                }
                            })
                           
                        }else if(fromCoord=="华南"){
                            newGZData.forEach((val,k)=>{
                                if (toCoord == val[1].name ) {
                                    val[2] = {toolValue :formitem.data[i]}
                                }
                            })
                           
                        }else if(fromCoord=="西北"){
                            newQHData.forEach((val,k)=>{
                                if (toCoord == val[1].name ) {
                                    val[2] = {toolValue :formitem.data[i]}
                                }
                            })
                           
                        }else if(fromCoord=="西南"){
                            newCDData.forEach((val,k)=>{
                                if (toCoord == val[1].name ) {
                                    val[2] = {toolValue :formitem.data[i]}
                                }
                            })
                           
                        }else if(fromCoord=="东北"){
                            newCCData.forEach((val,k)=>{
                                if (toCoord == val[1].name ) {
                                    val[2] = {toolValue :formitem.data[i]}
                                }
                            })
                           
                        }
                    })
                    // result[i].BJData = newBJData;
                    // result[i].SHData = newSHData;
                    // result[i].GZData = newGZData;
                    // result[i].QHData = newQHData;
                    // result[i].CDData = newCDData;
                    // result[i].CCData = newCCData;
                } 
                return result;
            }


 
            
