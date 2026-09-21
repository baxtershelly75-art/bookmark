const bookChapters={
"Genesis":50,"Exodus":40,"Leviticus":27,"Numbers":36,"Deuteronomy":34,"Joshua":24,"Judges":21,"Ruth":4,
"1 Samuel":31,"2 Samuel":24,"1 Kings":22,"2 Kings":25,"1 Chronicles":29,"2 Chronicles":36,"Ezra":10,"Nehemiah":13,
"Esther":10,"Job":42,"Psalms":150,"Proverbs":31,"Ecclesiastes":12,"Song of Solomon":8,"Isaiah":66,"Jeremiah":52,
"Lamentations":5,"Ezekiel":48,"Daniel":12,"Hosea":14,"Joel":3,"Amos":9,"Obadiah":1,"Jonah":4,"Micah":7,"Nahum":3,
"Habakkuk":3,"Zephaniah":3,"Haggai":2,"Zechariah":14,"Malachi":4,"Matthew":28,"Mark":16,"Luke":24,"John":21,
"Acts":28,"Romans":16,"1 Corinthians":16,"2 Corinthians":13,"Galatians":6,"Ephesians":6,"Philippians":4,"Colossians":4,
"1 Thessalonians":5,"2 Thessalonians":3,"1 Timothy":6,"2 Timothy":4,"Titus":3,"Philemon":1,"Hebrews":13,"James":5,
"1 Peter":5,"2 Peter":3,"1 John":5,"2 John":1,"3 John":1,"Jude":1,"Revelation":22
};

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
 write:[
  {ref:'Genesis 1:1',title:'Start with God.',text:'Before anything created exists, God is.',cross:[{ref:'John 1:1-3',label:'Further explanation',reason:'John begins with the Word already present with God and active in creation.'}]},
  {ref:'Genesis 1:26-27',title:'Humanity bears God’s image.',text:'The chapter gives human beings a unique God-given dignity and calling.',cross:[{ref:'James 3:9',label:'Later connection',reason:'James still speaks of people as made after the likeness of God.'}]}
 ],
 underline:{ref:'Genesis 1:31',reason:'The completed creation is called “very good” before Genesis shows what sin damages.'},
 notice:[
  {ref:'Genesis 1:2-3',title:'The Spirit is present; then God speaks.',text:'Notice how often the chapter repeats “God said.”',cross:[{ref:'2 Corinthians 4:6',label:'Thematic connection',reason:'Paul later uses creation-and-light language when speaking about God’s saving work.'}]}
 ],
 reflections:['What changes when I begin where Scripture begins—with God, not with me?','What does this chapter say about the value of human beings before it says anything about human achievement?'],
 commentary:{voice:'C. H. Spurgeon',identity:'Baptist preacher, 1834–1892',quote:'We cannot tell how the Spirit of God brooded over that vast watery mass.',plain:'Spurgeon begins by admitting mystery while treating the Spirit’s presence in Genesis 1:2 as a revealed fact worth noticing.',source:'The Spirit’s Work in the New Creation — Genesis 1:2',url:'https://www.spurgeon.org/sermons/the-spirits-work-in-the-new-creation'},
 question:{q:'Does Genesis 1 explain everything meant by the image of God?',short:'No. It clearly gives humanity a unique relationship to God and a calling to rule under Him, but it does not reduce the image to one single trait.',more:'Later Scripture keeps using image language after the fall (Genesis 9:6; James 3:9). Colossians 1:15 then speaks uniquely of Christ as “the image of the invisible God.” Bookmark should let those later texts deepen the theme without forcing Genesis 1 to say more than it says.'}
},
'Genesis 2':{
 oneLine:'God rests, places the man in Eden, gives him work and a command, and creates the woman as his corresponding companion.',
 write:[
  {ref:'Genesis 2:7',title:'Dust and breath.',text:'Human life is humble in origin and personally received from God.'},
  {ref:'Genesis 2:15',title:'Work is older than the curse.',text:'The man is given work before sin enters the story.'},
  {ref:'Genesis 2:18',title:'The first “not good” is aloneness.',text:'Human companionship matters inside God’s good creation.'}
 ],
 underline:{ref:'Genesis 2:24',reason:'Jesus later returns to this verse when teaching about marriage.'},
 notice:[
  {ref:'Genesis 2:2-3',title:'The seventh day is blessed and set apart.',text:'Later Sabbath teaching deliberately reaches back here.',cross:[{ref:'Exodus 20:8-11',label:'Direct connection',reason:'The Sabbath command explicitly grounds Israel’s weekly rest in creation.'}]},
  {ref:'Genesis 2:24',title:'Jesus comes back here.',text:'The marriage statement becomes a long biblical thread.',cross:[{ref:'Matthew 19:4-6',label:'Direct quotation',reason:'Jesus joins Genesis 1:27 and Genesis 2:24 in His answer about marriage.'}]}
 ],
 reflections:['Where does this chapter correct the idea that ordinary work itself is part of the curse?','What does “not good that man should be alone” add to the repeated goodness of Genesis 1?'],
 commentary:{voice:'Matthew Henry',identity:'English Nonconformist commentator, 1662–1714',quote:'one of the same nature and the same rank of beings',plain:'Henry’s phrase highlights why the animals could not supply the human companionship God intended for Adam.',source:'Commentary on the Whole Bible — Genesis 2:18–25',url:'https://ccel.org/h/henry/mhc2/MHC01002.HTM'},
 question:{q:'Is work itself part of the curse?',short:'No. Adam is given work in Genesis 2:15, before the fall. Genesis 3 makes labor painful and resistant; it does not invent work.',more:'That distinction matters. Scripture can treat work as part of human vocation while also being realistic about frustration, sweat, thorns, and weariness in a fallen world.'}
},
'Genesis 3':{
 oneLine:'Human rebellion brings shame, judgment, and exile, yet the chapter also contains mercy and the first glimmer of future victory.',
 write:[
  {ref:'Genesis 3:1',title:'Compare the serpent’s words with God’s actual words.',text:'The temptation distorts the shape of what God said.'},
  {ref:'Genesis 3:9',title:'God questions the hiding man.',text:'“Where are you?” draws Adam into the open and begins the reckoning.'},
  {ref:'Genesis 3:21',title:'God clothes them.',text:'Judgment remains, but God still provides for the ashamed pair.'}
 ],
 underline:{ref:'Genesis 3:15',reason:'Christians have long heard the first glimmer of the gospel inside the serpent’s sentence.'},
 notice:[
  {ref:'Genesis 3:15',title:'Promise appears inside judgment.',text:'Later Scripture helps Christians see why this verse became so important.',cross:[{ref:'Romans 16:20',label:'Later connection',reason:'Paul promises that the God of peace will crush Satan under the believers’ feet.'},{ref:'Hebrews 2:14',label:'Further explanation',reason:'Hebrews describes Christ destroying the one who had the power of death, the devil.'}]},
  {ref:'Genesis 3:24',title:'The tree of life has not disappeared from the Bible.',text:'Revelation brings it back into view at Scripture’s end.'}
 ],
 reflections:['Where do judgment and God’s continued care appear side by side in this chapter?','How does the serpent’s handling of God’s words warn me to keep the actual text open?'],
 commentary:{voice:'C. H. Spurgeon',identity:'Baptist preacher, 1834–1892',quote:'This is the first gospel sermon that was ever delivered upon the surface of this earth.',plain:'Spurgeon saw Genesis 3:15 as the Bible’s first announcement of good news, spoken before the sentences on the woman and the man.',source:'Christ the Conqueror of Satan — Genesis 3:15',url:'https://www.spurgeon.org/sermons/christ-conqueror-of-satan'},
 question:{q:'Is Genesis 3:15 really about Jesus?',short:'Christians have historically read it as the first gospel promise, especially in light of later Scripture about Christ defeating the devil.',more:'Genesis 3:15 itself is brief and speaks in the setting of the serpent’s judgment. Romans 16:20, Hebrews 2:14, and Revelation’s identification of Satan with the ancient serpent help explain why Christians have seen a larger promise here. The later Bible should illuminate the verse without making us pretend every later detail is spelled out in Genesis 3.'}
},
'Genesis 4':{
 oneLine:'Cain’s anger becomes murder, violence grows, and the chapter shows sin spreading through human relationships.',
 write:[
  {ref:'Genesis 4:6-7',title:'God warns Cain before Cain strikes.',text:'The murder is preceded by anger, warning, and a choice.',cross:[{ref:'James 1:14-15',label:'Thematic connection',reason:'James also describes desire growing into sin and sin bringing forth death.'}]},
  {ref:'Genesis 4:9',title:'“Where is Abel your brother?”',text:'Cain answers a broken relationship with a lie and contempt.'},
  {ref:'Genesis 4:10',title:'Abel’s blood has a voice.',text:'Hidden violence is not hidden from God.',cross:[{ref:'Hebrews 12:24',label:'Further explanation',reason:'Hebrews contrasts Abel’s blood with the better word spoken by Jesus’ blood.'}]}
 ],
 underline:{ref:'Genesis 4:7',reason:'The warning at the door comes before the act of violence.'},
 notice:[
  {ref:'Genesis 4:3-5',title:'Do not invent the reason for Cain’s rejection.',text:'Genesis does not say produce was an unacceptable class of offering.',cross:[{ref:'Hebrews 11:4',label:'Later explanation',reason:'Hebrews emphasizes that Abel offered by faith.'}]},
  {ref:'Genesis 4:16',title:'The eastward movement continues.',text:'Humanity was driven east of Eden; Cain now goes farther east.'}
 ],
 reflections:['What does God say to Cain before the murder?','Where do I see sin moving from inward anger into harm against another person?'],
 commentary:{voice:'C. H. Spurgeon',identity:'Baptist preacher, 1834–1892',quote:'The blood of Abel was not voiceless, and the blood of Jesus was not dumb.',plain:'Spurgeon uses Hebrews 12:24 to contrast Abel’s blood crying for justice with Christ’s blood speaking the better word of the new covenant.',source:'The Blood of Abel and the Blood of Jesus — Genesis 4:10; Hebrews 12:24',url:'https://www.spurgeon.org/sermons/the-blood-of-abel-and-the-blood-of-jesus'},
 question:{q:'Was Cain’s offering rejected because it was produce?',short:'Genesis does not say that. Both brothers bring offerings, and the later Bible points us instead toward Abel’s faith and Cain’s works.',more:'Hebrews 11:4 says Abel offered “by faith.” First John 3:12 contrasts Cain’s evil works with Abel’s righteous ones. Bookmark should not turn an inference about the material of the offering into a certainty the text itself never states.'}
},
'Genesis 5':{
 oneLine:'Adam’s line continues under the repeated reality of death, while Enoch’s walk with God interrupts the rhythm and Noah is named in hope.',
 write:[
  {ref:'Genesis 5:5',title:'Listen for “and he died.”',text:'The genealogy keeps sounding the consequence announced in Genesis 3:19.',cross:[{ref:'Romans 5:12',label:'Further explanation',reason:'Paul connects death entering the world with sin.'}]},
  {ref:'Genesis 5:22-24',title:'Enoch walked with God.',text:'His description breaks the chapter’s usual rhythm.',cross:[{ref:'Hebrews 11:5-6',label:'Later explanation',reason:'Hebrews interprets Enoch’s life through faith and pleasing God.'}]},
  {ref:'Genesis 5:29',title:'Noah is named in hope.',text:'Lamech longs for relief from painful toil on the cursed ground.'}
 ],
 underline:{ref:'Genesis 5:24',reason:'Instead of the expected “and he died,” Enoch is taken by God.'},
 notice:[
  {ref:'Genesis 5:1-3',title:'Creation-language returns inside a genealogy.',text:'Image and likeness language links Adam’s line back to Genesis 1.'}
 ],
 reflections:['What does the repeated phrase “and he died” make me hear that a list of ages could hide?','What is different about the way Enoch is described?'],
 commentary:{voice:'C. H. Spurgeon',identity:'Baptist preacher, 1834–1892',quote:'It was not a run, a rush, a leap, a spurt, but a steady walk.',plain:'Spurgeon emphasizes that Enoch’s walk with God describes the ongoing tenor of a life, not a brief spiritual high.',source:'Enoch — Genesis 5:21–24',url:'https://www.spurgeon.org/sermons/enoch'},
 question:{q:'Why does Genesis 5 keep repeating “and he died”?',short:'The repeated ending makes death the chapter’s steady refrain, echoing the sentence of Genesis 3 even across extraordinarily long lives.',more:'That is why Enoch stands out so sharply. His line does not end with the expected phrase; Genesis says God took him, and Hebrews 11:5–6 interprets that interruption through faith.'}
},
'Genesis 6':{
 oneLine:'Human corruption fills the earth, but Noah finds grace, walks with God, and obeys God’s warning and covenant promise.',
 write:[
  {ref:'Genesis 6:5-6',title:'The problem reaches the heart.',text:'Human evil is described as deep and continual, and God is grieved.'},
  {ref:'Genesis 6:8',title:'“But Noah found grace.”',text:'Grace appears before the chapter describes Noah’s righteousness.'},
  {ref:'Genesis 6:9',title:'Noah walked with God.',text:'Genesis repeats the striking description previously used of Enoch.'},
  {ref:'Genesis 6:22',title:'Faith becomes obedience.',text:'Noah does according to all God commanded.',cross:[{ref:'Hebrews 11:7',label:'Later explanation',reason:'Hebrews explicitly names faith as the engine of Noah’s response.'}]}
 ],
 underline:{ref:'Genesis 6:8',reason:'A small hinge of grace appears in the middle of a dark chapter.'},
 notice:[
  {ref:'Genesis 6:1-4',title:'A difficult passage should be treated honestly.',text:'“Sons of God” has several substantial historic interpretations; Bookmark does not pretend the identification is settled.'},
  {ref:'Genesis 6:11-13',title:'Violence now fills the earth.',text:'Genesis 4 began with one brother’s blood; by Genesis 6 violence characterizes the world.'},
  {ref:'Genesis 6:18',title:'Covenant language appears.',text:'God promises to establish His covenant with Noah.'}
 ],
 reflections:['How does the chapter place grace, walking with God, faith, and obedience together?','What does God clearly emphasize even where Genesis 6:1–4 remains difficult?'],
 commentary:{voice:'C. H. Spurgeon',identity:'Baptist preacher, 1834–1892',quote:'At the back of everything was his faith in God.',plain:'Preaching from Hebrews 11:7, Spurgeon links Noah’s fear and obedience back to faith rather than treating obedience as self-generated heroism.',source:'Noah’s Faith, Fear, Obedience, and Salvation — Hebrews 11:7',url:'https://biblehub.com/sermons/auth/spurgeon/noah%27s_faith_fear_obedience_and_salvation.htm'},
 question:{q:'Who are the “sons of God” in Genesis 6:1–4?',short:'Christians have understood this in more than one way. Major readings include heavenly beings, the Sethite line, and powerful human rulers.',more:'There are arguments for each reading, and the related New Testament texts are also interpreted differently. What Genesis makes unmistakable is the moral direction of the story: corruption and violence are increasing, and verses 5–7 immediately bring us to God’s verdict on human evil. Bookmark should be clear about what is disputed and equally clear about what is not.'}
},
'Genesis 7':{
 oneLine:'Noah enters the ark in obedience, the flood comes as judgment, and God preserves those within the refuge He provided.',
 write:[
  {ref:'Genesis 7:1',title:'Refuge begins with God’s word.',text:'Noah enters because God tells him to enter.'},
  {ref:'Genesis 7:10',title:'Obedience comes before the rain.',text:'The seven days pass before visible fulfillment.',cross:[{ref:'Hebrews 11:7',label:'Later explanation',reason:'Hebrews says Noah acted on a warning about things not yet seen.'}]},
  {ref:'Genesis 7:16',title:'“The LORD shut him in.”',text:'Noah obeys, but the final action of closing the refuge belongs to God.'}
 ],
 underline:{ref:'Genesis 7:16',reason:'This short sentence holds human obedience and divine preservation together.'},
 notice:[
  {ref:'Genesis 7:11-12',title:'The ordered world is overwhelmed.',text:'The language of waters breaking their bounds recalls the ordered waters of Genesis 1.'},
  {ref:'Genesis 7:17-24',title:'Do not turn judgment into children’s-story scenery.',text:'The repeated language makes the terrible completeness of the flood impossible to miss.',cross:[{ref:'1 Peter 3:20-21',label:'Later theological use',reason:'Peter draws an analogy with Noah’s preservation through water while grounding salvation in Christ’s resurrection.'}]}
 ],
 reflections:['Which actions in this chapter belong to Noah, and which actions belong to God?','How does the chapter keep judgment and preservation in view at the same time?'],
 commentary:{voice:'C. H. Spurgeon',identity:'Baptist preacher, 1834–1892',quote:'The Lord shut him in.',plain:'Spurgeon builds his sermon from the fact that the final shutting-in action belongs to God, while Genesis still shows Noah’s real obedience in entering.',source:'Shut In or Shut Out — Genesis 7:16',url:'https://www.spurgeon.org/sermons/shut-in-or-shut-out'},
 question:{q:'Did the ark save Noah, or did God?',short:'Genesis does not make those rivals. Noah builds and enters in obedience; God warns, covenants, commands, and finally shuts him in.',more:'Hebrews 11:7 names Noah’s response as faith. The story therefore holds together God’s provision and preservation with Noah’s believing obedience rather than asking us to choose one against the other.'}
}
};

