namespace WebMVC.Extensions
{
    public static class StringExtensions
    {
        public static string SanitizeForUrl(this string input)
        {
            var sanitizedStr = input
                .ToLowerInvariant()
                .Replace(" ", "-")
                .Replace("'", "-");
            
            return sanitizedStr;
        }
    }
}