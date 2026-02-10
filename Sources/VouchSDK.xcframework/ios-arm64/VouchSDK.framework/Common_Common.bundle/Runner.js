if (typeof main === "function") {
  window.sendEvent({
    type: "Telemetry",
    payload: {
      event: "PROCESSING_NEW_PAGE",
      metadata: {
        url: window.location.href,
      },
    },
  });

  if (document.readyState === "complete") {
    main();
  } else {
    window.onload = function () {
      main();
    };
  }
}