const KJV_URL='https://raw.githubusercontent.com/farskipper/kjv/72fa2e068e991f8fc18a6a6fb9ada6d56ce99b2a/json/verses-1769.json';
const STORAGE_QUEUE='bookmark-reading-queue-v1';
const STORAGE_READ='bookmark-read-status-v1';

const books=Object.keys(bookChapters);
const aliases={};
books.forEach(function(book){
 aliases[normalizeBook(book)]=book;
 aliases[normalizeBook(book.replace('Psalms','Psalm'))]=book;
});
Object.assign(aliases,{
 'ps':'Psalms','psalm':'Psalms','psalms':'Psalms','gen':'Genesis','jn':'John','rev':'Revelation',
 'song of songs':'Song of Solomon','song':'Song of Solomon','canticles':'Song of Solomon',
 '1 sam':'1 Samuel','2 sam':'2 Samuel','1 cor':'1 Corinthians','2 cor':'2 Corinthians',
 '1 thess':'1 Thessalonians','2 thess':'2 Thessalonians','1 tim':'1 Timothy','2 tim':'2 Timothy',
 '1 pet':'1 Peter','2 pet':'2 Peter','1 jn':'1 John','2 jn':'2 John','3 jn':'3 John'
});

let readingQueue=loadJson(STORAGE_QUEUE,[]);
let readStatus=loadJson(STORAGE_READ,{});
let openedNotes=new Set();
let kjvPromise=null;
let kjvMap=null;
let kjvSearchRows=null;
let currentVerseMatches=[];
let visibleVerseResults=3;

