if (navigator.serviceWorker) {
    console.log("Compatible");
    navigator.serviceWorker.register("../sw.js");
} else {
    console.log("No compatible");
}