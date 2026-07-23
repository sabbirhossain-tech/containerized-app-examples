var builder = WebApplication.CreateBuilder(args);
builder.Services.AddHealthChecks();

var app = builder.Build();

app.MapGet("/", () => Results.Ok(new
{
    service = "sample-dotnet10-api",
    status = "running"
}));
app.MapHealthChecks("/health");

app.Run();
