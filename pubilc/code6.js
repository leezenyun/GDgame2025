gdjs.padCode = {};
gdjs.padCode.localVariables = [];
gdjs.padCode.GDNewSpriteObjects1= [];
gdjs.padCode.GDNewSpriteObjects2= [];
gdjs.padCode.GDbackButtonObjects1= [];
gdjs.padCode.GDbackButtonObjects2= [];
gdjs.padCode.GDNewTextObjects1= [];
gdjs.padCode.GDNewTextObjects2= [];


gdjs.padCode.asyncCallback13768468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.padCode.localVariables);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sencestart");
}gdjs.padCode.localVariables.length = 0;
}
gdjs.padCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.padCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.padCode.asyncCallback13768468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.padCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.padCode.GDbackButtonObjects1);
{for(var i = 0, len = gdjs.padCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.padCode.GDbackButtonObjects1[i].returnVariable(gdjs.padCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{ //Subevents
gdjs.padCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.padCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.padCode.GDbackButtonObjects1.length;i<l;++i) {
    if ( gdjs.padCode.GDbackButtonObjects1[i].getVariableNumber(gdjs.padCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.padCode.GDbackButtonObjects1[k] = gdjs.padCode.GDbackButtonObjects1[i];
        ++k;
    }
}
gdjs.padCode.GDbackButtonObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.padCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.padCode.GDbackButtonObjects1.length;i<l;++i) {
    if ( gdjs.padCode.GDbackButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.padCode.GDbackButtonObjects1[k] = gdjs.padCode.GDbackButtonObjects1[i];
        ++k;
    }
}
gdjs.padCode.GDbackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "illustrate", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.padCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.padCode.GDNewSpriteObjects1.length = 0;
gdjs.padCode.GDNewSpriteObjects2.length = 0;
gdjs.padCode.GDbackButtonObjects1.length = 0;
gdjs.padCode.GDbackButtonObjects2.length = 0;
gdjs.padCode.GDNewTextObjects1.length = 0;
gdjs.padCode.GDNewTextObjects2.length = 0;

gdjs.padCode.eventsList1(runtimeScene);
gdjs.padCode.GDNewSpriteObjects1.length = 0;
gdjs.padCode.GDNewSpriteObjects2.length = 0;
gdjs.padCode.GDbackButtonObjects1.length = 0;
gdjs.padCode.GDbackButtonObjects2.length = 0;
gdjs.padCode.GDNewTextObjects1.length = 0;
gdjs.padCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['padCode'] = gdjs.padCode;
