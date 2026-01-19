//
//  iOSOverwrites.js
//  Common
//
//  Created by Krzysztof Moczała on 12/05/2025.
//

window.sendEvent = function (event) {
    webkit.messageHandlers.handler.postMessage(event);
};

window.alert = function (msg) {
    const alertEvent = {
        type: "alert",
        message: msg
    };
    window.sendEvent(alertEvent);
};
