if (typeof main === "function") {
  if (document.readyState === "complete") {
    main();
  } else {
    window.onload = function () {
      main();
    };
  }
}
