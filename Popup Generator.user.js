// ==UserScript==
// @name         Leo's Popup Generator
// @author       Leo Takacs // Scam Baiting
// @version      1.3
// @match        *www.popup.com*
// @match        *www.popup.com/finder*
// @grant        unsafeWindow
// ==/UserScript==
var vers = 1.3;
var defaultIcon = "data:image/png;base64,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";
const defaultURLs = ['youtibe.com', 'gyoutube.com', 'twutter.com', 'ggmail.com', 'youutube.com', 'outube.com'];
var pageHTML = `

<title>Leo's Popup Finder ` + vers + `</title>
<link rel="icon"
      type="image/png"
      href=` + defaultIcon + `>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<center>


</br>
</br>
<div class="btn-group-vertical">
        <button class="btn btn-primary" onclick="numFinder()">🚨 Popup Generator</button>
		<button class="btn btn-default" onclick="addFinderURL()">➕ Add URL</button>
		<button class="btn btn-default" onclick="removeFinderURL()">🗑️ Remove URL</button>
		<button class="btn btn-default" onclick="showFinderURLs()">📇 Show URLs</button>
		<button class="btn btn-default" onclick="importURLs()">📝 Import URLs</button>
		<button class="btn btn-default" onclick="exportURLs()">📝 Export URLs</button>
		<button class="btn btn-default" onclick="resetFinderURLs()">🔄 Reset URL list to default</button>
</div>
</br>
</br>
</br>
Drag this to your bookmarks bar:
<a href="javascript:(function()%7BopenInNewTab%20%3D%20function(url)%20%7Bvar%20win%20%3D%20window.open(url%2C%20'_blank')%3Bwin.focus()%3B%7D%3BopenInNewTab(%22http%3A%2F%2Fwww.popup.com%2Ffinder%22)%7D)()">Find a Popup</a>
</br>
</br>
<img onclick="window.location.href = 'http://youtube.com/c/LeoTakacs/'" style="margin-top:10px" src="https://dabuttonfactory.com/button.png?t=Subscribe+to+Leo+Takacs&f=Overlock-Bold&ts=24&tc=fff&tshs=1&tshc=000&hp=20&vp=8&c=round&bgt=gradient&bgc=f00&ebgc=c00"></img>

<input type='file' id="upload" accept='.RTCLIST.TXT' onchange='openFile(event)' style="display:none"><br>
    <textarea id="importCont" style="display:none">
    </textarea>

`;
var dummyHTML = `
<title>Searching for a popup......</title>
<link rel="icon"
      type="image/png"
      href=` + defaultIcon + `>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<center>
</br>
Searching for a popup......
`;
var curUrl = 0;
numFinder = function() {
    if (localStorage.getItem("current")) {
        curUrl = parseInt(localStorage.getItem("current"));
    }
    maxUrl = finderURLs.length - 1;
    window.open("http://www." + finderURLs[curUrl], "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=25,width=1200,height=800");
    if (curUrl == maxUrl) {
        curUrl = 0;
    } else {
        curUrl++;
    }
    localStorage.setItem("current", curUrl);
};
(function() {


    if (window.location.href == 'http://www.popup.com/') {
        document.documentElement.innerHTML = pageHTML;
    } else if (window.location.href == 'http://www.popup.com/finder') {
        document.documentElement.innerHTML = dummyHTML;
            setTimeout(function() {
        if (window.location.href.includes("finder")) {
            numFinder();
            window.close();
        }

    }, 800);
    }

    finderURLs = [];
    for (i = 1; i <= localStorage.getItem("numOfUrls"); i++) {
        spot = "url_" + i;
        console.log(spot);
        finderURLs.push(localStorage.getItem(spot));
    }
    if (!localStorage.getItem("url_1")) {
        finderURLs = [];
        finderURLs = defaultURLs.slice();
        localStorage.setItem("numOfUrls", finderURLs.length);
        for (i = 0; i < finderURLs.length; i++) {
            label = i + 1;
            if (localStorage.getItem("url_" + label) != finderURLs[i]) {
                localStorage.setItem("url_" + label, finderURLs[i]);
            }
        }
    }
    window.onload = function() {
        if (localStorage.getItem("url_1") == null) {
            resetFinderURLs();
        }
    };
})();
importURLs = function() {
    document.getElementById("upload").click();
};
exportURLs = function() {
    var list = '';
    for (var i = 0; i < finderURLs.length; i++) {
        if (i == finderURLs.length - 1) {
            list = list + finderURLs[i];
        } else {
            list = list + finderURLs[i] + ",";
        }
    }
    alert("Exporting URL list as " + spFilename("URLs", "rtclist.txt") + "....");
    download(list, filename);
};
resetFinderURLs = function() {
    alert("Pop-up Generator URL list entries have been reset to default." + " (" + defaultURLs.length + ")");
    localStorage.clear();
    localStorage.setItem("numOfUrls", defaultURLs.length);
    finderURLs = [];
    finderURLs = defaultURLs.slice();
    for (var i = 0; i < finderURLs.length; i++) {
        label = i + 1;
        if (localStorage.getItem("url_" + label) != finderURLs[i]) {
            localStorage.setItem("url_" + label, finderURLs[i]);
        }
    }
};
showFinderURLs = function() {
    o = "";
    o = o + "Saved URLs: \n";
    for (i = 0; i < localStorage.getItem("numOfUrls"); i++) {
        num = i + 1;
        o = o + num + ". " + finderURLs[i] + "\n";
    }
    alert(o);
};
removeFinderURL = function() {
    if (finderURLs.length > 1) {
        var urllist = '';
        for (var i = 0; i < finderURLs.length; i++) {
            num = i + 1;
            urllist = urllist + num + ". " + finderURLs[i] + "\n";
        }
        rem = prompt("Enter number of URL to remove from list:\n\n" + urllist);
        if (rem > finderURLs.length && rem != undefined) {
            alert("URL number " + rem + " does not exist.");
        } else if (rem == '' && rem != undefined) {
            alert("Please enter a URL number." && rem != undefined);
        } else if (rem != undefined) {
            fnum = finderURLs.length - 1;
            alert("www." + finderURLs[rem - 1] + " has been removed from the Pop-up Generator URL list. (" + fnum + ")");
            localStorage.clear();
            rem--;
            finderURLs.splice(rem, 1);
            localStorage.setItem("numOfUrls", finderURLs.length);
            var list = '';
            for (var i = 0; i < finderURLs.length; i++) {
                list = list + finderURLs[i] + "\n";
            }
        }
        for (var i = 0; i < finderURLs.length; i++) {
            label = i + 1;
            if (localStorage.getItem("url_" + label) != finderURLs[i]) {
                localStorage.setItem("url_" + label, finderURLs[i]);
            }
        }
    } else {
        alert("You must have at least one URL.");
    }
};
addFinderURL = function(url, showmsg) {
    if (url == undefined) {
        if (showmsg == undefined) {
            url = prompt("Enter a URL to add to the Pop-up Generator list (without the \'http://\' or \'www.\'):");
        }
    }
    if (url.length > 4) {
        finderURLs.push(url);
        localStorage.setItem("numOfUrls", finderURLs.length);
        if (showmsg == true) {
            alert("www." + url + " has been added to the Pop-up Generator URL list. (" + finderURLs.length + ")");
        }
    } else if (url == null || url == '') {
        if (showmsg == true) {
            alert("Please enter a URL.");
        }
    } else {
        if (showmsg == true) {
            alert("This is not a valid URL");
        }
    }
    for (var i = 0; i < finderURLs.length; i++) {
        label = i + 1;
        if (localStorage.getItem("url_" + label) != finderURLs[i]) {
            localStorage.setItem("url_" + label, finderURLs[i]);
        }
    }
};
openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
        var text = reader.result;
        var node = document.getElementById('importCont');
        node.value = text;
        console.log(reader.result.substring(0, 200));
    };
    reader.readAsText(input.files[0]);
    imFilename = document.getElementById('upload').value;
    imFilename = "C:\\fakepath\\SuperRTC_URLs_5-2-2018-10-57-50.rtclist.txt";
    imFilename = imFilename.replace('C:\\fakepath\\', '');
    document.getElementById('upload').value = '';
    setTimeout(function() {
        var array = document.getElementById("importCont").value.split(',');
        alert("Importing URLs from " + imFilename + "....");
        for (i = 0; i < array.length; i++) {
            addFinderURL(array[i], false);
        }
        alert(i + " URL(s) have been imported to the URL list.");
    }, 700);
};
download = function(data, filename) {
    var file = new Blob([data], {
        type: "text/plain;charset=utf-8"
    });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 1);
    }
};
spFilename = function(text, ext) {
    var d = new Date();
    //
    var mo = d.getMonth() + 1;
    var day = d.getDay() - 1;
    var year = d.getFullYear();
    //
    var n = d.getTime();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    filename = "SuperRTC_" + text + "_" + mo + "-" + day + "-" + year + "-" + h + "-" + m + "-" + s + "." + ext;
    return filename;
};


window.onload = function() {

};