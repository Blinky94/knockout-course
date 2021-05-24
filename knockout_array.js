$(document).ready(function () {
    ko.applyBindings(new InventoryViewModel(), document.getElementById("knockout-app"))
})

function InventoryViewModel() {
    var self = this

    var iconTypes = [
        { icon: "icon-bone", text: "Bone" },
        { icon: "icon-ball", text: "Ball" },
        { icon: "icon-circle", text: "Circle" },
        { icon: "icon-rabbit", text: "Rabbit" }
    ]

    self.inventory = ko.observableArray([
    ]);

    self.addItem = function () {
        var index = Math.floor(Math.random() * iconTypes.length);
        self.inventory.push(iconTypes[index])
    }

    self.removeItem = function (data, event) {
        var indexToRemove = event.target.getAttribute("item-index");

        self.inventory.splice(indexToRemove, 1);
    }
}
