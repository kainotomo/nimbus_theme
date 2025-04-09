// Set up Google Consent Mode v2
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Default consent settings - denied by default for EEA region
gtag('consent', 'default', {
    'ad_storage': 'denied',            // Advertising cookies
    'analytics_storage': 'denied',      // Analytics cookies
    'ad_user_data': 'denied',          // User data for advertising
    'ad_personalization': 'denied',     // Personalized advertising
    'region': ['EEA']                   // Apply these settings to EEA users
});

$(document).ready(function () {
    // Check if the 'gdprAccepted' cookie is not set
    if (!getCookie('gdprAccepted')) {
        // Show the GDPR banner
        $('#gdpr-banner').show();
    } else {
        // If user already accepted, update consent mode
        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted'
        });
    }

    // When the accept button is clicked
    $('#accept-gdpr').click(function () {
        // Set the 'gdprAccepted' cookie to 'true'
        setCookie('gdprAccepted', 'true', 365);

        // Update Google Consent Mode when user accepts
        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted'
        });

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

