import { Global } from '@emotion/react'
import { cookies } from 'lib/shared/config'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { getPortalsData } from 'lib/client/utils'

export default function Index() {
  const router = useRouter()
  const handleAppLaunch = (e: React.MouseEvent) => {
    if (!Cookies.get(cookies.slideshowShown.name) || e.ctrlKey) {
      Cookies.set(cookies.slideshowShown.name, '1')
      router.push('/onboarding')
    } else {
      router.push('/app')
    }
  }

  return (
    <>
      <Global
        styles={{
          body: {
            fontFamily: 'Poppins, sans-serif',
            margin: 0,
            color: '#001e40'
          },
          '@media (prefers-color-scheme: dark)': {
            body: {
              backgroundColor: '#212121',
              color: '#001e40'
            }
          }
        }}
      />
      <div
        css={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <h1 css={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>
          Reporte de Fallas
        </h1>
        <div
          css={{
            maxWidth: '300px',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            '& img': {
              width: '100%',
              height: 'auto'
            }
          }}
        >
          <Image alt="" src="/maintainx.svg" width={400} height={300} />
        </div>
        <div
          css={{
            maxWidth: 400,
            fontSize: '0.8rem',
            padding: '0 12px',
            textAlign: 'center'
          }}
        >
          <p>
            Selecciona a continuación el sector en el cual se encuentra la
            falla, si la falla es edilicia haz clic en el botón{' '}
            <strong>edilicio</strong>
          </p>
        </div>
        <div
          css={{
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {getPortalsData().map((portal, index) => {
            return (
              <a
                key={index}
                onClick={handleAppLaunch}
                css={{
                  marginTop: 14,
                  padding: 12,
                  backgroundColor: 'rgb(24, 135, 252)',
                  borderRadius: 8,
                  color: '#fff',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  textAlign: 'center',
                  cursor: 'pointer',
                  userSelect: 'none',
                  fontWeight: 'semibold'
                }}
              >
                {portal.location}
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}
