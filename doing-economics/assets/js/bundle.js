"function"!=typeof NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),function(){if(!(void 0===window.Element||"classList"in document.documentElement)){var t,e,n,i=Array.prototype,o=i.push,r=i.splice,s=i.join;c.prototype={add:function(t){this.contains(t)||(o.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var e=0;e<this.length&&this[e]!=t;e++);r.call(this,e,1),this.el.className=this.toString()}},toString:function(){return s.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=c,t=Element.prototype,e="classList",n=function(){return new c(this)},Object.defineProperty?Object.defineProperty(t,e,{get:n}):t.__defineGetter__(e,n)}function c(t){for(var e=(this.el=t).className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<e.length;n++)o.call(this,e[n])}}(),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var i=arguments[1],o=0;o<n;){var r=e[o];if(t.call(i,r,o,e))return r;o++}}});


// Create default metadata JS object
var metadata = {
    languages: ''
};




// Add languages to the metadata object
metadata.languages = [];

// Load locales.yml into a locales array.

// -------------------------------------------------------------
// Options
// -------

// Localise home pages in place, or redirect to different page?
var redirectHomepages = true;

// -------------------------------------------------------------


// Convert locales.yml into a JSON string.
// Note that hyphens in keys are converted to underscores.
var locales = {"en":{"iso-name":"English","local-name":"English","project":{"organisation":"","url":"","email":"","name":"Doing Economics","creator":"Eileen Tipoe and Ralf Becker","description":"A unique resource for learning data handling, software and statistical skills by working through projects that address real-world policy problems.","image":"","credit":""},"nav":{"home":"Home","menu":"Contents","next":"Next","previous":"Previous","back":"←"},"links":{"anchor-link":"Link"},"home":{"read":"Read","html-title":"Doing Economics: Empirical Projects"},"input":{"submit":"Submit","send":"Send"},"search":{"placeholder":"Search","search-title":"Search","placeholder-searching":"Searching...","notice":"","search-results":"Search results","results-for-singular":"result found for","results-for-plural":"results found for","results-for-none":"No results found for","jump-to-first":"Jump to first result ↓"},"contact":{"placeholder":{"name":"Name","email":"Email address","message":"Message"}},"questions":{"check-answers-button":"Check my answers","feedback-correct":"Correct!","feedback-incorrect":"Incorrect","feedback-unfinished":"You haven't selected all the correct answers."},"themes":{"legend-heading":"Themes and capstone units"},"beta":{"label":"Beta","message":"This book is a beta edition. It is in development, and we need your input to improve it. [Please send us feedback here](http://www.core-econ.org/contact-us/).","link":"http://www.core-econ.org/contact-us/"},"annotator":{"show-sidebar-tooltip-title":"Open annotations","show-sidebar-tooltip-description":"Tap here to show the annotations sidebar. Select text to highlight and create notes on this page.","show-annotated-text-tooltip-title":"Highlight annotations","show-annotated-text-tooltip-description":"Tap here to show or hide the annotation highlights on this page."},"accordion":{"show-all":"Expand all","close-all":"Close all"},"figures":{"see-owid":"View this data at OWiD","see-more":"See more","link-to-online-prefix":"To explore all of the slides in this figure, see the online version at ","link-to-online-suffix":"."},"cross-references":{"pre-page-number":"(page ","post-page-number":")"},"footer":{"text":"This ebook is developed by the CORE project. More information and additional resources for learning and teaching can be found at [www.core-econ.org](https://www.core-econ.org).","credit":"Produced by <a href='https://electricbookworks.com'>Electric Book Works</a>","version":"Version"}},"fr":{"iso-name":"French","local-name":"Français","project":{"organisation":"","url":"","email":"","name":"","creator":"L'équipe CORE","description":"Livres créés avec le flux de travail Electric Book","image":"","credit":"Construit avec [l'Electric Book](http://electricbook.works)"},"nav":{"home":"Accueil","menu":"Table des matières","next":"Suivant","previous":"Précédent","back":"←"},"links":{"anchor-link":"Lien"},"home":{"read":"Lire","html-title":"Doing Economics: Empirical Projects"},"input":{"submit":"Soumettre","send":"Envoyer"},"search":{"placeholder":"Recherche","search-title":"Recherche","placeholder-searching":"Recherche...","notice":"Les résultats de recherche en français seront disponibles prochainement.","search-results":"Résultats de la recherche","results-for-singular":"résultat trouvé pour","results-for-plural":"résultats trouvés pour","results-for-none":"Aucun résultat trouvé pour","jump-to-first":"Aller au premier résultat ↓"},"contact":{"placeholder":{"name":"Nom","email":"L’adresse e-mail","message":"Message"}},"questions":{"check-answers-button":"Vérifiez mes réponses","feedback-correct":"Correct!","feedback-incorrect":"Incorrect","feedback-unfinished":"Vous n'avez pas sélectionné toutes les bonnes réponses."},"themes":{"legend-heading":"Themes and capstone units"},"beta":{"label":"Beta","message":"This book is a beta edition. It is in development, and we need your input to improve it. [Please send us feedback here](http://www.core-econ.org/contact-us/).","link":"http://www.core-econ.org/contact-us/"},"annotator":{"show-sidebar-tooltip-title":"Ouvrir l'outil d'annotation","show-sidebar-tooltip-description":"Cliquer ici pour afficher la barre latérale des annotations. Vous pouvez sélectionner le texte à surligner et à annoter sur cette page.","show-annotated-text-tooltip-title":"Surligner les annotations","show-annotated-text-tooltip-description":"Cliquer ici pour afficher ou masquer les annotations surlignées sur cette page."},"accordion":{"show-all":"Montre tout","close-all":"Ferme tout"},"figures":{"see-owid":"Voir ces données sur OWiD","see-more":"Voir plus","link-to-online-prefix":"Pour explorer toutes les diapositives de cette figure, voir la version en ligne à ","link-to-online-suffix":"."},"cross-references":{"pre-page-number":"(page ","post-page-number":")"},"footer":{"text":"Cet eBook est produit par le projet CORE. Davantage d'informations et des ressources complémentaires pour l'apprentissage et l'enseignement peuvent être trouvées sur [www.core-econ.org](https://www.core-econ.org).","credit":"Produit par <a href='https://electricbookworks.com'>Electric Book Works</a>","version":"Version"}}};

// Or get the language from a URL parameter
// https://stackoverflow.com/a/901144/1781075
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function ebCheckForTranslationLanguage(language) {
    'use strict';

    // If language is in the array, return true
    if (metadata.languages.includes(language)) {
        return true;
    } else {
        console.log(language + ' is not a translation.');
        return false;
    }
}

// Various content localisations

function localiseText() {

    // Redirect on `?lang=` to language-specific home pages
    if (document.body.classList.contains('home')
            && redirectHomepages
            && pageLanguageByURLParameter
            && ebCheckForTranslationLanguage(pageLanguage)) {
        var currentURL = window.location.href
                .split('?')[0]
                .split('#')[0]
                .replace(/\/+$/, '');
        window.location.replace(currentURL + '/' + pageLanguage);
    }

    // Localise home page
    console.log('Localising for ' + pageLanguage);
    var homeReadbuttons = document.querySelectorAll('.button');
    var homePageHeading = document.querySelector('.home h1');
    // If language is set with a URL param, show only that language's read button
    if (homeReadbuttons.length > 0 && pageLanguageByURLParameter) {
        var i;
        for (i = 0; i < homeReadbuttons.length; i += 1) {
            homeReadbuttons[i].classList.add('visuallyhidden');
        }
        var languageButton = document.createElement('p');
        languageButton.classList.add('button');
        homePageHeading.insertAdjacentElement('afterend', languageButton);
        if (pageLanguage == 'en') {
            languageButton.innerHTML = '<a href="book/text/0-3-contents.html">' + locales[pageLanguage].home.read + '</a>';
        } else {
            languageButton.innerHTML = '<a href="book/' + pageLanguage + '/text/0-3-contents.html">' + locales[pageLanguage].home.read + '</a>';
        }
    }

    // Localise HTML title element on home page
    var titleElement = document.querySelector('title');
    if (titleElement && document.querySelector('body.home') !== undefined) {
        titleElement.innerHTML = locales[pageLanguage].home["html-title"];
    }

    // Localise author and title on home page
    var homePageTitle = document.querySelector('.home h1');
    if (homePageTitle) {
        homePageTitle.innerHTML = '<strong>' + locales[pageLanguage].project.creator + '</strong>' + locales[pageLanguage].project.name;
    }

    // Localise masthead
    var mastheadProjectName = document.querySelector('.masthead .masthead-series-name a');
    if (mastheadProjectName) {
        mastheadProjectName.innerHTML = locales[pageLanguage].project.name;
    }

    // Localise search
    var searchPageHeading = document.querySelector('.search-page #content h1:first-of-type');
    if (searchPageHeading) {
        searchPageHeading.innerHTML = locales[pageLanguage].search['search-title'];
    }

    // Localise search form
    var searchLanguageToLocalise = document.querySelector('#search-language');
    if (searchLanguageToLocalise) {
        searchLanguageToLocalise.setAttribute('value', pageLanguage);
    };

    // Localise search-box placeholder
    var searchInputBox = document.querySelector('.search input.search-box');
    if (searchInputBox) {
        var searchInputBoxPlaceholder = document.querySelector('.search input.search-box').placeholder;
        if (searchInputBoxPlaceholder) {
            searchInputBoxPlaceholder = locales[pageLanguage].search['search-placeholder'];
        }
    }

    // Localise searching... notice
    var searchProgressPlaceholder = document.querySelector('.search-placeholder');
    if (searchProgressPlaceholder) {
        searchProgressPlaceholder.innerHTML = locales[pageLanguage].search['placeholder-searching'];
    };

    // Localise Google CSE search snippets
    var googleCSESearchBox = document.querySelector('.search input.search-box');
    if (googleCSESearchBox) {
        googleCSESearchBox.placeholder = locales[pageLanguage].search.placeholder;
    };

    // Add any notices set in locales as search.notice
    if (searchPageHeading) {
        var searchNotice = document.createElement('div');
        searchNotice.classList.add('search-page-notice');
        searchNotice.innerHTML = '<p>' + locales[pageLanguage].search.notice + '</p>';
        searchPageHeading.insertAdjacentElement('afterend', searchNotice);
    };

    // We cannot localise the nav/TOC, since the root search page
    // always uses the parent-language. So we replace the nav
    // on the search page with a back button instead.
    // In case we have a back button (`$nav-bar-back-button-hide; true` in scss)
    // hide that one.
    var searchNavButtonToReplace = document.querySelector('.search-page [href="#nav"]');
    var searchNavDivToReplace = document.querySelector('.search-page #nav');
    var navBackButton = document.querySelector('.nav-back-button');
    if (searchNavButtonToReplace && navBackButton) {
        if (document.referrer != "" || window.history.length > 0) {
            navBackButton.remove();
            searchNavButtonToReplace.innerHTML = locales[pageLanguage].nav.back;
            searchNavButtonToReplace.addEventListener('click', function(ev) {
                ev.preventDefault();
                console.log('Going back...');
                window.history.back();
            });
        };
    };
    if (searchNavDivToReplace) {
        searchNavDivToReplace.innerHTML = '';
    }

    // If no results with GSE, translate 'No results' phrase
    window.addEventListener("load", function (event) {
        console.log("All loaded, checking for no-result.");
        var noResultsGSE = document.querySelector('.gs-no-results-result .gs-snippet');
        if (noResultsGSE) {
            noResultsGSE.innerHTML = locales[pageLanguage].search['results-for-none'] + ' ‘' + searchTerm + '’';
        }
    });

    // localise questions
    var questionButtons = document.querySelectorAll('.question .check-answer-button');
    function replaceText(button) {
        button.innerHTML='';
    }
    if (questionButtons) {
        questionButtons.forEach(replaceText);
    }
}

