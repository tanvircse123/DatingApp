using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace API.Extensions.IdentityService
{
    public static class IdentityServiceExtension
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services,IConfiguration config) 
        {
            /*
                you can use a regular static method instead of the extension method
                but then you have to provide both service and config as a parameter 
                when you call the function

                in extension method using this keyword you tell that attach
                this method with service type. all the service type will
                have this method and they only have to give the config as a prameter

             
             */






            // we use bearer token that JwtBearerDefaults.AuthenticationScheme = "Bearer"
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                // Adding config about how the Token after "Bearer" is going to validate
                // validate = true and the key that is needed for decrypting is given
                .AddJwtBearer(opt =>
                {
                    opt.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"])),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });
            return services;
        }
    }
}
