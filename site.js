const nav=document.getElementById('nav'),links=document.getElementById('links');
const solid=()=>nav.classList.toggle('solid',scrollY>60||nav.hasAttribute('data-solid'));
addEventListener('scroll',solid);solid();
document.getElementById('burger').onclick=()=>links.classList.toggle('open');
links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
function watchReveal(){document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el))}
