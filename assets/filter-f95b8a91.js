import{a as i,S as u}from"./vendor-4c1822c7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();class d{constructor(){const t=document.querySelectorAll(".js-object");for(let e=0;e<t.length;e++)"dataset"in t[e]&&"jsname"in t[e].dataset&&(this[t[e].dataset.jsname]=t[e])}refresh(){for(let e in this)e in this&&delete this[e];const t=document.querySelectorAll(".js-object");for(let e=0;e<t.length;e++)"dataset"in t[e]&&"jsname"in t[e].dataset&&(this[t[e].dataset.jsname]=t[e])}}const n={_filterID:"filter-food_boutique",_cartID:"cart-food_boutique",_save:function(t,e){try{const a=JSON.stringify(e);localStorage.setItem(t,a)}catch(a){throw a}},_load:function(t){try{const e=localStorage.getItem(t);return e===null?{}:JSON.parse(e)}catch(e){throw e}},_delete:function(t){try{localStorage.removeItem(t)}catch(e){throw e}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}},f=new d;console.log(f.batman);n.saveFilter({keyA:"A"});console.log("test: ",n.loadFilter());n.saveFilter({KeyB:"B"});console.log("test: ",n.loadFilter());const h={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await i.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await i.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await i.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await i.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(e){throw e}},products:async function(t={}){try{const e={params:t};return(await i.get(this._baseURL+this._productsURL,e)).data}catch(e){throw e}},subscribe:async function(t){try{const e={email:t};return await i.post(this._baseURL+this._subscriptionURL,e)}catch(e){throw e}},order:async function(t){try{return(await i.post(this._baseURL+this._orderURL,t)).data}catch(e){throw e}}},l=document.getElementById("category");console.log(l);h.categories().then(r=>{console.log(r),l.insertAdjacentHTML("beforeend",p(r)),new u({select:"#category",settings:{showSearch:!1,openPosition:"down"}})}).catch(r=>console.log(r));function p(r){return r.map(t=>`<option value="${t}">${t}</option>`).join("")}
//# sourceMappingURL=filter-f95b8a91.js.map