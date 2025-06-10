gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.GDNewTextObjects1= [];
gdjs.winCode.GDNewTextObjects2= [];
gdjs.winCode.GDYellowButtonObjects1= [];
gdjs.winCode.GDYellowButtonObjects2= [];
gdjs.winCode.GDNewText2Objects1= [];
gdjs.winCode.GDNewText2Objects2= [];


gdjs.winCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure("rank", runtimeScene.getGame().getVariables().getFromIndex(7));
}}

}


};gdjs.winCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.winCode.GDNewText2Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sencestart");
}{for(var i = 0, len = gdjs.winCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.winCode.GDNewText2Objects1[i].getBehavior("Text").setText("通關時間" + runtimeScene.getGame().getVariables().getFromIndex(6).getChild("time").getAsString() + "秒");
}
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13069228);
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(6)), "POST", "application/json", runtimeScene.getScene().getVariables().get("rank"), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.winCode.eventsList0(runtimeScene);} //End of subevents
}

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
gdjs.winCode.GDNewText2Objects1.length = 0;
gdjs.winCode.GDNewText2Objects2.length = 0;

gdjs.winCode.eventsList1(runtimeScene);
gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDYellowButtonObjects1.length = 0;
gdjs.winCode.GDYellowButtonObjects2.length = 0;
gdjs.winCode.GDNewText2Objects1.length = 0;
gdjs.winCode.GDNewText2Objects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