const queueEl=document.querySelector('#queue');
const entryStatus=document.querySelector('#entryStatus');
const bookSelect=document.querySelector('#bookSelect');
const chapterSelect=document.querySelector('#chapterSelect');

function loadJson(key,fallback){
 try{
  const value=JSON.parse(localStorage.getItem(key));
  return value==null?fallback:value;
 }catch(e){return fallback;}
}
function saveState(){
 try{
  localStorage.setItem(STORAGE_QUEUE,JSON.stringify(readingQueue));
  localStorage.setItem(STORAGE_READ,JSON.stringify(readStatus));
 }catch(e){}
}
function escapeHtml(value){
 return String(value).replace(/[&<>"']/g,function(ch){
  return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch];
 });
}
function normalizeBook(value){
 return String(value).toLowerCase().replace(/[.]/g,'').replace(/\s+/g,' ').trim();
}
function canonicalBook(value){
 return aliases[normalizeBook(value)]||null;
}
function refId(ref){return ref.replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'').toLowerCase();}
function chapterFromRef(ref){
 const m=String(ref).match(/^(.+?)\s+(\d+)$/);
 if(!m)return null;
 const book=canonicalBook(m[1]);
 const chapter=Number(m[2]);
 if(!book||chapter<1||chapter>bookChapters[book])return null;
 return book+' '+chapter;
}
function parsePassages(text){
 const cleaned=String(text).replace(/[–—]/g,'-').replace(/\s+\band\b\s+/gi,',');
 const parts=cleaned.split(/[;,]+/).map(function(x){return x.trim();}).filter(Boolean);
 const refs=[],errors=[];
 parts.forEach(function(part){
  const m=part.match(/^(.+?)\s+(\d+)(?:\s*-\s*(\d+))?$/);
  if(!m){errors.push(part);return;}
  const book=canonicalBook(m[1]);
  if(!book){errors.push(part);return;}
  const start=Number(m[2]),end=m[3]?Number(m[3]):start,max=bookChapters[book];
  if(start<1||end<start||end>max){errors.push(part);return;}
  for(let n=start;n<=end;n++)refs.push(book+' '+n);
 });
 return {refs:Array.from(new Set(refs)),errors:errors};
}
function addRefs(refs){
 refs.forEach(function(ref){if(!readingQueue.includes(ref))readingQueue.push(ref);});
 saveState();render();
}
function removeRef(ref){
 readingQueue=readingQueue.filter(function(x){return x!==ref;});
 openedNotes.delete(ref);saveState();render();
}
function markRead(ref,value){
 readStatus[ref]=value;
 if(value)openedNotes.delete(ref);
 saveState();render();
}
function isRead(ref){return readStatus[ref]===true;}
function nextUnreadAfter(index){
 for(let i=index+1;i<readingQueue.length;i++)if(!isRead(readingQueue[i]))return readingQueue[i];
 return null;
}
function scrollToCard(ref){
 const el=document.getElementById('card-'+refId(ref));
 if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
}
function updateChapterOptions(){
 const book=bookSelect.value;
 const max=bookChapters[book]||1;
 chapterSelect.innerHTML='';
 for(let n=1;n<=max;n++){
  const o=document.createElement('option');o.value=n;o.textContent=n;chapterSelect.appendChild(o);
 }
}
function populatePickers(){
 bookSelect.innerHTML='';
 books.forEach(function(book){
  const o=document.createElement('option');o.value=book;o.textContent=book;bookSelect.appendChild(o);
 });
 bookSelect.value='Genesis';updateChapterOptions();
}

