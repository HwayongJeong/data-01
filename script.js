const U = 'https://images.unsplash.com/';
const Q = '?w=1200&auto=format&fit=crop&q=80';
const IMAGES = [
  { id: 1,  cat: 'landscape', title: '산정호수의 새벽',    src: U + 'photo-1501785888041-af3ef285b470' + Q, ar: '4/5' },
  { id: 2,  cat: 'landscape', title: '안개 낀 숲길',       src: U + 'photo-1470071459604-3b5ec3a7fe05' + Q, ar: '3/4' },
  { id: 3,  cat: 'landscape', title: '능선의 아침',        src: U + 'photo-1506905925346-21bda4d32df4' + Q, ar: '4/3' },
  { id: 4,  cat: 'city',      title: '뉴욕, 비 오는 거리', src: U + 'photo-1480714378408-67cf0d13bc1b' + Q, ar: '3/4' },
  { id: 5,  cat: 'city',      title: '도시의 황혼',        src: U + 'photo-1502920917128-1aa500764cbd' + Q, ar: '4/5' },
  { id: 6,  cat: 'city',      title: '빌딩 숲',            src: U + 'photo-1444723121867-7a241cacace9' + Q, ar: '4/3' },
  { id: 7,  cat: 'object',    title: '책상 위 오후',       src: U + 'photo-1495774856032-8b90bbb32b32' + Q, ar: '4/5' },
  { id: 8,  cat: 'object',    title: '옛 타자기',          src: U + 'photo-1517637382994-f02da38c6728' + Q, ar: '3/4' },
  { id: 9,  cat: 'object',    title: '빈티지 카메라',      src: U + 'photo-1542038784456-1ea8e935640e' + Q, ar: '4/5' },
  { id: 10, cat: 'travel',    title: '베네치아 운하',      src: U + 'photo-1523906834658-6e24ef2386f9' + Q, ar: '4/3' },
  { id: 11, cat: 'travel',    title: '파리, 에펠탑',       src: U + 'photo-1502602898657-3e91760cbb34' + Q, ar: '3/4' },
  { id: 12, cat: 'travel',    title: '산을 오르며',        src: U + 'photo-1503220317375-aaad61436b1b' + Q, ar: '3/4' },
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lbInner = document.getElementById('lbInner');
let filter = 'all';

function render() {
  gallery.innerHTML = '';
  IMAGES.filter((i) => filter === 'all' || i.cat === filter).forEach((i) => {
    const el = document.createElement('figure');
    el.className = 'tile';
    el.innerHTML = `
      <img class="img" src="${i.src}" alt="${i.title}" loading="lazy" style="aspect-ratio:${i.ar}" />
      <figcaption class="cap">${i.title}</figcaption>
    `;
    el.addEventListener('click', () => openLb(i));
    gallery.appendChild(el);
  });
}

function openLb(i) {
  lbInner.innerHTML = `<img src="${i.src}" alt="${i.title}" />`;
  lbInner.style.aspectRatio = i.ar;
  lightbox.hidden = false;
}

function closeLb() {
  lightbox.hidden = true;
}

document.querySelector('.close').addEventListener('click', closeLb);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLb(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lightbox.hidden) closeLb(); });

document.querySelectorAll('.f').forEach((b) => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.f').forEach((x) => x.classList.remove('active'));
    b.classList.add('active');
    filter = b.dataset.f;
    render();
  });
});

render();
