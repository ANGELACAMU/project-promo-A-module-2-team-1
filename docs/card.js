import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                    */const t=new URLSearchParams(window.location.search),o=t.get("id"),c=document.querySelector(".js-preview"),n=document.querySelector(".js-creature"),a=document.querySelector(".js-skill"),l=document.querySelector(".js-class"),i=document.querySelector(".container-preview"),s=document.querySelector(".js__profile-image"),d=document.querySelector(".js-special");fetch(`https://dev.adalab.es/api/info/${o}`).then(r=>r.json()).then(r=>{console.log(r);const e=r.data;c.innerHTML=e.field2,n.innerHTML=e.field4,a.innerHTML=e.field3,d.innerHTML=e.field1,l.innerHTML=e.field6,i.classList.add(`palette-preview-${e.field5}`),s.style.backgroundImage=`url(${e.photo})`});
//# sourceMappingURL=card.js.map