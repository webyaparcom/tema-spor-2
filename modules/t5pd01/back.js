/* page-desing-2 — metin + aciklamali gorsel + kategori sayfa listesi.
   Kritik duzeltme: page.text[json.lang] dil fallback'siz erisim, dil eksikse
   tum back.js'i patlatiyordu ve {{text}}/{{descimg}}/{{pagelist}} ciktiya
   siziyordu (or. yalniz tr metni olan projede ar/de sayfalari). */

function pd2Lang(val) {
  if (val == null) {
    return "";
  }
  if (typeof val === "object") {
    if (val[json.lang] != null) {
      return val[json.lang];
    }
    if (val.tr != null) {
      return val.tr;
    }
    var pd2Keys = Object.keys(val);
    return pd2Keys.length ? (val[pd2Keys[0]] || "") : "";
  }
  return String(val);
}

/* Metin: satirlar <p> olarak */
var pd2Text = pd2Lang(page["text"]);
var finalHtml = "";
if (pd2Text) {
  var lines = String(pd2Text).split("\n");
  var htmlContent = [];
  lines.forEach(function (line) {
    htmlContent.push("<p>" + line + "</p>");
  });
  var ulIndex = htmlContent.lastIndexOf("</li>");
  if (ulIndex !== -1) {
    htmlContent.splice(ulIndex + 1, 0, "</ul>");
  }
  finalHtml = htmlContent.join("\n");
}
html = html.replace(new RegExp("{{text}}", "g"), finalHtml);

/* Aciklamali gorsel blogu */
if (page["img"] != undefined && page["img"] != "") {
  var descimg = '<div class="modulex-desc-body">' +
    '<div class="modulex-img">' +
    '<img src="/page/' + page["id"] + '/{{img}}?v={{random}}" width="100%" alt="{{name}}" loading="lazy" />' +
    "</div>" +
    "{{desc}}" +
    "</div>";
  html = html.replace(new RegExp("{{descimg}}", "g"), descimg);

  var desc = "";
  if (page["desc"] && typeof page["desc"] === "object") {
    for (var key in page["desc"]) {
      var descVal = pd2Lang(page["desc"][key]);
      if (descVal !== "") {
        desc += "<div>" + descVal + "</div>";
      }
    }
  }
  if (desc !== "") {
    desc = '<div class="modulex-desc-menu">' + desc + "</div>";
  }
  html = html.replace(new RegExp("{{desc}}", "g"), desc);
} else {
  html = html.replace(new RegExp("{{descimg}}", "g"), "");
  html = html.replace(new RegExp("{{desc}}", "g"), "");
}

/* Kategori sayfa listesi */
var pagelist = "";
if (json.desing && json.desing.category && webmakerdata[json.desing.category] && Array.isArray(webmakerdata[json.desing.category].data)) {
  for (var iterator of webmakerdata[json.desing.category].data) {
    var menuactive = "";
    if (iterator.path == page.path) {
      menuactive = 'class="active"';
    }
    pagelist += "<a " + menuactive + ' href="' + wxLangInternalHref(iterator.pathnext || iterator.path) + '" >' + pd2Lang(iterator.name) + "</a>";
  }
}
html = html.replace(new RegExp("{{pagelist}}", "g"), pagelist);
