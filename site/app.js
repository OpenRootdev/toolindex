'use strict';
const $ = selector => document.querySelector(selector);
const rows = [...document.querySelectorAll('.listing')];
const base = document.body.dataset.siteBase;
let category = 'All';
// Fisher-Yates runs once so search, filters and expiry checks never move the mix.
const shuffled = [...rows];
for (let i = shuffled.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}
const randomRank = new Map(shuffled.map((row, i) => [row, i]));

function activeBoost(row) {
  const now = Date.now();
  const start = Date.parse(row.dataset.boostStart);
  const end = Date.parse(row.dataset.boostEnd);
  const checked = Date.parse(row.dataset.boostChecked);
  return start <= now && now < end && checked <= now && now - checked <= 48 * 3600 * 1000;
}

function refreshResults() {
  const query = $('#search').value.toLocaleLowerCase();
  const order = $('#sort-order')?.value || 'random';
  const ordered = [...rows].sort((a, b) => {
    if (order === 'popular') return Number(b.dataset.visits || 0) - Number(a.dataset.visits || 0) || randomRank.get(a) - randomRank.get(b);
    if (order === 'recent') return (Date.parse(b.dataset.published) || 0) - (Date.parse(a.dataset.published) || 0) || randomRank.get(a) - randomRank.get(b);
    return randomRank.get(a) - randomRank.get(b);
  });
  if ($('#sort-help')) $('#sort-help').textContent = ({random:'A fresh mix of tools on each visit.', popular:'Most tool-page visits since counting began. Ties keep the random order.', recent:'Newest listings first.'})[order];
  let count = 0;
  for (const row of ordered) {
    const type = $('#tool-type').value;
    row.hidden = !((category === 'All' || row.dataset.category === category) && (type === 'All' || row.dataset.type === type) && row.dataset.search.toLocaleLowerCase().includes(query));
    if (!row.hidden) count++;
    $('#listings').append(row);
    const label = row.querySelector('[data-boost-for]');
    if (label) label.hidden = !activeBoost(row);
  }
  $('#empty').hidden = count > 0;
  $('#count').textContent = count + ' tool' + (count === 1 ? '' : 's') + ' shown';
}

// Ordinary links navigate to complete static pages. Older listing badges still work.
function legacyLink() {
  if (document.body.dataset.page !== 'home') return;
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  if (rows.some(row => row.dataset.toolId === id)) location.replace(base + 'tools/' + id + '/');
}

if ($('#search')) {
  $('#search').disabled = false;
  $('#search').addEventListener('input', refreshResults);
  $('#tool-type').disabled = false;
  $('#tool-type').addEventListener('change', refreshResults);
  $('#sort-order').disabled = false;
  $('#sort-order').addEventListener('change', refreshResults);
  for (const button of $('#categories').children) {
    button.disabled = false;
    button.addEventListener('click', () => {
      category = button.textContent;
      for (const sibling of $('#categories').children) sibling.setAttribute('aria-pressed', String(sibling === button));
      refreshResults();
    });
  }
  refreshResults();
  legacyLink();
  window.addEventListener('hashchange', legacyLink);
}

// Count visible detail-page visits once per tab session. Only aggregate totals
// are stored by the server; no account, cookie or visitor identifier is sent.
const detailTool = document.body.dataset.page === 'detail' && document.querySelector('[data-tool-id]');
if (detailTool) {
  let recording = false;
  const recordVisit = async () => {
    if (document.hidden || recording) return;
    const key = 'toolindex-visit:' + detailTool.dataset.toolId;
    try { if (sessionStorage.getItem(key)) return; } catch {}
    recording = true;
    try {
      const response = await fetch('/api/public/tools/' + encodeURIComponent(detailTool.dataset.toolId) + '/visit', {method:'POST', credentials:'omit', headers:{'Content-Type':'application/json'}, body:'{}'});
      if (response.ok) { try { sessionStorage.setItem(key, '1'); } catch {} }
    } catch {} finally { recording = false; }
  };
  recordVisit();
  document.addEventListener('visibilitychange', recordVisit);
}

function refreshBoosts() {
  for (const harness of document.querySelectorAll('[data-tool-id]')) {
    for (const label of harness.querySelectorAll('[data-boost-for]')) label.hidden = !activeBoost(harness);
  }
  if ($('#search')) refreshResults();
}
refreshBoosts();
// Refresh promotional placement when an open tab outlives a grant or check.
setInterval(refreshBoosts, 60000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshBoosts(); });

for (const button of document.querySelectorAll('.copy[data-copy-target]')) {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const source = document.getElementById(button.dataset.copyTarget);
    try {
      await navigator.clipboard.writeText(source.textContent);
      button.textContent = 'Copied';
      $('#announcement').textContent = 'Copied to clipboard';
      setTimeout(() => button.textContent = 'Copy', 1800);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(source);
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = 'Select and copy';
      $('#announcement').textContent = 'Text selected for manual copying.';
    }
  });
}

// Keep the neutral initials visible if an optional external image fails.
for (const image of document.querySelectorAll('.tool-logo')) {
  const fallback = () => { image.hidden = true; image.parentElement.classList.remove('has-logo'); };
  image.addEventListener('error', fallback);
  if (image.complete && image.naturalWidth === 0) fallback();
}
