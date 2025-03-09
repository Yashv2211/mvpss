// import { useEffect, useRef } from "react";

// export function VideoBackground({children}) {
//     let videoRef = useRef();
//     useEffect(()=>{
//         videoRef.current.playbackRate = 0.4
//     }, [])
//     return (
//         <>
//             <video className="absolute inset-0 h-full w-full object-fill" ref={videoRef} src="/background.mp4" muted={true} autoPlay={true} loop={true} >
//                 No background
//             </video>
//             <div className="relative h-full">{children}</div>
//         </>
//     );
// }