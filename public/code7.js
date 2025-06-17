gdjs.scoreCode = {};
gdjs.scoreCode.localVariables = [];
gdjs.scoreCode.GDNewSpriteObjects1= [];
gdjs.scoreCode.GDNewSpriteObjects2= [];
gdjs.scoreCode.GDNewSpriteObjects3= [];
gdjs.scoreCode.GDlv1Objects1= [];
gdjs.scoreCode.GDlv1Objects2= [];
gdjs.scoreCode.GDlv1Objects3= [];
gdjs.scoreCode.GDYellowButtonObjects1= [];
gdjs.scoreCode.GDYellowButtonObjects2= [];
gdjs.scoreCode.GDYellowButtonObjects3= [];
gdjs.scoreCode.GDlv2Objects1= [];
gdjs.scoreCode.GDlv2Objects2= [];
gdjs.scoreCode.GDlv2Objects3= [];
gdjs.scoreCode.GDlv3Objects1= [];
gdjs.scoreCode.GDlv3Objects2= [];
gdjs.scoreCode.GDlv3Objects3= [];
gdjs.scoreCode.GDlv4Objects1= [];
gdjs.scoreCode.GDlv4Objects2= [];
gdjs.scoreCode.GDlv4Objects3= [];


gdjs.scoreCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(7));
}}

}


};gdjs.scoreCode.asyncCallback9691708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scoreCode.localVariables);

{ //Subevents
gdjs.scoreCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.scoreCode.localVariables.length = 0;
}
gdjs.scoreCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scoreCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(6)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.scoreCode.asyncCallback9691708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scoreCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(7));
}}

}


};gdjs.scoreCode.asyncCallback13396572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scoreCode.localVariables);

{ //Subevents
gdjs.scoreCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.scoreCode.localVariables.length = 0;
}
gdjs.scoreCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scoreCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(6)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.scoreCode.asyncCallback13396572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scoreCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13192300);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild("time").setNumber(10000000);
}
{ //Subevents
gdjs.scoreCode.eventsList1(runtimeScene);} //End of subevents
}

}


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


{

gdjs.copyArray(runtimeScene.getObjects("lv1"), gdjs.scoreCode.GDlv1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scoreCode.GDlv1Objects1.length;i<l;++i) {
    if ( gdjs.scoreCode.GDlv1Objects1[i].getBehavior("Text").getText() == "0" ) {
        isConditionTrue_0 = true;
        gdjs.scoreCode.GDlv1Objects1[k] = gdjs.scoreCode.GDlv1Objects1[i];
        ++k;
    }
}
gdjs.scoreCode.GDlv1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13174060);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.scoreCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.scoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scoreCode.GDNewSpriteObjects1.length = 0;
gdjs.scoreCode.GDNewSpriteObjects2.length = 0;
gdjs.scoreCode.GDNewSpriteObjects3.length = 0;
gdjs.scoreCode.GDlv1Objects1.length = 0;
gdjs.scoreCode.GDlv1Objects2.length = 0;
gdjs.scoreCode.GDlv1Objects3.length = 0;
gdjs.scoreCode.GDYellowButtonObjects1.length = 0;
gdjs.scoreCode.GDYellowButtonObjects2.length = 0;
gdjs.scoreCode.GDYellowButtonObjects3.length = 0;
gdjs.scoreCode.GDlv2Objects1.length = 0;
gdjs.scoreCode.GDlv2Objects2.length = 0;
gdjs.scoreCode.GDlv2Objects3.length = 0;
gdjs.scoreCode.GDlv3Objects1.length = 0;
gdjs.scoreCode.GDlv3Objects2.length = 0;
gdjs.scoreCode.GDlv3Objects3.length = 0;
gdjs.scoreCode.GDlv4Objects1.length = 0;
gdjs.scoreCode.GDlv4Objects2.length = 0;
gdjs.scoreCode.GDlv4Objects3.length = 0;

gdjs.scoreCode.eventsList4(runtimeScene);
gdjs.scoreCode.GDNewSpriteObjects1.length = 0;
gdjs.scoreCode.GDNewSpriteObjects2.length = 0;
gdjs.scoreCode.GDNewSpriteObjects3.length = 0;
gdjs.scoreCode.GDlv1Objects1.length = 0;
gdjs.scoreCode.GDlv1Objects2.length = 0;
gdjs.scoreCode.GDlv1Objects3.length = 0;
gdjs.scoreCode.GDYellowButtonObjects1.length = 0;
gdjs.scoreCode.GDYellowButtonObjects2.length = 0;
gdjs.scoreCode.GDYellowButtonObjects3.length = 0;
gdjs.scoreCode.GDlv2Objects1.length = 0;
gdjs.scoreCode.GDlv2Objects2.length = 0;
gdjs.scoreCode.GDlv2Objects3.length = 0;
gdjs.scoreCode.GDlv3Objects1.length = 0;
gdjs.scoreCode.GDlv3Objects2.length = 0;
gdjs.scoreCode.GDlv3Objects3.length = 0;
gdjs.scoreCode.GDlv4Objects1.length = 0;
gdjs.scoreCode.GDlv4Objects2.length = 0;
gdjs.scoreCode.GDlv4Objects3.length = 0;


return;

}

gdjs['scoreCode'] = gdjs.scoreCode;
