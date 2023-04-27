import { Global } from '@emotion/react'
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
//import Head from 'next/head'
import { getPortalsData } from 'lib/client/utils'

export default function LocationSite() {
  const router = useRouter()
  const { location } = router.query

  return (
    <>
      {/*<Head>
        <title>{location}</title>
      </Head>*/}
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
          padding: '3rem'
        }}
      >
        <h1 css={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: 0 }}>
          {location}
        </h1>
        <div
          css={{
            width: '25rem',
            maxWidth: '80%',
            fontSize: '0.8rem',
            padding: '0 0.5rem',
            textAlign: 'center'
          }}
        >
          <p>Selecciona a continuación el equipo que presenta fallas</p>
        </div>
        <div
          css={{
            width: '25rem',
            maxWidth: '80%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {getPortalsData()
            .filter((portal) => portal.location === location)
            .map((portal, index) => {
              return (
                <a
                  key={index}
                  href={portal.url}
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
                    fontWeight: 'semibold',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#0c68c9'
                    }
                  }}
                >
                  {portal.asset}
                </a>
              )
            })}
        </div>
        <div
          css={{
            width: '25rem',
            maxWidth: '80%',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '1rem'
          }}
        >
          <Link
            href={'/'}
            css={{
              marginTop: 14,
              padding: 12,
              backgroundColor: 'transparent',
              border: '2px solid rgb(24, 135, 252)',
              borderRadius: 8,
              color: 'rgb(24, 135, 252)',
              fontSize: '1rem',
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
              userSelect: 'none',
              fontWeight: 'semibold',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#0c68c9',
                backgroundColor: '#0c68c9',
                color: 'white'
              }
            }}
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </>
  )
}
