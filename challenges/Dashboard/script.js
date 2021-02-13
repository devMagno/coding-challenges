let COLOR_THEME = window.matchMedia("(prefers-color-scheme: light)").matches ? 'light' : 'dark'
const invertTheme = (mediaText) => mediaText.indexOf('dark') > -1
  ? ['dark', 'light']
  : ['light', 'dark']
function switchTheme() {  
  const cssRules = window.document.styleSheets[1].cssRules
 
  for (const rule of cssRules) {
    let media = rule.media
    
    if (media) {
      const [currentTheme, nextTheme] = invertTheme(media.mediaText)

      media.mediaText = media
      .mediaText
      .replace(
        "(prefers-color-scheme: " + currentTheme + ")", 
        "(prefers-color-scheme: " + nextTheme + ")",
      )
    }
  }
}