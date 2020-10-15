var parentElement;
var parentDotNetObj;
window.setParentElement = function (element, dotnetObj) {
    parentElement = element;
    parentDotNetObj = dotnetObj;
    parentElement.onscroll = function (args) {
        return dotnetObj.invokeMethodAsync("ScrollChange", { "X": args.target.scrollLeft, "Y": args.target.scrollTop });
    }
}

window.getDiagramSize = function () {
    var element = document.getElementById("canvas");
    var bounds = element.getBoundingClientRect();
    var size = {};
    size["X"] = bounds.left;
    size["Y"] = bounds.top;
    return size;
}

window.setPanScroll = function (left, top) {
    parentElement.scrollLeft += left;
    parentElement.scrollTop += top;
    return { "X": parentElement.scrollLeft, "Y": parentElement.scrollTop };
}

