"use strict";(self.webpackChunkluna=self.webpackChunkluna||[]).push([[9],{6009:(x,i,c)=>{c.r(i),c.d(i,{ContactPageModule:()=>O});var s=c(6019),g=c(7741);const l="Beogradska 45/10, 11000 Beograd",p="060770634",r="vencanice_studioluna",d=[{value:p,label:"Telefon",iconPath:"/assets/icons/call_black_24dp.svg",href:"tel:"+p},{value:l,label:"Adresa",iconPath:"/assets/icons/location_on_black_24dp.svg",href:"https://goo.gl/maps/dM1xmXa2aoHVKoGR7"},{value:"@"+r,label:"Instagram",iconPath:"/assets/icons/instagram.svg",href:"https://www.instagram.com/"+r}];var n=c(3556),m=c(5427),f=c(7495);function C(t,e){if(1&t&&(n.ynx(0),n.TgZ(1,"div",3),n._UZ(2,"img",4),n.TgZ(3,"div",5),n._uU(4),n.qZA(),n.TgZ(5,"div",6),n._uU(6),n.qZA(),n.qZA(),n.BQk()),2&t){const o=e.$implicit;n.xp6(2),n.Q6J("src",o.iconPath,n.LSH)("alt",o.label+" icon"),n.xp6(2),n.Oqu(o.label),n.xp6(2),n.Oqu(o.value)}}let u=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["luna-contact-info"]],inputs:{contactInfoItems:"contactInfoItems"},decls:4,vars:1,consts:[[1,"contact-info"],[1,"title"],[4,"ngFor","ngForOf"],[1,"contact-info-item"],[1,"icon",3,"src","alt"],[1,"label"],[1,"value"]],template:function(o,a){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"h2",1),n._uU(2,"Kontakt"),n.qZA(),n.YNc(3,C,7,4,"ng-container",2),n.qZA()),2&o&&(n.xp6(3),n.Q6J("ngForOf",a.contactInfoItems))},directives:[s.sg],styles:['[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]{background-color:#fffaf6;font-family:"SortsMillGoudy";font-size:20px;border-radius:8px;padding:16px;box-sizing:border-box;display:flex;flex-direction:column;grid-gap:16px;gap:16px}@media screen and (max-width: 959px){[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:none}}@media screen and (min-width: 960px){[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]{box-shadow:1px 1px 5px #ccc,-1px -1px 5px #ccc;position:absolute;left:calc(50% - 400px);top:calc(50% - 200px);width:320px;height:400px;z-index:2}}[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]{display:flex;grid-gap:8px;gap:8px}@media screen and (min-width: 960px){[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-weight:600}}@media screen and (max-width: 959px){[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]{flex-direction:row;align-items:center}[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:none}}'],changeDetection:0}),t})();const P=[{path:"",component:(()=>{class t{constructor(o){this.domSanitizer=o,this.googleMapsKey="AIzaSyCKABfmlHXaYSU3mFv1CJcYsfdK2ht58A0",this.contactInfoItems=d}get mapSrc(){return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/place?key=${this.googleMapsKey}&q=${l}&zoom=19`)}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(m.H7))},t.\u0275cmp=n.Xpm({type:t,selectors:[["luna-contact-page"]],decls:6,vars:2,consts:[[1,"page"],[1,"page-header"],[1,"page-content"],[3,"contactInfoItems"],["width","600","height","450","allowfullscreen","","loading","lazy",1,"map",2,"border","0",3,"src"]],template:function(o,a){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n._UZ(2,"app-page-navbar"),n.qZA(),n.TgZ(3,"div",2),n._UZ(4,"luna-contact-info",3),n._UZ(5,"iframe",4),n.qZA(),n.qZA()),2&o&&(n.xp6(4),n.Q6J("contactInfoItems",a.contactInfoItems),n.xp6(1),n.Q6J("src",a.mapSrc,n.uOi))},directives:[f.b,u],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .page[_ngcontent-%COMP%]{min-height:100vh;height:100%;width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]{padding-bottom:16px;z-index:1}[_nghost-%COMP%]   .page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]{flex:1 1;position:relative;display:flex}@media screen and (max-width: 959px){[_nghost-%COMP%]   .page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]{flex-direction:column}}[_nghost-%COMP%]   .page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]{width:100%;background-color:#eee}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[g.Bz.forChild(P)],g.Bz]}),t})();var M=c(3371);let O=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.ez,h,M.F]]}),t})()}}]);