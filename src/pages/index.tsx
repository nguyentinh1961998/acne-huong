/* eslint-disable import/extensions */
import { Layout } from 'components/Layout'
import Image from 'next/image'
import Carousel from '@/components/Dashboard/Carousel'
import Services from '@/components/Dashboard/Services'
import { ServiceCardItem } from '@/components/Dashboard/Services/ServiceCard'
import Logo from '@/components/common/Logo'
import Spec from '@/components/Spec'
import { SpecCardItem } from '@/components/Spec/SpecCard'
import Features from '@/components/Dashboard/Features'
import { FeatureItemType } from '@/components/Dashboard/Features/FeatureItem'
import Locations from '@/components/Dashboard/Locations'
import { LocationItemType } from '@/components/Dashboard/Locations/LocationItem'
import Enquiry from '@/components/Dashboard/Enquiry'
import { InformationItemType } from '@/components/Dashboard/Enquiry/InformationItem'
import SpaTeam from '@/components/Dashboard/SpaTeam'
import { EmployeeType } from '@/components/Dashboard/SpaTeam/EmployeeCard'

const SERVICES: ServiceCardItem[] = [
  {
    id: '1',
    title: 'Hydro Therapy',
    description: 'Relieve discomfort and promote physical well-being.',
    icon: (
      <Image
        width={72}
        height={72}
        alt="Hydro Therapy"
        src="/images/thermal_bath.png"
      />
    ),
    className: 'z-1',
  },
  {
    id: '2',
    title: 'Relaxing Massage',
    description: 'A whole-body hands-on treatment that helps you relax.',
    icon: (
      <Image
        width={72}
        height={72}
        alt="Relaxing Massage"
        src="/images/relax_massages.png"
      />
    ),
    className: 'scale-110 z-20',
  },
  {
    id: '1',
    title: 'Aroma Therapy',
    description: 'The art of healing through the use of plant-extracts.',
    icon: (
      <Image
        width={72}
        height={72}
        alt="Aroma Therapy"
        src="/images/supreme_skincare.png"
      />
    ),
    className: 'z-1',
  },
]

const SPEC: SpecCardItem[] = [
  {
    id: '1',
    src: '/images/home_spec1.png',
    description:
      'Dating back to ancient Egypt, India, it has been used for centuries to reduce stress and tension, refresh and invigorate the body, and clear the mind.',
    title: 'Aromatherapy',
  },
  {
    id: '2',
    src: '/images/home_spec2.png',
    description:
      'Our unique soaking tubs are designed to relax and soothe the body with warm water, spring filters, massage jets, and color therapy.',
    title: 'Hydrotherapy',
  },
  {
    id: '3',
    src: '/images/home_spec3.png',
    description:
      'Customized services for every skin type. Professional retail products available to continue taking care of your skin at home.',
    title: 'Facials',
  },
]

const FEATURES: FeatureItemType[] = [
  {
    id: '1',
    iconSrc: '/images/serv_image_3.png',
    title: 'Treatments',
    className: "bg-[url('/images/feature_img_1.jpeg')] bg-top",
  },
  {
    id: '2',
    iconSrc: '/images/relax_massages.png',
    title: 'Massages',
    className: "bg-[url('/images/feature_img_2.jpeg')] bg-top",
  },
  {
    id: '3',
    iconSrc: '/images/serv_image_4.png',
    title: 'Therapies',
    className: "bg-[url('/images/feature_img_3.jpeg')] bg-top",
  },
]

const LOCATIONS: LocationItemType[] = [
  {
    id: '1',
    address: 'Extramuros 74, Madrid, Spain',
    city: 'Madrid',
    email: 'spacenter@rela.com',
    phone: '1-847-567-9898',
  },
  {
    id: '2',
    address: '198 West 21th Street, NY, the USA',
    city: 'New York',
    email: 'spacenter@rela.com',
    phone: '2-847-567-5765',
  },
  {
    id: '3',
    address: 'Van Maasdijkweg 57, Rotterdam, NL',
    city: 'Rotterdam',
    email: 'spacenter@rela.com',
    phone: '3-847-567-6789',
  },
  {
    id: '4',
    address: '495 Uchizato Anagadani, Kyoto, Japan',
    city: 'Kyoto',
    email: 'spacenter@rela.com',
    phone: '4-847-567-4342',
  },
]

