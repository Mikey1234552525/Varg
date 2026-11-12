document.documentElement.classList.add('js');
const $=id=>document.getElementById(id);
const root=document.documentElement;
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t}catch(e){}
if($('themeBtn'))$('themeBtn').onclick=()=>{
 const cur=root.dataset.theme||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');
 const nx=cur==='light'?'dark':'light';root.dataset.theme=nx;
 try{localStorage.setItem('theme',nx)}catch(e){}
};
for(let i=0;i<14;i++){
 const s=document.createElement('span');s.className='star';s.textContent='✦';
 s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;font-size:${10+Math.random()*16}px;animation-delay:${Math.random()*8}s`;
 document.body.appendChild(s);
}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
function reveal(){document.querySelectorAll('.card,.fav,.goals li').forEach(e=>{if(!e.classList.contains('reveal')){e.classList.add('reveal');io.observe(e)}})}
const up=document.createElement('button');
up.id='totop';up.textContent='↑';up.setAttribute('aria-label','Remonter en haut');
up.onclick=()=>scrollTo({top:0,behavior:'smooth'});
document.body.appendChild(up);
addEventListener('scroll',()=>up.classList.toggle('show',scrollY>300));
