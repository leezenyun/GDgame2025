gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.GDNewTextObjects1= [];
gdjs.winCode.GDNewTextObjects2= [];
gdjs.winCode.GDYellowButtonObjects1= [];
gdjs.winCode.GDYellowButtonObjects2= [];


gdjs.winCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sencestart");
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


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.winCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.winCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.winCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.winCode.GDYellowButtonObjects1[k] = gdjs.winCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.winCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDYellowButtonObjects1.length = 0;
gdjs.winCode.GDYellowButtonObjects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDYellowButtonObjects1.length = 0;
gdjs.winCode.GDYellowButtonObjects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
