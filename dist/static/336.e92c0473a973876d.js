"use strict";(self.webpackChunkluna=self.webpackChunkluna||[]).push([[336],{336:(p,g,o)=>{o.r(g),o.d(g,{HomePageModule:()=>A});var n=o(6019),s=o(5903);const c=[{imgPath:"/assets/images/home-page/m1.jpg",title:"La couture",text:"Suspendisse ante ante, convallis ac mattis quis, feugiat vitae orci. Cras a malesuada ante, sit amet hendrerit elit. Fusce congue dignissim massa id egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vulputate vehicula laoreet. Integer accumsan augue sed est mattis, in fermentum sapien fermentum. Vestibulum quis purus tortor. Sed facilisis."},{imgPath:"/assets/images/home-page/m3.jpg",title:"La couture",text:"Suspendisse ante ante, convallis ac mattis quis, feugiat vitae orci. Cras a malesuada ante, sit amet hendrerit elit. Fusce congue dignissim massa id egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vulputate vehicula laoreet. Integer accumsan augue sed est mattis, in fermentum sapien fermentum. Vestibulum quis purus tortor. Sed facilisis."}];var r=o(4685),t=o(2383);let l=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["luna-creator-card"]],inputs:{creatorCard:"creatorCard"},decls:2,vars:1,consts:[[1,"card-wrapper"],["id","creatorHighlight","alt","Creator Highlight",3,"src"]],template:function(a,d){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.qZA()),2&a&&(t.xp6(1),t.Q6J("src",d.creatorCard.imgPath,t.LSH))},styles:['[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;overflow:hidden;flex:1;cursor:pointer;width:100%;height:100%}[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]:before{content:"";pointer-events:none;position:absolute;top:0;left:0;background-color:#fdf4eb33;width:100%;height:100%;transform:scale(0);transform-origin:50% 50%;transition:.1s transform}[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]:hover:before{transform:scale(1)}[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:calc(100% - 32px);object-fit:cover}']}),e})();function u(e,i){if(1&e&&(t.ynx(0),t._UZ(1,"luna-creator-card",1),t.BQk()),2&e){const a=i.$implicit;t.xp6(1),t.Q6J("creatorCard",a)("routerLink",a.path)}}let C=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["luna-card-group"]],inputs:{creatorCards:"creatorCards"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"card",3,"creatorCard","routerLink"]],template:function(a,d){1&a&&t.YNc(0,u,2,2,"ng-container",0),2&a&&t.Q6J("ngForOf",d.creatorCards)},directives:[n.sg,l,s.rH],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;overflow-y:hidden;overflow-x:auto;scroll-behavior:smooth;grid-gap:16px;gap:16px}"]}),e})();var _=o(7120),f=o(7282);const h=function(e){return[e]};function P(e,i){if(1&e){const a=t.EpF();t.ynx(0),t.TgZ(1,"luna-content-card",2),t.NdJ("onScrollActivate",function(){const b=t.CHM(a).index;return t.oxw().activateCard(b)}),t.qZA(),t.BQk()}if(2&e){const a=i.$implicit,d=i.index,m=t.oxw();t.xp6(1),t.ekj("active",m.activated[d]),t.Q6J("card",a)("ngClass",t.VKq(4,h,d%2==0?"even":"odd"))}}let M=(()=>{class e{constructor(a){this.cdr=a,this.activated=[]}ngOnChanges(){this.activated=new Array(this.cards.length).fill(!1)}activateCard(a){setTimeout(()=>{this.activated[a]=!0,this.cdr.detectChanges()},300)}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["luna-content-card-group"]],inputs:{cards:"cards"},features:[t.TTD],decls:2,vars:1,consts:[[1,"card-group-wrapper"],[4,"ngFor","ngForOf"],[3,"card","ngClass","onScrollActivate"]],template:function(a,d){1&a&&(t.TgZ(0,"div",0),t.YNc(1,P,2,6,"ng-container",1),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngForOf",d.cards))},directives:[n.sg,_.$,n.mk,f.m],styles:["[_nghost-%COMP%]   .card-group-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;grid-gap:32px;gap:32px}[_nghost-%COMP%]   .card-group-wrapper[_ngcontent-%COMP%]   luna-content-card[_ngcontent-%COMP%]{width:100%}"]}),e})();var O=o(9675);const v=[{path:"",component:(()=>{class e{constructor(){this.creatorCards=r.I,this.contentCards=c}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["luna-home-page"]],decls:19,vars:2,consts:[[1,"top-area"],[1,"main-background"],[1,"area-content"],["src","/assets/images/logo.png","alt","logo",1,"logo"],[1,"menu"],["routerLink","/about"],["routerLink","/contact"],[1,"main-area"],[1,"creator-cards-title"],[3,"creatorCards"],[3,"cards"]],template:function(a,d){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"nav",4),t.TgZ(5,"ul"),t.TgZ(6,"li"),t._uU(7,"Haljine"),t.qZA(),t.TgZ(8,"li",5),t._uU(9,"O Nama"),t.qZA(),t.TgZ(10,"li",6),t._uU(11,"Kontakt"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",7),t.TgZ(13,"div",8),t.TgZ(14,"h2"),t._uU(15,"Odaberite brend koji bas vama odgovara"),t.qZA(),t.qZA(),t._UZ(16,"luna-card-group",9),t._UZ(17,"luna-content-card-group",10),t.qZA(),t._UZ(18,"luna-page-footer")),2&a&&(t.xp6(16),t.Q6J("creatorCards",d.creatorCards),t.xp6(1),t.Q6J("cards",d.contentCards))},directives:[s.rH,C,M,O.U],styles:['[_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .creator-cards-title[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-family:"NotoSans";font-size:56px;color:#322}[_nghost-%COMP%]{width:100%;background-color:#fffaf6;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]   .top-area[_ngcontent-%COMP%]{display:flex;justify-content:center;position:relative;height:500px;min-height:500px;max-height:500px}[_nghost-%COMP%]   .top-area[_ngcontent-%COMP%]   .main-background[_ngcontent-%COMP%]{width:100%;height:100%;z-index:0;background-image:url(/assets/images/home-page/main-image.jpg);background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;filter:sepia(.2) brightness(.8) contrast(.9)}[_nghost-%COMP%]   .top-area[_ngcontent-%COMP%]   .area-content[_ngcontent-%COMP%]{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;justify-content:center}[_nghost-%COMP%]   .top-area[_ngcontent-%COMP%]   .area-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{transform:scale(.6);filter:invert(1) drop-shadow(2px 2px 6px #222)}[_nghost-%COMP%]   .top-area[_ngcontent-%COMP%]   .area-content[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{margin-top:32px}[_nghost-%COMP%]   .top-area[_ngcontent-%COMP%]   .area-content[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;list-style-type:none;padding-left:0;grid-gap:32px;gap:32px}[_nghost-%COMP%]   .top-area[_ngcontent-%COMP%]   .area-content[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;font-size:24px;font-family:"NotoSans";color:#fffaf6}[_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;box-sizing:border-box;grid-gap:32px;gap:32px}[_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .creator-cards-title[_ngcontent-%COMP%]{display:flex;align-self:center}[_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .creator-cards-title[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-size:32px}[_nghost-%COMP%]   luna-page-footer[_ngcontent-%COMP%]{padding-top:32px}[_nghost-%COMP%]     luna-content-card:first-of-type .card-wrapper{background-position-y:-200px}']}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(v)],s.Bz]}),e})();var y=o(2542),w=o(6508),Z=o(78);let A=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[n.ez,x,y.y,w.Z,Z.o]]}),e})()},4685:(p,g,o)=>{o.d(g,{I:()=>n});const n=[{imgPath:"assets/images/la-sposa/logo.svg",title:"La Sposa",path:"/la-sposa"},{imgPath:"assets/images/nicole-couture/logo.png",title:"Nicole Couture",path:"/nicole-couture"},{imgPath:"assets/images/st-patrick/logo.png",title:"St. Patrick",path:"/st-patrick"}]},7120:(p,g,o)=>{o.d(g,{$:()=>s});var n=o(2383);let s=(()=>{class c{}return c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["luna-content-card"]],inputs:{card:"card"},decls:6,vars:4,consts:[[1,"card-wrapper"],[1,"text-content"],[1,"card-title"]],template:function(t,l){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"p"),n._uU(3),n.qZA(),n.qZA(),n.TgZ(4,"div",2),n._uU(5),n.qZA(),n.qZA()),2&t&&(n.Udp("background-image","url("+(null==l.card?null:l.card.imgPath)+")"),n.xp6(3),n.Oqu(null==l.card?null:l.card.text),n.xp6(2),n.Oqu(null==l.card?null:l.card.title))},styles:['[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{font-family:"SortsMillGoudy";font-size:24px;color:#181818;text-align:justify}[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]{width:100%;position:relative;min-height:400px;background-attachment:fixed;background-repeat:no-repeat;background-size:cover;transition:.5s background-position-x;display:flex}[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{z-index:1;width:300px;min-height:400px;position:relative;padding:16px 32px;box-sizing:border-box;background-color:#fffaf6cc;display:flex;flex-direction:column}@media screen and (max-width: 960px){[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{position:initial;top:initial;left:initial;right:initial;padding:16px}}[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px}[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-top:64px;font-size:128px;font-family:"NotoSans";color:#fff;transition:.3s transform linear .2s;transform-origin:100% 50%}.even[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]{background-position-x:-100vw;justify-content:flex-start}.even[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]:after{content:"";position:absolute;right:-64px;top:0;height:100%;width:64px;background:linear-gradient(90deg,rgba(255,250,246,.8),transparent)}.even[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-left:auto;transform:translate(calc(100% + 64px))}.odd[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]{flex-direction:row-reverse;justify-content:flex-end;background-position-x:100vw}.odd[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]:after{content:"";position:absolute;left:-64px;top:0;height:100%;width:64px;background:linear-gradient(90deg,transparent,rgba(255,250,246,.8))}.odd[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-left:64px;margin-right:auto;transform:translate(calc(-100% - 64px))}.active[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]{background-position-x:initial}.active[_nghost-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-right:64px;margin-left:auto;transform:translate(0)!important}'],changeDetection:0}),c})()},78:(p,g,o)=>{o.d(g,{o:()=>c});var n=o(6019),s=o(2383);let c=(()=>{class r{}return r.\u0275fac=function(l){return new(l||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[n.ez]]}),r})()},9675:(p,g,o)=>{o.d(g,{U:()=>s});var n=o(2383);let s=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["luna-page-footer"]],decls:10,vars:0,consts:[[1,"footer-wrapper"],[1,"footer-icons"],["href","https://www.facebook.com/vencanice.studio.luna","target","_blank"],["src","/assets/images/icons/facebook.png"],["href","https://www.instagram.com/vencanice_studioluna/","target","_blank"],["src","/assets/images/icons/instagram.png"],["href","tel:+381600770634","target","_blank"],["src","/assets/images/icons/phone.svg"],[1,"luna-title"]],template:function(t,l){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"a",2),n._UZ(3,"img",3),n.qZA(),n.TgZ(4,"a",4),n._UZ(5,"img",5),n.qZA(),n.TgZ(6,"a",6),n._UZ(7,"img",7),n.qZA(),n.qZA(),n.TgZ(8,"div",8),n._uU(9," Studio Luna 2022 "),n.qZA(),n.qZA())},styles:['[_nghost-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]{height:80px;display:flex;flex-direction:column;align-items:center;grid-gap:16px;gap:16px;padding-bottom:16px}[_nghost-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]{width:100%;height:50%;display:flex;justify-content:center;grid-gap:16px;gap:16px}[_nghost-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]   .footer-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]   .luna-title[_ngcontent-%COMP%]{font-family:"NotoSans"}'],changeDetection:0}),c})()},2542:(p,g,o)=>{o.d(g,{y:()=>c});var n=o(6019),s=o(2383);let c=(()=>{class r{}return r.\u0275fac=function(l){return new(l||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[n.ez]]}),r})()},6508:(p,g,o)=>{o.d(g,{Z:()=>c});var n=o(6019),s=o(2383);let c=(()=>{class r{}return r.\u0275fac=function(l){return new(l||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({providers:[],imports:[[n.ez]]}),r})()},7282:(p,g,o)=>{o.d(g,{m:()=>s});var n=o(2383);let s=(()=>{class c{constructor(t){this.elemRef=t,this.elementScrolled=new n.vpe}ngAfterViewInit(){var t;this.scrollWatcher=new IntersectionObserver(l=>{var u;!this.checkIfIntersecting(null==l?void 0:l[0])||(this.elementScrolled.emit(),null===(u=this.scrollWatcher)||void 0===u||u.unobserve(this.elemRef.nativeElement),this.scrollWatcher=null)}),null===(t=this.scrollWatcher)||void 0===t||t.observe(this.elemRef.nativeElement)}ngOnDestroy(){var t;null===(t=this.scrollWatcher)||void 0===t||t.unobserve(this.elemRef.nativeElement)}checkIfIntersecting(t){return console.log(window.scrollY+window.innerHeight,t),t.isIntersecting}}return c.\u0275fac=function(t){return new(t||c)(n.Y36(n.SBq))},c.\u0275dir=n.lG2({type:c,selectors:[["","onScrollActivate",""]],outputs:{elementScrolled:"onScrollActivate"}}),c})()}}]);