gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.GDTommyObjects1= [];
gdjs.gameCode.GDTommyObjects2= [];
gdjs.gameCode.GDTommyObjects3= [];
gdjs.gameCode.GDTile30TiledSpriteObjects1= [];
gdjs.gameCode.GDTile30TiledSpriteObjects2= [];
gdjs.gameCode.GDTile30TiledSpriteObjects3= [];
gdjs.gameCode.GDBasicExplosionEnergySparksObjects1= [];
gdjs.gameCode.GDBasicExplosionEnergySparksObjects2= [];
gdjs.gameCode.GDBasicExplosionEnergySparksObjects3= [];
gdjs.gameCode.GDBasicExplosionSmoothObjects1= [];
gdjs.gameCode.GDBasicExplosionSmoothObjects2= [];
gdjs.gameCode.GDBasicExplosionSmoothObjects3= [];
gdjs.gameCode.GDBasicExplosionEnergyObjects1= [];
gdjs.gameCode.GDBasicExplosionEnergyObjects2= [];
gdjs.gameCode.GDBasicExplosionEnergyObjects3= [];
gdjs.gameCode.GDLightningTextureObjects1= [];
gdjs.gameCode.GDLightningTextureObjects2= [];
gdjs.gameCode.GDLightningTextureObjects3= [];
gdjs.gameCode.GDTommy2Objects1= [];
gdjs.gameCode.GDTommy2Objects2= [];
gdjs.gameCode.GDTommy2Objects3= [];
gdjs.gameCode.GDNewPanelSpriteObjects1= [];
gdjs.gameCode.GDNewPanelSpriteObjects2= [];
gdjs.gameCode.GDNewPanelSpriteObjects3= [];
gdjs.gameCode.GDhookObjects1= [];
gdjs.gameCode.GDhookObjects2= [];
gdjs.gameCode.GDhookObjects3= [];
gdjs.gameCode.GDRedLaser09Objects1= [];
gdjs.gameCode.GDRedLaser09Objects2= [];
gdjs.gameCode.GDRedLaser09Objects3= [];
gdjs.gameCode.GDdashCDObjects1= [];
gdjs.gameCode.GDdashCDObjects2= [];
gdjs.gameCode.GDdashCDObjects3= [];
gdjs.gameCode.GDSpike_9595TrapObjects1= [];
gdjs.gameCode.GDSpike_9595TrapObjects2= [];
gdjs.gameCode.GDSpike_9595TrapObjects3= [];
gdjs.gameCode.GDFlatHeartBarObjects1= [];
gdjs.gameCode.GDFlatHeartBarObjects2= [];
gdjs.gameCode.GDFlatHeartBarObjects3= [];
gdjs.gameCode.GDwinTextObjects1= [];
gdjs.gameCode.GDwinTextObjects2= [];
gdjs.gameCode.GDwinTextObjects3= [];
gdjs.gameCode.GDDoorObjects1= [];
gdjs.gameCode.GDDoorObjects2= [];
gdjs.gameCode.GDDoorObjects3= [];
gdjs.gameCode.GDnotowinTextObjects1= [];
gdjs.gameCode.GDnotowinTextObjects2= [];
gdjs.gameCode.GDnotowinTextObjects3= [];


gdjs.gameCode.mapOfEmptyGDRedLaser09Objects = Hashtable.newFrom({"RedLaser09": []});
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDTommyObjects1, gdjs.gameCode.GDTommyObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects2[k] = gdjs.gameCode.GDTommyObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects2[i].getBehavior("Animation").setAnimationName("Walking");
}
}}

}


