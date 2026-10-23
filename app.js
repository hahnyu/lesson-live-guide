(function(){
  const secs=[...document.querySelectorAll('main section')];
  const toc=document.getElementById('toc');
  const links=[...toc.querySelectorAll('a')];
  document.getElementById('menu').onclick=()=>toc.classList.toggle('open');
  toc.addEventListener('click',e=>{if(e.target.closest('a'))toc.classList.remove('open')});
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-20% 0px -70% 0px'});
  secs.forEach(s=>io.observe(s));
  const q=document.getElementById('q');
  const store=secs.map(s=>({el:s,txt:s.innerText.toLowerCase(),html:s.innerHTML}));
  q.addEventListener('input',()=>{
    const v=q.value.trim().toLowerCase();let n=0;
    store.forEach(o=>{const hit=!v||o.txt.includes(v);o.el.classList.toggle('hide',!hit);if(hit)n++});
    links.forEach(l=>{const o=store.find(x=>'#'+x.el.id===l.getAttribute('href'));l.classList.toggle('hide',!!o&&o.el.classList.contains('hide'))});
    document.getElementById('none').style.display=n?'none':'block';
  });
})();
