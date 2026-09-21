const groups=[
['Foundational Stories','Genesis',50],['Psalms & Prayer','Psalms',30],['Life of Jesus','John',21],
['Practical Christian Living','Galatians',6],['Practical Christian Living','Ephesians',6],['Practical Christian Living','Philippians',4],['Practical Christian Living','Colossians',4],['Practical Christian Living','James',5],['Practical Christian Living','Hebrews',13]
];

const studies={
'Genesis 1':{theme:'Selected places to pause in the opening chapter of Scripture.',key:'Genesis 1:1–3, 26–31',body:
'<h3>Bookmarks</h3>'+
'<div class="note"><strong>🔖 Genesis 1:1 — Start with God.</strong><p>Scripture does not begin by arguing its way toward God. It begins with Him: before the heavens and earth, God is. The first verse also establishes the basic distinction that runs through the Bible—God is Creator; everything else is creation.</p><p><strong>Follow it:</strong> Psalm 90:2; John 1:1–3; Hebrews 11:3.</p></div>'+
'<div class="note"><strong>🔖 Genesis 1:2–3 — The Spirit, the Word, and light.</strong><p>Before the ordered world appears, the Spirit of God is present over the deep; then God speaks. Notice how often the chapter repeats “God said.” Creation answers His word. Spurgeon returned to Genesis 1:2 and 1:4 when preaching about God\'s work of new creation in a person—not as a replacement meaning for Genesis, but because Scripture itself later uses creation-and-light language for God\'s saving work (2 Corinthians 4:6).</p><p><strong>Follow it:</strong> Psalm 33:6, 9; 2 Corinthians 4:6.</p></div>'+
'<div class="note"><strong>🔖 Genesis 1:26–27 — “In Our image.”</strong><p>Human beings are not merely another creature “according to its kind.” Male and female receive a unique God-given dignity and calling. Matthew Henry lingered here: humanity resembles the Creator rather than the creatures that came before, while still remaining infinitely beneath God. The next verse ties this image-bearing life to delegated rule.</p><p><strong>Follow it:</strong> Genesis 5:1–3; Genesis 9:6; Colossians 1:15; James 3:9.</p></div>'+
'<div class="note"><strong>🔖 Genesis 1:31 — “Very good.”</strong><p>Earlier works are called good; after the completed creation, God sees the whole and calls it “very good.” Before Genesis tells us what sin damages, it makes us look carefully at what God made and how He regarded it.</p></div>'+
'<h3>Sources beside the open Bible</h3><p class="sources">Primary: Genesis 1 and the cross-references above. Historic companions checked: Matthew Henry on Genesis 1:26–28; John Gill on Genesis 1; C. H. Spurgeon, “The Spirit\'s Work in the New Creation” (Genesis 1:2) and “The First Day of Creation” (Genesis 1:4). These voices are used selectively, not as substitutes for the text. Pastor Brian material remains excluded pending a verifiable source and permission.</p>'},
'Genesis 2':{theme:'Selected places to pause: rest, received life, vocation, limits, and companionship.',key:'Genesis 2:2–3, 7, 15–18, 24–25',body:
'<h3>Bookmarks</h3>'+
'<div class="note"><strong>🔖 Genesis 2:2–3 — The first thing called holy.</strong><p>The seventh day is blessed and sanctified because God\'s creative work is complete. Later Scripture deliberately reaches back here when speaking about Sabbath and God\'s rest.</p><p><strong>Follow it:</strong> Exodus 20:8–11; Hebrews 4:4–11.</p></div>'+
'<div class="note"><strong>🔖 Genesis 2:7 — Dust and breath.</strong><p>The picture holds humility and dignity together. The man is formed from the dust of the ground, yet life is personally received from God. Our life is neither self-created nor self-sustaining.</p><p><strong>Notice:</strong> Genesis will return to the dust in 3:19.</p></div>'+
'<div class="note"><strong>🔖 Genesis 2:15 — Work is older than the curse.</strong><p>Adam is placed in Eden to tend and keep it before sin enters the story. Genesis 3 makes labor painful and resistant; it does not introduce work itself. That small distinction matters whenever work is treated as though it were inherently a punishment.</p></div>'+
'<div class="note"><strong>🔖 Genesis 2:18 — The first “not good.”</strong><p>After the repeated goodness of Genesis 1, these words stand out: “It is not good that man should be alone.” Matthew Henry\'s old phrase is useful here: the promised helper is one “of the same nature and the same rank of beings.” The animals cannot provide the corresponding human companionship God intends.</p></div>'+
'<div class="note"><strong>🔖 Genesis 2:24 — Jesus comes back here.</strong><p>When questioned about marriage, Jesus joins Genesis 1:27 and Genesis 2:24. Paul later quotes this verse while speaking about Christ and the church. A short verse near the beginning of Scripture develops a remarkably long biblical thread.</p><p><strong>Follow it:</strong> Matthew 19:4–6; Ephesians 5:31–32.</p></div>'+
'<h3>Sources beside the open Bible</h3><p class="sources">Primary: Genesis 2 and the cross-references above. Historic companions checked: Matthew Henry on Genesis 2, especially 2:18; John Gill on Genesis 2. Historic observations are included only where they illuminate a selected bookmark. Pastor Brian material remains excluded pending a verifiable source and permission.</p>'}
};

