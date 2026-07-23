from datetime import UTC, datetime

from fastapi import FastAPI

app = FastAPI(title="Sample FastAPI")


@app.get("/")
async def root() -> dict[str, str]:
    return {"service": "sample-fastapi", "status": "running"}


@app.get("/health", include_in_schema=False)
async def health() -> dict[str, str]:
    return {
        "status": "healthy",
        "timestamp": datetime.now(UTC).isoformat(),
    }
