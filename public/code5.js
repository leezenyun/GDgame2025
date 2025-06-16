gdjs.keyboradCode = {};
gdjs.keyboradCode.localVariables = [];
gdjs.keyboradCode.GDNewSpriteObjects1= [];
gdjs.keyboradCode.GDNewSpriteObjects2= [];
gdjs.keyboradCode.GDbackButtonObjects1= [];
gdjs.keyboradCode.GDbackButtonObjects2= [];
gdjs.keyboradCode.GDNewTextObjects1= [];
gdjs.keyboradCode.GDNewTextObjects2= [];


gdjs.keyboradCode.asyncCallback13750668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.keyboradCode.localVariables);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sencestart");
}gdjs.keyboradCode.localVariables.length = 0;
}
gdjs.keyboradCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.keyboradCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.keyboradCode.asyncCallback13750668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.keyboradCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.keyboradCode.GDbackButtonObjects1);
{for(var i = 0, len = gdjs.keyboradCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.keyboradCode.GDbackButtonObjects1[i].returnVariable(gdjs.keyboradCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{ //Subevents
gdjs.keyboradCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.keyboradCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.keyboradCode.GDbackButtonObjects1.length;i<l;++i) {
    if ( gdjs.keyboradCode.GDbackButtonObjects1[i].getVariableNumber(gdjs.keyboradCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.keyboradCode.GDbackButtonObjects1[k] = gdjs.keyboradCode.GDbackButtonObjects1[i];
        ++k;
    }
}
gdjs.keyboradCode.GDbackButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sencestart") >= 0.2;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "illustrate", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.keyboradCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.keyboradCode.GDbackButtonObjects1.length;i<l;++i) {
    if ( gdjs.keyboradCode.GDbackButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.keyboradCode.GDbackButtonObjects1[k] = gdjs.keyboradCode.GDbackButtonObjects1[i];
        ++k;
    }
}
gdjs.keyboradCode.GDbackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "illustrate", false);
}}

}


};

gdjs.keyboradCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.keyboradCode.GDNewSpriteObjects1.length = 0;
gdjs.keyboradCode.GDNewSpriteObjects2.length = 0;
gdjs.keyboradCode.GDbackButtonObjects1.length = 0;
gdjs.keyboradCode.GDbackButtonObjects2.length = 0;
gdjs.keyboradCode.GDNewTextObjects1.length = 0;
gdjs.keyboradCode.GDNewTextObjects2.length = 0;

gdjs.keyboradCode.eventsList1(runtimeScene);
gdjs.keyboradCode.GDNewSpriteObjects1.length = 0;
gdjs.keyboradCode.GDNewSpriteObjects2.length = 0;
gdjs.keyboradCode.GDbackButtonObjects1.length = 0;
gdjs.keyboradCode.GDbackButtonObjects2.length = 0;
gdjs.keyboradCode.GDNewTextObjects1.length = 0;
gdjs.keyboradCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['keyboradCode'] = gdjs.keyboradCode;
