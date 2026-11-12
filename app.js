// Rutas CDMX — versión estática para celu. Sin servidor, sin claves.
// Mapa: Leaflet + OpenStreetMap. Lugares: Nominatim (gratis, sin clave).
// Caminata: OSRM público (router.project-osrm.org). Si no hay internet, el catálogo sí abre.
let map, userMarker, routeLine, myPos=null, currentRoute=null;
const $=id=>document.getElementById(id);
const store={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};

function initMap(){map=L.map('map').setView([19.357, -99.09],12);L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);}
function renderCatalog(f=''){const q=f.toLowerCase();$('catalog').innerHTML=ROUTES.filter(r=>!q||(r.net+r.name+r.from+r.to+r.stops.join(' ')).toLowerCase().includes(q)).map(r=>`<div class="route"><b>${r.net} ${r.name}</b> · <span class="price">$${r.price}</span><br>${r.from} → ${r.to}<br><span class="small">${r.hours} · ${r.stops.join(' · ')}</span><br><span class="small">Fuente: ${r.src}${r.note?' · '+r.note:''}</span></div>`).join('')||'No hay ruta con ese nombre. Agrégala en Comunidad.';}
function renderAlerts(){$('alerts').innerHTML=ALERTS.map(a=>`<div class="route"><b>${a.title}</b><br>${a.summary}<br><span class="small">${a.place} · ${a.date} · ${a.src}</span><br><a href="${a.url}" target="_blank" rel="noopener">Ver fuente ↗</a></div>`).join('');}
function renderSaved(){const h=store.get('casa',''),w=store.get('trabajo','');$('savedPlaces').textContent=`Casa: ${h||'sin guardar'} · Trabajo: ${w||'sin guardar'}`;}
function savePlace(k){const v=$(k==='casa'?'homeInput':'workInput').value.trim();if(!v)return alert('Escribe la calle y número');store.set(k,v);renderSaved();alert(k+' guardado en tu celu');}
async function geocode(text){const r=await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=mx&viewbox=-99.36,19.59,-98.94,19.05&bounded=1&q='+encodeURIComponent(text+', Ciudad de México'),{headers:{'Accept':'application/json'}});const j=await r.json();return j[0]?{lat:+j[0].lat,lon:+j[0].lon,label:j[0].display_name,open:j[0].extratags&&j[0].extratags.opening_hours||null}:null;}
async function walkLine(a,b){try{const r=await fetch(`https://router.project-osrm.org/route/v1/foot/${a.lon},${a.lat};${b.lon},${b.lat}?overview=full&geometries=geojson`);const j=await r.json();return j.routes[0]?{coords:j.routes[0].geometry.coordinates.map(c=>[c[1],c[0]]),m:Math.round(j.routes[0].distance),min:Math.round(j.routes[0].duration/60)}:null;}catch(e){return null;}}
function findRoutes(text){const q=text.toLowerCase();return ROUTES.filter(r=>(r.from+r.to+r.stops.join(' ')+r.name+r.net).toLowerCase().includes(q));}
async function search(){
 const from=$('from').value.trim(),to=$('to').value.trim();if(!to)return alert('Escribe a dónde vas');
 let dest=await geocode(to).catch(()=>null);
 let routes=findRoutes(to);
 $('results').innerHTML = routes.length? routes.map(r=>`<div class="route"><b>${r.net} ${r.name}</b> · <span class="price">$${r.price}</span><br>${r.from} → ${r.to}<br><button onclick="startTrip('${r.id}')">Iniciar viaje</button></div>`).join('') : `<p>No hay ruta directa en el catálogo para “${to}”. ${dest?'Te ubico el lugar en el mapa, busca la estación cercana.':'Escribe la estación o calle cercana.'}</p>`;
 $('placeResult').innerHTML = dest?`<p>📍 ${dest.label}${dest.open?'<br>Horario: '+dest.open:''}</p>`:'<p class="small">No ubiqué ese lugar exacto en Nominatim. Prueba con calle y número + colonia.</p>';
 if(dest&&map){map.setView([dest.lat,dest.lon],15);L.marker([dest.lat,dest.lon]).addTo(map).bindPopup(dest.label).openPopup();currentRoute={dest};}
}
function startTrip(id){
 const r=ROUTES.find(x=>x.id===id)||currentRoute&&ROUTES[0];if(!r)return alert('Primero busca una ruta');
 currentRoute=r;
 $('trip').innerHTML=`<div class="step"><b>1. Camina</b> a ${r.from} (sigue el triángulo azul en el mapa)</div><div class="step"><b>2. Aborda ${r.net} ${r.name}</b> dirección ${r.to} · $${r.price}</div><div class="step"><b>3. Paradas:</b> ${r.stops.join(' → ')}</div><div class="step"><b>4. Bájate en ${r.to}</b> · ¡Llegaste! El mapa se quita al llegar.</div>`;
 if(myPos&&map){map.setView([myPos.lat,myPos.lon],15);}
}
$('searchBtn').onclick=search;$('startTrip').onclick=()=>startTrip(currentRoute&&currentRoute.id);
$('filter').oninput=e=>renderCatalog(e.target.value);
$('gpsBtn').onclick=()=>{if(!navigator.geolocation)return alert('Tu navegador no da GPS');navigator.geolocation.watchPosition(p=>{myPos={lat:p.coords.latitude,lon:p.coords.longitude};if(map){if(!userMarker){userMarker=L.marker([myPos.lat,myPos.lon],{icon:L.divIcon({html:'<div style="font-size:28px">🔺</div>',className:'',iconSize:[28,28]})}).addTo(map);}else userMarker.setLatLng([myPos.lat,myPos.lon]);map.setView([myPos.lat,myPos.lon],15);}$('mapNote').textContent='Tu ubicación (triángulo azul) está activa.';},e=>alert('Activa el GPS / permiso de ubicación'),{enableHighAccuracy:true});};
$('askBtn').onclick=async()=>{
 const q=$('q').value.trim().toLowerCase();if(!q)return;
 const r=ROUTES.find(x=>q.includes(x.name.toLowerCase())||q.includes(x.from.toLowerCase())||q.includes(x.to.toLowerCase()));
 if(r){$('answer').innerHTML=`<p>Hola, claro: <b>${r.net} ${r.name}</b> cuesta <b>$${r.price}</b>, va de ${r.from} a ${r.to}, ${r.hours}. ¿Te armo el viaje paso a paso?</p>`;return;}
 const place=await geocode($('q').value).catch(()=>null);
 $('answer').innerHTML=place?`<p>Ubiqué: ${place.label}${place.open?'<br>Horario: '+place.open:''}</p>`:`<p>No tengo ese dato en el catálogo ni lo ubiqué en el mapa, no te quiero inventar nada. Prueba con la estación o calle cercana.</p>`;
};
$('aiBall').onclick=()=>{document.querySelector('section:nth-child(1)').scrollIntoView();$('q').focus();};
function addCommunity(){const n=$('comName').value.trim(),d=$('comDetail').value.trim();if(!n)return alert('Escribe la ruta');const list=store.get('community',[]);list.push({n,d});store.set('community',list);renderCommunity();}
function renderCommunity(){$('community').innerHTML=store.get('community',[]).map(c=>`<div class="route"><b>${c.n}</b><br>${c.d||''}</div>`).join('');}
initMap();renderCatalog();renderAlerts();renderSaved();renderCommunity();