const studyMeta={
'Genesis 1':{
  oneLine:'God creates and orders the world, culminating in humanity made in His image.',
  margin:['1:1 — Start with God.','1:2–3 — God speaks; creation answers.','1:26–27 — Humanity bears God’s image.','1:31 — The whole is “very good.”'],
  cross:['Psalm 90:2','Psalm 33:6, 9','John 1:1–3','2 Corinthians 4:6','Genesis 9:6','James 3:9'],
  reflection:'What changes when I begin where Scripture begins—with God, not with me?'
},
'Genesis 2':{
  oneLine:'God rests, places the man in Eden, gives him work and a command, and creates the woman as his corresponding companion.',
  margin:['2:2–3 — Rest is blessed and set apart.','2:7 — Dust and breath.','2:15 — Work comes before the curse.','2:18 — First “not good”: aloneness.','2:24 — Jesus returns to this verse.'],
  cross:['Exodus 20:8–11','Hebrews 4:4–11','Matthew 19:4–6','Ephesians 5:31–32'],
  reflection:'Where does this chapter correct the idea that ordinary work itself is part of the curse?'
},
'Genesis 3':{
  oneLine:'Human rebellion brings shame, judgment, and exile, yet God’s words and actions still hold signs of mercy and future hope.',
  margin:['3:1 — Compare the serpent’s words with God’s.','3:9 — God questions the hiding man.','3:15 — Promise appears inside judgment.','3:21 — God provides the covering.','3:24 — The tree of life will return.'],
  cross:['Genesis 2:16–17','Romans 16:20','Hebrews 2:14','Revelation 22:1–5'],
  reflection:'Where in this chapter do judgment and God’s continued care appear side by side?'
},
'Genesis 4':{
  oneLine:'Cain’s anger becomes murder, violence grows, and the chapter shows sin moving outward through human relationships.',
  margin:['4:3–5 — Worshipper and offering stay together.','4:6–7 — Warning comes before violence.','4:9 — Cain denies brotherly responsibility.','4:10 — Innocent blood cries for justice.','4:16 — The eastward movement continues.'],
  cross:['Hebrews 11:4','1 John 3:11–12','James 1:14–15','Hebrews 12:22–24'],
  reflection:'What does God say to Cain before the murder, and what does that reveal about the path into sin?'
},
'Genesis 5':{
  oneLine:'Adam’s line continues under the repeated reality of death, while Enoch’s walk with God interrupts the rhythm and Noah is named in hope.',
  margin:['5:1–3 — God’s image language continues.','5 — Listen for “and he died.”','5:22–24 — Enoch walked with God.','5:29 — Noah is named in hope.'],
  cross:['Genesis 1:26–28','Genesis 3:19','Romans 5:12–14','Hebrews 11:5–6'],
  reflection:'What does the repeated phrase “and he died” make you hear that a list of ages might otherwise hide?'
},
'Genesis 6':{
  oneLine:'Human corruption fills the earth, but Noah finds grace, walks with God, and obeys God’s warning and covenant promise.',
  margin:['6:1–4 — Difficult text; hold it humbly.','6:5–6 — Evil is inward; God is grieved.','6:8 — “But Noah found grace.”','6:9 — Noah walked with God.','6:18 — Covenant language appears.','6:22 — Faith becomes obedience.'],
  cross:['Genesis 1:31','Genesis 5:22–24','Hebrews 11:7','Genesis 8:21','Genesis 9:8–17'],
  reflection:'How does the chapter place grace, walking with God, faith, and obedience together without confusing them?'
},
'Genesis 7':{
  oneLine:'Noah enters the ark in obedience, the flood comes as judgment, and God preserves those within the refuge He provided.',
  margin:['7:1 — Refuge begins with God’s word.','7:10 — Obedience comes before the rain.','7:11 — Ordered waters break their bounds.','7:16 — The LORD shut him in.','7:17–24 — Judgment outside; preservation within.'],
  cross:['Genesis 6:18, 22','Hebrews 11:7','1 Peter 3:18–22'],
  reflection:'Which actions in this chapter belong to Noah, and which actions belong to God?'
}
};

