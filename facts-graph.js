/* Тот же каталог декомпозиции; отдельная графовая проекция без изменения правил. */
(() => {
  'use strict';
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const style = document.createElement('style');
  style.textContent = `.fg-canvas{height:65vh;min-height:400px;border:1px solid var(--line);border-radius:12px;background:var(--panel);overflow:hidden}.fg-canvas svg{width:100%;height:100%;touch-action:none}.fg-info{padding:12px 0;line-height:1.5;min-height:64px}.fg-canvas .fg-node{cursor:pointer}.fg-canvas .fg-node:focus rect{stroke-width:4}.fg-tools{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0}`;
  document.head.appendChild(style);
  window.renderFactsGraph = (root, nodes, query, selected) => {
    const groups = window.IFC_FACT_GROUPS.filter(g => g.title !== 'Результаты частных правил');
    const q = query.trim().toLowerCase();
    const visible = nodes.filter(n => !q || [n.id,n.n,n.d,...groups.filter(g=>g.checks.includes(n.id)).map(g=>g.title)].join(' ').toLowerCase().includes(q));
    const summaryIds = new Set(['IFC-21','IFC-44']);
    const rules = visible.filter(n=>!summaryIds.has(n.id));
    const summaries = visible.filter(n=>summaryIds.has(n.id));
    const used = groups.filter(g=>rules.some(n=>g.checks.includes(n.id)));
    root.innerHTML = `<h2>Данные → нормы · граф</h2><p class="fact-note">Общие факты → частные правила → сводные результаты. Это проект декомпозиции, не порядок исполнения и не новая нормативная редакция. Своды вынесены отдельно: их вход — результаты правил, а не натуральные показатели.</p><div class="fg-tools"><button class="btn" data-action="overview">Весь граф</button><button class="btn" data-action="read">Читаемый масштаб</button><button class="btn" data-action="plus">＋</button><button class="btn" data-action="minus">−</button><button class="btn" data-action="reset">Снять выделение</button><button class="btn" data-action="export">Скачать граф SVG</button></div><p class="fact-note">Перетаскивайте поле, масштабируйте колесом. Нажмите узел — подсветятся его прямые связи. Tab и Enter также работают. ${visible.length} проверок · ${used.length} блоков данных. Пунктир: предлагаемые связи данных; сплошные линии: своды из текущего каталога.</p><div class="fg-canvas"><svg role="img" aria-label="Граф общих данных и нормативных проверок"></svg></div><div class="fg-info" aria-live="polite">Выберите узел для описания и списка связей.</div>`;
    const color = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    const ink=color('--ink'), muted=color('--muted'), accent=color('--accent'), panel=color('--panel'), line=color('--line');
    const svg=d3.select(root.querySelector('svg'));
    const layer=svg.append('g');
    const height=Math.max(500,rules.length*66+100), width=summaries.length?1180:820;
    const graphNodes=[...used.map((g,i)=>({id:'data:'+g.id,title:g.title,description:g.description,x:20,y:80+i*(height-150)/Math.max(1,used.length-1),kind:'data'})),...rules.map((n,i)=>({id:n.id,title:n.label+' · '+n.n,description:n.d||n.n,x:480,y:80+i*66,kind:'rule'})),...summaries.map((n,i)=>({id:n.id,title:n.label+' · '+n.n,description:n.d||n.n,x:920,y:130+i*220,kind:'summary'}))];
    const byId=new Map(graphNodes.map(n=>[n.id,n]));
    const edges=used.flatMap(g=>rules.filter(n=>g.checks.includes(n.id)).map(n=>({from:'data:'+g.id,to:n.id,kind:'data'})));
    window.IFC_GRAPH.edges.filter(e=>e.k==='agg'&&byId.has(e.from)&&summaries.some(n=>n.id===e.to)).forEach(e=>edges.push({...e,kind:'agg'}));
    svg.append('defs').append('marker').attr('id','fg-arrow').attr('viewBox','0 -5 10 10').attr('refX',9).attr('refY',0).attr('markerWidth',6).attr('markerHeight',6).attr('orient','auto').append('path').attr('d','M0,-5L10,0L0,5').attr('fill',accent);
    const links=layer.append('g').selectAll('path').data(edges).join('path').attr('d',e=>{const a=byId.get(e.from),b=byId.get(e.to),x=a.x+240,y=a.y+24,tx=b.x,ty=b.y+24;return `M${x},${y}C${(x+tx)/2},${y} ${(x+tx)/2},${ty} ${tx},${ty}`;}).attr('fill','none').attr('stroke',accent).attr('stroke-width',1.2).attr('stroke-opacity',.23).attr('stroke-dasharray',e=>e.kind==='data'?'5 4':null).attr('marker-end','url(#fg-arrow)');
    const cards=layer.append('g').selectAll('g').data(graphNodes).join('g').attr('class','fg-node').attr('transform',n=>`translate(${n.x},${n.y})`).attr('tabindex',0).attr('role','button').attr('aria-label',n=>n.title);
    cards.append('rect').attr('width',240).attr('height',48).attr('rx',8).attr('fill',panel).attr('stroke',n=>n.kind==='data'?accent:line).attr('stroke-width',1.5);
    cards.append('title').text(n=>n.title+'\n'+n.description);
    cards.each(function(n){const text=d3.select(this).append('text').attr('x',10).attr('y',19).attr('fill',ink).attr('font-size',11).attr('font-family','Segoe UI, sans-serif'); const words=n.title.split(' ');let rows=[''];for(const w of words){if((rows[rows.length-1]+' '+w).length>34)rows.push(w);else rows[rows.length-1]+=(rows[rows.length-1]?' ':'')+w;}rows.slice(0,2).forEach((r,i)=>text.append('tspan').attr('x',10).attr('dy',i?16:0).text(r+(i===1&&rows.length>2?'…':'')));});
    layer.selectAll('.fg-heading').data([{x:20,t:'1 · Общие данные'},{x:480,t:'2 · Нормативные правила'},...(summaries.length?[{x:920,t:'Сводные результаты'}]:[])]).join('text').attr('x',d=>d.x).attr('y',35).attr('fill',muted).attr('font-size',16).attr('font-family','Segoe UI, sans-serif').text(d=>d.t);
    let focus=null;
    function highlight(id){focus=id;const related=new Set([id]);edges.forEach(e=>{if(e.from===id||e.to===id){related.add(e.from);related.add(e.to);}});cards.attr('opacity',n=>!id||related.has(n.id)?1:.18).attr('aria-pressed',n=>n.id===id?'true':'false');links.attr('stroke-opacity',e=>!id?.23:e.from===id||e.to===id?.9:.035).attr('stroke-width',e=>id&&(e.from===id||e.to===id)?2.5:1.2);const n=byId.get(id);root.querySelector('.fg-info').innerHTML=n?`<strong>${esc(n.title)}</strong><br>${esc(n.description)}<br><span class="fact-note">Прямые связи: ${[...related].filter(k=>k!==id).map(k=>esc(byId.get(k).title)).join('; ')||'нет в текущей выборке'}. Ошибка извлечения данных не равна нарушению нормы.</span>`:'Выберите узел для описания и списка связей.';}
    cards.on('click',(e,n)=>highlight(focus===n.id?null:n.id)).on('keydown',(e,n)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();highlight(focus===n.id?null:n.id);}});
    const zoom=d3.zoom().scaleExtent([.08,3]).on('zoom',e=>layer.attr('transform',e.transform));svg.call(zoom).on('dblclick.zoom',null);
    const fit=()=>{const box=root.querySelector('.fg-canvas').getBoundingClientRect();const k=Math.min((box.width-30)/width,(box.height-30)/height);svg.call(zoom.transform,d3.zoomIdentity.translate(12,12).scale(k));};
    const actions={overview:fit,read:()=>svg.call(zoom.transform,d3.zoomIdentity.translate(12,12).scale(.9)),plus:()=>svg.call(zoom.scaleBy,1.3),minus:()=>svg.call(zoom.scaleBy,1/1.3),reset:()=>highlight(null),export:()=>{const clone=svg.node().cloneNode(true);clone.setAttribute('xmlns','http://www.w3.org/2000/svg');clone.setAttribute('viewBox',`0 0 ${width} ${height}`);clone.setAttribute('width',width);clone.setAttribute('height',height);clone.querySelector('g').removeAttribute('transform');const url=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(clone)],{type:'image/svg+xml'}));const a=document.createElement('a');a.href=url;a.download='IFC-данные-нормы-граф.svg';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}};
    root.querySelectorAll('[data-action]').forEach(b=>b.onclick=actions[b.dataset.action]);
    if(!visible.length)root.querySelector('.fg-info').textContent='Нет проверок по выбранным фильтрам.';
    if(selected&&byId.has(selected))highlight(selected);
    // Начальный масштаб сохраняет читаемость; обзор всей структуры доступен отдельно.
    const box = root.querySelector('.fg-canvas').getBoundingClientRect();
    svg.call(zoom.transform,d3.zoomIdentity.translate(12,12).scale(Math.min(1,(box.width-30)/width)));
  };
})();
