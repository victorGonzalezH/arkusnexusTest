using System.Collections.Generic;

namespace test1ArkusNexusBackend.Controllers.Dtos 
{
    public class LoginResultDto
    {

        public bool Sucess {get; set;}

        public List<Rol> Roles {get; private set;}

        public LoginResultDto()
        {
            this.Roles = new List<Rol>();
        }
    }


    public class Rol
    {

        public string Name {get; set;}

    }
}
