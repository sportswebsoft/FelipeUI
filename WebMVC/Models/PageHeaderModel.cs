using System.Collections.Generic;
using WebMVC.Extensions;

namespace WebMVC.Models
{
    public class PageHeaderModel
    {
        public string ConferenceName { get; set; }

        public string ConferenceNameUrl => ConferenceName.SanitizeForUrl(); 
        
        public string LogoFileName { get; set; }
        
        public string ColorCode { get; set; }
        
        public IList<MenuHeader> MenuHeaders { get; set; }
    }

    public class MenuHeader
    {
        public string DisplayTitle { get; set; }
        
        public string DisplayTitleUrl => DisplayTitle.SanitizeForUrl();
        
        public IList<string> MenuItems { get; set; }
    }
}