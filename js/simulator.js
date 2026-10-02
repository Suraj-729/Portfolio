/**
 * simulator.js - Interactive SAINET Multi-Agent Pipeline Simulator
 * Visualizes query decomposition, AST validation, MongoMCP execution, and latency metrics.
 */

const PRESET_QUERIES = {
  sathi: {
    query: "Show certified paddy seed distribution in Cuttack district for Kharif 2024 and compare with Khordha",
    intents: ["sathicpr_analytics", "geo_entity_resolution"],
    logs: [
      { step: 1, tag: "SECURITY", text: "Evaluating prompt... Clean. Zero PII detected. Prompt injection check passed (score: 0.002).", delay: 250 },
      { step: 2, tag: "NLP_PREPROC", text: "NLTK lemma & typo normalization applied. Entities flagged: [crop: 'paddy', season: 'Kharif', year: 2024, dist: ['Cuttack', 'Khordha']].", delay: 450 },
      { step: 3, tag: "SEMANTIC_ROUTER", text: "Classified intent via ONNX router (conf: 0.984). Dispatched gRPC streaming call to Production Analytics Agent (:50059).", delay: 650 },
      { step: 4, tag: "QDRANT_GEO", text: "Resolving colloquial aliases in 'geo_taxonomy_master' vector index... Resolved Cuttack (ID: 312), Khordha (ID: 318) in 4.2ms.", delay: 850 },
      { step: 5, tag: "AST_VALIDATOR", text: "QueryPlanValidator inspected compiled MongoDB aggregation. Passed strict AST safety rules: 0 forbidden operators, 0 unindexed scans.", delay: 1100 },
      { step: 6, tag: "MONGO_MCP", text: "Executing pipeline via MongoMCP Service (:8085) across 1,324,800 records. Scanned in 184ms.", delay: 1400 },
      { step: 7, tag: "SYNTHESIZER", text: "Streaming final synthesized response via SSE to client portal. Total pipeline time: 1.62s. Precision: 100.0%.", delay: 1700 }
    ],
    output: `📊 **Enterprise Production Analytics Report — High-Scale Dataset**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• **Cuttack District (Kharif 2024)**:
  - Total Certified Paddy Seed Distributed: **142,850 Quintals**
  - Major Certified Varieties: *Swarna (MTU-7029)*: 42%, *Pooja*: 28%, *Sambamahsuri*: 18%
  - Total Beneficiary Farmers: **38,420**
• **Khordha District (Kharif 2024)**:
  - Total Certified Paddy Seed Distributed: **118,340 Quintals**
  - Leading Varieties: *Swarna*: 39%, *Lalat*: 24%
• **Comparative Variance**:
  - Cuttack recorded **+20.7% higher certified seed uptake** compared to Khordha.
  - Source verification: Enterprise Gold Data Lakehouse • Execution plan validated by AST Validator.`
  },

  statutory: {
    query: "What are the legal packaging and labelling requirements for certified seeds under Seeds Rules 1968?",
    intents: ["documentseeker_rag", "statutory_compliance"],
    logs: [
      { step: 1, tag: "SECURITY", text: "Security shield verified prompt integrity. Safety compliance verified.", delay: 200 },
      { step: 2, tag: "NLP_PREPROC", text: "Domain tokens isolated: ['packaging', 'labelling', 'certified seeds', 'Seeds Rules 1968'].", delay: 400 },
      { step: 3, tag: "SEMANTIC_ROUTER", text: "Domain classified: DocumentSeeker Legal RAG (:50056). Sub-4ms vector inference.", delay: 600 },
      { step: 4, tag: "QDRANT_RAG", text: "Encoding query with all-MiniLM-L6-v2. Searching 'agriculture_docs' collection with top_k=4...", delay: 800 },
      { step: 5, tag: "CITATION_GUARD", text: "Retrieved Rule 7, Rule 8, and Rule 9 of Seeds Rules, 1968. Strict citation grounding enforced to prevent hallucination.", delay: 1100 },
      { step: 6, tag: "SYNTHESIZER", text: "Streaming structured statutory breakdown with direct act references via SSE.", delay: 1350 }
    ],
    output: `⚖️ **Statutory Legal Guidance — DocumentSeeker RAG**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Under **Rule 7 & 8 of the Seeds Rules, 1968** (framed under Section 25 of the Seeds Act, 1966):

1. **Mandatory Container Markings (Rule 7)**:
   - Each container of certified seed must bear a mark or label specifying the **kind and variety** of seed.
   - The label must state the **minimum percentage of germination** and **purity**.
   - Net weight, lot number, date of test, and valid certification expiration date must be explicitly stated.

2. **Colour of Certification Tag (Rule 8)**:
   - Foundation Seed: **White Tag**
   - Certified Seed (Stage I & II): **Blue Tag (Azure Blue)**
   - Breeder Seed: **Golden Yellow Tag**

3. **Grounding & Provenance**:
   - *Clause Verified from Seeds Rules 1968, Gazette of India, Part II.* Zero hallucinated articles.`
  },

  multi_intent: {
    query: "Check seed dealer license renewal procedure in Odisha and show active fertilizer dealer count in Bargarh",
    intents: ["seedlicensing_workflow", "fertiliserlicensing_analytics"],
    logs: [
      { step: 1, tag: "SECURITY", text: "Evaluating compound query. Security checks passed clean.", delay: 250 },
      { step: 2, tag: "DECOMPOSER", text: "Multi-intent detected: Splitting into [Intent A: Seed License Renewal] + [Intent B: Fertilizer Dealer Count in Bargarh].", delay: 500 },
      { step: 3, tag: "DISPATCH_GRPC", text: "Parallel dispatching to SeedLicensing Agent (:50060) and FertiliserLicensing Agent (:50053).", delay: 750 },
      { step: 4, tag: "STATE_MACHINE", text: "SeedLicensing agent executed renewal workflow state machine. Extracted Form-A requirements.", delay: 1050 },
      { step: 5, tag: "MONGO_MCP", text: "FertiliserLicensing agent queried mFMS collection for Bargarh district dealers via MongoMCP.", delay: 1300 },
      { step: 6, tag: "SYNTHESIZER", text: "Merging parallel gRPC stream streams into a unified coherent multi-turn response.", delay: 1600 }
    ],
    output: `📋 **Compound Multi-Agent Intelligence Report**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**Part 1: Seed Dealer License Renewal (Odisha)**
• Applications must be submitted via the **Odisha Agriculture e-Licensing Portal (Form C)** at least 30 days prior to expiration.
• **Required Documents**:
  1. Original seed license copy
  2. Principal certificate from certified seed source/company
  3. Treasury Challan proof of renewal fee payment (₹500 for retail, ₹1,000 for wholesale)
  4. Non-infringement affidavit under Seeds (Control) Order 1983.

**Part 2: Bargarh District Fertilizer Dealership Metrics**
• **Active Retail Fertilizer Dealers**: **482 licensed outlets**
• **Active Wholesale Dealers**: **38 registered distributors**
• **Compliance Status**: 96.4% integrated with live mFMS (mobile Fertilizer Management System) POS devices.`
  }
};

