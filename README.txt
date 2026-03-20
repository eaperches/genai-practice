Ingestion:
Repo → parse files → chunk → embed → store

Retrieval:
User query → embed → search vector DB → get top chunks

Generation:
Chunks + question → prompt → LLM → answer