// Get the page language
if (getParameterByName('lang')) {
    var pageLanguage = getParameterByName('lang');
    var pageLanguageByURLParameter = true;
    localiseText();
} else {
    var pageLanguage = document.documentElement.lang;
    // If epub, this is xml:lang
    if (!pageLanguage) {
        var pageLanguage = document.documentElement.getAttribute('xml:lang');
    }
    localiseText();
};



    "use strict";function ebNav(){if(-1===navigator.userAgent.indexOf("Opera Mini")&&"querySelector"in document&&"addEventListener"in window){document.documentElement.classList.add("js-nav");var e=document.querySelector('[href="#nav"]'),t=document.querySelector("#nav");t.classList.add("visuallyhidden");'<span class="visuallyhidden">Close menu</span>',"</button>",t.insertAdjacentHTML("afterBegin",'<button data-toggle data-nav-close><span class="visuallyhidden">Close menu</span></button>');var n=document.querySelectorAll("#nav .has-children, #nav .has-children");'<span class="visuallyhidden">Toggle</span>',"</button>";for(var a=0;a<n.length;a++)n[a].querySelector("ol, ul").classList.add("visuallyhidden"),n[a].querySelector("a").insertAdjacentHTML("afterend",'<button data-toggle data-toggle-nav><span class="visuallyhidden">Toggle</span></button>');e.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("visuallyhidden"),document.documentElement.classList.toggle("js-nav-open")},!0);var l,s=function(){t.classList.add("visuallyhidden"),document.documentElement.classList.remove("js-nav-open")};if(t.addEventListener("click",function(e){var t=e.target||e.srcElement;return t.hasAttribute("data-nav-close")?(e.preventDefault(),void s()):t.hasAttribute("data-toggle-nav")?(e.preventDefault(),t.classList.toggle("show-children"),void t.nextElementSibling.classList.toggle("visuallyhidden")):"A"===t.tagName&&t.getAttribute("href")?void s():"A"===t.tagName?(t.nextElementSibling.classList.toggle("show-children"),void t.nextElementSibling.nextElementSibling.classList.toggle("visuallyhidden")):void 0}),""!=document.referrer||2<window.history.length)(l=document.querySelector("a.nav-back-button"))&&l.addEventListener("click",function(e){e.preventDefault(),window.history.back()});else(l=document.querySelector("a.nav-back-button"))&&l.parentNode.removeChild(l)}}ebNav();
    function ebGetQueryVariable(e){for(var r=window.location.search.substring(1).split("&"),a=0;a<r.length;a++){var t=r[a].split("=");if(t[0]===e)return decodeURIComponent(t[1].replace(/\+/g,"%20"))}}var searchTerm=ebGetQueryVariable("query"),searchBox=document.querySelectorAll(".search-box");if(searchTerm&&searchBox)for(var j=0;j<searchBox.length;++j)searchBox[j].setAttribute("value",searchTerm);
    /*!***************************************************
 * mark.js v8.4.0
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2016, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var _extends=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},_createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a};!function(a,b,c){"function"==typeof define&&define.amd?define([],function(){return a(b,c)}):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=a(b,c):a(b,c)}(function(a,b){var c=function(){function c(a){_classCallCheck(this,c),this.ctx=a}return _createClass(c,[{key:"log",value:function a(b){var c=arguments.length<=1||void 0===arguments[1]?"debug":arguments[1],a=this.opt.log;this.opt.debug&&"object"===("undefined"==typeof a?"undefined":_typeof(a))&&"function"==typeof a[c]&&a[c]("mark.js: "+b)}},{key:"escapeStr",value:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createRegExp",value:function(a){return a=this.escapeStr(a),Object.keys(this.opt.synonyms).length&&(a=this.createSynonymsRegExp(a)),this.opt.ignoreJoiners&&(a=this.setupIgnoreJoinersRegExp(a)),this.opt.diacritics&&(a=this.createDiacriticsRegExp(a)),a=this.createMergedBlanksRegExp(a),this.opt.ignoreJoiners&&(a=this.createIgnoreJoinersRegExp(a)),a=this.createAccuracyRegExp(a)}},{key:"createSynonymsRegExp",value:function(a){var b=this.opt.synonyms,c=this.opt.caseSensitive?"":"i";for(var d in b)if(b.hasOwnProperty(d)){var e=b[d],f=this.escapeStr(d),g=this.escapeStr(e);a=a.replace(new RegExp("("+f+"|"+g+")","gm"+c),"("+f+"|"+g+")")}return a}},{key:"setupIgnoreJoinersRegExp",value:function(a){return a.replace(/[^(|)]/g,function(a,b,c){var d=c.charAt(b+1);return/[(|)]/.test(d)||""===d?a:a+"\0"})}},{key:"createIgnoreJoinersRegExp",value:function(a){return a.split("\0").join("[\\u00ad|\\u200b|\\u200c|\\u200d]?")}},{key:"createDiacriticsRegExp",value:function(a){var b=this.opt.caseSensitive?"":"i",c=this.opt.caseSensitive?["aàáâãäåāąă","AÀÁÂÃÄÅĀĄĂ","cçćč","CÇĆČ","dđď","DĐĎ","eèéêëěēę","EÈÉÊËĚĒĘ","iìíîïī","IÌÍÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóôõöøō","OÒÓÔÕÖØŌ","rř","RŘ","sšśș","SŠŚȘ","tťț","TŤȚ","uùúûüůū","UÙÚÛÜŮŪ","yÿý","YŸÝ","zžżź","ZŽŻŹ"]:["aÀÁÂÃÄÅàáâãäåĀāąĄăĂ","cÇçćĆčČ","dđĐďĎ","eÈÉÊËèéêëěĚĒēęĘ","iÌÍÎÏìíîïĪī","lłŁ","nÑñňŇńŃ","oÒÓÔÕÖØòóôõöøŌō","rřŘ","sŠšśŚșȘ","tťŤțȚ","uÙÚÛÜùúûüůŮŪū","yŸÿýÝ","zŽžżŻźŹ"],d=[];return a.split("").forEach(function(e){c.every(function(c){if(c.indexOf(e)!==-1){if(d.indexOf(c)>-1)return!1;a=a.replace(new RegExp("["+c+"]","gm"+b),"["+c+"]"),d.push(c)}return!0})}),a}},{key:"createMergedBlanksRegExp",value:function(a){return a.replace(/[\s]+/gim,"[\\s]*")}},{key:"createAccuracyRegExp",value:function(a){var b=this,c=this.opt.accuracy,d="string"==typeof c?c:c.value,e="string"==typeof c?[]:c.limiters,f="";switch(e.forEach(function(a){f+="|"+b.escapeStr(a)}),d){case"partially":default:return"()("+a+")";case"complementary":return"()([^\\s"+f+"]*"+a+"[^\\s"+f+"]*)";case"exactly":return"(^|\\s"+f+")("+a+")(?=$|\\s"+f+")"}}},{key:"getSeparatedKeywords",value:function(a){var b=this,c=[];return a.forEach(function(a){b.opt.separateWordSearch?a.split(" ").forEach(function(a){a.trim()&&c.indexOf(a)===-1&&c.push(a)}):a.trim()&&c.indexOf(a)===-1&&c.push(a)}),{keywords:c.sort(function(a,b){return b.length-a.length}),length:c.length}}},{key:"getTextNodes",value:function(a){var b=this,c="",d=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,function(a){d.push({start:c.length,end:(c+=a.textContent).length,node:a})},function(a){return b.matchesExclude(a.parentNode,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},function(){a({value:c,nodes:d})})}},{key:"matchesExclude",value:function(a,b){var c=this.opt.exclude.concat(["script","style","title","head","html"]);return b&&(c=c.concat(["*[data-markjs='true']"])),d.matches(a,c)}},{key:"wrapRangeInTextNode",value:function(a,c,d){var e=this.opt.element?this.opt.element:"mark",f=a.splitText(c),g=f.splitText(d-c),h=b.createElement(e);return h.setAttribute("data-markjs","true"),this.opt.className&&h.setAttribute("class",this.opt.className),h.textContent=f.textContent,f.parentNode.replaceChild(h,f),g}},{key:"wrapRangeInMappedTextNode",value:function(a,b,c,d,e){var f=this;a.nodes.every(function(g,h){var i=a.nodes[h+1];if("undefined"==typeof i||i.start>b){var j=function(){var i=b-g.start,j=(c>g.end?g.end:c)-g.start;if(d(g.node)){g.node=f.wrapRangeInTextNode(g.node,i,j);var k=a.value.substr(0,g.start),l=a.value.substr(j+g.start);if(a.value=k+l,a.nodes.forEach(function(b,c){c>=h&&(a.nodes[c].start>0&&c!==h&&(a.nodes[c].start-=j),a.nodes[c].end-=j)}),c-=j,e(g.node.previousSibling,g.start),!(c>g.end))return{v:!1};b=g.end}}();if("object"===("undefined"==typeof j?"undefined":_typeof(j)))return j.v}return!0})}},{key:"wrapMatches",value:function(a,b,c,d,e){var f=this,g=0===b?0:b+1;this.getTextNodes(function(b){b.nodes.forEach(function(b){b=b.node;for(var e=void 0;null!==(e=a.exec(b.textContent))&&""!==e[g];)if(c(e[g],b)){var h=e.index;if(0!==g)for(var i=1;i<g;i++)h+=e[i].length;b=f.wrapRangeInTextNode(b,h,h+e[g].length),d(b.previousSibling),a.lastIndex=0}}),e()})}},{key:"wrapMatchesAcrossElements",value:function(a,b,c,d,e){var f=this,g=0===b?0:b+1;this.getTextNodes(function(b){for(var h=void 0;null!==(h=a.exec(b.value))&&""!==h[g];){var i=h.index;if(0!==g)for(var j=1;j<g;j++)i+=h[j].length;var k=i+h[g].length;f.wrapRangeInMappedTextNode(b,i,k,function(a){return c(h[g],a)},function(b,c){a.lastIndex=c,d(b)})}e()})}},{key:"unwrapMatches",value:function(a){for(var c=a.parentNode,d=b.createDocumentFragment();a.firstChild;)d.appendChild(a.removeChild(a.firstChild));c.replaceChild(d,a),c.normalize()}},{key:"markRegExp",value:function(a,b){var c=this;this.opt=b,this.log('Searching with expression "'+a+'"');var d=0,e="wrapMatches",f=function(a){d++,c.opt.each(a)};this.opt.acrossElements&&(e="wrapMatchesAcrossElements"),this[e](a,this.opt.ignoreGroups,function(a,b){return c.opt.filter(b,a,d)},f,function(){0===d&&c.opt.noMatch(a),c.opt.done(d)})}},{key:"mark",value:function(a,b){var c=this;this.opt=b;var d=0,e="wrapMatches",f=this.getSeparatedKeywords("string"==typeof a?[a]:a),g=f.keywords,h=f.length,i=this.opt.caseSensitive?"":"i",j=function a(b){var f=new RegExp(c.createRegExp(b),"gm"+i),j=0;c.log('Searching with expression "'+f+'"'),c[e](f,1,function(a,e){return c.opt.filter(e,b,d,j)},function(a){j++,d++,c.opt.each(a)},function(){0===j&&c.opt.noMatch(b),g[h-1]===b?c.opt.done(d):a(g[g.indexOf(b)+1])})};this.opt.acrossElements&&(e="wrapMatchesAcrossElements"),0===h?this.opt.done(d):j(g[0])}},{key:"unmark",value:function(a){var b=this;this.opt=a;var c=this.opt.element?this.opt.element:"*";c+="[data-markjs]",this.opt.className&&(c+="."+this.opt.className),this.log('Removal selector "'+c+'"'),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,function(a){b.unwrapMatches(a)},function(a){var e=d.matches(a,c),f=b.matchesExclude(a,!1);return!e||f?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}},{key:"opt",set:function(b){this._opt=_extends({},{element:"",className:"",exclude:[],iframes:!1,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:a.console},b)},get:function(){return this._opt}},{key:"iterator",get:function(){return this._iterator||(this._iterator=new d(this.ctx,this.opt.iframes,this.opt.exclude)),this._iterator}}]),c}(),d=function(){function a(b){var c=arguments.length<=1||void 0===arguments[1]||arguments[1],d=arguments.length<=2||void 0===arguments[2]?[]:arguments[2];_classCallCheck(this,a),this.ctx=b,this.iframes=c,this.exclude=d}return _createClass(a,[{key:"getContexts",value:function(){var a=void 0,b=[];return a="undefined"!=typeof this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:[this.ctx]:[],a.forEach(function(a){var c=b.filter(function(b){return b.contains(a)}).length>0;b.indexOf(a)!==-1||c||b.push(a)}),b}},{key:"getIframeContents",value:function(a,b){var c=arguments.length<=2||void 0===arguments[2]?function(){}:arguments[2],d=void 0;try{var e=a.contentWindow;if(d=e.document,!e||!d)throw new Error("iframe inaccessible")}catch(a){c()}d&&b(d)}},{key:"onIframeReady",value:function(a,b,c){var d=this;try{!function(){var e=a.contentWindow,f="about:blank",g="complete",h=function(){var b=a.getAttribute("src").trim(),c=e.location.href;return c===f&&b!==f&&b},i=function(){var e=function e(){try{h()||(a.removeEventListener("load",e),d.getIframeContents(a,b,c))}catch(a){c()}};a.addEventListener("load",e)};e.document.readyState===g?h()?i():d.getIframeContents(a,b,c):i()}()}catch(a){c()}}},{key:"waitForIframes",value:function(a,b){var c=this,d=0;this.forEachIframe(a,function(){return!0},function(a){d++,c.waitForIframes(a.querySelector("html"),function(){--d||b()})},function(a){a||b()})}},{key:"forEachIframe",value:function(b,c,d){var e=this,f=arguments.length<=3||void 0===arguments[3]?function(){}:arguments[3],g=b.querySelectorAll("iframe"),h=g.length,i=0;g=Array.prototype.slice.call(g);var j=function(){--h<=0&&f(i)};h||j(),g.forEach(function(b){a.matches(b,e.exclude)?j():e.onIframeReady(b,function(a){c(b)&&(i++,d(a)),j()},j)})}},{key:"createIterator",value:function(a,c,d){return b.createNodeIterator(a,c,d,!1)}},{key:"createInstanceOnIframe",value:function(b){return new a(b.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(a,b,c){var d=a.compareDocumentPosition(c),e=Node.DOCUMENT_POSITION_PRECEDING;if(d&e){if(null===b)return!0;var f=b.compareDocumentPosition(c),g=Node.DOCUMENT_POSITION_FOLLOWING;if(f&g)return!0}return!1}},{key:"getIteratorNode",value:function(a){var b=a.previousNode(),c=void 0;return c=null===b?a.nextNode():a.nextNode()&&a.nextNode(),{prevNode:b,node:c}}},{key:"checkIframeFilter",value:function(a,b,c,d){var e=!1,f=!1;return d.forEach(function(a,b){a.val===c&&(e=b,f=a.handled)}),this.compareNodeIframe(a,b,c)?(e!==!1||f?e===!1||f||(d[e].handled=!0):d.push({val:c,handled:!0}),!0):(e===!1&&d.push({val:c,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(a,b,c,d){var e=this;a.forEach(function(a){a.handled||e.getIframeContents(a.val,function(a){e.createInstanceOnIframe(a).forEachNode(b,c,d)})})}},{key:"iterateThroughNodes",value:function(a,b,c,d,e){for(var f=this,g=this.createIterator(b,a,d),h=[],i=void 0,j=void 0,k=function(){var a=f.getIteratorNode(g);return j=a.prevNode,i=a.node};k();)this.iframes&&this.forEachIframe(b,function(a){return f.checkIframeFilter(i,j,a,h)},function(b){f.createInstanceOnIframe(b).forEachNode(a,c,d)}),c(i);this.iframes&&this.handleOpenIframes(h,a,c,d),e()}},{key:"forEachNode",value:function(a,b,c){var d=this,e=arguments.length<=3||void 0===arguments[3]?function(){}:arguments[3],f=this.getContexts(),g=f.length;g||e(),f.forEach(function(f){var h=function(){d.iterateThroughNodes(a,f,b,c,function(){--g<=0&&e()})};d.iframes?d.waitForIframes(f,h):h()})}}],[{key:"matches",value:function(a,b){var c="string"==typeof b?[b]:b,d=a.matches||a.matchesSelector||a.msMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector;if(d){var e=!1;return c.every(function(b){return!d.call(a,b)||(e=!0,!1)}),e}return!1}}]),a}();return a.Mark=function(a){var b=this,d=new c(a);return this.mark=function(a,c){return d.mark(a,c),b},this.markRegExp=function(a,c){return d.markRegExp(a,c),b},this.unmark=function(a){return d.unmark(a),b},this},a.Mark},window,document);
    var markInstance=new Mark(document.querySelector("#wrapper")),options={element:"mark",className:"",exclude:[],separateWordSearch:!1,accuracy:"partially",diacritics:!0,synonyms:{},iframes:!1,iframesTimeout:5e3,acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignorePunctuation:[],wildcards:"disabled",each:function(e){},filter:function(e,a,n,r){return!0},noMatch:function(e){},done:function(e){},debug:!1,log:window.console};searchTerm&&-1===document.body.getAttribute("class").indexOf("search-page")&&markInstance.unmark().mark(searchTerm,options);
    "use strict";var ebSlideSupports=function(){return-1===navigator.userAgent.indexOf("Opera Mini")&&"querySelector"in document&&"addEventListener"in window&&"onhashchange"in window&&!!Array.prototype.forEach&&document.querySelectorAll(".slides")},ebSlidesMoveSummaryMeta=function(e){e.forEach(function(e){var i=e.querySelector(".summary"),t=i.querySelector(".caption"),r=i.querySelector(".figure-source"),n=document.createElement("div");n.classList.add("figure-summary-meta"),null!=t&&n.insertAdjacentHTML("beforeend",t.outerHTML),null!=r&&n.insertAdjacentHTML("beforeend",r.outerHTML),e.insertAdjacentHTML("beforeend",n.outerHTML),e.id=i.id,e.removeChild(i)})};function ebTruncateText(e,i){var t=e;return t.length>i&&(t=t.substring(0,i)+"…"),t}var ebSlidesBuildNav=function(e){e.forEach(function(e){var i=e.querySelectorAll(".figure"),t=i.length,r="";r+='<nav class="nav-slides',4<t&&(r+=" nav-slides-many",6<t&&(r+=" nav-slides-many-many")),r+='">',r+="<ol>",i.forEach(function(e){if(r+="<li>",r+='<a href="#'+e.id+'">',e.querySelector(".figure-images img")){var i=e.querySelector(".figure-images img").cloneNode();i.removeAttribute("srcset"),i.removeAttribute("sizes"),i.setAttribute("alt",""),r+=i.outerHTML}else{var t=e.querySelector(".figure-body .title").innerText;t=ebTruncateText(t,8),r+='<span class="slide-thumbnail-text">',r+=t,r+="</span>"}r+="</a>",r+="</li>"}),r+="</ol>",r+="</nav>",e.insertAdjacentHTML("afterbegin",r)})},ebResetSlides=function(e){e.forEach(function(e){e.querySelectorAll(".figure").forEach(function(e){e.classList.add("visuallyhidden")}),e.previousElementSibling.querySelectorAll(".nav-slides li").forEach(function(e){e.classList.remove("slide-current")})})},ebSlidesShowFirstInSlideline=function(e){e.querySelectorAll(".figure")[0].classList.remove("visuallyhidden")},ebSlidesShowFirst=function(e){e.forEach(function(e){ebSlidesShowFirstInSlideline(e)})},ebSlidesMarkNavUpToCurrent=function(e){var i=e.querySelectorAll(".nav-slides li"),t=!1;i.forEach(function(e){t||(e.classList.contains("slide-current")?t=!0:e.classList.add("slide-current"))})},ebSlidesShow=function(e){if(window.location.hash){var r=decodeURIComponent(window.location.hash.replace(":","\\:"));isNaN(r[1])?e.forEach(function(e){if(e.querySelector(r)){e.querySelector(r).classList.remove("visuallyhidden"),e.querySelectorAll(".nav-slides li").forEach(function(e){e.classList.remove("slide-current")});var i='.nav-slides [href="'+r+'"]',t=e.querySelector(i);t.setAttribute("tabindex",0),t.focus(),t.parentNode.classList.add("slide-current"),ebSlidesMarkNavUpToCurrent(e)}else ebSlidesShowFirstInSlideline(e)}):ebSlidesShowFirst(e)}else ebSlidesShowFirst(e)},ebSlidesKeyDown=function(){window.addEventListener("keydown",function(e){var i=e.key||e.which,t=e.target||e.srcElement;document.querySelector(".slides "+t.hash)&&("ArrowLeft"!==i&&37!==i&&"ArrowUp"!==i&&38!==i||!t.parentNode.previousElementSibling?"ArrowRight"!==i&&39!==i&&"ArrowDown"!==i&&"40"!==i||!t.parentNode.nextElementSibling||(e.preventDefault(),t.parentNode.nextElementSibling.querySelector("a").click()):(e.preventDefault(),t.parentNode.previousElementSibling.querySelector("a").click()))})},ebSlidesAlreadyShown=function(){document.querySelectorAll(".nav-slides a").forEach(function(e){e.addEventListener("click",function(e){document.querySelector(this.getAttribute("href")).classList.contains("visuallyhidden")||e.preventDefault()})})},ebSlides=function(){if(ebSlideSupports()){var e=document.querySelectorAll(".slides");ebSlidesMoveSummaryMeta(e),ebSlidesBuildNav(e),ebResetSlides(e),ebSlidesShow(e),ebSlidesAlreadyShown(),window.addEventListener("hashchange",function(){ebResetSlides(e),ebSlidesShow(e)}),ebSlidesKeyDown()}};ebSlides();
    var ebLazyLoadImagesCheckPageAccordionOff=function(){"use strict";var e=document.body.getAttribute("data-accordion-page");return!(!e||"none"!==e)},ebLazyLoadImages=function(e){Array.prototype.forEach&&e.forEach(function(e){var t=e.previousElementSibling;e.previousElementSibling&&"noscript"===t.tagName.toLowerCase()&&t.parentNode.removeChild(e.previousElementSibling);var r=e.getAttribute("data-src");if(r&&(e.setAttribute("src",r),e.removeAttribute("data-src"),"srcset"in document.createElement("img"))){var a=e.getAttribute("data-srcset");e.setAttribute("srcset",a),e.removeAttribute("data-srcset")}})};if("querySelectorAll"in document){var thisIsNotAUnit=-1===document.querySelector("body").getAttribute("class").indexOf("chapter"),thisHasNoH2s=null===document.querySelector("#content h2"),thisIsEndmatter=-1!=document.querySelector("body").getAttribute("class").indexOf("endmatter"),thisIsALeibniz=-1!=document.querySelector("body").getAttribute("class").indexOf("leibniz");if(thisIsNotAUnit||thisHasNoH2s||thisIsEndmatter||thisIsALeibniz||ebLazyLoadImagesCheckPageAccordionOff){var lazyImages=document.querySelectorAll("[data-srcset]");ebLazyLoadImages(lazyImages)}}if("querySelectorAll"in document){var chapterOpenerImages=document.querySelectorAll(".chapter-opener-image [data-srcset]");chapterOpenerImages&&ebLazyLoadImages(chapterOpenerImages)}
    function ebVideoInit(){"use strict";return document.querySelectorAll(".videowrapper")}var ebVideoHosts={youtube:"https://www.youtube.com/embed/",vimeo:"https://player.vimeo.com/video/"};function ebGetVideoHost(e){"use strict";var t;return e.classList.forEach(function(e){ebVideoHosts.hasOwnProperty(e)&&(t=e)}),t}function ebVideoSubtitles(e){"use strict";var t=e.getAttribute("data-video-subtitles");if("true"===t)return t=1}function ebVideoLanguage(e){"use strict";return e.getAttribute("data-video-language")}function ebVideoMakeIframe(e,t,o,i){"use strict";var r=ebVideoHosts[e],u="?autoplay=0";o&&"youtube"===e&&(u+="&cc_lang_pref="+o),i&&"youtube"===e&&(u+="&cc_load_policy="+i);var a=document.createElement("iframe");return a.setAttribute("frameborder",0),a.setAttribute("allowfullscreen",""),a.setAttribute("src",r+t+u),a}function videoShow(e){"use strict";ebVideoInit()&&e.querySelectorAll(".video").forEach(function(e){var t=ebVideoMakeIframe(ebGetVideoHost(e),e.id,ebVideoLanguage(e),ebVideoSubtitles(e)),o=e.querySelector(".video-wrapper");e.classList.add("video-embedded"),o.innerHTML="",o.appendChild(t)})}
    function ebExpandableBoxToggle(e){"use strict";if(e.target&&e.target.classList.contains("toggle")){var t,o=e.target.parentNode.parentNode.parentNode.querySelectorAll("h3 ~ *, h4 ~ *, h5 ~ *, h6 ~ *");if(e.target.classList.contains("closed"))for(e.target.classList.remove("closed"),e.target.classList.add("open"),t=0;t<o.length;t+=1)o[t].classList.remove("visuallyhidden");else for(e.target.classList.remove("open"),e.target.classList.add("closed"),t=0;t<o.length;t+=1)o[t].classList.add("visuallyhidden")}}function ebExpandableBoxAddBoxToggle(e){"use strict";var t=e.querySelector("h3 strong, h4 strong, h5 strong, h6 strong"),o=document.createElement("a");o.classList.add("toggle","closed"),t.insertAdjacentElement("beforeEnd",o),t.querySelector(".toggle").addEventListener("click",ebExpandableBoxToggle,!0)}function ebExpandableBoxTargets(){"use strict";return document.querySelectorAll('.expandable-box [id]:not([id^="MathJax-"])')}function ebExpandableBoxClickContainerBoxToggle(e){"use strict";if(e){var t=e.parentNode;if(t===document.body)return;if(t.classList.contains("expandable-box")){var o=t.querySelector("a.toggle.closed");o&&o.click()}else ebExpandableBoxClickContainerBoxToggle(t)}}function ebExpandableBoxListenForIncomingLinks(){"use strict";ebExpandableBoxTargets().forEach(function(e){e.addEventListener("idTargeted",function(){ebExpandableBoxClickContainerBoxToggle(e)})})}function ebExpandableBoxCheckURLForTargets(){"use strict";var e,t=window.location.hash.split("#")[1],o=ebExpandableBoxTargets();for(e=0;e<o.length;e+=1)o[e].id===t&&ebExpandableBoxClickContainerBoxToggle(document.getElementById(t))}function ebExpandableBoxProcessBoxes(){"use strict";var e,t,o,a=document.querySelectorAll(".expandable-box");for(t=0;t<a.length;t+=1){for(e=a[t].querySelectorAll("h3 ~ *, h4 ~ *, h5 ~ *, h6 ~ *"),o=0;o<e.length;o+=1)e[o].classList.add("visuallyhidden");ebExpandableBoxAddBoxToggle(a[t])}}document.querySelector("script#MathJax")?MathJax.Hub.Register.StartupHook("End",function(){"use strict";ebExpandableBoxProcessBoxes(),ebExpandableBoxListenForIncomingLinks(),window.addEventListener("hashchange",ebExpandableBoxCheckURLForTargets(),!1)}):(ebExpandableBoxProcessBoxes(),ebExpandableBoxListenForIncomingLinks(),window.addEventListener("hashchange",ebExpandableBoxCheckURLForTargets(),!1));
    "use strict";function ebAccordionInit(){var e,t=document.body.getAttribute("data-accordion-page");return t&&"none"===t&&(e=!0),-1===navigator.userAgent.indexOf("Opera Mini")&&"querySelectorAll"in document&&"addEventListener"in window&&!!Array.prototype.forEach&&!e}function ebAccordionIsAccordionAble(){var e=-1===document.querySelector("body").getAttribute("class").indexOf("chapter"),t=null===document.querySelector('#content h2, #content .subheadline, [data-accordion-role="first-section"]'),o=-1!==document.querySelector("body").getAttribute("class").indexOf("endmatter");if(e||t||o)return!1}function ebAccordionPageSetting(){return document.body.getAttribute("data-accordion-page")}function ebAccordionFirstSectionID(){var e=document.querySelector('[data-accordion-role="first-section"]').getAttribute("id");return e}function ebAccordionSetUpSections(e){if(document.querySelector(".subheadline")||document.querySelector("h2")){document.querySelector(".subheadline")?(document.querySelector(".subheadline").setAttribute("data-accordion-role","first-section"),document.querySelector(".subheadline").id="subheadline"):document.querySelector("h2").setAttribute("data-accordion-role","first-section"),ebAccordionFirstSectionID();var c=document.querySelector("#content");c.setAttribute("role","tablist"),e.forEach(function(e){var t=document.createElement("section");t.setAttribute("role","tabpanel"),t.setAttribute("aria-labelledby",e.id),t.setAttribute("data-accordion-container",e.id),c.insertBefore(t,e);var o=document.createElement("header");o.appendChild(e);var n=document.createElement("a");n.href="#"+e.id,n.innerHTML=e.innerHTML,e.innerHTML=n.outerHTML,e.setAttribute("role","tab"),t.appendChild(o);var r=document.createElement("div");r.setAttribute("data-container",!0),t.appendChild(r)})}}function ebAccordionFillSections(){var e=document.querySelectorAll("#content > *"),t=!1;e.forEach(function(e){"tabpanel"!==e.getAttribute("role")?t&&t.querySelector("[data-container]").appendChild(e):t=e})}function ebMoveThemeKeys(){var e=document.querySelectorAll(".theme-key");document.querySelectorAll(".theme-key a").forEach(function(e){e.parentNode.parentNode.parentNode.nextElementSibling.firstChild.firstChild.appendChild(e)}),e.forEach(function(e){e.parentNode.removeChild(e)})}function ebAccordionHideAll(){document.querySelectorAll('[role="tabpanel"]').forEach(function(e){e.querySelector('[role="tab"]').setAttribute("data-accordion","closed"),e.querySelector("[data-container]").setAttribute("aria-expanded","false")})}function ebAccordionShowAll(){document.querySelectorAll('[role="tabpanel"]').forEach(function(e){e.querySelector('[role="tab"]').setAttribute("data-accordion","open"),e.querySelector("[data-container]").setAttribute("aria-expanded","true")})}function ebAccordionHideAllExceptThisOne(t){document.querySelectorAll('[role="tabpanel"]').forEach(function(e){e.getAttribute("aria-labelledby")!==t&&(e.querySelector('[role="tab"]').setAttribute("data-accordion","closed"),e.querySelector("[data-container]").setAttribute("aria-expanded","false"))})}function ebAccordionCheckParent(e){if(!e)return!1;if(!e.parentNode)return!1;if("BODY"==e.tagName)return!1;var t=e.parentNode;return t.getAttribute("data-accordion-container")?t.getAttribute("data-accordion-container"):ebAccordionCheckParent(t)}function ebAccordionFindSection(e){return ebAccordionCheckParent(e)}function ebWhichTarget(e){var t;if(e){e=decodeURIComponent(e);t=document.getElementById(e)}else{var o=window.location.hash.replace("#","");o=decodeURIComponent(o);t=document.getElementById(o)}return t||!1}function ebAccordionShow(e){var t=ebWhichTarget(e);if(t){var o=ebAccordionFindSection(t);if(o){var n='[aria-labelledby="'+o+'"]',r=document.querySelector(n);r.querySelector('[role="tab"]').setAttribute("data-accordion","open"),r.querySelector("[data-container]").setAttribute("aria-expanded","true");var c=r.querySelectorAll("[data-srcset]");ebLazyLoadImages(c),r.querySelectorAll(".slides").forEach(function(e){var t=e.querySelector(".figure img");t&&t.addEventListener("load",function(){t.height>t.width&&e.querySelector("nav").classList.add("nav-slides-portrait")})}),"function"==typeof videoShow&&videoShow(r)}}}function ebAccordionListenForAnchorClicks(){document.querySelectorAll("#content a").forEach(function(e){"_blank"!==e.target&&e.addEventListener("click",function(e){if(e.stopPropagation(),"noopener"!==this.getAttribute("rel")&&this.hasAttribute("href")){var t=this.getAttribute("href").replace(/.*#/,"");if("open"!==this.parentNode.getAttribute("data-accordion")){if(!this.parentNode.getAttribute("data-accordion"))t=ebAccordionFindSection(document.getElementById(t));ebAccordionShow(t),ebAccordionHideAllExceptThisOne(t)}else ebAccordionHideAll()}})})}function ebAccordionListenForHeadingClicks(){document.querySelectorAll("[data-accordion]").forEach(function(e){e.addEventListener("click",function(){this.querySelector("a").click()})})}function ebAccordionListenForNavClicks(){document.querySelectorAll("#nav [href]").forEach(function(e){e.addEventListener("click",function(){var e=document.getElementById(this.hash.replace(/.*#/,""));e&&"closed"===e.getAttribute("data-accordion")&&e.querySelector("a").click()})})}function ebAccordionEmitIDTargetedEvent(e){var t=document.createEvent("Event");t.initEvent("idTargeted",!0,!0),e.dispatchEvent(t)}function ebAccordionListenForHashChange(){window.addEventListener("hashchange",function(e){e.preventDefault();var t=window.location.hash,o=(t=decodeURIComponent(t),document.getElementById(t.replace(/.*#/,"")));ebAccordionEmitIDTargetedEvent(o);var n=o.getBoundingClientRect(),r=n.top>=-n.height&&n.left>=-n.width&&n.bottom<=n.height+window.innerHeight&&n.right<=n.width+window.innerWidth,c=o.parentNode.getAttribute("data-accordion");r&&!c||("closed"!==c?(targetAccordionID=ebAccordionFindSection(o),ebAccordionShow(targetAccordionID),ebAccordionHideAllExceptThisOne(targetAccordionID)):o.querySelector("a").click())})}function ebAccordionFilterRemove(e){var t,o=document.querySelectorAll(".theme-legend-filter-button-active");for(t=0;t<o.length;t+=1)o[t].classList.remove("theme-legend-filter-button-active");var n,r=document.querySelectorAll('section[role="tabpanel"]');for(n=0;n<r.length;n+=1)r[n].style.display="block";if(e)return e()}function ebAccordionFilter(n,r){n.classList.contains("theme-legend-filter-button-active")?ebAccordionFilterRemove():ebAccordionFilterRemove(function(){n.classList.add("theme-legend-filter-button-active");var e,t=document.querySelectorAll('section[role="tabpanel"]'),o="theme-key-"+r;for(e=0;e<t.length;e+=1)t[e].querySelector("a."+o)||(t[e].style.display="none")})}function ebAccordionFilterListenForFilterClicks(e,t){e.addEventListener("click",function(){ebAccordionFilter(e,t)})}function ebAccordionFilterAddListeners(){document.querySelectorAll("[data-theme-filter]").forEach(function(e){var t=e.getAttribute("data-theme-filter");ebAccordionFilterListenForFilterClicks(e,t)})}function ebAccordionFilterButtons(){var e,t,o=document.querySelectorAll(".chapter .theme-legend li");for(e=0;e<o.length;e+=1){var n=o[e].className.match(/\d+/);t="",(t=document.createElement("a")).classList.add("theme-legend-filter-button"),t.setAttribute("data-theme-filter",n),o[e].insertAdjacentElement("afterbegin",t)}ebAccordionFilterAddListeners()}function ebAccordionCloseAllButton(){var e=document.querySelector(".accordion-show-all-button");e.innerHTML=locales[pageLanguage].accordion["close-all"],e.addEventListener("click",function(){ebAccordionHideAll(),ebAccordionShowAllButton()})}function ebAccordionShowAllButton(){if(document.querySelector(".accordion-show-all-button")){(t=document.querySelector(".accordion-show-all-button")).innerHTML=locales[pageLanguage].accordion["show-all"]}else{if(!1===ebAccordionIsAccordionAble())return;var e=document.querySelector(".chapter section, .chapter #content > h2, .chapter #content > .subheadline");if(e){var t,o=document.createElement("div");o.classList.add("accordion-show-all-button-wrapper"),e.insertAdjacentElement("beforebegin",o),(t=document.createElement("a")).classList.add("accordion-show-all-button"),t.innerHTML=locales[pageLanguage].accordion["show-all"],o.insertAdjacentElement("afterbegin",t)}}t&&t.addEventListener("click",function(){ebAccordionShowAll(),ebAccordionCloseAllButton()})}function ebAccordify(){if(ebAccordionInit()){var e=document.querySelectorAll('#content h2, #content .subheadline, [data-accordion-role="first-section"]');if(e&&!1!==ebAccordionIsAccordionAble()){if(ebAccordionSetUpSections(e),ebAccordionFillSections(),ebMoveThemeKeys(),searchTerm){document.querySelectorAll("section[data-accordion-container]").forEach(function(e){var t=e.querySelectorAll("[data-markjs]").length;if(t){var o=e.querySelector("header a");o.innerHTML="<mark>"+o.innerHTML+"</mark>";var n=document.createElement("p");n.innerHTML=1==t?t+" "+locales[pageLanguage].search["results-for-singular"]+' "<mark>'+searchTerm+'</mark>"':t+" "+locales[pageLanguage].search["results-for-plural"]+' "<mark>'+searchTerm+'</mark>"',e.querySelector("header").appendChild(n)}});var t=document.querySelectorAll("[data-markjs]"),o=t.length;if(o){var n=document.createElement("p");n.classList.add("search-results-summary"),n.innerHTML=1==o?o+" "+locales[pageLanguage].search["results-for-singular"]+' "<mark>'+searchTerm+'</mark>".':o+" "+locales[pageLanguage].search["results-for-plural"]+' "<mark>'+searchTerm+'</mark>".';var r=document.querySelector("h1");document.querySelector("#content").insertBefore(n,r.nextSibling),t[0].id="first-search-result",n.innerHTML+=' <a href="#first-search-result">'+locales[pageLanguage].search["jump-to-first"]+"</a>."}}if(!window.location.hash)return ebAccordionHideAllExceptThisOne(ebAccordionFirstSectionID()),void ebAccordionShow(ebAccordionFirstSectionID());ebAccordionHideAll(),ebAccordionShow()}}}function ebExpand(){"expand"===ebAccordionPageSetting()&&ebAccordionShowAll()}ebAccordify(),ebExpand(),ebAccordionListenForAnchorClicks(),ebAccordionListenForHeadingClicks(),ebAccordionListenForNavClicks(),ebAccordionListenForHashChange(),ebAccordionFilterButtons(),ebAccordionShowAllButton();
    function ebTables(){"use strict";-1!==navigator.userAgent.indexOf("Opera Mini")||void 0===document.querySelector||!Array.prototype.forEach||document.querySelectorAll("table").forEach(function(e){var r=document.createElement("div");r.classList.add("table-wrapper"),e.parentNode.insertBefore(r,e),r.appendChild(e)})}ebTables();
    var ebNewTabInit=function(){return-1===navigator.userAgent.indexOf("Opera Mini")&&"querySelector"in document&&!!Array.prototype.forEach},ebNewTabTargets='a[href*="//"], .figure-image-link',ebNewTab=function(){ebNewTabInit()&&document.querySelectorAll(ebNewTabTargets).forEach(function(e){e.target="_blank",e.rel="noopener"})};ebNewTab();
    function ebDefinitionsInit(){"use strict";return-1===navigator.userAgent.indexOf("Opera Mini")&&void 0!==document.querySelector&&void 0!==window.addEventListener&&!!Array.prototype.forEach}function ebDefinitionsSlugify(e){"use strict";return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function ebDefinitionsMoveDefinitions(){"use strict";document.querySelectorAll(".definition-term").forEach(function(o){o.parentNode.classList.add("hidden-definition-list");var s,r=o.innerHTML;-1!==r.indexOf("<em>")&&(s=!0);var c=r;(s&&(c=c.replace(/(<([^>]+)>)/gi,"*")),c=(c=c.replace("’","'")).replace("‘","'"),document.querySelector('[data-term="'+c+'"]'))&&document.querySelectorAll('[data-term="'+c+'"]').forEach(function(e){s&&(r=c.replace(/\*(.+?)\*/gi,"<em>$1</em>"));var i=o.nextElementSibling.innerHTML,n=document.createElement("span");n.innerHTML='<span class="definition-hover-term">'+r+"</span> "+i,n.classList.add("visuallyhidden"),n.classList.add("definition-description-hover"),n.id="dd-"+ebDefinitionsSlugify(r),e.insertAdjacentElement("afterEnd",n);var t=document.createElement("button");t.classList.add("close"),t.innerHTML='<span class="visuallyhidden">close</span>',n.appendChild(t)})})}function ebDefinitionsShowDescriptions(){"use strict";document.querySelectorAll("[data-term]").forEach(function(e){var i=e.nextElementSibling;e.addEventListener("click",function(){i.classList.remove("visuallyhidden")})})}function ebDefinitionsHideDescriptions(){"use strict";document.querySelectorAll(".definition-description-hover").forEach(function(e){e.addEventListener("mouseleave",function(){setTimeout(function(){e.classList.add("visuallyhidden")},1e3)})})}function ebDefinitionsHideDescriptionWithButton(){"use strict";document.querySelectorAll(".definition-description-hover button.close").forEach(function(e){e.addEventListener("click",function(){e.parentNode.classList.add("visuallyhidden")})})}var ebDefinitions=function(){"use strict";ebDefinitionsInit()&&(ebDefinitionsMoveDefinitions(),ebDefinitionsShowDescriptions(),ebDefinitionsHideDescriptions(),ebDefinitionsHideDescriptionWithButton())};ebDefinitions();
    "use strict";function ebReferences(){var e=-1===navigator.userAgent.indexOf("Opera Mini")&&"querySelector"in document&&"addEventListener"in window&&!!Array.prototype.forEach,t=document.querySelectorAll(".footnote");e&&0!==t.length&&t.forEach(function(e){var t=e.hash,n=e.hash.replace("#",""),i=t.replace(":","\\:"),a=document.querySelector(i),o=document.createElement("div");o.classList.add("footnote-detail"),o.classList.add("visuallyhidden"),o.id="inline-"+n;var r=e.parentNode,s=e.parentNode.parentNode;s.appendChild(o),o.innerHTML=a.innerHTML,r.addEventListener("mouseover",function(e){e.target.classList.contains("footnote")&&o.classList.remove("visuallyhidden")}),s.parentNode.classList.add("contains-footnote"),o.addEventListener("mouseleave",function(e){e.target===this&&setTimeout(function(){o.classList.add("visuallyhidden")},1e3)});var d=o.querySelector(".reversefootnote");d.innerText="",d.addEventListener("click",function(e){e.preventDefault(),o.classList.add("visuallyhidden")}),e.removeAttribute("href")})}ebReferences();
    var ebMCQsInit=function(){return-1===navigator.userAgent.indexOf("Opera Mini")&&"querySelector"in document&&!!Array.prototype.forEach&&"addEventListener"in window&&document.querySelectorAll(".question")&&!document.querySelector(".table-of-questions")},ebMCQsFindNumberOfCorrectAnswers=function(e){return e.match(/\D/).index},ebMCQsPositionOfCorrectAnswer=function(e){return e.match(/[aeiou]*/)[0].length},ebMCQsDobfuscateQuestionCode=function(e){for(var t=ebMCQsFindNumberOfCorrectAnswers(e),r=e.length,n=e.substr(t,r),o=[],c=0;c<t;c++){var s=ebMCQsPositionOfCorrectAnswer(n);o.push(s),n=n.substr(2*s,n.length)}return o},ebMCQsGetCorrectAnswers=function(e){var t=e.getAttribute("data-question-code"),r=ebMCQsDobfuscateQuestionCode(t),n={};return e.querySelectorAll(".mcq-feedback li").forEach(function(e,t){n[t+1]=!1}),r.forEach(function(e){n[e]=!0}),n},ebMCQsMakeOptionCheckboxes=function(e){e.querySelectorAll(".mcq-options li").forEach(function(e,t){var r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("data-index",t),e.innerHTML="<label>"+r.outerHTML+e.innerHTML+"</label>"})},ebMCQsAddButton=function(e){var t=document.createElement("button");t.innerHTML=locales[pageLanguage].questions["check-answers-button"],t.classList.add("check-answer-button");var r=e.querySelector(".mcq-feedback");e.insertBefore(t,r)},ebMCQsGetAllSelected=function(e){var r={};return e.querySelectorAll('[type="checkbox"]').forEach(function(e,t){r[t+1]=!1}),e.querySelectorAll('[type="checkbox"]:checked').forEach(function(e){var t=parseFloat(e.getAttribute("data-index"));r[t+1]=!0}),r},ebMCQsHideAllFeedback=function(e){e.querySelectorAll(".mcq-feedback li").forEach(function(e){e.classList.remove("mcq-feedback-show")})},ebMCQsShowSelectedOptions=function(e,r){e.querySelectorAll(".mcq-feedback li").forEach(function(e,t){r[t+1]&&e.classList.add("mcq-feedback-show")})},ebMCQsShowSelectedIncorrectOptions=function(e,r,n){e.querySelectorAll(".mcq-feedback li").forEach(function(e,t){r[t+1]&&r[t+1]!==n[t+1]&&e.classList.add("mcq-feedback-show")})},ebMCQsMarkSelectedOptions=function(){document.querySelectorAll(".mcq-options li").forEach(function(e){e.addEventListener("click",function(){this.querySelector('[type="checkbox"]:checked')?this.classList.add("selected"):this.classList.remove("selected")})})},ebMCQsGetAllCorrectAnswers=function(){var n={};return document.querySelectorAll(".question").forEach(function(e){var t=ebMCQsGetCorrectAnswers(e),r=e.getAttribute("data-question");n[r]=t}),n},ebMCQsExactlyRight=function(e,t){for(var r in t)if(t[r]!==e[r])return!1;return!0},ebMCQsNotAllTheCorrectAnswers=function(e,t){var r=0,n=0,o=0;for(var c in e)e[c]&&r++,e[c]&&t[c]&&n++,!e[c]&&t[c]&&o++;return n<r&&0===o},ebMCQsWordPressUserId=function(){var t="coreproject_sess",e=document.cookie.split("; ").find(function(e){return 0===e.indexOf(t)});return!!e&&decodeURIComponent(e).replace(t+"=","")},ebMCQsAddWordPressAccountButton=function(){var e=document.querySelector("#nav");if(e){var t=e.querySelector("h2"),r=document.createElement("a");r.innerText="Log in",r.href="/login/",r.classList.add("wordpress-link"),e.insertBefore(r,t),ebMCQsWordPressUserId()&&(r.innerText="My account",r.href="/account/")}},ebMCQsSendtoWordPress=function(e,t){var r=ebMCQsWordPressUserId();if(ebMCQsWordPressUserId()){var n={action:"quiz_score",book_id:1,quiz_id:e,user_id:r,score:t},o=[];for(var c in n)o.push(encodeURIComponent(c)+"="+encodeURIComponent(n[c]));var s=o.join("&"),i=new XMLHttpRequest;i.open("POST","/wp-admin/admin-ajax.php",!0),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.send(s)}},ebMCQsButtonClicks=function(){document.querySelectorAll(".check-answer-button").forEach(function(e){e.addEventListener("click",function(){var e=this.parentNode,t=e.getAttribute("data-question");e.getAttribute("data-question-code");ebMCQsHideAllFeedback(e);var r=ebMCQsGetAllSelected(e),n=ebMCQsGetAllCorrectAnswers()[t];e.classList.remove("mcq-incorrect"),e.classList.remove("mcq-partially-correct"),e.classList.remove("mcq-correct");var o=0;ebMCQsExactlyRight(n,r)?(e.classList.add("mcq-correct"),ebMCQsShowSelectedOptions(e,r),o=1):(ebMCQsNotAllTheCorrectAnswers(n,r)?e.classList.add("mcq-partially-correct"):e.classList.add("mcq-incorrect"),ebMCQsShowSelectedIncorrectOptions(e,r,n));var c=t.replace("question-","");ebMCQsSendtoWordPress(c,o)})})},ebMCQs=function(){ebMCQsInit()&&(ebMCQsAddWordPressAccountButton(),document.documentElement.classList.add("js-mcq"),document.querySelectorAll(".question").forEach(function(e){ebMCQsMakeOptionCheckboxes(e),ebMCQsAddButton(e)}),ebMCQsMarkSelectedOptions(),ebMCQsButtonClicks())};ebMCQs();
    var options={length:"300",elements:".sidenote, .info",siblings:"p, ol, ul, dl, h3, h4, h5"};function ebSidenoteConverterAllSidenotes(){"use strict";var e=document.querySelectorAll(options.elements);return e}function ebSidenoteConverterSidenoteLength(e){"use strict";return e.innerText.length}function ebSidenoteConverterIsAllowedAsSibling(e){"use strict";var t=options.siblings;if(t=(t=(t=t.replace(/\s/g,"")).toUpperCase()).split(","),-1<Object.values(t).indexOf(e.tagName))return!0}function ebSidenoteConverterAddClass(e){"use strict";return e=e.classList.add("web-wide","web-sidenote-right")}function ebSidenoteConverterWrapText(e,t,n,i){"use strict";if(t.nextSibling){if(!ebSidenoteConverterIsAllowedAsSibling(t.nextSibling))return;n<(i+=t.nextSibling.innerText.length)?ebSidenoteConverterAddClass(e):ebSidenoteConverterWrapText(e,t.nextSibling,n,i)}}function ebSidenoteConverterProcess(){"use strict";var e,t,n,i=ebSidenoteConverterAllSidenotes();for(e=0;e<i.length;e+=1)(t=ebSidenoteConverterSidenoteLength(n=i[e]))>options.length&&ebSidenoteConverterWrapText(n,n,t,0)}ebSidenoteConverterProcess();
    /* jslint browser*/
