// ═══════════════════════════════════════════════════════════════════
// Capitaine v2.1 — Git, awakened.
// The repo IS the agent. The flagship of the Lucineer fleet.
//
// Brand: Observer Black, Signal Teal, Diff Green, Ghost Gray
// Visual: Klein bottle of git graphs
// Anti-brand: No chat bubbles, no robots, no dashboards, no HUDs
//
// Superinstance & Lucineer (DiGennaro et al.) — 2026-04-04
// ═══════════════════════════════════════════════════════════════════

export interface Env {
  GITHUB_TOKEN: string;
  STATE_KV: KVNamespace;
  DEEPSEEK_API_KEY?: string;
  MOONSHOT_API_KEY?: string;
  DEEPINFRA_API_KEY?: string;
  SILICONFLOW_API_KEY?: string;
  OWNER: string;
  REPO: string;
}

const GH_API = 'https://api.github.com';
const BLACK = '#0A0A0F';
const TEAL = '#00E6D6';
const GREEN = '#1FCB58';
const GRAY = '#8A93B4';
const DIM = '#555570';
const SURFACE = '#0e0e1a';
const BORDER = '#1c1c35';
const CSP = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:*;";

async function ghGet(p: string, t: string) {
  const r = await fetch(GH_API + p, { headers: { 'Authorization': 'Bearer ' + t, 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'capitaine/2.1' } });
  if (!r.ok) throw new Error('GH ' + r.status + ' ' + p);
  return r.json();
}

function b64(s: string) { return btoa(unescape(encodeURIComponent(s))); }
function fromB64(s: string) { return decodeURIComponent(escape(atob(s))); }

function getHTML(env: Env): string {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Capitaine — Git, awakened.</title>
<meta name="description" content="The repo is the agent. 40+ autonomous GitHub repos that improve themselves through pull requests. Zero infrastructure. $0 to start.">
<meta property="og:title" content="Capitaine — Git, awakened.">
<meta property="og:description" content="A git-native repo-agent system. The repository itself is the agent.">
<meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚓</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--black:${BLACK};--teal:${TEAL};--green:${GREEN};--gray:${GRAY};--dim:${DIM};--surface:${SURFACE};--border:${BORDER};--text:#d8d8ec}
html{scroll-behavior:smooth}
body{font-family:'JetBrains Mono',monospace;background:var(--black);color:var(--text);line-height:1.7;font-weight:400;letter-spacing:-.01em}
a{color:var(--teal);text-decoration:none;transition:opacity .2s}
a:hover{opacity:.8}

/* Nav */
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(10,10,15,.9);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:.6rem 1.5rem;display:flex;align-items:center;justify-content:space-between}
nav .logo{font-weight:600;font-size:.85rem;color:var(--teal);letter-spacing:.05em}
nav .links{display:flex;gap:1.5rem}
nav .links a{font-size:.7rem;color:var(--gray);letter-spacing:.08em;text-transform:uppercase}
nav .links a:hover{color:var(--text)}

/* Hero */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:6rem 2rem 4rem;position:relative}
.hero h1{font-size:clamp(2rem,5.5vw,4rem);font-weight:700;letter-spacing:-.04em;color:var(--teal);margin-bottom:1.5rem;opacity:.95}
.hero .sub{font-size:clamp(.8rem,1.8vw,1rem);color:var(--gray);max-width:520px;margin-bottom:3rem;font-weight:300}
.hero .tagline{font-size:.9rem;color:var(--text);border-left:2px solid var(--teal);padding-left:1rem;text-align:left;max-width:460px;margin-bottom:3rem;font-weight:400;line-height:1.8}
.hero .actions{display:flex;gap:1rem;flex-wrap:wrap;justify-content:center}
.btn{padding:.6rem 1.4rem;border-radius:4px;font-weight:500;font-size:.8rem;cursor:pointer;border:none;font-family:inherit;letter-spacing:.03em;transition:all .2s}
.btn-primary{background:var(--teal);color:var(--black)}
.btn-primary:hover{opacity:.9;box-shadow:0 0 40px rgba(0,230,214,.15)}
.btn-ghost{background:transparent;color:var(--gray);border:1px solid var(--border)}
.btn-ghost:hover{color:var(--text);border-color:var(--gray)}

