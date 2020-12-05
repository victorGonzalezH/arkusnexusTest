using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using test1ArkusNexusBackend.Controllers.Commands;
using test1ArkusNexusBackend.Controllers.Dtos;

namespace test1ArkusNexusBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Test1Controller : ControllerBase
    {

        private readonly ILogger<Test1Controller> _logger;

        public Test1Controller(ILogger<Test1Controller> logger)
        {
            _logger = logger;
        }

        // [HttpGet]
        // public IEnumerable<WeatherForecast> Get()
        // {
        //     var rng = new Random();
        //     return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //     {
        //         Date = DateTime.Now.AddDays(index),
        //         TemperatureC = rng.Next(-20, 55),
        //         Summary = Summaries[rng.Next(Summaries.Length)]
        //     })
        //     .ToArray();
        // }

        [HttpPost("login")]
        public LoginResultDto Login(LoginCommand loginCommand )
        {
            var result = new LoginResultDto() { Sucess = true };
            // result.Roles.Add(new Rol(){ Name = "admin" });
            return result;
        }
    }
}