function xrefHtml(item,ownerId){
 if(!item.cross||!item.cross.length)return '';
 return item.cross.map(function(x,i){
  const previewId='preview-'+ownerId+'-'+i;
  return '<div class="xref"><button type="button" data-verse-ref="'+escapeHtml(x.ref)+'" data-preview-id="'+previewId+'">'+escapeHtml(x.label)+' — '+escapeHtml(x.ref)+'</button><small>'+escapeHtml(x.reason)+'</small><div id="'+previewId+'"></div></div>';
 }).join('');
}
function itemListHtml(items,kind,owner){
 return '<ul class="'+(kind==='margin'?'margin-list':'notice-list')+'">'+items.map(function(item,i){
  const cls=kind==='margin'?'margin-item':'notice-item';
  return '<li class="'+cls+'"><strong>'+escapeHtml(item.ref)+' — '+escapeHtml(item.title)+'</strong>'+
   (item.text?'<p>'+escapeHtml(item.text)+'</p>':'')+xrefHtml(item,owner+'-'+kind+'-'+i)+'</li>';
 }).join('')+'</ul>';
}
function cleanedResearchBody(html){
 return String(html||'')
  .replace('<h3>Bookmarks</h3>','')
  .replace('<h3>Sources beside the open Bible</h3>','<h3>🍩 Sources &amp; References</h3>');
}
function notesHtml(ref,study,meta,index){
 const commentary=meta.commentary;
 const reflections='<ol class="reflection-list">'+meta.reflections.map(function(q){return '<li>'+escapeHtml(q)+'</li>';}).join('')+'</ol>';
 const next=nextUnreadAfter(index);
 return '<div class="notes">'+
  '<h4>Chapter in one sentence</h4><p class="one-line">'+escapeHtml(meta.oneLine)+'</p>'+
  '<h4>Worth writing down</h4>'+itemListHtml(meta.write,'margin',refId(ref))+
  '<div class="underline-box"><strong>Verse worth marking — '+escapeHtml(meta.underline.ref)+'</strong><br>'+escapeHtml(meta.underline.reason)+'</div>'+
  '<h4>Notice this</h4>'+itemListHtml(meta.notice,'notice',refId(ref))+
  '<section class="reflection-box"><h4>🐝 Reflection questions</h4>'+reflections+'</section>'+
  '<details class="drawer"><summary>🐿️ Commentary</summary><div class="drawer-body">'+
    '<p><strong>'+escapeHtml(commentary.voice)+'</strong><br><small>'+escapeHtml(commentary.identity)+'</small></p>'+
    '<blockquote>“'+escapeHtml(commentary.quote)+'”</blockquote>'+
    '<p class="plain"><strong>In plain English:</strong> '+escapeHtml(commentary.plain)+'</p>'+
    '<p><strong>Source:</strong> '+escapeHtml(commentary.source)+'</p>'+
    '<p><a href="'+escapeHtml(commentary.url)+'" target="_blank" rel="noopener">Read the full source</a></p>'+
    '<details class="drawer"><summary>More study notes &amp; chapter sources</summary><div class="drawer-body">'+cleanedResearchBody(study.body)+'</div></details>'+
  '</div></details>'+
  '<details class="drawer"><summary>I have a question</summary><div class="drawer-body">'+
    '<p><strong>'+escapeHtml(meta.question.q)+'</strong></p>'+
    '<p class="question-short">'+escapeHtml(meta.question.short)+'</p>'+
    '<details class="drawer"><summary>Explain more</summary><div class="drawer-body"><p>'+escapeHtml(meta.question.more)+'</p></div></details>'+
  '</div></details>'+
  '<div class="completion"><button class="mark-read" type="button" data-mark-read="'+escapeHtml(ref)+'">Mark as Read</button>'+
   (next?'<div class="next-prompt"><p>Ready for your next chapter? <strong>'+escapeHtml(next)+'</strong></p><button class="next-button" type="button" data-next="'+escapeHtml(next)+'">Next chapter: '+escapeHtml(next)+' →</button></div>':'')+
  '</div></div>';
}
function unavailableHtml(ref,index){
 const next=nextUnreadAfter(index);
 return '<div class="card-prompt"><p>Read <strong>'+escapeHtml(ref)+'</strong> in your own Bible.</p>'+
  '<div class="unavailable"><strong>Research in progress.</strong><br>The notes for this chapter are not ready yet. It can stay in your Living Bookmark while the chapter card is developed.</div>'+
  '<div class="completion"><button class="mark-read" type="button" data-mark-read="'+escapeHtml(ref)+'">Mark as Read</button>'+
  (next?'<div class="next-prompt"><p>Ready for your next chapter? <strong>'+escapeHtml(next)+'</strong></p><button class="next-button" type="button" data-next="'+escapeHtml(next)+'">Next chapter: '+escapeHtml(next)+' →</button></div>':'')+
  '</div></div>';
}
function cardHtml(ref,index){
 const study=studies[ref],meta=studyMeta[ref];
 const read=isRead(ref);
 const current=readingQueue.findIndex(function(x){return !isRead(x);})===index;
 if(read&&!openedNotes.has(ref)){
  return '<article id="card-'+refId(ref)+'" class="reading-card read"><div class="collapsed-read"><strong>'+escapeHtml(ref)+' — Read ✓</strong><div class="read-actions"><button class="open-notes" type="button" data-open-notes="'+escapeHtml(ref)+'">Open notes</button><button class="undo-btn" type="button" data-undo="'+escapeHtml(ref)+'">Undo</button><button class="remove-btn" type="button" data-remove="'+escapeHtml(ref)+'">Remove</button></div></div></article>';
 }
 const top='<div class="card-top"><div><span class="small-status">'+(read?'Read ✓':(study&&meta?'Notes ready':'Research in progress'))+'</span><h3>'+escapeHtml(ref)+'</h3></div><button class="remove-btn" type="button" data-remove="'+escapeHtml(ref)+'">Remove</button></div>';
 if(!study||!meta){
  return '<article id="card-'+refId(ref)+'" class="reading-card '+(current?'current ':'')+(read?'read':'')+'">'+top+unavailableHtml(ref,index)+'</article>';
 }
 const open=openedNotes.has(ref);
 const prompt=open?'':'<div class="card-prompt"><p>Read <strong>'+escapeHtml(ref)+'</strong> in your own Bible.</p><button class="read-button" type="button" data-show-notes="'+escapeHtml(ref)+'">I finished reading — show my notes</button></div>';
 return '<article id="card-'+refId(ref)+'" class="reading-card '+(current?'current ':'')+(read?'read':'')+'">'+top+prompt+(open?notesHtml(ref,study,meta,index):'')+'</article>';
}
function render(){
 if(!queueEl)return;
 if(!readingQueue.length){
  queueEl.innerHTML='<div class="empty-card"><strong>Your Living Bookmark is empty.</strong><br>Add the chapter or chapters you are actually reading above. There is no schedule and no streak to keep.</div>';
 }else{
  queueEl.innerHTML=readingQueue.map(cardHtml).join('');
 }
 const clear=document.querySelector('#clearQueue');
 if(clear)clear.hidden=!readingQueue.length;
 bindQueueActions();
}
function bindQueueActions(){
 document.querySelectorAll('[data-remove]').forEach(function(btn){btn.onclick=function(){removeRef(btn.dataset.remove);};});
 document.querySelectorAll('[data-show-notes]').forEach(function(btn){btn.onclick=function(){openedNotes.add(btn.dataset.showNotes);render();scrollToCard(btn.dataset.showNotes);};});
 document.querySelectorAll('[data-open-notes]').forEach(function(btn){btn.onclick=function(){openedNotes.add(btn.dataset.openNotes);render();scrollToCard(btn.dataset.openNotes);};});
 document.querySelectorAll('[data-undo]').forEach(function(btn){btn.onclick=function(){markRead(btn.dataset.undo,false);};});
 document.querySelectorAll('[data-mark-read]').forEach(function(btn){btn.onclick=function(){markRead(btn.dataset.markRead,true);};});
 document.querySelectorAll('[data-next]').forEach(function(btn){btn.onclick=function(){scrollToCard(btn.dataset.next);};});
 document.querySelectorAll('[data-verse-ref]').forEach(function(btn){
  btn.onclick=function(){showVersePreview(btn.dataset.verseRef,document.getElementById(btn.dataset.previewId));};
 });
}

