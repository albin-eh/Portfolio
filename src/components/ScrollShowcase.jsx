import { ContainerScroll } from './ui/container-scroll-animation'
import profileImage from '../assets/profile.jpg'

export default function ScrollShowcase() {
  return (
    <section className="scroll-showcase section reveal" aria-labelledby="scroll-showcase-title">
      <ContainerScroll
        titleComponent={
          <>
            <p className="eyebrow">A closer look</p>
            <h2 id="scroll-showcase-title">Ideas become visible when you keep scrolling.</h2>
          </>
        }
      >
        <img
          src={profileImage}
          alt="Albin Rajesh working at a computer"
          className="scroll-showcase-image"
          draggable="false"
        />
      </ContainerScroll>
    </section>
  )
}