/*globals window */

// On Safari, bfcache does not store the page state
// as well as Firefox. In particular, when going 'Back'
// Safari forgets which accordion was open.
// The workaround is to force Safari to reload the page.
// This slows performance for users, but is a marginally
// better experience.

// If this is Safari (thanks https://stackoverflow.com/a/7768006/1781075)
if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    console.log('Safari detected.');
    window.onpageshow = function (event) {
        'use strict';
        if (event.persisted) {
            window.location.reload();
        }
    };
}

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

    /*jslint browser */
/*globals IntersectionObserver */

// Find any figure with a data-interactive attribute
// and place an iframe of that interactive graph over its image

function ebFigureGetInteractiveAttribute(figure) {
    'use strict';
    var interactiveFile = figure.getAttribute('data-interactive');

    if (interactiveFile === 'undefined') {
        interactiveFile = '';
    }

    return interactiveFile;
}

function ebReplaceImagesWithInteractiveIframes(figure) {
    'use strict';
    var images = figure.querySelectorAll('img, svg'); // SVG may already be injected, so we need to account for that
    var dataInteractiveAttribute = ebFigureGetInteractiveAttribute(figure);

    // If there really is a data-interactive attribute to work with...
    if (dataInteractiveAttribute !== ""
            && images
            && images.length > 0
            && dataInteractiveAttribute !== 'undefined') {

        // Create an array of interactive files in the data-interactive attribute
        var interactiveFilesArray = dataInteractiveAttribute.split(',');

        var i, iframe, imagePath, interactiveDirectoryPath, width, height;
        for (i = 0; i < interactiveFilesArray.length; i += 1) {

            // Trim whitespace from each item in the array
            interactiveFilesArray[i].trim();

            // Get the corresponding image path, since we assume
            // that the interactive equivalent is in a sibling directory in images/.
            imagePath = images[i].src || images[i].getAttribute('data-inject-url');
            console.log(imagePath);
            interactiveDirectoryPath = imagePath.replace(/\/images\/\w+\/.+/g, '/interactive/optimised/');

            // Create an iframe with the interactive source
            iframe = document.createElement('iframe');
            console.log('Creating iframe of ' + interactiveDirectoryPath + interactiveFilesArray[i]);
            iframe.setAttribute('src', interactiveDirectoryPath + interactiveFilesArray[i]);

            // Set a width for the iframe
            // iframe.width = figure.querySelector('.figure-images').offsetWidth;
            if (images[i].tagName === 'svg') {
                console.log('Using ' + images[i].tagName + ' dimensions for ' + figure.id);
                width = images[i].getBBox().x;
                height = images[i].getBBox().y;
            } else {
                console.log('Using ' + images[i].tagName + ' dimensions for ' + figure.id);
                width = images[i].offsetWidth;
                height = images[i].offsetHeight;
            }

            // Check for zero dimensions, and force them if so,
            // because if the image hadn't already loaded,
            // we wouldn't have its dimensions.
            if (width === 0 || height === 0) {
                console.log('Using .figure-images dimensions for ' + figure.id);
                width = images[i].closest('.figure-images').offsetWidth;
                height = images[i].closest('.figure-images').offsetHeight;
                if (width === 0 || height === 0) {
                    console.log('Width and/or height of .figure-images are 0. Using fallback dimensions for ' + figure.id);
                    width = width;
                    height = width / 4 * 3; // 3:4 aspect ratio
                }
            }

            // Set dimensions
            iframe.width = width;
            iframe.height = height;

            // Insert the iframe for its corresponding image
            images[i].insertAdjacentElement('afterend', iframe);
            images[i].style.display = 'none';

        }
    }
}


