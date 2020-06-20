"use strict";
exports.__esModule = true;
var react_1 = require("react");
var controlRod_1 = require("../../components/controlRod");
var hud_1 = require("../../components/hud");
var earth_1 = require("../../threed/earth");
var navball_1 = require("../../threed/navball");
function Index() {
    var camera;
    var _a = react_1.useState({ x: 0, y: 0, z: 0 }), rotation = _a[0], setRotation = _a[1];
    var _b = react_1.useState({ x: 0, y: 0, z: 0 }), translation = _b[0], setTranslation = _b[1];
    react_1.useEffect(function () {
        console.log('mount');
        camera = earth_1["default"]();
        setRotation({
            x: camera.rotation.x,
            y: camera.rotation.y,
            z: camera.rotation.z
        });
    }, []);
    react_1.useEffect(function () {
        console.log('rerender');
        if (camera) {
            camera.rotation.set(rotation.x, rotation.y, rotation.z);
        }
    }, [rotation]);
    function handleRotate(x, y) {
        setRotation(function (pre) { return ({
            x: pre.x + x,
            y: pre.y + y,
            z: pre.z
        }); });
    }
    function handleTranslate() {
        console.log('translate');
    }
    return <>
    <hud_1["default"] />
    <navball_1["default"] />
    <controlRod_1["default"] handleRotate={handleRotate} handleTranslate={handleTranslate}/>
  </>;
}
exports["default"] = Index;
