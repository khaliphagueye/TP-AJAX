var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject(Microsoft.XMLHTTP);
        } catch (e) {
            alert("Erreur lors de la création de l'objet XMLHttpRequst");
        }

    }
    if (!xmlHttp) {
        alert("Erreur lors de la création de l'objet XMLHttpRequst");

    } else {
        return xmlHttp;

    }

}

function processs() {
    if (xmlHttp.readyState == 0 || xmlHttp.readyState == 4) {
        name = encodeURIComponent(document.getElementById('name').value);
        xmlHttp.open("GET", "ex1.php?name=" + name, true);
        xmlHttp.onreadystatechange = handleResponse();
        xmlHttp.send(null);
    } else {
        setTimeout('processs()', 1000);
    }

}

function handleResponse() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            reponse = xmlHttp.ResponseXML;
            xmlRoot = reponse.documentElement;
            message = xmlRoot.firstChild.data;
            document.getElementById("answer").innerHTML = '<span style="color : red"> ' + message + '</span>';
            setTimeout('processs()', 1000);

        } else {
            alert('Erreur au niveau de la lecture de la donnée');

        }

    }
}