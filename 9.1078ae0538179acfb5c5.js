(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{LXwD:function(n,t,e){"use strict";e.r(t),e.d(t,"DadesGeneralsPageModule",function(){return u});var o=e("ofXK"),s=e("3Pt+"),c=e("TEn/"),a=e("tyNb"),i=e("fXoL"),r=e("l0mX");function b(n,t){if(1&n&&(i.Mb(0,"ion-card"),i.Mb(1,"ion-card-header"),i.Mb(2,"ion-card-title",1),i.cc(3),i.Lb(),i.Kb(4,"br"),i.Mb(5,"ion-card-subtitle"),i.cc(6),i.Lb(),i.Mb(7,"ion-card-subtitle"),i.cc(8),i.Lb(),i.Lb(),i.Lb()),2&n){const n=t.$implicit;i.zb(3),i.dc(n.data),i.zb(3),i.ec("Casos confirmats: ",n.total_de_casos_confirmats,""),i.zb(2),i.ec("Defuncions totals: ",n.total_de_defuncions,"")}}const d=[{path:"",component:(()=>{class n{constructor(n){this.api=n}ngOnInit(){this.loadDades()}loadDades(){this.api.getdadesGenerals().subscribe(n=>{this.dades=n,console.log(this.dades)})}}return n.\u0275fac=function(t){return new(t||n)(i.Jb(r.a))},n.\u0275cmp=i.Db({type:n,selectors:[["app-dades-generals"]],decls:6,vars:1,consts:[[4,"ngFor","ngForOf"],[2,"color","rgb(42, 141, 255)"]],template:function(n,t){1&n&&(i.Mb(0,"ion-header"),i.Mb(1,"ion-toolbar"),i.Mb(2,"ion-title"),i.cc(3,"dades Generals"),i.Lb(),i.Lb(),i.Lb(),i.Mb(4,"ion-content"),i.bc(5,b,9,3,"ion-card",0),i.Lb()),2&n&&(i.zb(5),i.Xb("ngForOf",t.dades))},directives:[c.h,c.t,c.s,c.g,o.h,c.c,c.d,c.f,c.e],styles:[""]}),n})()}];let l=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.Hb({type:n}),n.\u0275inj=i.Gb({imports:[[a.j.forChild(d)],a.j]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.Hb({type:n}),n.\u0275inj=i.Gb({imports:[[o.b,s.a,c.u,l]]}),n})()}}]);