async function loadKjv(){
 if(kjvMap)return kjvMap;
 if(!kjvPromise){
  kjvPromise=fetch(KJV_URL).then(function(r){if(!r.ok)throw new Error('KJV source unavailable');return r.json();}).then(function(data){
   kjvMap=data;
   kjvSearchRows=Object.entries(data).map(function(pair){return {ref:pair[0],text:pair[1],norm:normalizeSearch(pair[1]+' '+pair[0])};});
   return data;
  });
 }
 return kjvPromise;
}
function parseVerseRef(ref){
 const m=String(ref).match(/^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$/);
 if(!m)return null;
 return {book:m[1],chapter:Number(m[2]),start:Number(m[3]),end:m[4]?Number(m[4]):Number(m[3])};
}
async function verseTextFor(ref){
 const data=await loadKjv();
 const p=parseVerseRef(ref);
 if(!p)return null;
 const lines=[];
 for(let v=p.start;v<=p.end;v++){
  const key=p.book+' '+p.chapter+':'+v;
  if(data[key])lines.push(data[key]);
 }
 if(!lines.length)return null;
 return lines.join(' ');
}
async function showVersePreview(ref,target){
 if(!target)return;
 target.innerHTML='<div class="verse-preview"><p>Loading '+escapeHtml(ref)+'…</p></div>';
 try{
  const text=await verseTextFor(ref);
  target.innerHTML=text?'<div class="verse-preview"><p class="verse-label">'+escapeHtml(ref)+' · KJV</p><p>'+escapeHtml(text)+'</p></div>':'<div class="verse-preview"><p>Verse preview not found in the KJV index.</p></div>';
 }catch(e){
  target.innerHTML='<div class="verse-preview"><p>Verse text could not be loaded right now. The reference is still here for your Bible.</p></div>';
 }
}

