import image1 from '/src/assets/projectImages/persona/1280-result.png'
import image2 from '/src/assets/projectImages/lottery/1280-lottery.png'
import image3 from '/src/assets/projectImages/persona/1280-result.png'
import image4 from '/src/assets/projectImages/lottery/1280-lottery.png'

export const images: string[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