{

/* Reuse gdjs.gameCode.GDTommyObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("Animation").setAnimationName("Idle Poses");
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.gameCode.GDTommyObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDRedLaser09Objects1Objects = Hashtable.newFrom({"RedLaser09": gdjs.gameCode.GDRedLaser09Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.gameCode.GDTommyObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.gameCode.GDDoorObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDnotowinTextObjects1Objects = Hashtable.newFrom({"notowinText": gdjs.gameCode.GDnotowinTextObjects1});
gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).getChild("time").setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "gametime"));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDDoorObjects1 */
gdjs.gameCode.GDnotowinTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDnotowinTextObjects1Objects, (( gdjs.gameCode.GDDoorObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDDoorObjects1[0].getPointX("")) - 50, (( gdjs.gameCode.GDDoorObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDDoorObjects1[0].getPointY("")) - 50, "");
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.gameCode.GDTommyObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.gameCode.GDDoorObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.gameCode.GDTommyObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDhookObjects1Objects = Hashtable.newFrom({"hook": gdjs.gameCode.GDhookObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.gameCode.GDTommyObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDhookObjects1Objects = Hashtable.newFrom({"hook": gdjs.gameCode.GDhookObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.gameCode.GDTommyObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSpike_95959595TrapObjects1Objects = Hashtable.newFrom({"Spike_Trap": gdjs.gameCode.GDSpike_9595TrapObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects = Hashtable.newFrom({"Tommy": gdjs.gameCode.GDTommyObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSpike_95959595TrapObjects1Objects = Hashtable.newFrom({"Spike_Trap": gdjs.gameCode.GDSpike_9595TrapObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommy2Objects1Objects = Hashtable.newFrom({"Tommy2": gdjs.gameCode.GDTommy2Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommy2Objects1Objects = Hashtable.newFrom({"Tommy2": gdjs.gameCode.GDTommy2Objects1});
gdjs.gameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy2"), gdjs.gameCode.GDTommy2Objects1);
{for(var i = 0, len = gdjs.gameCode.GDTommy2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommy2Objects1[i].getBehavior("Opacity").setOpacity(150);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.5, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.gameCode.GDTommyObjects1.length !== 0 ? gdjs.gameCode.GDTommyObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].activateBehavior("Physics2", false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashCD");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfEmptyGDRedLaser09Objects));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hurtcd");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gametime");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("winText"), gdjs.gameCode.GDwinTextObjects1);
{for(var i = 0, len = gdjs.gameCode.GDwinTextObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDwinTextObjects1[i].getBehavior("Text").setText("你還剩" + runtimeScene.getGame().getVariables().getFromIndex(5).getAsString() + "個星星未找到");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "dashCD") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dashCD"), gdjs.gameCode.GDdashCDObjects1);
{for(var i = 0, len = gdjs.gameCode.GDdashCDObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdashCDObjects1[i].getBehavior("Text").setText("RashReady");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "dashCD") >= 2);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dashCD"), gdjs.gameCode.GDdashCDObjects1);
{for(var i = 0, len = gdjs.gameCode.GDdashCDObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdashCDObjects1[i].getBehavior("Text").setText("Rash on cooldown");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].returnVariable(gdjs.gameCode.GDTommyObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].returnVariable(gdjs.gameCode.GDTommyObjects1[i].getVariables().getFromIndex(3)).setBoolean(true);
}
}
{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Tommy2"), gdjs.gameCode.GDTommy2Objects1);
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("Flippable").flipX(true);
}
for(var i = 0, len = gdjs.gameCode.GDTommy2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommy2Objects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Tommy2"), gdjs.gameCode.GDTommy2Objects1);
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("Flippable").flipX(false);
}
for(var i = 0, len = gdjs.gameCode.GDTommy2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommy2Objects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("Animation").setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("Animation").setAnimationName("Falling Poses");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getVariableNumber(gdjs.gameCode.GDTommyObjects1[i].getVariables().getFromIndex(0)) < 2 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13549068);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].returnVariable(gdjs.gameCode.GDTommyObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getVariableNumber(gdjs.gameCode.GDTommyObjects1[i].getVariables().getFromIndex(0)) < 2 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13550620);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].returnVariable(gdjs.gameCode.GDTommyObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getX() > gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + ((( gdjs.gameCode.GDTommyObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDTommyObjects1[0].getPointX("")) - (gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber())) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getY() > gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + ((( gdjs.gameCode.GDTommyObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDTommyObjects1[0].getPointY("")) - (gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber())) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getX() < gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + ((( gdjs.gameCode.GDTommyObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDTommyObjects1[0].getPointX("")) - (gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber())) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getY() < gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + ((( gdjs.gameCode.GDTommyObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDTommyObjects1[0].getPointY("")) - (gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber())) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getY() > 950 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedLaser09"), gdjs.gameCode.GDRedLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDRedLaser09Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13555188);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDRedLaser09Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(5).sub(1);
}{for(var i = 0, len = gdjs.gameCode.GDRedLaser09Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDRedLaser09Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.gameCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.gameCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDDoorObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("notowinText"), gdjs.gameCode.GDnotowinTextObjects1);
{for(var i = 0, len = gdjs.gameCode.GDnotowinTextObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDnotowinTextObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);
gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.gameCode.GDhookObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDhookObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);
gdjs.copyArray(runtimeScene.getObjects("hook"), gdjs.gameCode.GDhookObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDhookObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Spike_Trap"), gdjs.gameCode.GDSpike_9595TrapObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSpike_95959595TrapObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "hurtcd") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getX() < (( gdjs.gameCode.GDSpike_9595TrapObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDSpike_9595TrapObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.gameCode.GDFlatHeartBarObjects1);
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDFlatHeartBarObjects1[i].SetValue(gdjs.gameCode.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("Tween").addObjectPositionXTween2("hurtback", (gdjs.gameCode.GDTommyObjects1[i].getPointX("")) - 100, "linear", 0.5, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hurtcd");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spike_Trap"), gdjs.gameCode.GDSpike_9595TrapObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommyObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSpike_95959595TrapObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "hurtcd") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getX() > (( gdjs.gameCode.GDSpike_9595TrapObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDSpike_9595TrapObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.gameCode.GDFlatHeartBarObjects1);
/* Reuse gdjs.gameCode.GDTommyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDFlatHeartBarObjects1[i].SetValue(gdjs.gameCode.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("Tween").addObjectPositionXTween2("hurtback", (gdjs.gameCode.GDTommyObjects1[i].getPointX("")) + 100, "linear", 0.5, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hurtcd");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "hurtcd") < 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "hurtcd") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.gameCode.GDFlatHeartBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDFlatHeartBarObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDFlatHeartBarObjects1[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDFlatHeartBarObjects1[k] = gdjs.gameCode.GDFlatHeartBarObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDFlatHeartBarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getVariableBoolean(gdjs.gameCode.GDTommyObjects1[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "dashCD") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13569340);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
gdjs.gameCode.GDTommy2Objects1.length = 0;

{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].returnVariable(gdjs.gameCode.GDTommyObjects1[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("Tween").addObjectPositionTween2("rush", (gdjs.gameCode.GDTommyObjects1[i].getPointX("")) + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() / Math.sqrt(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()) * runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), (gdjs.gameCode.GDTommyObjects1[i].getPointY("")) + runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() / Math.sqrt(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()) * runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), "linear", 0.2, false);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "dashtime");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashtime");
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").setGravity(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommy2Objects1Objects, (( gdjs.gameCode.GDTommyObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDTommyObjects1[0].getPointX("")), (( gdjs.gameCode.GDTommyObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDTommyObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.gameCode.GDTommy2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommy2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("shadow", 0, "linear", 0.5, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDTommyObjects1[i].getVariableBoolean(gdjs.gameCode.GDTommyObjects1[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDTommyObjects1[k] = gdjs.gameCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "dashCD") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13572372);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDTommyObjects1 */
gdjs.gameCode.GDTommy2Objects1.length = 0;

{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].returnVariable(gdjs.gameCode.GDTommyObjects1[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("Tween").addObjectPositionTween2("rush", (gdjs.gameCode.GDTommyObjects1[i].getPointX("")) + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() / Math.sqrt(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()) * runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), (gdjs.gameCode.GDTommyObjects1[i].getPointY("")) + runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() / Math.sqrt(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()) * runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), "linear", 0.2, false);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "dashtime");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashtime");
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").setGravity(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTommy2Objects1Objects, (( gdjs.gameCode.GDTommyObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDTommyObjects1[0].getPointX("")), (( gdjs.gameCode.GDTommyObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDTommyObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.gameCode.GDTommy2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommy2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("shadow", 0, "linear", 0.5, true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "dashtime") > 0.2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.gameCode.GDTommyObjects1);
{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].returnVariable(gdjs.gameCode.GDTommyObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashCD");
}{for(var i = 0, len = gdjs.gameCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDTommyObjects1[i].getBehavior("PlatformerObject").setGravity(1000);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashtime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "dashtime");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashx");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashy");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashy");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashy");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashy");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "dashx") >= 0.2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "dashy") >= 0.2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDTommyObjects1.length = 0;
gdjs.gameCode.GDTommyObjects2.length = 0;
gdjs.gameCode.GDTommyObjects3.length = 0;
gdjs.gameCode.GDTile30TiledSpriteObjects1.length = 0;
gdjs.gameCode.GDTile30TiledSpriteObjects2.length = 0;
gdjs.gameCode.GDTile30TiledSpriteObjects3.length = 0;
gdjs.gameCode.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.gameCode.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.gameCode.GDBasicExplosionEnergySparksObjects3.length = 0;
gdjs.gameCode.GDBasicExplosionSmoothObjects1.length = 0;
gdjs.gameCode.GDBasicExplosionSmoothObjects2.length = 0;
gdjs.gameCode.GDBasicExplosionSmoothObjects3.length = 0;
gdjs.gameCode.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.gameCode.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.gameCode.GDBasicExplosionEnergyObjects3.length = 0;
gdjs.gameCode.GDLightningTextureObjects1.length = 0;
gdjs.gameCode.GDLightningTextureObjects2.length = 0;
gdjs.gameCode.GDLightningTextureObjects3.length = 0;
gdjs.gameCode.GDTommy2Objects1.length = 0;
gdjs.gameCode.GDTommy2Objects2.length = 0;
gdjs.gameCode.GDTommy2Objects3.length = 0;
gdjs.gameCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.gameCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.gameCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.gameCode.GDhookObjects1.length = 0;
gdjs.gameCode.GDhookObjects2.length = 0;
gdjs.gameCode.GDhookObjects3.length = 0;
gdjs.gameCode.GDRedLaser09Objects1.length = 0;
gdjs.gameCode.GDRedLaser09Objects2.length = 0;
gdjs.gameCode.GDRedLaser09Objects3.length = 0;
gdjs.gameCode.GDdashCDObjects1.length = 0;
gdjs.gameCode.GDdashCDObjects2.length = 0;
gdjs.gameCode.GDdashCDObjects3.length = 0;
gdjs.gameCode.GDSpike_9595TrapObjects1.length = 0;
gdjs.gameCode.GDSpike_9595TrapObjects2.length = 0;
gdjs.gameCode.GDSpike_9595TrapObjects3.length = 0;
gdjs.gameCode.GDFlatHeartBarObjects1.length = 0;
gdjs.gameCode.GDFlatHeartBarObjects2.length = 0;
gdjs.gameCode.GDFlatHeartBarObjects3.length = 0;
gdjs.gameCode.GDwinTextObjects1.length = 0;
gdjs.gameCode.GDwinTextObjects2.length = 0;
gdjs.gameCode.GDwinTextObjects3.length = 0;
gdjs.gameCode.GDDoorObjects1.length = 0;
gdjs.gameCode.GDDoorObjects2.length = 0;
gdjs.gameCode.GDDoorObjects3.length = 0;
gdjs.gameCode.GDnotowinTextObjects1.length = 0;
gdjs.gameCode.GDnotowinTextObjects2.length = 0;
gdjs.gameCode.GDnotowinTextObjects3.length = 0;

gdjs.gameCode.eventsList2(runtimeScene);
gdjs.gameCode.GDTommyObjects1.length = 0;
gdjs.gameCode.GDTommyObjects2.length = 0;
gdjs.gameCode.GDTommyObjects3.length = 0;
gdjs.gameCode.GDTile30TiledSpriteObjects1.length = 0;
gdjs.gameCode.GDTile30TiledSpriteObjects2.length = 0;
gdjs.gameCode.GDTile30TiledSpriteObjects3.length = 0;
gdjs.gameCode.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.gameCode.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.gameCode.GDBasicExplosionEnergySparksObjects3.length = 0;
gdjs.gameCode.GDBasicExplosionSmoothObjects1.length = 0;
gdjs.gameCode.GDBasicExplosionSmoothObjects2.length = 0;
gdjs.gameCode.GDBasicExplosionSmoothObjects3.length = 0;
gdjs.gameCode.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.gameCode.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.gameCode.GDBasicExplosionEnergyObjects3.length = 0;
gdjs.gameCode.GDLightningTextureObjects1.length = 0;
gdjs.gameCode.GDLightningTextureObjects2.length = 0;
gdjs.gameCode.GDLightningTextureObjects3.length = 0;
gdjs.gameCode.GDTommy2Objects1.length = 0;
gdjs.gameCode.GDTommy2Objects2.length = 0;
gdjs.gameCode.GDTommy2Objects3.length = 0;
gdjs.gameCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.gameCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.gameCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.gameCode.GDhookObjects1.length = 0;
gdjs.gameCode.GDhookObjects2.length = 0;
gdjs.gameCode.GDhookObjects3.length = 0;
gdjs.gameCode.GDRedLaser09Objects1.length = 0;
gdjs.gameCode.GDRedLaser09Objects2.length = 0;
gdjs.gameCode.GDRedLaser09Objects3.length = 0;
gdjs.gameCode.GDdashCDObjects1.length = 0;
gdjs.gameCode.GDdashCDObjects2.length = 0;
gdjs.gameCode.GDdashCDObjects3.length = 0;
gdjs.gameCode.GDSpike_9595TrapObjects1.length = 0;
gdjs.gameCode.GDSpike_9595TrapObjects2.length = 0;
gdjs.gameCode.GDSpike_9595TrapObjects3.length = 0;
gdjs.gameCode.GDFlatHeartBarObjects1.length = 0;
gdjs.gameCode.GDFlatHeartBarObjects2.length = 0;
gdjs.gameCode.GDFlatHeartBarObjects3.length = 0;
gdjs.gameCode.GDwinTextObjects1.length = 0;
gdjs.gameCode.GDwinTextObjects2.length = 0;
gdjs.gameCode.GDwinTextObjects3.length = 0;
gdjs.gameCode.GDDoorObjects1.length = 0;
gdjs.gameCode.GDDoorObjects2.length = 0;
gdjs.gameCode.GDDoorObjects3.length = 0;
gdjs.gameCode.GDnotowinTextObjects1.length = 0;
gdjs.gameCode.GDnotowinTextObjects2.length = 0;
gdjs.gameCode.GDnotowinTextObjects3.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