function normalizeSearch(value){
 return String(value).toLowerCase()
  .replace(/\[[^\]]+\]/g,function(x){return x.replace(/[\[\]]/g,'');})
  .replace(/[^a-z0-9\s]/g,' ')
  .replace(/\s+/g,' ').trim();
}
const stopWords=new Set(['the','a','an','and','or','of','to','in','on','for','with','that','this','it','is','was','are','be','been','being','verse','says','saying','about','like','where','when','what','which','who','from','into','at','by','as','i','me','my']);
const synonymMap={
 'spoke':['spake','spoken'],'speak':['spake','speaketh'],'different':['divers'],'ways':['manners'],'long':['time'],'ago':['past'],
 'love':['charity'],'Holy':['holy'],'spirit':['ghost'],'Spirit':['ghost'],'you':['thee','thou'],'your':['thy'],'forever':['everlasting','ever']
};
function queryTokens(q){
 const raw=normalizeSearch(q).split(' ').filter(function(t){return t.length>1&&!stopWords.has(t);});
 const set=new Set(raw);
 raw.forEach(function(t){(synonymMap[t]||[]).forEach(function(s){set.add(s);});});
 return Array.from(set);
}
function scoreRow(row,q,tokens){
 const nq=normalizeSearch(q);
 let score=0;
 if(row.norm.includes(nq)&&nq.length>3)score+=120;
 let hit=0;
 tokens.forEach(function(t){
  if(row.norm.includes(t)){score+=8;hit++;}
  else if(t.length>5&&row.norm.includes(t.slice(0,5))){score+=3;hit++;}
 });
 if(hit===tokens.length&&tokens.length)score+=35;
 score+=hit*hit;
 return score;
}
async function searchVerses(query){
 const direct=parseVerseRef(query.trim());
 if(direct){
  const exact=await verseTextFor(query.trim().replace(/\s+/g,' '));
  if(exact)return [{ref:query.trim().replace(/\s+/g,' '),text:exact,score:999,exact:true}];
 }
 await loadKjv();
 const tokens=queryTokens(query);
 if(!tokens.length)return [];
 return kjvSearchRows.map(function(row){return {ref:row.ref,text:row.text,score:scoreRow(row,query,tokens)};})
  .filter(function(x){return x.score>0;})
  .sort(function(a,b){return b.score-a.score;})
  .slice(0,12);
}
function renderVerseResults(){
 const box=document.querySelector('#verseResults');
 const showMore=document.querySelector('#showMoreVerses');
 if(!currentVerseMatches.length){box.innerHTML='';showMore.hidden=true;return;}
 const rows=currentVerseMatches.slice(0,visibleVerseResults);
 box.innerHTML='<p><strong>Possible matches</strong></p>'+rows.map(function(r,i){
  return '<article class="verse-result"><span class="result-tag">'+(r.exact?'Exact reference':(i===0?'Best match':'Possible match'))+'</span><h3>'+escapeHtml(r.ref)+'</h3><p>'+escapeHtml(r.text)+'</p><button class="copy-btn" type="button" data-copy-ref="'+escapeHtml(r.ref)+'" data-copy-text="'+escapeHtml(r.text)+'">Copy verse</button></article>';
 }).join('');
 showMore.hidden=visibleVerseResults>=currentVerseMatches.length;
 document.querySelectorAll('[data-copy-ref]').forEach(function(btn){
  btn.onclick=function(){copyVerse(btn.dataset.copyRef,btn.dataset.copyText,btn);};
 });
}
async function copyVerse(ref,text,btn){
 const value=text+' — '+ref+' (KJV)';
 try{
  await navigator.clipboard.writeText(value);btn.textContent='Copied ✓';
 }catch(e){
  const ta=document.createElement('textarea');ta.value=value;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();btn.textContent='Copied ✓';
 }
 setTimeout(function(){btn.textContent='Copy verse';},1600);
}

