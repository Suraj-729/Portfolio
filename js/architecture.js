/**
 * architecture.js - Interactive Enterprise Multi-Agent Architecture Engine
 * Handles component inspection, live gRPC signal simulation, and architecture specs.
 */

const ARCHITECTURE_DATA = {
  'master-coordinator': {
    title: 'Master Coordinator (AgentScope Core)',
    badge: 'PORT 50051 • gRPC PROTO3',
    role: 'Central Intelligent Mesh Orchestrator & Compound Query Decomposer',
    specs: [
      { label: 'Runtime Core', value: 'AgentScope Framework + Python 3.11 Asyncio' },
      { label: 'Security Shield', value: '3-tier checks: PII scrubbing (Aadhaar/Phone) + Injection/Jailbreak guardrails' },
      { label: 'NLP Pipeline', value: 'NLTK typo recovery, domain lemmatization, colloquial alias resolver' },
      { label: 'Semantic Router', value: 'Sub-4ms ONNX schema-driven semantic vector classifier' },
      { label: 'Orchestration', value: 'Bidirectional gRPC streaming with multi-intent parallel dispatch' },
      { label: 'Agentic Memory', value: 'Qdrant collection `agentic_vector_memory` for 0-token instant cache (<10ms)' }
    ],
    codeSnippet: `# master_agent/coordinator.py
class MasterCoordinator:
    async def dispatch_pipeline(self, query: str, session: AgenticSession):
        # 1. Evaluate PII & prompt injection security shield
        await self.security_shield.validate(query)
        # 2. Extract multi-intents & resolve geo-entities
        intents = self.semantic_router.classify(query)
        # 3. Stream to specialized gRPC worker agents concurrently
        tasks = [self.grpc_stub_pool.stream_intent(it) for it in intents]
        results = await asyncio.gather(*tasks)
        return self.response_synthesizer.synthesize(results)`
  },

  'sathicpr': {
    title: 'Production Analytics Agent (1.3M+ Records)',
    badge: 'PORT 50059 • 1.3M+ RECORDS',
    role: 'Text-to-MongoDB Query Compiler & Large-Scale Production Analytics',
    specs: [
      { label: 'Dataset Scope', value: '1.3M+ production records, certification registries, and multi-season yields' },
      { label: 'Entity Resolver', value: 'Qdrant vector store (`geo_taxonomy_master`) for state/district/block normalization' },
      { label: 'AST Validator', value: 'QueryPlanValidator AST parser eliminates hallucinated operators & malicious pipelines' },
      { label: 'Execution Engine', value: 'MongoMCP microservice over HTTP/SSE with deterministic native fallbacks' },
      { label: 'Benchmark Score', value: '100.0% factual precision (150/150 ground-truth facts) across 50 live queries' },
      { label: 'P50 Latency', value: '11.26s live query execution / <10ms on repeat semantic hits' }
    ],
    codeSnippet: `# analytics_agent/query_compiler.py
def compile_production_pipeline(entities: ExtractedEntities, intent: Intent):
    raw_pipeline = llm_planner.generate_mongo_aggregation(entities)
    # Strictly enforce AST-level safety rules
    validated_pipeline = QueryPlanValidator.enforce(
        raw_pipeline, 
        allowed_operators={"$match", "$group", "$sort", "$project", "$limit"},
        disallowed_fields={"_admin", "credentials"}
    )
    return mongo_mcp_client.execute(validated_pipeline)`
  },

  'documentseeker': {
    title: 'DocumentSeeker (Legal RAG Agent)',
    badge: 'PORT 50056 • REGULATORY RAG',
    role: 'Statutory Act, Legal Policy & Regulatory Manuals Knowledge Retrieval',
    specs: [
      { label: 'Knowledge Base', value: 'Seeds Act 1966, Seeds Rules 1968, Fertilizer Control Order 1985, Insecticides Act 1968' },
      { label: 'Embedding Model', value: 'Sentence-Transformers all-MiniLM-L6-v2 (384-dimensional dense vectors)' },
      { label: 'Vector Engine', value: 'Qdrant Collection `agriculture_docs` with HNSW graph indexing' },
      { label: 'Citation System', value: 'Strict section-level grounding to prevent hallucination of statutory clauses' },
      { label: 'Retrieval Strategy', value: 'Hybrid dense semantic search + BM25 keyword re-ranking' }
    ],
    codeSnippet: `# documentseeker_agent/agent.py
async def retrieve_statutory_clauses(query: str, top_k: int = 4):
    query_vector = await embedding_service.encode_async(query)
    search_hits = qdrant_client.search(
        collection_name="agriculture_docs",
        query_vector=query_vector,
        limit=top_k,
        score_threshold=0.72
    )
    return format_grounded_citations(search_hits)`
  },

  'mongo-mcp': {
    title: 'Central MongoMCP Microservice',
    badge: 'PORT 8085 • SSE / JSON-RPC',
    role: 'Standardized Model Context Protocol Server for Schema-Safe MongoDB Operations',
    specs: [
      { label: 'Protocol', value: 'Model Context Protocol (MCP) over HTTP Server-Sent Events (SSE)' },
      { label: 'Role', value: 'Isolates direct database credentials; exposes schema-guarded query tools to agents' },
      { label: 'Concurrency', value: 'Async Motor engine with connection pooling & query timeout guardrails (5000ms)' },
      { label: 'Tool Schema', value: 'Provides execute_aggregation, count_documents, and fetch_entity_metadata' },
      { label: 'Reliability', value: 'Automatic fallback to native Motor driver during cluster node re-elections' }
    ],
    codeSnippet: `# services/mongo_mcp/server.py
@mcp_server.tool()
async def execute_safe_aggregation(collection: str, pipeline_json: str):
    pipeline = json.loads(pipeline_json)
    QueryPlanValidator.verify_safety(pipeline)
    async with get_mongo_session() as session:
        cursor = db[collection].aggregate(pipeline, session=session, maxTimeMS=5000)
        return await cursor.to_list(length=500)`
  },

  'qdrant-engine': {
    title: 'Qdrant Vector DB & Memory Storage',
    badge: 'PORT 6333 / 6334 • HIGH-DIMENSIONAL VECTORS',
    role: 'Semantic Routing, Geo-Taxonomy Normalizer & Sub-10ms Agentic Memory',
    specs: [
      { label: 'Collections', value: '`statutory_docs` (RAG), `geo_taxonomy_master` (Taxonomy), `agentic_vector_memory`' },
      { label: 'Dimensions', value: '384-dimensional dense vectors with cosine similarity metric' },
      { label: 'Agentic Cache', value: 'Stores verified query fingerprints & validated execution plans for 0-token recall' },
      { label: 'Throughput', value: 'Sub-5ms nearest-neighbor recall via optimized HNSW vector indices' }
    ],
    codeSnippet: `# common/agentic_session.py
def check_agentic_memory(query_vector):
    hit = qdrant.search(
        collection_name="agentic_vector_memory",
        query_vector=query_vector,
        score_threshold=0.96,
        limit=1
    )
    if hit:
        return hit[0].payload["cached_plan"] # <10ms 0-token hit!
    return None`
  },

  'gateway': {
    title: 'FastAPI Gateway & Observability Hub',
    badge: 'PORT 8000 • REST / WS / SSE',
    role: 'API Gateway, JWT Session Management & Distributed Tracing Collector',
    specs: [
      { label: 'Gateway Protocols', value: 'REST endpoints, WebSockets, and Server-Sent Events (SSE) for token streaming' },
      { label: 'Observability', value: 'OpenTelemetry instrumentation exporting spans to Jaeger, Prometheus & Grafana' },
      { label: 'Session Layer', value: 'Redis-backed stateful session manager for multi-turn conversational context' },
      { label: 'Throughput', value: 'Asynchronous event loop capable of routing 2,500+ concurrent agent requests' }
    ],
    codeSnippet: `# gateway/backend/main.py
@app.post("/api/v1/chat/stream")
async def chat_sse_stream(request: ChatRequest, user: User = Depends(auth_guard)):
    return EventSourceResponse(
        master_coordinator.stream_response(request.query, request.session_id)
    )`
  },

  'licensing-mesh': {
    title: 'Licensing Domain Micro-Agents',
    badge: 'PORTS 50060, 50053, 50057 • gRPC',
    role: 'Specialized Seed, Fertilizer, and Pesticide Licensing Lifecycle & Permits',
    specs: [
      { label: 'Micro-Agents', value: 'SeedLicensingAgent (:50060), FertiliserLicensingAgent (:50053), PesticideLicensingAgent (:50057)' },
      { label: 'Workflows', value: 'Automated dealer permit verification, mFMS/iFMS fertilizer compliance, renewal alerts' },
      { label: 'Communication', value: 'Bidirectional gRPC streaming with shared Protocol Buffer contracts' },
      { label: 'State Machine', value: 'Deterministic slot-filling state machine for application status tracking' }
    ],
    codeSnippet: `# seedlicensing_agent/server.py
class SeedLicensingServicer(agent_pb2_grpc.AgentServiceServicer):
    async def ProcessStream(self, request_iterator, context):
        async for req in request_iterator:
            res = await self.workflow_engine.process_license_query(req.query)
            yield agent_pb2.AgentChunk(token=res.text, is_final=res.done)`
  },

  'data-lake': {
    title: 'Medallion Data Lakehouse (Bronze ➔ Silver ➔ Gold)',
    badge: 'S3 / MINIO • PARQUET & VECTOR EMBEDDINGS',
    role: 'Multi-Stage Data Lakehouse for Agricultural Provenance & Vector Lineage',
    specs: [
      { label: 'Bronze Layer', value: 'Raw PDF statutes, government circulars, and untransformed MongoDB dumps' },
      { label: 'Silver Layer', value: 'Sanitized text chunks, normalized CSV/Parquet tabular data with schema validation' },
      { label: 'Gold Layer', value: 'Pre-computed vector embeddings, entity graphs, and indexed analytics marts' },
      { label: 'Storage Driver', value: 'AWS S3 / MinIO integration with immutable snapshot versioning' }
    ],
    codeSnippet: `# data_lake/pipeline.py
def process_medallion_pipeline(raw_doc):
    bronze_path = s3_lake.write_bronze(raw_doc)
    clean_text = nlp_sanitizer.clean(raw_doc)
    silver_path = s3_lake.write_silver(clean_text)
    embeddings = embed_model.encode(clean_text)
    return s3_lake.write_gold(embeddings, metadata={"source": bronze_path})`
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initArchitectureInspector();
});

function initArchitectureInspector() {
  const nodes = document.querySelectorAll('.arch-node');
  const drawer = document.getElementById('archSpecDrawer');
  const specTitle = document.getElementById('specTitle');
  const specBadge = document.getElementById('specBadge');
  const specRole = document.getElementById('specRole');
  const specList = document.getElementById('specList');
  const specCode = document.getElementById('specCode');
  const closeBtn = document.getElementById('closeSpecBtn');

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const compId = node.getAttribute('data-component');
      const data = ARCHITECTURE_DATA[compId];

      if (!data) return;

      // Update active style
      nodes.forEach(n => n.classList.remove('active-inspect'));
      node.classList.add('active-inspect');

      // Populate Drawer
      specTitle.textContent = data.title;
      specBadge.textContent = data.badge;
      specRole.textContent = data.role;

      // Specs list
      specList.innerHTML = data.specs.map(s => 
        `<li><strong>${s.label}:</strong> <span>${s.value}</span></li>`
      ).join('');

      // Code snippet
      specCode.textContent = data.codeSnippet;

      // Open drawer
      drawer.classList.add('visible');
      drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('visible');
      nodes.forEach(n => n.classList.remove('active-inspect'));
    });
  }
}
