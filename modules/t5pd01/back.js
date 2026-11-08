// Metni satırlara ayırıyoruz
var lines = page["text"][json.lang].split("\n");
// HTML içeriğini oluşturacağımız diziyi başlatıyoruz
var htmlContent = [];
// Her satırı işliyoruz
lines.forEach(function(line, index) {
  htmlContent.push(`<p>${line}</p>`);
});
// Hizmetler listesini kapatıyoruz
var ulIndex = htmlContent.lastIndexOf("</li>");
if (ulIndex !== -1) {
  htmlContent.splice(ulIndex + 1, 0, "</ul>");
}
// HTML içeriğini birleştiriyoruz
var finalHtml = htmlContent.join("\n");
// Sonucu konsola yazdırıyoruz (gerçek uygulamada bu HTML'i DOM'a ekleyebilirsiniz)
if (page["text"] != undefined) {
  html = html.replace(new RegExp("{{text}}", "g"), finalHtml);
} else {
  html = html.replace(new RegExp("{{text}}", "g"), "");
}
if (page["img"] == undefined) {
  html = html.replace(new RegExp("{{img}}", "g"), "");
} else {
  html = html.replace(
    new RegExp("{{img}}", "g"),
    "/page/" + page["id"] + "/" + page["img"],
  );
}

if (page["img"] != undefined) {
  var descimg = `
  <div class="modulex-desc-body">
      <div class="modulex-img">
          <img src="{{img}}?v={{random}}" width="100%" alt="{{title}}" />
      </div>
      {{desc}}
  </div>`;

  html = html.replace(new RegExp("{{descimg}}", "g"), descimg);

  if (page["desc"] == undefined) {
    html = html.replace(new RegExp("{{desc}}", "g"), "");
  } else {
    var desc = "";
    for (var key in page["desc"]) {
      if (page["desc"][key] != "") {
        desc += `<div>${page["desc"][key]}</div>`;
      }
    }
    if (desc != "") {
      desc = `<div class="modulex-desc-menu">${desc}</div>`;
    }
    html = html.replace(new RegExp("{{desc}}", "g"), desc);
  }
} else {
  html = html.replace(new RegExp("{{descimg}}", "g"), "");
}

var pagelist = "";
for (var iterator of webmakerdata[json.desing.category].data) {
  menuactive = "";
  if (iterator.path == page.path) {
    menuactive = `class="active"`;
  }
  pagelist += `<a ${menuactive}  href="${wxLangInternalHref(iterator.path)}" >${((iterator.name && (iterator.name[json.lang] != null ? iterator.name[json.lang] : iterator.name.tr)) || "")}</a>`;
}
html = html.replace(new RegExp("{{pagelist}}", "g"), pagelist);
