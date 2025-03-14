import Image from 'next/image';

const ImageComp = ({src = '/assets/tirth.4.jpg', rounded = true, border = false, height =50, width = 40})=> {
    return <Image alt='Tirth Joshi' src={src} width={width} height={height} className={`${border && 'rounded-full border-3 border-white'}`}/>
}

export default ImageComp