const chapters=[];
for(const group of groups){
  const collection=group[0],book=group[1],count=group[2];
  for(let n=1;n<=count;n++) chapters.push({collection:collection,book:book,n:n,id:book+' '+n});
}

const cards=document.querySelector('#cards');
const dlg=document.querySelector('#study');
const body=document.querySelector('#studyBody');
const entryView=document.querySelector('#entryView');
const libraryView=document.querySelector('#libraryView');
const findStatus=document.querySelector('#findStatus');

function esc(text){
  return String(text).replace(/[&<>"']/g,function(ch){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch];
  });
}

function showLibrary(filter){
  entryView.hidden=true;
  libraryView.hidden=false;
  document.querySelectorAll('.tab').forEach(function(t){
    t.classList.toggle('active',(filter||'all')===t.dataset.filter);
  });
  render(filter||'all');
  window.scrollTo({top:0,behavior:'smooth'});
}

function showEntry(){
  libraryView.hidden=true;
  entryView.hidden=false;
  window.scrollTo({top:0,behavior:'smooth'});
}

function render(filter){
  filter=filter||'all';
  cards.innerHTML='';
  chapters.filter(function(c){return filter==='all'||c.collection===filter;}).forEach(function(c){
    const s=studies[c.id];
    const el=document.createElement('button');
    el.className='card '+(s?'ready':'pending');
    el.disabled=!s;
    el.innerHTML='<span class="status">'+(s?'Bookmarks ready':'Research in progress')+'</span><h3>'+esc(c.id)+'</h3><p>'+(s?esc(s.theme):esc(c.collection))+'</p>';
    if(s) el.onclick=function(){openStudy(c,s);};
    cards.appendChild(el);
  });
}

function cleanedBody(html){
  return html
    .replace('<h3>Bookmarks</h3>','<p class="deep-intro">Detailed research on the selected places to pause.</p>')
    .replace('<h3>Sources beside the open Bible</h3>','<h3>🍩 Sources &amp; References</h3>')
    .replace('<h3>🍩 Sources &amp; References</h3>','<h3>🍩 Sources &amp; References</h3>');
}

function isRead(id){
  try{return localStorage.getItem('bookmark-read-'+id)==='yes';}catch(e){return false;}
}

function setRead(id,value){
  try{localStorage.setItem('bookmark-read-'+id,value?'yes':'no');}catch(e){}
}

function metaFor(c,s){
  return studyMeta[c.id]||{
    oneLine:s.theme,
    margin:[s.key+' — Pause here.'],
    cross:[],
    reflection:'What stands out when you read this chapter again with its surrounding context in view?'
  };
}

function notesHtml(c,s,m){
  const margins=m.margin.map(function(x){return '<li class="margin-note">'+esc(x)+'</li>';}).join('');
  const cross=m.cross.map(function(x){return '<li>'+esc(x)+'</li>';}).join('');
  return '<div id="notesPanel" class="notes-panel">'+
    '<h3>Chapter in one sentence</h3><p class="one-sentence">'+esc(m.oneLine)+'</p>'+
    '<h3>Worth writing down</h3><ul class="margin-notes">'+margins+'</ul>'+
    '<h3>Notice this</h3><div class="notice-box"><p>'+esc(s.theme)+'</p></div>'+
    (cross?'<h3>Cross-references</h3><ul class="xref-list">'+cross+'</ul>':'')+
    '<details class="deeper"><summary>🐿️ Commentary &amp; deeper understanding</summary><div class="deep-body">'+cleanedBody(s.body)+'</div></details>'+
    '<section class="reflection"><h3>🐝 Reflection</h3><p>'+esc(m.reflection)+'</p></section>'+
    '<div class="chapter-actions"><button id="readToggle" class="read-toggle"></button><button id="nextChapter" class="next-button"></button></div>'+
  '</div>';
}

