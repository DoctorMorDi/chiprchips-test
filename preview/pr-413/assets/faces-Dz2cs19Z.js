function e(e,t,n){let r=document.createElement(`div`);return r.className=t,r.setAttribute(`role`,`img`),r.setAttribute(`aria-label`,n),r.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-hidden="true">${e}</svg>`,r}var t=`
  <path d="M40 40 h110 a24 24 0 0 1 24 24 v50 a24 24 0 0 1 -24 24 h-62 l-26 22 v-22 h-22 a24 24 0 0 1 -24 -24 v-50 a24 24 0 0 1 24 -24 z" />`;function n(n=`kAI`){return e(`<g class="ki-kai-shadow" transform="translate(10 12) rotate(-8 100 100)">${t}</g>
     <g class="ki-kai-body" transform="rotate(-8 100 100)">
       ${t}
       <circle class="ki-eye" cx="78" cy="88" r="9" />
       <circle class="ki-eye" cx="124" cy="88" r="9" />
       <rect class="ki-plug" x="54" y="160" width="26" height="20" rx="3" />
       <rect class="ki-plug-pin" x="59" y="166" width="5" height="5" />
       <rect class="ki-plug-pin" x="70" y="166" width="5" height="5" />
     </g>`,`ki-figure ki-kai`,n)}function r(t=`KIm`){return e(`<circle class="ki-kim-ring-track" cx="100" cy="100" r="86" />
     <circle class="ki-kim-ring" cx="100" cy="100" r="86" pathLength="100" />
     <circle class="ki-kim-body" cx="100" cy="100" r="70" />
     <path class="ki-kim-lid" d="M62 98 q14 -10 28 0" />
     <path class="ki-kim-lid" d="M110 98 q14 -10 28 0" />
     <circle class="ki-eye ki-kim-eye" cx="76" cy="104" r="5" />
     <circle class="ki-eye ki-kim-eye" cx="124" cy="104" r="5" />`,`ki-figure ki-kim`,t)}export{r as n,n as t};