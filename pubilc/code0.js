gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDstartbuttonObjects1= [];
gdjs.startCode.GDstartbuttonObjects2= [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];
gdjs.startCode.GDquitButtonObjects1= [];
gdjs.startCode.GDquitButtonObjects2= [];
gdjs.startCode.GD_9535498_9526126ButtonObjects1= [];
gdjs.startCode.GD_9535498_9526126ButtonObjects2= [];
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1= [];
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects2= [];


gdjs.startCode.asyncCallback13381116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.startCode.localVariables);
gdjs.startCode.localVariables.length = 0;
}
gdjs.startCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.startCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.startCode.asyncCallback13381116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.startCode.eventsList1 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13379964);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13386324);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13387268);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13388132);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13388956);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13389780);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13390604);
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


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDstartbuttonObjects1.length = 0;
gdjs.startCode.GDstartbuttonObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDquitButtonObjects1.length = 0;
gdjs.startCode.GDquitButtonObjects2.length = 0;
gdjs.startCode.GD_9535498_9526126ButtonObjects1.length = 0;
gdjs.startCode.GD_9535498_9526126ButtonObjects2.length = 0;
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1.length = 0;
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects2.length = 0;

gdjs.startCode.eventsList1(runtimeScene);
gdjs.startCode.GDstartbuttonObjects1.length = 0;
gdjs.startCode.GDstartbuttonObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDquitButtonObjects1.length = 0;
gdjs.startCode.GDquitButtonObjects2.length = 0;
gdjs.startCode.GD_9535498_9526126ButtonObjects1.length = 0;
gdjs.startCode.GD_9535498_9526126ButtonObjects2.length = 0;
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects1.length = 0;
gdjs.startCode.GD_9525490_9534892_9527036ButtonObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
