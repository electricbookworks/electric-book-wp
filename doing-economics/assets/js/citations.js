/*jslint*/
/*globals ebCitationReferences */

// The references.yml data is loaded to the page in head-elements,
// and then this script draws on it to replace <cite> elements
// that contain ids with relevant text.

// function to replace id with citation text
function ebCitationLabel(cite) {
    'use strict';
    var i;
    for (i = 0; i < ebCitationReferences.length; i += 1) {
        if (ebCitationReferences[i].ref === cite.textContent) {
            cite.innerHTML = ebCitationReferences[i].text;
        }
    }
}

// function to find all cite elements that contain ids
// (Prince doesn't support innerText, hence textContent.)
function ebFilterCitations(cites) {
    'use strict';
    var i;
    for (i = 0; i < cites.length; i += 1) {
        // If cite element contains no spaces,
        // we can assume it's a references id
        if (!(/\s/.test(cites[i].textContent))) {
            ebCitationLabel(cites[i]);
        }
    }
}

// Find cite elements, after checking that the ebCitationReferences
// object has been included on the page.
if (typeof ebCitationReferences == 'object') {
    var ebCitationElements = document.querySelectorAll('.source cite');
    ebFilterCitations(ebCitationElements);
}