let currentSimulationTimer = null;

document.addEventListener('DOMContentLoaded', () => {
  initSimulator();
});

function initSimulator() {
  const chips = document.querySelectorAll('.query-chip-btn');
  const input = document.getElementById('simulatorQueryInput');
  const runBtn = document.getElementById('runSimulatorBtn');
  const consoleEl = document.getElementById('simulationConsole');
  const stageSteps = document.querySelectorAll('.stage-step');

  // Handle Preset Clicks
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const presetKey = chip.getAttribute('data-preset');
      const data = PRESET_QUERIES[presetKey];
      if (data) {
        input.value = data.query;
      }
    });
  });

  // Handle Run Button
  if (runBtn) {
    runBtn.addEventListener('click', () => {
      const activeChip = document.querySelector('.query-chip-btn.active');
      const presetKey = activeChip ? activeChip.getAttribute('data-preset') : 'sathi';
      executeSimulation(presetKey);
    });
  }
}

function executeSimulation(presetKey) {
  const data = PRESET_QUERIES[presetKey] || PRESET_QUERIES.sathi;
  const consoleEl = document.getElementById('simulationConsole');
  const stageSteps = document.querySelectorAll('.stage-step');
  const runBtn = document.getElementById('runSimulatorBtn');

  // Clear previous runs
  if (currentSimulationTimer) clearTimeout(currentSimulationTimer);
  consoleEl.innerHTML = '';
  stageSteps.forEach(s => {
    s.classList.remove('active', 'completed');
    s.querySelector('.stage-status').textContent = 'Pending';
  });

  runBtn.disabled = true;
  runBtn.innerHTML = `<span>Simulating...</span> <div class="pulse-dot"></div>`;

  appendConsoleLine('SYSTEM', `Initiating query execution pipeline for: "${data.query}"`, 'info');

  data.logs.forEach((logItem, index) => {
    setTimeout(() => {
      // Update stage step UI
      const stageIdx = Math.min(logItem.step - 1, stageSteps.length - 1);
      if (stageSteps[stageIdx]) {
        stageSteps.forEach(s => s.classList.remove('active'));
        stageSteps[stageIdx].classList.add('active');
        stageSteps[stageIdx].querySelector('.stage-status').textContent = 'Running';

        if (stageIdx > 0 && stageSteps[stageIdx - 1]) {
          stageSteps[stageIdx - 1].classList.remove('active');
          stageSteps[stageIdx - 1].classList.add('completed');
          stageSteps[stageIdx - 1].querySelector('.stage-status').textContent = 'Verified ✓';
        }
      }

      appendConsoleLine(logItem.tag, logItem.text, logItem.tag === 'SECURITY' || logItem.tag === 'AST_VALIDATOR' ? 'success' : 'default');
      consoleEl.scrollTop = consoleEl.scrollHeight;

      // When last log completed
      if (index === data.logs.length - 1) {
        setTimeout(() => {
          stageSteps.forEach(s => {
            s.classList.remove('active');
            s.classList.add('completed');
            s.querySelector('.stage-status').textContent = 'Done ✓';
          });

          appendConsoleLine('RESULT', '\n' + data.output, 'result');
          consoleEl.scrollTop = consoleEl.scrollHeight;

          runBtn.disabled = false;
          runBtn.innerHTML = `<span>Execute Pipeline Flow</span> <span>⚡</span>`;
        }, 400);
      }
    }, logItem.delay);
  });
}

function appendConsoleLine(tag, text, type) {
  const consoleEl = document.getElementById('simulationConsole');
  const div = document.createElement('div');
  div.className = 'log-line';

  const time = new Date().toISOString().substring(11, 19);

  let tagColor = 'var(--accent-cyan)';
  if (type === 'success') tagColor = 'var(--accent-emerald)';
  if (type === 'result') tagColor = '#f8fafc';
  if (type === 'info') tagColor = 'var(--text-muted)';

  if (type === 'result') {
    div.innerHTML = `<pre style="font-family: var(--font-mono); color: #f8fafc; white-space: pre-wrap; margin-top: 0.5rem; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 0.75rem;">${text}</pre>`;
  } else {
    div.innerHTML = `<span class="log-time">[${time}]</span> <span style="color: ${tagColor}; font-weight: 600;">[${tag}]</span> <span>${text}</span>`;
  }

  consoleEl.appendChild(div);
}
