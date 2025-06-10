gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.GDNewTextObjects1= [];
gdjs.gameoverCode.GDNewTextObjects2= [];
gdjs.gameoverCode.GDYellowButtonObjects1= [];
gdjs.gameoverCode.GDYellowButtonObjects2= [];


gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sencestart");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.gameoverCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDYellowButtonObjects1[k] = gdjs.gameoverCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sencestart") >= 0.2;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;
gdjs.gameoverCode.GDYellowButtonObjects1.length = 0;
gdjs.gameoverCode.GDYellowButtonObjects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;
gdjs.gameoverCode.GDYellowButtonObjects1.length = 0;
gdjs.gameoverCode.GDYellowButtonObjects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
