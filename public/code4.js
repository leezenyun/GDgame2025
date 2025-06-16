gdjs.illustrateCode = {};
gdjs.illustrateCode.localVariables = [];
gdjs.illustrateCode.GDNewSpriteObjects1= [];
gdjs.illustrateCode.GDNewSpriteObjects2= [];
gdjs.illustrateCode.GDbackButtonObjects1= [];
gdjs.illustrateCode.GDbackButtonObjects2= [];
gdjs.illustrateCode.GDkeyButtonObjects1= [];
gdjs.illustrateCode.GDkeyButtonObjects2= [];
gdjs.illustrateCode.GDpadButtonObjects1= [];
gdjs.illustrateCode.GDpadButtonObjects2= [];


gdjs.illustrateCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("keyButton"), gdjs.illustrateCode.GDkeyButtonObjects1);
{for(var i = 0, len = gdjs.illustrateCode.GDkeyButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDkeyButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sencestart");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("keyButton"), gdjs.illustrateCode.GDkeyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDkeyButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDkeyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDkeyButtonObjects1[k] = gdjs.illustrateCode.GDkeyButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDkeyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "keyborad", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.illustrateCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDbackButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDbackButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDbackButtonObjects1[k] = gdjs.illustrateCode.GDbackButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDbackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("padButton"), gdjs.illustrateCode.GDpadButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDpadButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDpadButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDpadButtonObjects1[k] = gdjs.illustrateCode.GDpadButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDpadButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pad", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.illustrateCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDbackButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDbackButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDbackButtonObjects1[k] = gdjs.illustrateCode.GDbackButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDbackButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sencestart") >= 0.2;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("keyButton"), gdjs.illustrateCode.GDkeyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDkeyButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDkeyButtonObjects1[k] = gdjs.illustrateCode.GDkeyButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDkeyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sencestart") >= 0.2;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "keyborad", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("padButton"), gdjs.illustrateCode.GDpadButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDpadButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDpadButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDpadButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDpadButtonObjects1[k] = gdjs.illustrateCode.GDpadButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDpadButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sencestart") >= 0.2;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pad", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.illustrateCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDbackButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDbackButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDbackButtonObjects1[k] = gdjs.illustrateCode.GDbackButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDbackButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13715252);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.illustrateCode.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.illustrateCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDbackButtonObjects1[i].getBehavior("Resizable").setSize(300, 130);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("padButton"), gdjs.illustrateCode.GDpadButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDpadButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDpadButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDpadButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDpadButtonObjects1[k] = gdjs.illustrateCode.GDpadButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDpadButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13715084);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.illustrateCode.GDpadButtonObjects1 */
{for(var i = 0, len = gdjs.illustrateCode.GDpadButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDpadButtonObjects1[i].getBehavior("Resizable").setSize(300, 130);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("keyButton"), gdjs.illustrateCode.GDkeyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDkeyButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDkeyButtonObjects1[k] = gdjs.illustrateCode.GDkeyButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDkeyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13717356);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.illustrateCode.GDkeyButtonObjects1 */
{for(var i = 0, len = gdjs.illustrateCode.GDkeyButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDkeyButtonObjects1[i].getBehavior("Resizable").setSize(300, 130);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.illustrateCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDbackButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDbackButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDbackButtonObjects1[k] = gdjs.illustrateCode.GDbackButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDbackButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13717996);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.illustrateCode.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.illustrateCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDbackButtonObjects1[i].getBehavior("Resizable").setSize(277, 115);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("keyButton"), gdjs.illustrateCode.GDkeyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDkeyButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDkeyButtonObjects1[k] = gdjs.illustrateCode.GDkeyButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDkeyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13718820);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.illustrateCode.GDkeyButtonObjects1 */
{for(var i = 0, len = gdjs.illustrateCode.GDkeyButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDkeyButtonObjects1[i].getBehavior("Resizable").setSize(277, 115);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("padButton"), gdjs.illustrateCode.GDpadButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDpadButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDpadButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDpadButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDpadButtonObjects1[k] = gdjs.illustrateCode.GDpadButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDpadButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13719972);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.illustrateCode.GDpadButtonObjects1 */
{for(var i = 0, len = gdjs.illustrateCode.GDpadButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDpadButtonObjects1[i].getBehavior("Resizable").setSize(277, 115);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.illustrateCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDbackButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDbackButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDbackButtonObjects1[k] = gdjs.illustrateCode.GDbackButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDbackButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "changebuttonCD") >= 0.2;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.illustrateCode.GDbackButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("keyButton"), gdjs.illustrateCode.GDkeyButtonObjects1);
{for(var i = 0, len = gdjs.illustrateCode.GDkeyButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDkeyButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.illustrateCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDbackButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.illustrateCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDbackButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDbackButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDbackButtonObjects1[k] = gdjs.illustrateCode.GDbackButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDbackButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "changebuttonCD") >= 0.2;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.illustrateCode.GDbackButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("keyButton"), gdjs.illustrateCode.GDkeyButtonObjects1);
{for(var i = 0, len = gdjs.illustrateCode.GDkeyButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDkeyButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.illustrateCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDbackButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.illustrateCode.GDbackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDbackButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDbackButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDbackButtonObjects1[k] = gdjs.illustrateCode.GDbackButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDbackButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "changebuttonCD") >= 0.2;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.illustrateCode.GDbackButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("padButton"), gdjs.illustrateCode.GDpadButtonObjects1);
{for(var i = 0, len = gdjs.illustrateCode.GDpadButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDpadButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDpadButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.illustrateCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDbackButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("padButton"), gdjs.illustrateCode.GDpadButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDpadButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDpadButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDpadButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDpadButtonObjects1[k] = gdjs.illustrateCode.GDpadButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDpadButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "changebuttonCD") >= 0.2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("keyButton"), gdjs.illustrateCode.GDkeyButtonObjects1);
/* Reuse gdjs.illustrateCode.GDpadButtonObjects1 */
{for(var i = 0, len = gdjs.illustrateCode.GDkeyButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDkeyButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.illustrateCode.GDpadButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDpadButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDpadButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("padButton"), gdjs.illustrateCode.GDpadButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDpadButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDpadButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDpadButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDpadButtonObjects1[k] = gdjs.illustrateCode.GDpadButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDpadButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "changebuttonCD") >= 0.2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.illustrateCode.GDbackButtonObjects1);
/* Reuse gdjs.illustrateCode.GDpadButtonObjects1 */
{for(var i = 0, len = gdjs.illustrateCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDbackButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.illustrateCode.GDpadButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDpadButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDpadButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("keyButton"), gdjs.illustrateCode.GDkeyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDkeyButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDkeyButtonObjects1[k] = gdjs.illustrateCode.GDkeyButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDkeyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "changebuttonCD") >= 0.2;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.illustrateCode.GDkeyButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("padButton"), gdjs.illustrateCode.GDpadButtonObjects1);
{for(var i = 0, len = gdjs.illustrateCode.GDpadButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDpadButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDpadButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.illustrateCode.GDkeyButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDkeyButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("keyButton"), gdjs.illustrateCode.GDkeyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.illustrateCode.GDkeyButtonObjects1.length;i<l;++i) {
    if ( gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariableNumber(gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.illustrateCode.GDkeyButtonObjects1[k] = gdjs.illustrateCode.GDkeyButtonObjects1[i];
        ++k;
    }
}
gdjs.illustrateCode.GDkeyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "changebuttonCD") >= 0.2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.illustrateCode.GDbackButtonObjects1);
/* Reuse gdjs.illustrateCode.GDkeyButtonObjects1 */
{for(var i = 0, len = gdjs.illustrateCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDbackButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDbackButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.illustrateCode.GDkeyButtonObjects1.length ;i < len;++i) {
    gdjs.illustrateCode.GDkeyButtonObjects1[i].returnVariable(gdjs.illustrateCode.GDkeyButtonObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "changebuttonCD");
}}

}


};