const INFORMATION: InformationItemType[] = [
  {
    address: 'Address',
    email: 'email@gmail.com',
    phone: '1-234-234-3200',
    id: '1',
    title: 'New York',
  },
  {
    address: 'Address',
    email: 'email@gmail.com',
    phone: '1-234-234-3200',
    id: '2',
    title: 'New Zealand',
  },
  {
    address: 'Address',
    email: 'email@gmail.com',
    phone: '1-234-234-3200',
    id: '3',
    title: 'New Mehico',
  },
]

const SPA_TEAM: EmployeeType[] = [
  {
    id: '1',
    avatar: '/images/member1.jpg',
    className: '',
    name: 'Violetta Rosepole',
    role: 'Physiotherapist',
  },
  {
    id: '2',
    avatar: '/images/member1.jpg',
    className: '',
    name: 'Bella Almost',
    role: 'Chief masseusse',
  },
  {
    id: '3',
    avatar: '/images/member1.jpg',
    className: '',
    name: 'Krista Vermoth',
    role: 'Manager',
  },
  {
    id: '4',
    avatar: '/images/member1.jpg',
    className: '',
    name: 'Esme Shield',
    role: 'Cosmetologist',
  },
]

// const TIMELINE: TimelineItemType[] = [
//   {
//     date: '2000',
//     id: '1',
//     image: '/images/home-img.jpeg',
//     title: 'Our Second Spa Center Opened in Rotterdam',
//     description:
//       'Our highly trained estheticians hone their expertise with breakthrough techniques and the most advanced and non-invasive technology. We are a sanctuary, providing a peaceful space of wellness, beauty and overall health. Our passionate and nurturing staff will treat you to the best in relaxation.',
//   },
//   {
//     date: '2001',
//     id: '2',
//     image: '/images/home-img-2.jpeg',
//     title: 'We Added New Progressive Services',
//     description:
//       'We welcome each and every guest to the Rela as a member of our Community Center. We provide a welcoming and inclusive space for all humans. Our grounds are open for members to come and relax in, when they need some time away from the hustle and bustle. Meditate, stretch, unwind, whatever.',
//   },
//   {
//     date: '2002',
//     id: '3',
//     image: '/images/home-img-3.jpeg',
//     title: 'Our Third Spa Center Opened in Madrid',
//     description:
//       'Rela Spa combines ancient traditions with the most renowned and up-to-date technologies, in a context where beauty and the charming surrounding environment encourage healthy living, in harmony with the rhythms and cycles of nature.      ',
//   },
//   {
//     date: '2003',
//     id: '4',
//     image: '/images/feature_img_1.jpeg',
//     title: 'New Experience in Medical Sphere',
//     description:
//       'Our highly trained estheticians hone their expertise with breakthrough techniques and the most advanced and non-invasive technology. We are a sanctuary, providing a peaceful space of wellness, beauty and overall health. Our passionate and nurturing staff will treat you to the best in relaxation.',
//   },
// ]

const DashboardPage = () => {
  return (
    <Layout>
      <div className="relative bg-[#fff8f5] min-h-screen h-full flex flex-col">
        <Carousel />
        <div className="h-[400px]" />
        <div className="absolute top-[460px] flex justify-center items-center w-full z-50">
          <Services items={SERVICES} />
        </div>
        <div className="p-4 text-center">
          <Logo />
        </div>
        <div className="p-4 flex-col text-center gap-4 justify-center flex items-center">
          <span className="text-[32px] font-header">Enjoy The Difference</span>
          <span className="max-w-[650px] leading-6 text-xs text-neutral-500 font-light">
            We offer customized bioactive treatments from our friendly and
            knowledgeable staff. We specialize in Couple’s Treatments,
            Floatation and all forms of massage as well as cutting edge facial
            treatments. We aim to make you a better you!
          </span>
        </div>
        <div className="p-4">
          <Spec items={SPEC} />
        </div>
        <div className="p-4">
          <Features items={FEATURES} />
        </div>
        <div className="p-4 text-center">
          <Logo />
        </div>
        <div className="p-4">
          <Locations items={LOCATIONS} />
        </div>
        <div className="py-4 mt-24">{/* <Timeline items={TIMELINE} /> */}</div>
        <div className="py-4 mt-24">
          <Enquiry items={INFORMATION} />
        </div>
        <div className="p-4 mt-24">
          <SpaTeam items={SPA_TEAM} />
        </div>
        <div className="flex flex-col gap-4 text-center p-4 mt-24">
          <span className="text-[48px] font-light font-header text-neutral-600">
            Welcome to Rela.
            <br />
            Book Your Stay Today.
          </span>
          <span className="my-8 mb-24">
            <span className="tracking-[0.3rem] text-xs hover:text-primary font-light">
              BOOK AN APPOINTMENT
            </span>
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
