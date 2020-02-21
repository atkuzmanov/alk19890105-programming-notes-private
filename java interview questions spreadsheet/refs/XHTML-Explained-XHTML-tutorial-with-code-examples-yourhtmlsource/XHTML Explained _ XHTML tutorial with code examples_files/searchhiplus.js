/* http://www.kryogenix.org/code/browser/searchhi/ */
/* Modified 20021006 to fix query string parsing and add case insensitivity */

/* Modifications by Ross Shannon for toggling highlighting on off and saving preferences
 * http://www.yourhtmlsource.com */

function highlightWord(node,word) {
    // Prevent highlighting of extremely short substrings
    if (word.length <= 3)
        return;
        
	// Iterate into this node's childNodes
	if (node.hasChildNodes) {
		var hi_cn;
		for (hi_cn=0;hi_cn<node.childNodes.length;hi_cn++) {
			highlightWord(node.childNodes[hi_cn],word);
		}
	}
	
	// And do this node itself
	if (node.nodeType == 3) { // text node
		tempNodeVal = node.nodeValue.toLowerCase();
		tempWordVal = word.toLowerCase();
		if (tempNodeVal.indexOf(tempWordVal) != -1) {
			pn = node.parentNode;
			if (pn.className != "searchword") {
				// word has not already been highlighted!
				nv = node.nodeValue;
				ni = tempNodeVal.indexOf(tempWordVal);
				// Create a load of replacement nodes
				before = document.createTextNode(nv.substr(0,ni));
				docWordVal = nv.substr(ni,word.length);
				after = document.createTextNode(nv.substr(ni+word.length));
				hiwordtext = document.createTextNode(docWordVal);
				hiword = document.createElement("span");
				hiword.className = "searchword";
				hiword.appendChild(hiwordtext);
				pn.insertBefore(before,node);
				pn.insertBefore(hiword,node);
				pn.insertBefore(after,node);
				pn.removeChild(node);
			}
		}
	}
}

function searchHighlight() {
  if (readCookie("searchHiPlusOption") == "off") return;
  if (!document.getElementById('searchhitoggle')) return;
  
  if (readCookie("searchHiPlusOption") == null) {
    createCookie("searchHiPlusOption", "on", 365);
  }
  document.getElementById('searchhitoggle').childNodes[0].nodeValue = "Turn off";
    
  if (!document.createElement) return;
  ref = document.referrer;
  if (ref.indexOf('?') == -1) return;
  qs = ref.substr(ref.indexOf('?')+1);
  qsa = qs.split('&');
  
  // rehighlight any words that have already been tagged
  var lites = document.getElementsByTagName('span');
  for (var i=0; i<lites.length; i++) {
    if (lites[i].className == "lowlight")
      lites[i].className = "searchword";
  }
  if (!revert) {
    for (i=0;i<qsa.length;i++) {
      qsip = qsa[i].split('=');
      if (qsip.length == 1) continue;
      if (qsip[0] == 'q' || qsip[0] == 'p' || qsip[0]=='sp-q') { // q= for Google, p= for Yahoo, sp-q for Atomz
        words = unescape(qsip[1].replace(/\+/g,' ')).split(/\s+/);
        
        //TODO: Filter words
        
        for (w=0;w<words.length;w++) {
          highlightWord(document.getElementsByTagName("body")[0],words[w]);
        }
      }
    }
  }
}

var revert = false;
// Un-highlight everything
function searchLowLight() {
  createCookie("searchHiPlusOption", "off", 365);
  var lites = document.getElementsByTagName('span');
  for (var i=0; i<lites.length; i++) {
    if (lites[i].className == "searchword") {
      // grab word out and replace span with it
      lites[i].className = "lowlight";
    }
  }
  revert = true; // won't have to do the lengthy parsing part again
  document.getElementById('searchhitoggle').childNodes[0].nodeValue = "Turn on";
}

function searchHiOption() {
  ref = document.referrer;
  if (ref.indexOf('?') == -1) return;
  qs = ref.substr(ref.indexOf('?')+1);
  qsa = qs.split('&');
  for (i=0;i<qsa.length;i++) {
  	qsip = qsa[i].split('=');
  	if (qsip.length == 1) continue;
    if (qsip[0] == 'q' || qsip[0] == 'p' || qsip[0]=='sp-q') {
      var hl = true;
    }
  }
  if (hl) {
    document.write("<p id=\"searchhioption\"><button onclick=\"toggleSearchHi()\" id=\"searchhitoggle\">Turn on<br>Highlighting</button>The search terms you used to find this page can be highlighted. Click the button to toggle this feature on or off.");
  }
}

function toggleSearchHi() {
  if (readCookie("searchHiPlusOption") == "on") {
    searchLowLight();
  } else {
    createCookie("searchHiPlusOption", "on", 365);
    searchHighlight();
  }
}

window.onload = searchHighlight;
