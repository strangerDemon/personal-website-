define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/about-view.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/footer-view.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/header-view.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/pen.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/work-view.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {



var workDataLength = workDataJSON.length;
var workDataLengthStr;

for(var i in workDataJSON){
    var workData = workDataJSON[i];

    var id = workData.id;
    var title = workData.title;
    var thumbnailUrl = workData.thumbnail_url;

    var curWorkHeader = workDataLength;
    if(workDataLength < 10) workDataLengthStr = "0" + workDataLength;
    else                    workDataLengthStr = workDataLength;
    workDataLength--;
;
__p += '\r\n\r\n<div class="work-container" id="work-' +
((__t = ( id )) == null ? '' : __t) +
'" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\r\n    <div class="work-inside-container">\r\n        <div class="work">\r\n            <!--front-->\r\n            <div class="front">\r\n                <!--<div class="work" >-->\r\n\r\n                    <div class="work-image" ></div>\r\n                    <div class="triangle"></div>\r\n                    <div class="work-header">\r\n                        <span class="day">Day<br></span>\r\n                        <span class="number">' +
((__t = ( workDataLengthStr )) == null ? '' : __t) +
'</span>\r\n                    </div>\r\n                <!--</div>-->\r\n\r\n                <div class="wrap clearfix work-img-loader ';
 if(isMobile){;
__p += '\r\n                    click\r\n                ';
};
__p += ' ">\r\n                        <ul class="rotate_wrapper">\r\n                            <li class="rotate_item"><span></span></li>\r\n                            <li class="rotate_item delay1"><span></span></li>\r\n                            <li class="rotate_item delay2"><span></span></li>\r\n                            <li class="rotate_item delay3"><span></span></li>\r\n                            <li class="rotate_item delay4"><span></span></li>\r\n                        </ul>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class="back">\r\n                <div class="ks-back-title">\r\n                    ' +
((__t = ( title )) == null ? '' : __t) +
'\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n';

}
;
__p += '\r\n';

}
return __p
};

  return this["JST"];

});
