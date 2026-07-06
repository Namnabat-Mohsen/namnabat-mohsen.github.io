import { useEffect, useRef } from 'react'

/**
 * Lightweight animated "molecule network" background on a <canvas>.
 * Nodes drift and connect with lines when close — evokes a molecular graph.
 * Respects prefers-reduced-motion (renders a static frame).
 */
export default function MoleculeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let width, height, nodes
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const accentReader = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#2dd4bf'
    let accent = accentReader()

    function resize() {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * DPR
      canvas.height = height * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      const count = Math.min(70, Math.floor((width * height) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 1.2,
      }))
    }

    function hexToRgb(hex) {
      const m = hex.replace('#', '')
      const v = m.length === 3 ? m.split('').map((c) => c + c).join('') : m
      const int = parseInt(v, 16)
      return [(int >> 16) & 255, (int >> 8) & 255, int & 255]
    }

    function draw() {
      const [r, g, b] = hexToRgb(accent)
      ctx.clearRect(0, 0, width, height)

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const c = nodes[j]
          const dx = a.x - c.x
          const dy = a.y - c.y
          const dist = Math.hypot(dx, dy)
          if (dist < 130) {
            const op = (1 - dist / 130) * 0.5
            ctx.strokeStyle = `rgba(${r},${g},${b},${op})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(c.x, c.y)
            ctx.stroke()
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${r},${g},${b},0.9)`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()

        if (!reduce) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }

      if (!reduce) raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    // Re-read accent if theme changes
    const observer = new MutationObserver(() => {
      accent = accentReader()
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hero__canvas"
      aria-hidden="true"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