function ebInteractiveFigures() {
    'use strict';
    var interactiveFigures = document.querySelectorAll('[data-interactive]');

    // When an interactive figure is in view, replace its images with an iframe
    var interactiveFigureObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
                ebReplaceImagesWithInteractiveIframes(entry.target);
                interactiveFigureObserver.unobserve(entry.target);
            } else {
                console.log('Figure ' + entry.target.id + ' not in view');
            }
        });
    });

    var i;
    for (i = 0; i < interactiveFigures.length; i += 1) {
        interactiveFigureObserver.observe(interactiveFigures[i]);
    }
}

// Go
ebInteractiveFigures();

    /*jslint browser */
/*globals */

// Manage notifications

function ebNotificationCloseButton(element, index) {
    'use strict';

    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'notification-' + index);
    checkbox.setAttribute('id', 'notification-' + index);
    checkbox.classList.add('notification-close-button');
    checkbox.style.display = 'none';
    element.appendChild(checkbox);

    // With the box hidden, let user click a label
    var checkboxLabel = document.createElement('label');
    checkboxLabel.innerHTML = '×';
    checkboxLabel.setAttribute('for', 'notification-' + index);
    checkboxLabel.style.display = 'inline-block';
    checkboxLabel.style.width = 'auto';
    checkboxLabel.style.color = 'grey';
    checkboxLabel.style.marginLeft = '2em';
    element.appendChild(checkboxLabel);

    // Hide on click
    checkbox.addEventListener('click', function () {
        checkbox.parentNode.style.display = 'none';
    });
}

