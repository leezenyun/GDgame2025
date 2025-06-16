gdjs.scoreCode = {};
gdjs.scoreCode.localVariables = [];
gdjs.scoreCode.GDNewSpriteObjects1= [];
gdjs.scoreCode.GDNewSpriteObjects2= [];
gdjs.scoreCode.GDlv1Objects1= [];
gdjs.scoreCode.GDlv1Objects2= [];
gdjs.scoreCode.GDYellowButtonObjects1= [];
gdjs.scoreCode.GDYellowButtonObjects2= [];
gdjs.scoreCode.GDlv2Objects1= [];
gdjs.scoreCode.GDlv2Objects2= [];
gdjs.scoreCode.GDlv3Objects1= [];
gdjs.scoreCode.GDlv3Objects2= [];


gdjs.scoreCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("lv1"), gdjs.scoreCode.GDlv1Objects1);
{for(var i = 0, len = gdjs.scoreCode.GDlv1Objects1.length ;i < len;++i) {
    gdjs.scoreCode.GDlv1Objects1[i].getBehavior("Text").setText("第一名" + runtimeScene.getGame().getVariables().getFromIndex(7).getChild(0).getChild("time").getAsString() + "秒");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("lv2"), gdjs.scoreCode.GDlv2Objects1);
{for(var i = 0, len = gdjs.scoreCode.GDlv2Objects1.length ;i < len;++i) {
    gdjs.scoreCode.GDlv2Objects1[i].getBehavior("Text").setText("第二名" + runtimeScene.getGame().getVariables().getFromIndex(7).getChild(1).getChild("time").getAsString() + "秒");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("lv3"), gdjs.scoreCode.GDlv3Objects1);
{for(var i = 0, len = gdjs.scoreCode.GDlv3Objects1.length ;i < len;++i) {
    gdjs.scoreCode.GDlv3Objects1[i].getBehavior("Text").setText("第三名" + runtimeScene.getGame().getVariables().getFromIndex(7).getChild(2).getChild("time").getAsString() + "秒");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.scoreCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scoreCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.scoreCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scoreCode.GDYellowButtonObjects1[k] = gdjs.scoreCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.scoreCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.scoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scoreCode.GDNewSpriteObjects1.length = 0;
gdjs.scoreCode.GDNewSpriteObjects2.length = 0;
gdjs.scoreCode.GDlv1Objects1.length = 0;
gdjs.scoreCode.GDlv1Objects2.length = 0;
gdjs.scoreCode.GDYellowButtonObjects1.length = 0;
gdjs.scoreCode.GDYellowButtonObjects2.length = 0;
gdjs.scoreCode.GDlv2Objects1.length = 0;
gdjs.scoreCode.GDlv2Objects2.length = 0;
gdjs.scoreCode.GDlv3Objects1.length = 0;
gdjs.scoreCode.GDlv3Objects2.length = 0;

gdjs.scoreCode.eventsList0(runtimeScene);
gdjs.scoreCode.GDNewSpriteObjects1.length = 0;
gdjs.scoreCode.GDNewSpriteObjects2.length = 0;
gdjs.scoreCode.GDlv1Objects1.length = 0;
gdjs.scoreCode.GDlv1Objects2.length = 0;
gdjs.scoreCode.GDYellowButtonObjects1.length = 0;
gdjs.scoreCode.GDYellowButtonObjects2.length = 0;
gdjs.scoreCode.GDlv2Objects1.length = 0;
gdjs.scoreCode.GDlv2Objects2.length = 0;
gdjs.scoreCode.GDlv3Objects1.length = 0;
gdjs.scoreCode.GDlv3Objects2.length = 0;


return;

}

gdjs['scoreCode'] = gdjs.scoreCode;
