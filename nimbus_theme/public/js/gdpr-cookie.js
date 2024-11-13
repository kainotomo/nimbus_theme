$(document).ready(function () {
    // Check if the 'gdprAccepted' cookie is not set
    if (!getCookie('gdprAccepted')) {
        // Show the GDPR banner
        $('#gdpr-banner').show();
    }

    // When the accept button is clicked
    $('#accept-gdpr').click(function () {
        // Set the 'gdprAccepted' cookie to 'true'
        setCookie('gdprAccepted', 'true', 365);

        // Hide the GDPR banner
        $('#gdpr-banner').hide();
    });
});

// Function to get a cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Function to set a cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

