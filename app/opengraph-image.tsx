import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/site'

export const alt = SITE.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// OG card no estilo "terminal editorial" do portfólio.
export default function Image() {
  const accent = '#6ee7d8'
  const bg = '#0e1419'
  const dot = (color: string) => ({
    width: 16,
    height: 16,
    borderRadius: 9999,
    background: color,
    display: 'flex',
  })

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: bg,
          padding: 72,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -180,
            right: -140,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(110,231,216,0.22), rgba(14,20,25,0) 70%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 56 }}>
          <div style={dot('#ff5f56')} />
          <div style={dot('#ffbd2e')} />
          <div style={dot('#27c93f')} />
          <div style={{ marginLeft: 18, color: '#7b8794', fontSize: 26 }}>
            richard@portfolio: ~
          </div>
        </div>

        <div style={{ display: 'flex', color: accent, fontSize: 30, marginBottom: 22 }}>
          $ whoami
        </div>
        <div
          style={{
            display: 'flex',
            color: '#f8fafc',
            fontSize: 104,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          Richard Victor
        </div>
        <div style={{ display: 'flex', color: '#cbd5e1', fontSize: 42, marginTop: 26 }}>
          Backend Developer · Futuro Eng. de IA
        </div>
        <div
          style={{
            display: 'flex',
            width: 240,
            height: 6,
            background: accent,
            marginTop: 30,
            borderRadius: 4,
          }}
        />

        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', color: '#7b8794', fontSize: 28 }}>
            Sorocaba · SP · BR
          </div>
          <div style={{ display: 'flex', color: accent, fontSize: 28 }}>
            github.com/rvalves10
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
