import React from 'react'
import Image from 'next/image'
import styles from './reviews.module.css';


const Reviews = () => {
    
  return (
    <div className='pb-8 min-50'>
      <h2 className='pagehead p-8'>People I have worked with<span className='darkspan'>.</span></h2>
    <div className="flex-center">
      <div className={styles.reviewParent}>
        <ReviewCards />
      </div>
    </div>
    </div>
  )
}

const ReviewCards = ()=> {
  const reviewArr = [{
        name: 'Sivle Graphics',
        text: 'Redesigned my AI generated portfolio because I did not have much time, I am very content  with the result',
        website: 'hh', 
        photo: '/assets/sivle.png'
    },
    {
      name: 'Adson Barros',
        text: 'Designed a very  beautiful website for me, it showcases my work well',
        website: 'hh',
        photo: '/assets/adson-500.png'
    },
   {
    name: 'Elike Solutions',
        text: 'Tirth made a dynamic table for my site to showcase my plans, fixed issues on pages. Very happy',
        website: 'hh',
        photo: '/assets/Elike solutions.png'
   },
   {
      name: 'Dharmin Thakar',
        text: 'Developed an awesome website for me which helps me sell my kitchenware products',
        website: 'hh',
        photo: '/assets/dharmin.jpg'
    },
   {
      name: 'Tyler Bach',
        text: 'Developed an awesome website for me which helps me sell my kitchenware products',
        website: 'hh',
        photo: '/assets/tyler-500.png'
    },
  ]
    return (
      reviewArr.map((rev, index)=> {
      return <div key={index}>
        <div className={styles.reviewCard}>
        <div className={styles.profile}>
            <Image src={rev.photo} width={50} height={50} className={`${styles.profileimage} rounded-full`} alt=''/>
            <h3>{rev.name}</h3>
            <p>{rev.text}</p>
        </div>
    </div>
      </div>
    })
    )
}

export default Reviews