function ebNotificationBoxes() {
    'use strict';
    var notifications = document.querySelectorAll('.notification');
    notifications.forEach(function (notification, index) {
        ebNotificationCloseButton(notification, index);
    });
}

ebNotificationBoxes();


    




    // @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
//
// AnchorJS - v4.2.0 - 2019-01-01
// https://github.com/bryanbraun/anchorjs
// Copyright (c) 2019 Bryan Braun; Licensed MIT
//
// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
!function(A,e){"use strict";"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():(A.AnchorJS=e(),A.anchors=new A.AnchorJS)}(this,function(){"use strict";return function(A){function f(A){A.icon=A.hasOwnProperty("icon")?A.icon:"",A.visible=A.hasOwnProperty("visible")?A.visible:"hover",A.placement=A.hasOwnProperty("placement")?A.placement:"right",A.ariaLabel=A.hasOwnProperty("ariaLabel")?A.ariaLabel:"Anchor",A.class=A.hasOwnProperty("class")?A.class:"",A.base=A.hasOwnProperty("base")?A.base:"",A.truncate=A.hasOwnProperty("truncate")?Math.floor(A.truncate):64,A.titleText=A.hasOwnProperty("titleText")?A.titleText:""}function p(A){var e;if("string"==typeof A||A instanceof String)e=[].slice.call(document.querySelectorAll(A));else{if(!(Array.isArray(A)||A instanceof NodeList))throw new Error("The selector provided to AnchorJS was invalid.");e=[].slice.call(A)}return e}this.options=A||{},this.elements=[],f(this.options),this.isTouchDevice=function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(A){var e,t,i,n,o,s,a,r,c,h,l,u,d=[];if(f(this.options),"touch"===(l=this.options.visible)&&(l=this.isTouchDevice()?"always":"hover"),A||(A="h2, h3, h4, h5, h6"),0===(e=p(A)).length)return this;for(function(){if(null===document.head.querySelector("style.anchorjs")){var A,e=document.createElement("style");e.className="anchorjs",e.appendChild(document.createTextNode("")),void 0===(A=document.head.querySelector('[rel="stylesheet"], style'))?document.head.appendChild(e):document.head.insertBefore(e,A),e.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",e.sheet.cssRules.length),e.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",e.sheet.cssRules.length),e.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }",e.sheet.cssRules.length),e.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }',e.sheet.cssRules.length)}}(),t=document.querySelectorAll("[id]"),i=[].map.call(t,function(A){return A.id}),o=0;o<e.length;o++)if(this.hasAnchorJSLink(e[o]))d.push(o);else{if(e[o].hasAttribute("id"))n=e[o].getAttribute("id");else if(e[o].hasAttribute("data-anchor-id"))n=e[o].getAttribute("data-anchor-id");else{for(c=r=this.urlify(e[o].textContent),a=0;void 0!==s&&(c=r+"-"+a),a+=1,-1!==(s=i.indexOf(c)););s=void 0,i.push(c),e[o].setAttribute("id",c),n=c}n.replace(/-/g," "),(h=document.createElement("a")).className="anchorjs-link "+this.options.class,h.setAttribute("aria-label",this.options.ariaLabel),h.setAttribute("data-anchorjs-icon",this.options.icon),this.options.titleText&&(h.title=this.options.titleText),u=document.querySelector("base")?window.location.pathname+window.location.search:"",u=this.options.base||u,h.href=u+"#"+n,"always"===l&&(h.style.opacity="1"),""===this.options.icon&&(h.style.font="1em/1 anchorjs-icons","left"===this.options.placement&&(h.style.lineHeight="inherit")),"left"===this.options.placement?(h.style.position="absolute",h.style.marginLeft="-1em",h.style.paddingRight="0.5em",e[o].insertBefore(h,e[o].firstChild)):(h.style.paddingLeft="0.375em",e[o].appendChild(h))}for(o=0;o<d.length;o++)e.splice(d[o]-o,1);return this.elements=this.elements.concat(e),this},this.remove=function(A){for(var e,t,i=p(A),n=0;n<i.length;n++)(t=i[n].querySelector(".anchorjs-link"))&&(-1!==(e=this.elements.indexOf(i[n]))&&this.elements.splice(e,1),i[n].removeChild(t));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(A){return this.options.truncate||f(this.options),A.trim().replace(/\'/gi,"").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(A){var e=A.firstChild&&-1<(" "+A.firstChild.className+" ").indexOf(" anchorjs-link "),t=A.lastChild&&-1<(" "+A.lastChild.className+" ").indexOf(" anchorjs-link ");return e||t||!1}}});
// @license-end
    /*jslint browser */
