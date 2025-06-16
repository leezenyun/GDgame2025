gdjs.scoreCode = {};
gdjs.scoreCode.localVariables = [];
gdjs.scoreCode.GDNewSpriteObjects1= [];
gdjs.scoreCode.GDNewSpriteObjects2= [];
gdjs.scoreCode.GDNewTextObjects1= [];
gdjs.scoreCode.GDNewTextObjects2= [];
gdjs.scoreCode.GDYellowButtonObjects1= [];
gdjs.scoreCode.GDYellowButtonObjects2= [];


gdjs.scoreCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.scoreCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.scoreCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.scoreCode.GDNewTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(0).getChild("time").getAsString());
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
gdjs.scoreCode.GDNewTextObjects1.length = 0;
gdjs.scoreCode.GDNewTextObjects2.length = 0;
gdjs.scoreCode.GDYellowButtonObjects1.length = 0;
gdjs.scoreCode.GDYellowButtonObjects2.length = 0;

gdjs.scoreCode.eventsList0(runtimeScene);
gdjs.scoreCode.GDNewSpriteObjects1.length = 0;
gdjs.scoreCode.GDNewSpriteObjects2.length = 0;
gdjs.scoreCode.GDNewTextObjects1.length = 0;
gdjs.scoreCode.GDNewTextObjects2.length = 0;
gdjs.scoreCode.GDYellowButtonObjects1.length = 0;
gdjs.scoreCode.GDYellowButtonObjects2.length = 0;


return;

}

gdjs['scoreCode'] = gdjs.scoreCode;