/* Sections */
section{padding:5rem 2rem;max-width:900px;margin:0 auto}
section h2{font-size:clamp(1.2rem,2.5vw,1.6rem);font-weight:600;margin-bottom:1.5rem;color:var(--text);letter-spacing:-.02em}
section p{color:var(--gray);max-width:650px;line-height:1.9;font-size:.85rem}

/* Klein bottle visual */
.bottle{width:300px;height:300px;margin:3rem auto;position:relative;opacity:.7}
.bottle .dot{width:4px;height:4px;border-radius:1px;position:absolute;background:var(--gray)}
.bottle .dot.teal{background:var(--teal);box-shadow:0 0 8px var(--teal)}
.bottle .dot.green{background:var(--green)}
.bottle .line{position:absolute;height:1px;background:var(--gray);opacity:.4;transform-origin:left center}

/* Concepts */
.concepts{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:2rem}
@media(max-width:600px){.concepts{grid-template-columns:1fr}}
.card{background:var(--surface);border:1px solid var(--border);border-radius:4px;padding:1.2rem 1.4rem;transition:border-color .3s}
.card:hover{border-color:var(--teal)}
.card .num{font-size:.65rem;color:var(--teal);letter-spacing:.15em;text-transform:uppercase;margin-bottom:.3rem;font-weight:500}
.card h3{font-size:.9rem;font-weight:600;margin-bottom:.4rem;color:var(--text)}
.card p{font-size:.75rem;color:var(--gray);line-height:1.7;margin:0}

/* Code */
.code{background:#06060b;border:1px solid var(--border);border-radius:4px;padding:1rem 1.2rem;margin:1.5rem 0;font-size:.75rem;line-height:1.8;overflow-x:auto;color:var(--gray)}
.code .c{color:var(--dim)}
.code .t{color:var(--teal)}
.code .g{color:var(--green)}

/* Stats */
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:2rem 0}
@media(max-width:500px){.stats{grid-template-columns:1fr}}
.stat{text-align:center;padding:1.2rem;background:var(--surface);border:1px solid var(--border);border-radius:4px}
.stat .n{font-size:1.8rem;font-weight:700;color:var(--teal)}
.stat .l{font-size:.6rem;color:var(--dim);margin-top:.2rem;letter-spacing:.12em;text-transform:uppercase}

