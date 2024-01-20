import './Autoplay_slider.css';

export default function Autoplay_slider() {
  return (

    <div className=' max-w-[1300px] w-auto m-auto mt-10 ' >


      <div id="homepage-slider" className="st-slider previous-section  "  >

        <div className='flex items-center gap-[45px] justify-start  ' >
          <div className='text-[40px] text-left text-gray-600' >Previous</div>
          <div className='h-[2px] bg-gray-400 p-2 max-w-[500px] w-[500px]  ' ></div>
        </div>

        {/* <input type="radio" class="cs_anchor radio" name="slider" id="slide1" /> */}
        {/* <input type="radio" class="cs_anchor radio" name="slider" id="slide2" /> */}
        {/* <input type="radio" class="cs_anchor radio" name="slider" id="slide3" /> */}
        <input type="radio" class="cs_anchor radio" name="slider" id="play1" checked='true' className='opacity-0' />

        <div class="images">
          <div class="images-inner">
            <div class="image-slide">
              <div class="image " ><img height='500px' src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" height='400px' />image slide 1</div>
            </div>
            <div class="image-slide">
              <div class="image" ><img src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' ></img></div>
            </div>
            <div class="image-slide">
              <div class="image bg-red" ><img src="https://media.istockphoto.com/id/539001564/photo/rajwada-palace-indore.jpg?s=612x612&w=0&k=20&c=ihbWY77GKzZXNmYfvz3dUDpZissBxxcrfSDSMSqa548=" alt="" /></div>
            </div>
            <div class="image-slide">
              <div class="image" ><img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" />image slide 1</div>
            </div>
            <div class="image-slide">
              <div class="image" ><img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" />image slide 1</div>
            </div>
          </div>
        </div>

        <div class="labels">
          <label for="slide1" class="label">text slide 1</label>
          <label for="slide2" class="label">text slide 2</label>
          <label for="slide3" class="label">text slide 3</label>

          <div class="fake-radio">
            <label for="slide1" class="radio-btn"></label>
            <label for="slide2" class="radio-btn"></label>
            <label for="slide3" class="radio-btn"></label>
          </div>
        </div>
      </div>

    </div>

  );
}