gdjs.illustrateCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.illustrateCode.GDNewSpriteObjects1.length = 0;
gdjs.illustrateCode.GDNewSpriteObjects2.length = 0;
gdjs.illustrateCode.GDbackButtonObjects1.length = 0;
gdjs.illustrateCode.GDbackButtonObjects2.length = 0;
gdjs.illustrateCode.GDkeyButtonObjects1.length = 0;
gdjs.illustrateCode.GDkeyButtonObjects2.length = 0;
gdjs.illustrateCode.GDpadButtonObjects1.length = 0;
gdjs.illustrateCode.GDpadButtonObjects2.length = 0;

gdjs.illustrateCode.eventsList0(runtimeScene);
gdjs.illustrateCode.GDNewSpriteObjects1.length = 0;
gdjs.illustrateCode.GDNewSpriteObjects2.length = 0;
gdjs.illustrateCode.GDbackButtonObjects1.length = 0;
gdjs.illustrateCode.GDbackButtonObjects2.length = 0;
gdjs.illustrateCode.GDkeyButtonObjects1.length = 0;
gdjs.illustrateCode.GDkeyButtonObjects2.length = 0;
gdjs.illustrateCode.GDpadButtonObjects1.length = 0;
gdjs.illustrateCode.GDpadButtonObjects2.length = 0;


return;

}

gdjs['illustrateCode'] = gdjs.illustrateCode;
