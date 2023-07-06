import { slideStyles } from 'components/slideshow/Slideshow'
import Image from 'next/image'

export function SlideOne() {
  return (
    <div style={slideStyles}>
      <div className="content">
        <Image
          priority={true}
          alt="slideshow image"
          src="/slideshow/report.svg"
          width={400}
          height={300}
        />
        <div style={{ textAlign: 'center' }}>
          <h1>Progressive Web App</h1>
          <p>Hint: Swipe anywhere to switch slides</p>
        </div>
      </div>
    </div>
  )
}
