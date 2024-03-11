import { Splide } from "@splidejs/react-splide"

function Teachers() {
  return (
    <div id="teachers" className='site-container mb-10'>
      <Splide
        options={{
          rewind: true,
          width: 800,
          gap: '1rem',
        }}
      >
      </Splide>
    </div>
  )
}

export default Teachers