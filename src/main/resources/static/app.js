const openBtn=document.getElementById('openBtn');
const envelope=document.getElementById('envelope');
const surprise=document.getElementById('surprise');
const toast=document.getElementById('toast');
const reasons=[
  "Your smile deserves its own little sunshine. ☀️",
  "You make even the simplest moments memorable. 🌸",
  "Your presence feels like coming home. 🏡",
  "Because being able to make you smile is a pretty lovely feeling. 💞",
  "Simply because you are wonderfully, irreplaceably you. ✨"
];
let reasonIndex=0;
function floatHearts(count=14){for(let i=0;i<count;i++){const h=document.createElement('span');h.className='heart-float';h.textContent=['💗','💕','💖','🌷'][Math.floor(Math.random()*4)];h.style.left=Math.random()*100+'vw';h.style.fontSize=(16+Math.random()*22)+'px';h.style.animationDuration=(3+Math.random()*3)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),6500)}}
function showToast(text){toast.textContent=text;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
openBtn.addEventListener('click',async()=>{
  envelope.classList.add('open');openBtn.textContent='Surprise opened 💗';
  setTimeout(()=>{surprise.classList.remove('hidden');surprise.scrollIntoView({behavior:'smooth',block:'center'});floatHearts(24)},450);
  try{const res=await fetch('/api/love');if(res.ok){const data=await res.json();document.getElementById('message').textContent=data.message}}
  catch(e){/* The sweet note still works if the API is unavailable. */}
});
document.getElementById('reasonBtn').addEventListener('click',()=>{document.getElementById('reason').textContent=reasons[reasonIndex++%reasons.length];floatHearts(8)});
document.getElementById('hugBtn').addEventListener('click',()=>{showToast('A big warm hug is flying your way, Sneha! 🧸💗');floatHearts(18)});