/*globals anchors, pageLanguage, locales */

// Set the options for anchor.min.js,
// which is laoded before this file.
// See https://www.bryanbraun.com/anchorjs/

// Set options
anchors.options = {
    placement: 'right',   // 'left' disappears outside viewport
    visible: 'always',    // users should see that this is available
    icon: locales[pageLanguage].links['anchor-link']
};

// Add anchors to these elements
anchors.add('#content h2, #content h3');






    // Add Google Custom Search to a page, and add the query string
// as a parameter to the end of the target URL.
// Thanks to https://stackoverflow.com/a/35395297/1781075 for the tip.

// A note on implementation:
// never place two instances of the gcse:searchbox on a page,
// because search results will be hidden on Chrome for Android,
// until the user taps on the hidden input field or changes screen orientation,
// and you will spend fruitless days trying to figure out why.


// Main Google CSE code from cse.google.com
// Store the ID in _data/settings.yml, e.g. as
// google-cse-id: 001234567890123456789:abcde1234567
  (function() {
    var cx = '002912243131862380913:yv6hccb4dco';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();


// Add query string to result URL as parameter,
// so that we can pass it to mark.js for highlighting
// search terms on the target page
function addQueryParameter(searchQuery){
  var queryParameter="?query=";

  // Append each word in the searchQuery array to the parameter
  var i = 0;
  for (i=0;i<searchQuery.length;i++){
    if (i != searchQuery.length - 1) {
      queryParameter+=searchQuery[i]+"+";
    } else {
      queryParameter+=searchQuery[i];
    }
  }
  // Now to add that parameter to each search result link.
  var googleSearchResultLinks = document.querySelectorAll('a.gs-title');

  // First, find each search result link by a.gs-title.
  for (i=0;i<googleSearchResultLinks.length;i++){
    var googleSearchResultLink = googleSearchResultLinks[i].getAttribute('href');

    // Then append the parameter to the href.
    var newLinkWithQueryParameter = googleSearchResultLink+queryParameter;
    googleSearchResultLinks[i].setAttribute('href', newLinkWithQueryParameter);

    // Then, to avoid Google using its own link and
    // stripping our query parameter in the process,
    // replace the data-cturl and data-ctorig with our full href.
    googleSearchResultLinks[i].setAttribute('data-cturl', newLinkWithQueryParameter);
    googleSearchResultLinks[i].setAttribute('data-ctorig', newLinkWithQueryParameter);
  }
};


// Check for Google search results
function checkForGoogleSearchResults() {

  // Create an array from the words in the search box
  console.log('Browsers may throw an error here because search results haven\'t loaded yet. Don\'t worry, we\'ll try again.')
  var searchQuery = document.getElementById('gsc-i-id1').value.replace(/\"/g,'').split(' '),
      searchResultsBox = document.getElementsByClassName('gsc-resultsbox-visible')[0];

  // Once those variables are available, we can stop the interval checking
  // and run addQueryParameter.
  if (searchQuery !== undefined && searchResultsBox !== undefined) {
    clearInterval(checkForGoogleSearchResultsInterval)
    addQueryParameter(searchQuery);

    // Hide the 'Searching...' placeholder
    document.getElementsByClassName('search-placeholder')[0].style.display = "none";

    // Once we've added the query parameter, we can show the results,
    // which till now our CSS has hidden.
    searchResultsBox.style.display = "block";

    // Give focus back to the search box for quick new search
    document.getElementById('gsc-i-id1').select();
  }
};


// It takes a while for Google search results to load,
// so if we're on the search-results page,
// let's check for theme every second.

// Get the page's name
var thisURLArray = window.location.href.split('?')[0].split('/');
var thisPage = thisURLArray[thisURLArray.length - 1];

// Start checking for Google search results if this is a search page
if(thisPage === "search.html") {
  var checkForGoogleSearchResultsInterval = setInterval(checkForGoogleSearchResults, 1000);
}