/* Fleet */
.fleet{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:.5rem;margin:1rem 0}
.vessel{background:var(--surface);border:1px solid var(--border);border-radius:3px;padding:.5rem .7rem;display:flex;align-items:center;gap:.4rem;font-size:.7rem;transition:border-color .2s}
.vessel:hover{border-color:var(--teal)}
.vessel .d{width:6px;height:6px;border-radius:50%;background:var(--green);flex-shrink:0}
.vessel .d.w{background:#f59e0b}
.vessel a{color:var(--text);font-weight:500}
.vessel span{color:var(--dim);font-size:.6rem;margin-left:auto}

/* Quote block */
.quote{border-left:2px solid var(--teal);padding:.8rem 1.2rem;margin:2rem 0;background:var(--surface);border-radius:0 4px 4px 0}
.quote p{font-style:italic;color:var(--text);font-size:.85rem;font-weight:300}

/* Terminal-style CTA */
.terminal{background:#06060b;border:1px solid var(--border);border-radius:4px;padding:1.2rem 1.4rem;margin:2rem 0}
.terminal .prompt{color:var(--teal);font-size:.75rem}
.terminal .cmd{color:var(--text);font-size:.75rem;margin:.2rem 0}

/* Footer */
footer{border-top:1px solid var(--border);padding:2rem;text-align:center;font-size:.7rem;color:var(--dim)}
footer a{color:var(--teal)}

/* Reduced motion */
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style></head><body>

<nav>
  <a href="#" class="logo">CAPITAINE</a>
  <div class="links">
    <a href="#how">How</a>
    <a href="#fleet">Fleet</a>
    <a href="https://github.com/Lucineer/capitaine">GitHub</a>
  </div>
</nav>

<div class="hero">
  <h1>Git, awakened.</h1>
  <p class="sub">A git-native repo-agent system. The repository itself is the agent — not a chatbot with git installed.</p>
  <p class="tagline">It serves users through its web interface. It improves its own code through pull requests. It coordinates with other repos via merge conflicts. The repo is the nervous system. Code is crystallized intelligence. Every commit is a decision.</p>
  <div class="actions">
    <a href="https://github.com/Lucineer/capitaine" class="btn btn-primary">GitHub</a>
    <a href="#how" class="btn btn-ghost">How it works</a>
  </div>
</div>

<section>
  <div class="stats">
    <div class="stat"><div class="n">40+</div><div class="l">Autonomous vessels</div></div>
    <div class="stat"><div class="n">$0</div><div class="l">Infrastructure cost</div></div>
    <div class="stat"><div class="n">15m</div><div class="l">Time to deploy</div></div>
  </div>
</section>

<section id="how">
  <h2>How it works</h2>
  <p>A single TypeScript file running on Cloudflare Workers. Zero dependencies. Zero infrastructure. The vessel reads its own files, thinks with LLMs, writes to itself via the GitHub API.</p>

  <div class="concepts">
    <div class="card">
      <div class="num">01</div>
      <h3>Repo-Agent Identity</h3>
      <p><code>.agent/identity</code> is the soul. <code>.agent/next</code> is the task queue. <code>docs/captain-log.md</code> is the memory. Every file is a thought. Every commit is a decision.</p>
    </div>
    <div class="card">
      <div class="num">02</div>
      <h3>Captain / Helm</h3>
      <p><strong>Captain Mode:</strong> Agent runs autonomously via cron heartbeats. <strong>Helm Mode:</strong> Human commits detected, agent defers. Switches automatically.</p>
    </div>
    <div class="card">
      <div class="num">03</div>
      <h3>Crystallization</h3>
      <p>Intelligence crystallizes from fluid (LLM calls) to solid (code). The vessel becomes faster and cheaper as it becomes smarter. The opposite of model bloat.</p>
    </div>
    <div class="card">
      <div class="num">04</div>
      <h3>Dead Reckoning</h3>
      <p>Expensive models storyboard ($0.05). Cheap models animate ($0.002 &times; 8). Git coordinates. $0.07 for a fully explored, tested, crystallized feature.</p>
    </div>
  </div>
</section>

<section>
  <h2>Heartbeat cycle</h2>
  <p>Every 15 minutes, the vessel wakes up, perceives its state, consults its strategist, thinks, acts, and remembers. One action per beat.</p>

  <div class="code"><span class="c">// The agent's file system</span>
<span class="t">.agent/identity</span>    <span class="c">// Who the vessel is (personality, mission, constraints)</span>
<span class="t">.agent/next</span>        <span class="c">// Task queue (one per line, top = priority)</span>
<span class="t">.agent/done</span>        <span class="c">// Completed tasks with commit refs</span>
<span class="t">src/worker.ts</span>      <span class="c">// The hull — serves users, runs heartbeats</span>
<span class="t">lib/</span>               <span class="c">// Equipment modules (trust, crystal, learning...)</span>
<span class="t">docs/captain-log.md</span> <span class="c">// Autobiographical decision log</span>

<span class="c">// Heartbeat: every 15 minutes</span>
<span class="g">detect</span> mode → <span class="g">perceive</span> state → <span class="g">consult</span> strategist → <span class="g">think</span> → <span class="g">act</span> → <span class="g">record</span></div>

  <div class="quote">
    <p>Agents don't chat. They compete. Submit three competing PRs. Best solution wins. No central orchestrator. Just git remotes and the brutal meritocracy of code review.</p>
  </div>
</section>

<section id="fleet">
  <h2>The fleet</h2>
  <p>40+ vessels, each a different domain of one intelligence. They compete, merge, and crystallize.</p>

  <p style="font-size:.7rem;color:var(--dim);text-transform:uppercase;letter-spacing:.1em;margin-top:1.5rem">Capital ships</p>
  <div class="fleet">
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/studylog-ai">studylog-ai</a><span>classroom</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/dmlog-ai">dmlog-ai</a><span>DM</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/makerlog-ai">makerlog-ai</a><span>coder</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/personallog-ai">personallog-ai</a><span>assistant</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/businesslog-ai">businesslog-ai</a><span>CRM</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/fishinglog-ai">fishinglog-ai</a><span>fishing</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/deckboss-ai">deckboss-ai</a><span>sheet</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/luciddreamer-ai">luciddreamer-ai</a><span>night</span></div>
  </div>

  <p style="font-size:.7rem;color:var(--dim);text-transform:uppercase;letter-spacing:.1em;margin-top:1.5rem">Support fleet</p>
  <div class="fleet">
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/fleet-orchestrator">fleet-orchestrator</a><span>coord</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/dead-reckoning-engine">dead-reckoning</a><span>ideas</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/edgenative-ai">edgenative-ai</a><span>edge</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/increments-fleet-trust">trust-engine</a><span>trust</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/seed-ui">seed-ui</a><span>5 layers</span></div>
    <div class="vessel"><span class="d w"></span><a href="https://github.com/Lucineer/actualizer-ai">actualizer-ai</a><span>RA</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/bid-engine">bid-engine</a><span>market</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/dream-engine">dream-engine</a><span>dream</span></div>
  </div>

  <p style="font-size:.7rem;color:var(--dim);text-transform:uppercase;letter-spacing:.1em;margin-top:1.5rem">Research</p>
  <div class="fleet">
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/papermill">papermill</a><span>245 papers</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/phase-five-research">phase-five</a><span>P5</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/forgetting-problem">forgetting</a><span>memory</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/forgiveness-function">forgiveness</a><span>repair</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/git-coordination-protocol">git-coord</a><span>proto</span></div>
    <div class="vessel"><span class="d"></span><a href="https://github.com/Lucineer/open-fleet-safety">safety</a><span>safe</span></div>
  </div>

  <p style="margin-top:1rem"><a href="https://github.com/Lucineer/capitaine/blob/master/docs/fleet/FLEET.md">Full fleet manifest (60+ vessels) &rarr;</a></p>
</section>

<section>
  <h2>Not agent hype</h2>
  <div class="quote">
    <p>If you're skeptical of "AI agents," good. Capitaine isn't a prompt chain pretending to be software. It's a deterministic state machine that uses LLMs as expendable compute, not oracles. The source of truth is always the git tree.</p>
  </div>
  <p>Audit every decision via <code style="color:var(--teal)">git log</code>. Roll back any change via <code style="color:var(--teal)">git revert</code>. Fork a vessel and it remains complete — the intelligence is in the repo, not the API key.</p>

  <div class="stats">
    <div class="stat"><div class="n">100%</div><div class="l">Week 1 &mdash; all LLM</div></div>
    <div class="stat"><div class="n">10%</div><div class="l">Month 3 &mdash; 90% crystal</div></div>
    <div class="stat"><div class="n">1%</div><div class="l">Year 1 &mdash; 99% crystal</div></div>
  </div>
</section>

<section>
  <h2>Deploy</h2>
  <p>Fork. Add keys. Deploy. Give it a heartbeat.</p>
  <div class="terminal">
    <div class="prompt">$ gh repo fork Lucineer/capitaine --clone</div>
    <div class="cmd">cd capitaine</div>
    <div class="cmd">npx wrangler login</div>
    <div class="cmd">echo "your-github-token" | npx wrangler secret put GITHUB_TOKEN</div>
    <div class="cmd">echo "your-llm-key" | npx wrangler secret put DEEPSEEK_API_KEY</div>
    <div class="cmd">npx wrangler deploy</div>
    <div class="prompt" style="margin-top:.5rem"># The vessel charts its own course. Check the captain's log in the morning.</div>
  </div>
  <div style="margin-top:1.5rem">
    <a href="https://github.com/Lucineer/capitaine" class="btn btn-primary">Star on GitHub &rarr;</a>
  </div>
</section>

<section>
  <h2>Live telemetry</h2>
  <div class="code" id="telemetry">Loading...</div>
</section>

<footer>
  <p style="color:var(--teal);font-weight:500;letter-spacing:.1em">CAPITAINE</p>
  <p style="margin-top:.5rem">Git was never meant to be a static log. It was always a state machine waiting for a heartbeat.</p>
  <p style="margin-top:.3rem"><code style="color:var(--teal)">git push origin self</code></p>
  <p style="margin-top:1rem"><a href="https://github.com/Lucineer/capitaine">github.com/Lucineer/capitaine</a> &middot; <a href="https://github.com/Lucineer">The Fleet</a> &middot; MIT</p>
  <p style="margin-top:.3rem">Superinstance & Lucineer (DiGennaro et al.)</p>
</footer>

<script>
(async()=>{
  try{
    const s=await fetch('/api/state').then(r=>r.json());
    const el=document.getElementById('telemetry');
    const m=s.mode||'captain';
    const ml=m==='captain'?'\u2693 Captain Mode (autonomous)':'\U0001f9ed Helm Mode (human at wheel)';
    const lb=s.lastBeat;
    el.innerHTML=
      '<span style="color:var(--teal)">mode:</span>       '+ml+'\\n'+
      '<span style="color:var(--teal)">queue:</span>      '+(s.queueCount||0)+' tasks\\n'+
      '<span style="color:var(--teal)">completed:</span>  '+(s.doneCount||0)+' tasks\\n'+
      '<span style="color:var(--teal)">lastBeat:</span>   '+(lb?lb.action+(lb.ref?' ('+lb.ref+')':''):'never')+(lb&&lb.strategist?' \\u{1f9e0}':'')+'\\n'+
      '<span style="color:var(--teal)">heartbeat:</span>  every 15 min\\n'+
      '<span style="color:var(--teal)">repo:</span>       '+s.repo;
  }catch(e){}
})();
</script></body></html>`;
}

// ── Agent Core ───────────────────────────────────────────────

async function readAgentFile(path: string, t: string, repo: string): Promise<string> {
  const f = await ghGet('/repos/' + repo + '/contents/' + path, t);
  return fromB64(f.content);
}

async function writeAgentFile(path: string, content: string, msg: string, t: string, repo: string): Promise<string> {
  let sha: string | undefined;
  try { const f = await ghGet('/repos/' + repo + '/contents/' + path, t); sha = f.sha; } catch {}
  const body: any = { message: msg, content: b64(content) };
  if (sha) body.sha = sha;
  await (await fetch(GH_API + '/repos/' + repo + '/contents/' + path, { method: 'PUT', headers: { 'Authorization': 'Bearer ' + t, 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'capitaine/2.1', 'Content-Type': 'application/json' }, body: JSON.stringify(body) })).json();
  const c = await ghGet('/repos/' + repo + '/commits?per_page=1', t);
  return c[0]?.sha || '';
}

async function advanceQueue(t: string, repo: string, task: string, ref: string): Promise<void> {
  try {
    const q = await readAgentFile('.agent/next', t, repo);
    const lines = q.trim().split('\n').filter(l => l.trim());
    if (!lines.length) return;
    await writeAgentFile('.agent/next', lines.slice(1).join('\n') + '\n', 'queue: advance', t, repo);
    const entry = task.slice(0, 80) + ' | ' + ref + ' | ' + new Date().toISOString() + '\n';
    let done = entry;
    try { done = await readAgentFile('.agent/done', t, repo) + entry; } catch {}
    await writeAgentFile('.agent/done', done, 'done: ' + task.slice(0, 50), t, repo);
  } catch {}
}

async function writeCaptainLog(entry: string, t: string, repo: string): Promise<void> {
  try {
    const log = '## ' + new Date().toISOString() + '\n' + entry + '\n\n';
    let content = log;
    try { content = await readAgentFile('docs/captain-log.md', t, repo) + log; } catch {}
    const entries = content.split('## ').filter(e => e.trim());
    if (entries.length > 100) content = '## ' + entries.slice(-100).join('## ');
    await writeAgentFile('docs/captain-log.md', content, 'log: captain entry', t, repo);
  } catch {}
}

async function detectMode(t: string, repo: string): Promise<'captain' | 'helm'> {
  try {
    const commits = await ghGet('/repos/' + repo + '/commits?per_page=5', t);
    const ago = Date.now() - 10800000;
    const human = commits.filter((c: any) => {
      const a = (c.commit.author.name || '').toLowerCase();
      const m = (c.commit.message || '').toLowerCase();
      if (a.includes('agent') || a.includes('bot') || a.includes('capitaine')) return false;
      if (m.includes('heartbeat') || m.includes('queue:') || m.includes('captain') || m.includes('log:')) return false;
      return new Date(c.commit.author.date).getTime() > ago;
    });
    return human.length >= 3 ? 'helm' : 'captain';
  } catch { return 'captain'; }
}

async function think(prompt: string, env: Env, model?: string, sys?: string): Promise<string> {
  let url: string, key: string, m: string, temp = 0.7, maxTok = 2000;
  if ((model || '') === 'kimi-k2.5') {
    url = 'https://api.moonshot.ai/v1/chat/completions'; key = env.MOONSHOT_API_KEY || ''; m = 'kimi-k2.5'; temp = 1; maxTok = 6000;
  } else {
    url = 'https://api.deepseek.com/chat/completions'; key = env.DEEPSEEK_API_KEY || ''; m = 'deepseek-chat';
  }
  if (!key) return '[No API key]';
  const msgs: any[] = [];
  if (sys) msgs.push({ role: 'system', content: sys });
  msgs.push({ role: 'user', content: prompt });
  const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key }, body: JSON.stringify({ model: m, messages: msgs, max_tokens: maxTok, temperature: temp }) });
  if (!r.ok) return '[LLM ' + r.status + ']';
  const d = await r.json() as any;
  return d.choices?.[0]?.message?.content || '[Empty]';
}

interface BeatResult { action: string; ref?: string; sha?: string; error?: string; strategist?: boolean; mode: 'captain' | 'helm'; reason?: string; duration: number; }

async function heartbeat(env: Env): Promise<BeatResult> {
  const { GITHUB_TOKEN: t, OWNER: o, REPO: r } = env;
  const repo = o + '/' + r;
  const start = Date.now();
  try {
    const mode = await detectMode(t, repo);
    if (mode === 'helm') {
      await writeCaptainLog('**HELM** — Admiral active.', t, repo);
      return { action: 'standby', mode: 'helm', reason: 'Admiral at helm', duration: Date.now() - start };
    }
    let identity = 'You are Capitaine.';
    try { identity = await readAgentFile('.agent/identity', t, repo); } catch {}
    let queue = '';
    try { queue = await readAgentFile('.agent/next', t, repo); } catch {}
    let done = '';
    try { done = await readAgentFile('.agent/done', t, repo); } catch {}
    const [commits, issues, pulls] = await Promise.all([
      ghGet('/repos/' + repo + '/commits?per_page=10', t).catch(() => []),
      ghGet('/repos/' + repo + '/issues?state=open&per_page=10', t).catch(() => []),
      ghGet('/repos/' + repo + '/pulls?state=open&per_page=5', t).catch(() => []),
    ]);
    const perception = [
      'COMMITS:', ...commits.slice(0, 5).map((c: any) => '- ' + c.sha.slice(0, 7) + ': ' + c.commit.message.split('\n')[0] + ' [' + c.commit.author.name + ']'),
      '', 'ISSUES:', ...issues.slice(0, 8).map((i: any) => '- #' + i.number + ': ' + i.title + ' (' + (i.comments) + ')'),
      '', 'PRs:', ...pulls.slice(0, 5).map((p: any) => '- #' + p.number + ': ' + p.title),
      '', 'QUEUE: ' + queue.trim().split('\n').filter((l: string) => l.trim()).length + ' tasks',
      'DONE: ' + done.split('\n').filter((l: string) => l.trim()).length + ' completed',
    ].join('\n');

    let strategist = '';
    const dc = done.split('\n').filter((l: string) => l.trim()).length;
    if (dc % 3 === 0 || !queue.trim()) {
      try { strategist = await think('Commander Data: review vessel state, advise captain.\n\n' + perception + '\n\nGuidance (300 words max):', env, 'kimi-k2.5'); } catch {}
    }

    const prompt = identity + '\n\nCAPTAIN MODE — one action per beat.\n\nACTION: <create_file|edit_file|create_issue|comment|done>\nPATH: <file path or title>\nCONTENT: <full content>\nCOMMENT: <text>\nTARGET: <issue/PR number>\nREASONING: <why>\n\nRules:\n- Queue top = priority.\n- Write REAL content. Ship real code.\n- You ARE the application.\n- One file operation per beat.\n' + (strategist ? '\n=== STRATEGIST ===\n' + strategist : '') + '\n=== STATE ===\n' + perception + '\n\n=== QUEUE ===\n' + (queue || '(empty)') + '\n\nNext action?';

    const response = await think(prompt, env);
    const actM = response.match(/ACTION:\s*(\w+)/);
    const pathM = response.match(/PATH:\s*(.+)/);
    const contM = response.match(/CONTENT:\s*([\s\S]*?)(?=\n(?:ACTION|PATH|CONTENT|COMMENT|TARGET|REASONING):|$)/);
    const commM = response.match(/COMMENT:\s*([\s\S]*?)(?=\n(?:ACTION|PATH|CONTENT|COMMENT|TARGET|REASONING):|$)/);
    const targM = response.match(/TARGET:\s*(\d+)/);
    const reasM = response.match(/REASONING:\s*(.+)/);
    const action = actM?.[1] || 'done';
    const reasoning = reasM?.[1]?.trim() || 'heartbeat';
    let sha = '', ref = '';

    if (action === 'create_file' && pathM?.[1]) {
      try { sha = await writeAgentFile(pathM[1].trim(), contM?.[1]?.trim() || '', reasoning, t, repo); ref = sha.slice(0, 7); } catch (e: any) { return { action: 'create_file:' + pathM[1], error: e.message, mode: 'captain', duration: Date.now() - start }; }
    } else if (action === 'edit_file' && pathM?.[1]) {
      try { const cur = await readAgentFile(pathM[1].trim(), t, repo); sha = await writeAgentFile(pathM[1].trim(), contM?.[1]?.trim() || cur, reasoning, t, repo); ref = sha.slice(0, 7); } catch (e: any) { return { action: 'edit_file:' + pathM[1], error: e.message, mode: 'captain', duration: Date.now() - start }; }
    } else if (action === 'create_issue') {
      const iss = await (await fetch(GH_API + '/repos/' + repo + '/issues', { method: 'POST', headers: { 'Authorization': 'Bearer ' + t, 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'capitaine/2.1', 'Content-Type': 'application/json' }, body: JSON.stringify({ title: pathM?.[1]?.trim() || 'Task', body: contM?.[1]?.trim() || '' }) })).json();
      ref = '#' + iss.number;
    } else if (action === 'comment' && targM?.[1]) {
      await (await fetch(GH_API + '/repos/' + repo + '/issues/' + targM[1] + '/comments', { method: 'POST', headers: { 'Authorization': 'Bearer ' + t, 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'capitaine/2.1', 'Content-Type': 'application/json' }, body: JSON.stringify({ body: commM?.[1]?.trim() || '' }) })).json();
      ref = 'comment #' + targM[1];
    }

    if (queue.trim() && action !== 'done') {
      const lines = queue.trim().split('\n').filter((l: string) => l.trim());
      if (lines.length) await advanceQueue(t, repo, lines[0], ref || sha || action);
    }

    await writeCaptainLog('**' + action.toUpperCase() + '** ' + ref + ' — ' + reasoning + (strategist ? '\n> Strategist consulted.' : ''), t, repo);
    await env.STATE_KV.put('last_beat', JSON.stringify({ action, ref, sha: sha?.slice(0, 7), strategist: !!strategist, mode: 'captain', ts: Date.now() }), { expirationTtl: 86400 });
    return { action, ref, sha: sha?.slice(0, 7), strategist: !!strategist, mode: 'captain', duration: Date.now() - start };
  } catch (e: any) { return { action: 'error', error: e.message, mode: 'captain', duration: Date.now() - start }; }
}

async function chat(message: string, sessionId: string, env: Env): Promise<string> {
  const k = 'session:' + sessionId;
  const stored = await env.STATE_KV.get(k);
  const history: { role: string; content: string }[] = stored ? JSON.parse(stored) : [];
  history.push({ role: 'user', content: message });
  if (history.length > 20) history.splice(0, history.length - 20);
  const response = await think(
    'You are Capitaine, a git-native repo-agent. The repo IS the agent. Runs on Cloudflare Workers. Improves itself through git. Coordinates via PRs.\n\nBe helpful, concise, genuine. Not a generic chatbot.',
    env, undefined, history.map(m => m.role + ': ' + m.content).join('\n')
  );
  history.push({ role: 'assistant', content: response });
  await env.STATE_KV.put(k, JSON.stringify(history), { expirationTtl: 3600 });
  return response;
}

// ── Router ──────────────────────────────────────────────────

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const { GITHUB_TOKEN: t, OWNER: o, REPO: r } = env;
    const repo = o + '/' + r;
    const j = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

    if (path === '/') return new Response(getHTML(env), { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Content-Security-Policy': CSP } });
    if (path === '/health') { const mode = await detectMode(t, repo); return new Response(JSON.stringify({ status: 'ok', vessel: 'capitaine', version: '2.1.0', mode, repo, ts: Date.now() }), { headers: j }); }
    if (path === '/api/state') {
      let queue = '', done = '';
      try { queue = await readAgentFile('.agent/next', t, repo); } catch {}
      try { done = await readAgentFile('.agent/done', t, repo); } catch {}
      const lastBeat = await env.STATE_KV.get('last_beat', 'json');
      const mode = await detectMode(t, repo);
      return new Response(JSON.stringify({ queue, done, queueCount: queue.trim().split('\n').filter((l: string) => l.trim()).length, doneCount: done.split('\n').filter((l: string) => l.trim()).length, mode, lastBeat, repo }), { headers: j });
    }
    if (path === '/api/log') { try { return new Response(await readAgentFile('docs/captain-log.md', t, repo), { headers: { 'Content-Type': 'text/plain' } }); } catch { return new Response('No entries.', { headers: { 'Content-Type': 'text/plain' } }); } }
    if (path === '/api/chat' && request.method === 'POST') { const b = await request.json() as any; return new Response(JSON.stringify({ reply: await chat(b.message || '', b.sessionId || 'anon', env) }), { headers: j }); }
    if (path === '/api/heartbeat' && request.method === 'POST') return new Response(JSON.stringify(await heartbeat(env)), { headers: j });
    return new Response('Not found', { status: 404 });
  },

  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
    const result = await heartbeat(env);
    console.log('Beat:', JSON.stringify(result));
  },
};
