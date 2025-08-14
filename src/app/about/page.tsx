import pic from '../../../public/jhankar sir.jpg'

import Image from "next/image";

export default function About() {
    return (
        <div>
            <Image src={pic}  alt="logo" />
        </div>
    )
}