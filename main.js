var editIndex;
var detail = [];
function sub() {
    var x = $("#fname").val();
    var y =$("#lname").val();
    var z = $("#age").val();
    if (x == "") {
        $("#one").html("Requierd");
    }
    else {
        $("#one").html("");
    }
    if (y == "") {
        $("#two").html("Requierd");
    }
    else {
        $("#two").html("");
    }

    if (z == "") {
        $("#three").html("Requierd");
        return false;
    }
    else {
        $("#three").html("");
    }

    var customerObj = {
        name: x,
        lame: y,
        loam: z

    };


    detail.push(customerObj);
    console.log(detail);

    console.log(editIndex);
    if (editIndex != undefined) {
    detail.splice(editIndex, 1);
    }
    tip()
    $('input[type="text"],input[type="number"],select,textarea').val("");
    // document.forms["myForm"]["fname"].value = '';
    // document.forms["myForm"]["lname"].value = '';
    // document.forms["myForm"]["age"].value = '';



}
function tip() {
    var html = "";
    editIndex = undefined;
    for (var i = 0; i < detail.length; i++) {
        html += "<tr>";
        html += "<td>" + detail[i].name + "</td>";
        html += "<td>" + detail[i].lame + "</td>";
        html += "<td>" + detail[i].loam + "</td>";
        html += '<td><button class="btn btn-info" onclick="Edit(' + i + ')">Edit</button> <button cass="btn btn-danger"onclick="Delete(' + i + ')">Delete</button></td>';
        html += "</tr>";


    }
    $("#bodyId").html(html) ;
}

    
function Delete(del) {
    console.log(del);
    detail.splice(del, 1);
    tip();
};

function Edit(edi) {
    editIndex = edi;
    console.log(edi);
    console.log(detail);
    console.log(detail[edi]);
    $("#fname").val(detail[edi].name);
    $("#lname").val(detail[edi].lame) ;
    $("#age").val(detail[edi].loam);
};