function updateReadButton(c){
  const btn=document.querySelector('#readToggle');
  if(!btn) return;
  btn.textContent=isRead(c.id)?'Read ✓ — Undo':'Mark as Read';
  btn.onclick=function(){
    setRead(c.id,!isRead(c.id));
    updateReadButton(c);
  };
}

function setupNext(c){
  const btn=document.querySelector('#nextChapter');
  if(!btn) return;
  const index=chapters.findIndex(function(x){return x.id===c.id;});
  const next=chapters[index+1];
  if(next&&studies[next.id]){
    btn.textContent='Next chapter: '+next.id+' →';
    btn.onclick=function(){openStudy(next,studies[next.id]);};
  }else{
    btn.textContent='Back to chapters';
    btn.onclick=function(){dlg.close();showLibrary(c.collection);};
  }
}

function revealNotes(c){
  const gate=document.querySelector('#readGate');
  const panel=document.querySelector('#notesPanel');
  if(gate) gate.hidden=true;
  if(panel) panel.hidden=false;
  updateReadButton(c);
  setupNext(c);
  dlg.scrollTop=0;
}

function openStudy(c,s){
  const m=metaFor(c,s);
  body.innerHTML=
    '<p class="eyebrow">'+esc(c.collection)+'</p>'+
    '<h2>'+esc(c.id)+'</h2>'+
    '<p class="key"><strong>Places to pause:</strong> '+esc(s.key)+'</p>'+
    '<section id="readGate" class="read-first"><p><strong>Read '+esc(c.id)+' in your own Bible first.</strong><br>When you finish, open the notes beside it.</p><button id="revealNotes" class="read-button">I finished reading — show my notes</button></section>'+
    notesHtml(c,s,m);
  const panel=document.querySelector('#notesPanel');
  panel.hidden=true;
  document.querySelector('#revealNotes').onclick=function(){revealNotes(c);};
  dlg.showModal();
  dlg.scrollTop=0;
  if(isRead(c.id)) revealNotes(c);
}

function findChapter(raw){
  const value=raw.trim().replace(/\s+/g,' ');
  const match=value.match(/^([1-3]?\s*[A-Za-z]+)\s*(\d{1,3})$/);
  if(!match) return null;
  const alias=match[1].toLowerCase().replace(/\s+/g,' ');
  const aliases={
    'gen':'Genesis','genesis':'Genesis','ps':'Psalms','psalm':'Psalms','psalms':'Psalms',
    'jn':'John','john':'John','gal':'Galatians','galatians':'Galatians',
    'eph':'Ephesians','ephesians':'Ephesians','phil':'Philippians','philippians':'Philippians',
    'col':'Colossians','colossians':'Colossians','jas':'James','james':'James','heb':'Hebrews','hebrews':'Hebrews'
  };
  const book=aliases[alias];
  if(!book) return null;
  return chapters.find(function(c){return c.book===book&&c.n===Number(match[2]);})||null;
}

document.querySelector('.close').onclick=function(){dlg.close();};
dlg.addEventListener('click',function(e){if(e.target===dlg) dlg.close();});

document.querySelectorAll('.tab').forEach(function(t){
  t.onclick=function(){
    document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active');});
    t.classList.add('active');
    render(t.dataset.filter);
  };
});

document.querySelectorAll('.collection-row').forEach(function(row){
  row.onclick=function(){showLibrary(row.dataset.filter);};
});

document.querySelector('#browseAll').onclick=function(){showLibrary('all');};
document.querySelector('#homeBtn').onclick=showEntry;

document.querySelector('#findForm').addEventListener('submit',function(e){
  e.preventDefault();
  const c=findChapter(document.querySelector('#chapterSearch').value);
  if(!c){
    findStatus.textContent='Try a book and chapter, such as Genesis 3.';
    return;
  }
  const s=studies[c.id];
  if(!s){
    findStatus.textContent=c.id+' is in the collection, but its notes are still being researched.';
    return;
  }
  findStatus.textContent='';
  openStudy(c,s);
});

render('all');