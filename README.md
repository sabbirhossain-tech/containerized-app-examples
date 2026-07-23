# Containerized Application Examples

Multi-stage and least-privilege container patterns for common application stacks.

| Example | Runtime | Port | Health endpoint |
|---|---|---:|---|
| Next.js standalone | Node.js | 3000 | `/api/health` |
| Angular SPA | Unprivileged NGINX | 8080 | `/health` |
| FastAPI | Python/Uvicorn | 8000 | `/health` |
| .NET 10 API | ASP.NET Core | 8080 | `/health` |

## Build one example

```bash
docker build -t sample-fastapi:local fastapi
docker run --rm -p 8000:8000 sample-fastapi:local
```

The JavaScript examples intentionally use major-version ranges so this portfolio remains readable.
For production, commit lockfiles, pin base images by digest and run vulnerability scans.
