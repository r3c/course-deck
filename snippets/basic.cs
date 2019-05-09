string ReplaceAll(string text,
    IEnumerable<(string, string)> replacements)
{
    foreach (var (search, replace) in replacements)
        text = text.Replace(search, replace);
 
    return text;
}