document.documentElement.classList.add('js');
addEventListener('DOMContentLoaded',()=>{
  const h=document.querySelector('.site-header');
  const f=()=>h.classList.toggle('scrolled',scrollY>20);f();addEventListener('scroll',f,{passive:true});
  const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
});