document.querySelector('#passageForm').addEventListener('submit',function(e){
 e.preventDefault();
 const input=document.querySelector('#passageInput');
 const parsed=parsePassages(input.value);
 if(parsed.refs.length){
  addRefs(parsed.refs);input.value='';
  entryStatus.textContent=parsed.errors.length?'Added what I could. I could not read: '+parsed.errors.join(', '):'Added to your reading.';
 }else{
  entryStatus.textContent='Try something like Genesis 31, Psalm 1, Matthew 1, or Genesis 31-33.';
 }
});
document.querySelector('#addSelected').onclick=function(){
 addRefs([bookSelect.value+' '+chapterSelect.value]);
 entryStatus.textContent='Added '+bookSelect.value+' '+chapterSelect.value+'.';
};
bookSelect.onchange=updateChapterOptions;
document.querySelector('#clearQueue').onclick=function(){
 if(!readingQueue.length)return;
 if(confirm('Clear the whole reading list on this device?')){
  readingQueue=[];openedNotes.clear();saveState();render();
 }
};
document.querySelector('#findVerseOpen').onclick=function(){document.querySelector('#findVerseDialog').showModal();};
document.querySelector('#sourcesOpen').onclick=function(){document.querySelector('#sourcesDialog').showModal();};
document.querySelectorAll('[data-close]').forEach(function(btn){btn.onclick=function(){document.getElementById(btn.dataset.close).close();};});
document.querySelectorAll('dialog').forEach(function(dlg){dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close();});});
document.querySelector('#verseSearchForm').addEventListener('submit',async function(e){
 e.preventDefault();
 const input=document.querySelector('#verseSearch');
 const status=document.querySelector('#verseSearchStatus');
 const query=input.value.trim();
 if(!query){status.textContent='Type a few words, an idea, or a reference such as Hebrews 1:1.';return;}
 status.textContent='Searching the KJV…';
 try{
  currentVerseMatches=await searchVerses(query);visibleVerseResults=3;
  status.textContent=currentVerseMatches.length?'':'I could not find a strong match. Try changing a few words.';
  renderVerseResults();
 }catch(err){
  status.textContent='The KJV search file could not be loaded right now. Please try again.';
 }
});
document.querySelector('#showMoreVerses').onclick=function(){visibleVerseResults=Math.min(visibleVerseResults+5,currentVerseMatches.length);renderVerseResults();};

populatePickers();
render();
