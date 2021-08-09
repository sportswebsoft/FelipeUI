using System.Collections.Generic;

namespace WebMVC.Models
{
    public class PageHeaderModel
    {
        public string ConferenceName { get; set; }
        public string LogoFileName { get; set; }
        public string ColorCode { get; set; }
        public IList<MenuHeader> MenuHeaders { get; set; }
    }

    public class MenuHeader
    {
        public string DisplayTitle { get; set; }
        public IList<MenuItem> MenuItems { get; set; }
    }

    public class MenuItem
    {
        public string DisplayName { get; set; }
        public string Url { get; set; }
    }
}