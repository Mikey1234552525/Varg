// Service worker : réseau d'abord, pour que les mises à jour du site s'affichent toujours
const C='varg-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(
  fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r})
  .catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html')))
 );
});
