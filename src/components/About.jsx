const About = () => {
  return (
    <div className="flex flex-wrap px-10 py-20 justify-center lg:items-center" id="about">
      <div className="lg:w-1/2 lg:pe-7">
        <h1 className="font-bold text-3xl">About Me</h1>
        <p className="mt-5">
          Hi, I&apos;m Mokhamad Diki Armanda, a graduate of the Informatics program from 
          Muhammadiyah Sidoarjo University. My education provided me with a strong foundation in IT. 
          While in college, I not only concentrated on my academic studies but also took part in 
          various activities, including community service and organizing workshops to help peers 
          enhance their skills in Web Development.
        </p>
      </div>
      <div className="mt-5 lg:mt-0">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  )
}

export default About