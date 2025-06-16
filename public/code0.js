gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDstartbuttonObjects1= [];
gdjs.startCode.GDstartbuttonObjects2= [];
gdjs.startCode.GDstartbuttonObjects3= [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewSpriteObjects3= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];
gdjs.startCode.GDNewTextObjects3= [];
gdjs.startCode.GDquitButtonObjects1= [];
gdjs.startCode.GDquitButtonObjects2= [];
gdjs.startCode.GDquitButtonObjects3= [];
gdjs.startCode.GD_9535498_9526126ButtonObjects1= [];
gdjs.startCode.GD_9535498_9526126ButtonObjects2= [];
gdjs.startCode.GD_9535498_9526126ButtonObjects3= [];
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1= [];
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects2= [];
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects3= [];


gdjs.startCode.asyncCallback13388124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.startCode.asyncCallback13388124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(7));
}}

}


};gdjs.startCode.asyncCallback10065212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);

{ //Subevents
gdjs.startCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(6)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.startCode.asyncCallback10065212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("startbutton"), gdjs.startCode.GDstartbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDstartbuttonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDstartbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDstartbuttonObjects1[k] = gdjs.startCode.GDstartbuttonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDstartbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12859780);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("startbutton"), gdjs.startCode.GDstartbuttonObjects1);
{for(var i = 0, len = gdjs.startCode.GDstartbuttonObjects1.length ;i < len;++i) {
    gdjs.startCode.GDstartbuttonObjects1[i].returnVariable(gdjs.startCode.GDstartbuttonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sencestart");
}
{ //Subevents
gdjs.startCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("quitButton"), gdjs.startCode.GDquitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDquitButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDquitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDquitButtonObjects1[k] = gdjs.startCode.GDquitButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDquitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("說明Button"), gdjs.startCode.GD_9535498_9526126ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GD_9535498_9526126ButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GD_9535498_9526126ButtonObjects1[k] = gdjs.startCode.GD_9535498_9526126ButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GD_9535498_9526126ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "illustrate", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("排行榜Button"), gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1[k] = gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "score", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("startbutton"), gdjs.startCode.GDstartbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDstartbuttonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDstartbuttonObjects1[i].getVariableNumber(gdjs.startCode.GDstartbuttonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDstartbuttonObjects1[k] = gdjs.startCode.GDstartbuttonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDstartbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sencestart") >= 0.2;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("quitButton"), gdjs.startCode.GDquitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDquitButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDquitButtonObjects1[i].getVariableNumber(gdjs.startCode.GDquitButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDquitButtonObjects1[k] = gdjs.startCode.GDquitButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDquitButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sencestart") >= 0.2;
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("startbutton"), gdjs.startCode.GDstartbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDstartbuttonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDstartbuttonObjects1[i].getVariableNumber(gdjs.startCode.GDstartbuttonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDstartbuttonObjects1[k] = gdjs.startCode.GDstartbuttonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDstartbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13162100);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.startCode.GDstartbuttonObjects1 */
{for(var i = 0, len = gdjs.startCode.GDstartbuttonObjects1.length ;i < len;++i) {
    gdjs.startCode.GDstartbuttonObjects1[i].getBehavior("Resizable").setSize(300, 130);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quitButton"), gdjs.startCode.GDquitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDquitButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDquitButtonObjects1[i].getVariableNumber(gdjs.startCode.GDquitButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDquitButtonObjects1[k] = gdjs.startCode.GDquitButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDquitButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9809604);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.startCode.GDquitButtonObjects1 */
{for(var i = 0, len = gdjs.startCode.GDquitButtonObjects1.length ;i < len;++i) {
    gdjs.startCode.GDquitButtonObjects1[i].getBehavior("Resizable").setSize(300, 130);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("說明Button"), gdjs.startCode.GD_9535498_9526126ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GD_9535498_9526126ButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariableNumber(gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GD_9535498_9526126ButtonObjects1[k] = gdjs.startCode.GD_9535498_9526126ButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GD_9535498_9526126ButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13013780);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.startCode.GD_9535498_9526126ButtonObjects1 */
{for(var i = 0, len = gdjs.startCode.GD_9535498_9526126ButtonObjects1.length ;i < len;++i) {
    gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getBehavior("Resizable").setSize(300, 130);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("startbutton"), gdjs.startCode.GDstartbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDstartbuttonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDstartbuttonObjects1[i].getVariableNumber(gdjs.startCode.GDstartbuttonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDstartbuttonObjects1[k] = gdjs.startCode.GDstartbuttonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDstartbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9811452);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.startCode.GDstartbuttonObjects1 */
{for(var i = 0, len = gdjs.startCode.GDstartbuttonObjects1.length ;i < len;++i) {
    gdjs.startCode.GDstartbuttonObjects1[i].getBehavior("Resizable").setSize(277, 115);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quitButton"), gdjs.startCode.GDquitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDquitButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDquitButtonObjects1[i].getVariableNumber(gdjs.startCode.GDquitButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDquitButtonObjects1[k] = gdjs.startCode.GDquitButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDquitButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9811716);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.startCode.GDquitButtonObjects1 */
{for(var i = 0, len = gdjs.startCode.GDquitButtonObjects1.length ;i < len;++i) {
    gdjs.startCode.GDquitButtonObjects1[i].getBehavior("Resizable").setSize(277, 115);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("說明Button"), gdjs.startCode.GD_9535498_9526126ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GD_9535498_9526126ButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariableNumber(gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GD_9535498_9526126ButtonObjects1[k] = gdjs.startCode.GD_9535498_9526126ButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GD_9535498_9526126ButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9811188);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.startCode.GD_9535498_9526126ButtonObjects1 */
{for(var i = 0, len = gdjs.startCode.GD_9535498_9526126ButtonObjects1.length ;i < len;++i) {
    gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getBehavior("Resizable").setSize(277, 115);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("startbutton"), gdjs.startCode.GDstartbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDstartbuttonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDstartbuttonObjects1[i].getVariableNumber(gdjs.startCode.GDstartbuttonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDstartbuttonObjects1[k] = gdjs.startCode.GDstartbuttonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDstartbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "changebuttonCD") >= 0.2;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.startCode.GDstartbuttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("說明Button"), gdjs.startCode.GD_9535498_9526126ButtonObjects1);
{for(var i = 0, len = gdjs.startCode.GD_9535498_9526126ButtonObjects1.length ;i < len;++i) {
    gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].returnVariable(gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.startCode.GDstartbuttonObjects1.length ;i < len;++i) {
    gdjs.startCode.GDstartbuttonObjects1[i].returnVariable(gdjs.startCode.GDstartbuttonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("說明Button"), gdjs.startCode.GD_9535498_9526126ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GD_9535498_9526126ButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariableNumber(gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GD_9535498_9526126ButtonObjects1[k] = gdjs.startCode.GD_9535498_9526126ButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GD_9535498_9526126ButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "changebuttonCD") >= 0.2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("startbutton"), gdjs.startCode.GDstartbuttonObjects1);
/* Reuse gdjs.startCode.GD_9535498_9526126ButtonObjects1 */
{for(var i = 0, len = gdjs.startCode.GDstartbuttonObjects1.length ;i < len;++i) {
    gdjs.startCode.GDstartbuttonObjects1[i].returnVariable(gdjs.startCode.GDstartbuttonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.startCode.GD_9535498_9526126ButtonObjects1.length ;i < len;++i) {
    gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].returnVariable(gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("說明Button"), gdjs.startCode.GD_9535498_9526126ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GD_9535498_9526126ButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariableNumber(gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GD_9535498_9526126ButtonObjects1[k] = gdjs.startCode.GD_9535498_9526126ButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GD_9535498_9526126ButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "changebuttonCD") >= 0.2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("quitButton"), gdjs.startCode.GDquitButtonObjects1);
/* Reuse gdjs.startCode.GD_9535498_9526126ButtonObjects1 */
{for(var i = 0, len = gdjs.startCode.GDquitButtonObjects1.length ;i < len;++i) {
    gdjs.startCode.GDquitButtonObjects1[i].returnVariable(gdjs.startCode.GDquitButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.startCode.GD_9535498_9526126ButtonObjects1.length ;i < len;++i) {
    gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].returnVariable(gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quitButton"), gdjs.startCode.GDquitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDquitButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDquitButtonObjects1[i].getVariableNumber(gdjs.startCode.GDquitButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDquitButtonObjects1[k] = gdjs.startCode.GDquitButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDquitButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "changebuttonCD") >= 0.2;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.startCode.GDquitButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("說明Button"), gdjs.startCode.GD_9535498_9526126ButtonObjects1);
{for(var i = 0, len = gdjs.startCode.GD_9535498_9526126ButtonObjects1.length ;i < len;++i) {
    gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].returnVariable(gdjs.startCode.GD_9535498_9526126ButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.startCode.GDquitButtonObjects1.length ;i < len;++i) {
    gdjs.startCode.GDquitButtonObjects1[i].returnVariable(gdjs.startCode.GDquitButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12836948);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.startCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDstartbuttonObjects1.length = 0;
gdjs.startCode.GDstartbuttonObjects2.length = 0;
gdjs.startCode.GDstartbuttonObjects3.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects3.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewTextObjects3.length = 0;
gdjs.startCode.GDquitButtonObjects1.length = 0;
gdjs.startCode.GDquitButtonObjects2.length = 0;
gdjs.startCode.GDquitButtonObjects3.length = 0;
gdjs.startCode.GD_9535498_9526126ButtonObjects1.length = 0;
gdjs.startCode.GD_9535498_9526126ButtonObjects2.length = 0;
gdjs.startCode.GD_9535498_9526126ButtonObjects3.length = 0;
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1.length = 0;
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects2.length = 0;
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects3.length = 0;

gdjs.startCode.eventsList3(runtimeScene);
gdjs.startCode.GDstartbuttonObjects1.length = 0;
gdjs.startCode.GDstartbuttonObjects2.length = 0;
gdjs.startCode.GDstartbuttonObjects3.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects3.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewTextObjects3.length = 0;
gdjs.startCode.GDquitButtonObjects1.length = 0;
gdjs.startCode.GDquitButtonObjects2.length = 0;
gdjs.startCode.GDquitButtonObjects3.length = 0;
gdjs.startCode.GD_9535498_9526126ButtonObjects1.length = 0;
gdjs.startCode.GD_9535498_9526126ButtonObjects2.length = 0;
gdjs.startCode.GD_9535498_9526126ButtonObjects3.length = 0;
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1.length = 0;
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects2.length = 0;
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects3.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
