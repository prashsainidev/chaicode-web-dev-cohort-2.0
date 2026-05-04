import React, { useState } from 'react'

import './index.css'

const ManualForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    role: 'Frontend',
    experience: '',
    cover: ''
  })

  const [errors, SetErrors] = useState({})
  const [submitted,  setSubmitted] = useState(false)

  function set(field) {
    return (e) => setValues((v) => ({...v, [field]: e.target.value}))
  }

  function validate(v) {
    const e = {}
    if(!v.name.trim()) e.name = "Name is required"
    if(!v.email.trim()) e.email = "Email is required"
    if(!v.message.trim()) e.message = "Message is required"
    if(v.role === "Backend" && v.experience.trim() === "") e.experience = "Experience is required for backend role"
    return e;
  }

  function submit(ev) {
    ev.preventDefault()
    const e = validate(values)
    SetErrors(e)
    if (Object.keys(e).length === 0) setSubmitted(true)
  }

  if(submitted) {
    return (
      <div>
        <h1>Form Sumitted successfully</h1>
      </div>
    )
  }

  return <div>
    <form onSubmit={submit} noValidate>
      <label>
        Full Name
        <input value={values.name} onChange={set('name')} type="text" />
        {errors.name && <span>{errors.name}</span>}
      </label>
      <label>
        Email
        <input value={values.email} onChange={set('email')} type="email" />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <label>
        Message
        <textarea value={values.message} onChange={set('message')} />
      </label>
      <label>
        Role
        <select value={values.role} onChange={set('role')}>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setValues(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(values)
  // }

  // return (
  //   <div>
  //     <h2>Manual Form</h2>
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="name">Name:</label>
  //         <input
  //           type="text"
  //           id="name"
  //           name="name"
  //           value={values.name}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="email">Email:</label>
  //         <input
  //           type="email"
  //           id="email"
  //           name="email"
  //           value={values.email}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="message">Message:</label>
  //         <textarea
  //           id="message"
  //           name="message"
  //           value={values.message}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="role">Role:</label>
  //         <select
  //           id="role"
  //           name="role"
  //           value={values.role}
  //           onChange={handleChange}
  //         >
  //           <option value="frontend">Frontend Developer</option>
  //           <option value="backend">Backend Developer</option>
  //           <option value="fullstack">Full Stack Developer</option>
  //         </select>
  //       </div>
  //       <div>
  //         <label htmlFor="experience">Experience:</label>
  //         <select
  //           id="experience"
  //           name="experience"
  //           value={values.experience}
  //           onChange={handleChange}
  //         >
  //           <option value="junior">Junior</option>
  //           <option value="mid">Mid</option>
  //           <option value="senior">Senior</option>
  //         </select>
  //       </div>
  //       <div>
  //         <label htmlFor="cover">Cover Letter:</label>
  //         <textarea
  //           id="cover"
  //           name="cover"
  //           value={values.cover}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // )
}

export default ManualForm
