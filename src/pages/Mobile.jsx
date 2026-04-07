import mobile from '../../public/Images/contenido/mobile-hom.webp'

function Mobile() {
  return (
    <div className='md:min-h-screen relative selection:bg-transparent py-32 flex w-full justify-between gap-x-3 items-center text-mono'>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" className="h-20 z-30 md:h-[17vw]" viewBox="0 0 268 293"><path id="forma" fill="#ffd400" d="M145.084 81.26c67.378 0 121.999 54.622 121.999 122.001v89.245h-34.764c-55.228 0-100-44.772-100-100V81.261z" /><path id="forma" fill="#0019ff" d="M132.318 81.261v111.245c0 55.228-44.771 100-100 100H.648V81.261zM267.083.536c0 44.583-36.141 80.725-80.724 80.725h-54.04V.536z" /><path id="forma" fill="#000" d="M132.318.536v80.725H.648C.649 36.678 36.792.536 81.375.536z" /></svg>
      <div className='flex group flex-col z-20 items-center gap-y-5 md:gap-y-8 h-full'>
        <div className='circulo-back-mobile border border-transparent group-hover:border-2 group-hover:border-gray-400/40 transition-all duration-200 w-[60vw] h-[60vw] md:w-[50vh] md:h-[50vh] z-0 rounded-full'></div>
        <div className='circulo-back-mobile border border-transparent group-hover:border-2 group-hover:border-gray-400/30 transition-all duration-300 delay-100 w-[70vw] h-[70vw] md:w-[70vh] md:h-[70vh] z-0 rounded-full'></div>
        <div className='circulo-back-mobile border border-transparent group-hover:border-2 group-hover:border-gray-400/20 transition-all duration-400 delay-200 w-[80vw] h-[80vw] md:w-[90vh] md:h-[90vh] z-0 rounded-full'></div>
        <h2 className='md:text-5xl text-2xl z-10 font-[800] p-2 px-3 md:p-5 md:px-6 rounded-lg md:rounded-none cap'>@Apps</h2>
        <img className='w-64 relative z-10 h-fit hover:drop-shadow-[3px_5px_0_rgba(0,0,0,1)] md:hover:drop-shadow-[6px_10px_0_rgba(0,0,0,1)] hover:scale-[1.05] hover:-skew-x-2 hover:rotate-3 duration-200' src={mobile} alt="telefono" />
        <div className='flex w-52 md:w-fit flex-col font-[300] relative md:font-[200] text-[13px] md:text-sm text-center'>
          <p>HomeEssentials</p>
          <p>E-commerce</p>
          <p>React Native</p>
          <p>Android & IOS apps</p>
          <div className='flex w-full justify-center gap-3 mt-2 pt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" fill="#1d1d1b" className="h-4" space="preserve" viewBox="0 0 22.773 22.773" xlink="http://www.w3.org/1999/xlink"><path id="SVGRepo_iconCarrier" d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0m4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1d1d1b" className="h-4" enableBackground="new 0 0 512 512" space="preserve" viewBox="0 0 512 512" xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_iconCarrier"><path id="b75708d097f2188dff6617b0f00f7c43" d="M120.606 169h270.788v220.663c0 13.109-10.628 23.737-23.721 23.737H340.55v67.203c0 17.066-13.612 30.897-30.415 30.897-16.846 0-30.438-13.831-30.438-30.897V413.4h-47.371v67.203c0 17.066-13.639 30.897-30.441 30.897-16.799 0-30.437-13.831-30.437-30.897V413.4h-27.099c-13.096 0-23.744-10.628-23.744-23.737V169zm-53.065-1.801c-16.974 0-30.723 13.963-30.723 31.2v121.937c0 17.217 13.749 31.204 30.723 31.204 16.977 0 30.723-13.987 30.723-31.204V198.399c0-17.237-13.746-31.2-30.723-31.2m323.854-20.435H120.606c3.342-38.578 28.367-71.776 64.392-90.998l-25.746-37.804c-3.472-5.098-2.162-12.054 2.946-15.525C167.3-1.034 174.242.286 177.731 5.38l28.061 41.232c15.558-5.38 32.446-8.469 50.208-8.469 17.783 0 34.672 3.089 50.229 8.476L334.29 5.395c3.446-5.108 10.41-6.428 15.512-2.957 5.108 3.471 6.418 10.427 2.946 15.525l-25.725 37.804c36.024 19.21 61.032 52.408 64.372 90.997m-177.53-52.419c0-8.273-6.699-14.983-14.969-14.983-8.291 0-14.99 6.71-14.99 14.983 0 8.269 6.721 14.976 14.99 14.976s14.969-6.707 14.969-14.976m116.127 0c0-8.273-6.722-14.983-14.99-14.983-8.291 0-14.97 6.71-14.97 14.983 0 8.269 6.679 14.976 14.97 14.976 8.269 0 14.99-6.707 14.99-14.976m114.488 72.811c-16.956 0-30.744 13.984-30.744 31.222v121.98c0 17.238 13.788 31.226 30.744 31.226 16.978 0 30.701-13.987 30.701-31.226v-121.98c.001-17.238-13.723-31.222-30.701-31.222" display="inline" /></g></svg></div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" className="h-20 md:h-[17vw] z-30" viewBox="0 0 268 305"><path id="forma" fill="#ff0080" d="M167.351.715c55.229 0 100 44.771 100 100v118.731H100.917c-55.229 0-100-44.772-100-100v-18.731c0-55.229 44.771-100 100-100z" /><path id="forma" fill="#000" d="M267.351 219.446v84.882H.917c0-46.879 38.003-84.882 84.882-84.882z" /></svg>
    </div>
  )
}

export default Mobile