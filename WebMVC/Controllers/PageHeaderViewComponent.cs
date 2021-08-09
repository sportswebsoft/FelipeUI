using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebMVC.Models;

namespace WebMVC.Controllers
{
    public class PageHeaderViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            // simulates async behaviour (for ex. fetching from DB)
            PageHeaderModel model = await Task.Run(MockPageHeaderModel);
            return View("_PageHeaderPartial", model);
        }
        
        private static PageHeaderModel MockPageHeaderModel()
        {
            MenuItem football = new()
            {
                DisplayName = "Football",
                Url = "#football"
            };
            
            MenuItem girlsVolleyball = new()
            {
                DisplayName = "Girls Volleyball",
                Url = "#girls-volleyball"
            };
            
            MenuItem boysSoccer = new()
            {
                DisplayName = "Boys Soccer",
                Url = "#boys-soccer"
            };

            var menuItems = new List<MenuItem>
            {
                football,
                girlsVolleyball,
                boysSoccer
            };

            MenuHeader menuHeader = new()
            {
                DisplayTitle = "Fall Sports",
                MenuItems = menuItems
            };

            var menuHeaderList = new List<MenuHeader>()
            {
                menuHeader,
                menuHeader,
                menuHeader
            };
            
            return new PageHeaderModel
            {
                ConferenceName = "Greater Miami Conference from VIEW COMPONENT",
                LogoFileName = "gmc-logo.png",
                ColorCode = "5490af",
                MenuHeaders = menuHeaderList
            };
        }
    }
}