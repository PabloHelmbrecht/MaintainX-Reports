import { Global } from '@emotion/react'
import Image from 'next/image'
import React from 'react'
import { getPortalsData } from 'lib/client/utils'
import Link from 'next/link'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Reporte de Fallas</title>
      </Head>
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
        style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          padding: '3rem'
        }}
      >
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>
          Reporte de Fallas
        </h1>
        <div
          style={{
            maxWidth: '19rem',
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
          style={{
            width: '25rem',
            maxWidth: '80%',
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
          style={{
            width: '25rem',
            maxWidth: '80%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <a
            href={
              'https://app.getmaintainx.com/request-portal/bffc4140-28d9-435e-aade-278c9988dc2f'
            }
            style={{
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
              fontWeight: 'semibold',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#0c68c9'
              }
            }}
          >
            Edilicio
          </a>
          {[...new Set(getPortalsData().map((portal) => portal.location))].map(
            (portal, index) => {
              return (
                <Link
                  key={index}
                  href={`/${encodeURIComponent(portal)}`}
                  style={{
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
                    fontWeight: 'semibold',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#0c68c9'
                    }
                  }}
                >
                  {portal}
                </Link>
              )
            }
          )}
        </div>
      </div>
    </>
  )
}
