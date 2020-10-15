window.getDiagramSize = function () {
    var element = document.getElementById("canvas");
    var bounds = element.getBoundingClientRect();
    var size = {};
    size["X"] = bounds.left;
    size["Y"] = bounds.top;
    return size;
}

window.getScrollSize = function (element) {
    var scrollSize = {};
    scrollSize["X"] = element.scrollLeft;
    scrollSize["Y"] = element.scrollTop;
    return scrollSize;
}

window.setPanScroll = function (element, left, top) {
    element.scrollLeft += left;
    element.scrollTop += top;
    return { "X": element.scrollLeft, "Y": element.scrollTop };
}