let vouch_runMain = function () {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    if (typeof main === "function") {
      window.sendEvent({ type: "MainStarted" });
      main();
    }
  } else {
    setTimeout(() => {
      vouch_runMain();
    }, 1000);
  }
};

window.sendEvent({
  type: "Telemetry",
  payload: {
    event: "PROCESSING_NEW_PAGE",
    metadata: {
      url: window.location.href,
    },
  },
});

vouch_runMain();
