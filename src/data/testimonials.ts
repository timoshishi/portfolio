import { tyler_profile, ali_profile, kelvin_profile } from '../assets/images/profile pictures'
import { ITestimonial } from '../ts/interfaces/interfaces'


const testimonials: ITestimonial[] = [
  {
    name: 'Tyler Duncan',
    photoUrl: tyler_profile,
    text: 'Tim is the type to strive to become a subject matter expert and then help as many people as he can. I\'ve benefited greatly from his expertise on multiple occasions. I recommend him for any position that requires someone who is both solid in their technical ability and works hard as a team member.',
    position: 'Software Engineer at Zillow',
  },
  {
    name: 'Kelvin Davis',
    photoUrl: kelvin_profile,
    text: '...Tim has a strong work ethic and the ability to learn new technologies and apply them to creative and innovative projects. 100% sure the company that adds Tim Forest to there team will be getting A+ engineer and person.',
    position: 'Software Engineer at POINT380'
  },
  {
    name: 'Ali Rangwala',
    photoUrl: ali_profile,
    position: 'Software Engineer',
    text: 'Tim is a champion. His work ethic is incredible, so much so: it inspired me to work harder every day during Hack Reactor. Anyone with the privilege of working with him would agree. Tim is the rare combination of extremely competent, amazingly helpful, and pleasantly witty making him a one of a kind software engineer. Pick him up before it\'s too late, because he\'ll be doing great things.'
  }
  
]


export default testimonials