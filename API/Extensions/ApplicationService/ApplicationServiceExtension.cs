using API.Data;
using API.Services.TokenService;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions.ApplicationService
{
    public static class ApplicationServiceExtension
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,IConfiguration _config)
        {
            services.AddDbContext<DataContext>(option =>
            {
                var conf = _config.GetConnectionString("DefaultConnection");
                option.UseSqlite(conf);
            });
            services.AddScoped<ITokenService, TokenService>();

            return services;
        }
    }
}
