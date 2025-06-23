export function speakLocal(text) {
  if (!text || !('speechSynthesis' in window)) return

  // Fire after voices are loaded 
  const say = () => {
    const voices = speechSynthesis.getVoices()

    // Prefer “cool-sounding” voices if present
    const preferred = voices.find(v =>
      /UK|en-GB|Irish|Australian|Brian|Mark|Emma/i.test(v.name)
    ) || voices.find(v => /en/i.test(v.lang))       

    const u     = new SpeechSynthesisUtterance(text)
    u.voice     = preferred || null
    u.rate      = 0.95    // slow + dramatic
    u.pitch     = 0.8     // lower = “seasoned wizard”
    u.volume    = 0.9
    speechSynthesis.cancel()
    speechSynthesis.speak(u)
  }

  if (speechSynthesis.getVoices().length) say()
  else speechSynthesis.addEventListener('voiceschanged', say, { once: true })
}