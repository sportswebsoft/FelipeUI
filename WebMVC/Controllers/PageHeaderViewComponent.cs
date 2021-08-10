using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebMVC.Models;

namespace WebMVC.Controllers
{
    public class PageHeaderViewComponent : ViewComponent
    {
        private readonly string _pathToFile;

        public PageHeaderViewComponent(IWebHostEnvironment env, IConfiguration configuration)
        {
            var currentConference = configuration.GetSection("CurrentConference").Value;
            var s = Path.DirectorySeparatorChar;
            _pathToFile = $"{env.WebRootPath}{s}resources{s}menu-items{s}{currentConference}.json";
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var source = await File.ReadAllTextAsync(_pathToFile);
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var model = JsonSerializer.Deserialize<PageHeaderModel>(source, options);

            return View("_PageHeaderPartial", model);
        }
    }
}