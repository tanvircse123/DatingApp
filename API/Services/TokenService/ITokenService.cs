using API.Entities;

namespace API.Services.TokenService
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
