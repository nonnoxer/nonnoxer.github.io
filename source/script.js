page_init = () => {
    $("#create").hide()
}
game_new = () => {
    $("#start").hide()
    $("#create").show()
    game_create_update()
}
game_create_update = () => {
    attributes = ["itl", "hwk", "fit", "scb", "edg", "cpl"]
    attributes.forEach(attr => {
        $("#" + attr).text($("#" + attr + "_range").val())
    });
}
game_create_finish = () => {
    student_attr = {}
    attributes = ["itl", "hwk", "fit", "scb", "edg", "cpl"]
    attributes.forEach(attr => {
        student_attr[attr] = $("#" + attr).text()
    })
    student_attr["nme"] = $("#nme").val()
}